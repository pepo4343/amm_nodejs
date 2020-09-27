const User = require("../models/user")

const jwt = require("jsonwebtoken");
const Config = require("../config")

const { mqttInit, getMqttClient } = require("../utils/mqtt");
exports.addUser = async (req, res, next) => {
    try {
        const body = req.body;
        const {
            username,
            password,
            name,
            role,
            email,
            device_alias
        } = body
        const usernameResults = await User.fetchByUsername(username);
        if (usernameResults) {
            const error = new Error("Duplicate username");
            error.statusCode = 401;
            throw error;
        }

        const emailResults = await User.fetchByEmail(email);
        if (emailResults) {
            const error = new Error("Duplicate email");
            error.statusCode = 401;
            throw error;
        }

        const deviceResults = await User.fetchByDeviceAlias(device_alias);
        if (deviceResults) {
          const error = new Error("Duplicate Device Alias");
          error.statusCode = 401;
          throw error;
        }
        
        const user = new User(name, username, password, role, email, device_alias);

        const results = await user.save();
        res.status(200).json(results);
    }
    catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }

}

exports.login =async (req,res,next)=>{

  const username = req.body.username;
  const password = req.body.password;

  try {
    const results = await User.fetchByUsername(username);

    if (!results) {
      const error = new Error("Please check your username");
      error.statusCode = 401;
      throw error;
    }

    if (password != results.password) {
      const error = new Error("Please check your password");
      error.statusCode = 401;
      throw error;
    }

    const token = jwt.sign(
      {
        username: results.username,
        name: results.name,
        email:results.email,
        device_alias: results.device_alias,
        role:results.role,
        userID: results._id.toString(),
      },
      Config.encrypt_key,
      { expiresIn: `${Config.TOKEN_EXPIRE_IN}d` }
    );

    delete results.password;

    res.status(200).json({
      message: "Login Successful",
      token: token,
      expiresIn: Config.TOKEN_EXPIRE_IN * 24 * 60 * 60,
      ...results,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}


exports.autoControl = (req,res,next) =>{
    console.log(req.params.data);
    const client = getMqttClient();
    console.log(req.decodedToken);

    client.publish("fit/amm/" + req.decodedToken.device_alias+ "/watersystem/control", `${req.params.data},0`, { retain: true })
    res.status(200).json({
      message: "SUCCESS",
    });
}

exports.listSchedule = async (req,res,next)=>{
  console.log(req.decodedToken);
  const results = await User.fetchByUsername(req.decodedToken.username);
  console.log(results.water_schedule);
  res.status(200).json({
    schedule:results.water_schedule
  })
}

exports.updateSchedule = async (req , res,next)=>{
  const client = getMqttClient();
  const results = await User.updateSchedule(req.decodedToken.userID,req.body.schedule);
  console.log(results);
  client.publish("fit/amm/" + req.decodedToken.device_alias+ "/watersystem/schedule",req.body.schedule.join(",") , { retain: true })
  res.status(200).json(results);
}

exports.manualControl = (req , res ,next)=>{
  console.log("fot");
  const client = getMqttClient();
  client.publish("fit/amm/" + req.decodedToken.device_alias+ "/watersystem/control", `0,${req.params.data}`, { retain: true })
  res.status(200).json({
    message: "SUCCESS",
  });
}