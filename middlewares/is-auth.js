const jwt = require("jsonwebtoken");
const { encrypt_key } = require("../config");


module.exports = (req, res, next) => {
  const authHeader = req.get("Authorization");

  console.log(encrypt_key);

  if (!authHeader) {
    const error = new Error("Not authenticated.");
    error.statusCode = 401;
    throw error;
  }
  const token = authHeader.split(" ")[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, encrypt_key);
  } catch (err) {
    err.statusCode = 500;
    throw err;
  }

  if (!decodedToken) {
    const error = new Error("Not authenticated.");
    error.statusCode = 401;
    throw err;
  }
  req.decodedToken = decodedToken;
  next();
};
