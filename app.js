const express = require("express")

const bodyParser = require("body-parser");

const app = express();


const mongoConnect = require("./utils/database").mongoConnect;

const userRoutes = require("./routes/user");
const { mqttInit, getMqttClient } = require("./utils/mqtt");
const { login } = require("./controllers/user");
const User = require("./models/user");

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

// Setup body-parser
app.use(bodyParser.json());                         // application/json
app.use(bodyParser.urlencoded({ extended: true })); //application/x-www-form-urlencoded



app.use("/user", userRoutes);


  
// error handler
app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    const response_code = error.response_code;

    res.status(status).json({
        response_code: response_code,
        message: message,
        data: data
    });
});
var numClient = 0;



const startService = async () => {
    mongoConnect(() => {

        const server = app.listen(3000, () => {
            console.log("Listening in 3000");
            mqttInit();

            const mqttClient = getMqttClient();

            mqttClient.on("connect", async () => {
                console.log("connected");
                subscribeAll();
                setInterval(() => {

                    publishAll();
                }, 60000)
            })
            mqttClient.on('message', async (topic, message) => {

               
                const device_alias = topic.split("/")[2].trim();
                const type = topic.split("/")[4].trim();
                console.log(device_alias + "_" + type);
                io.emit(device_alias + "_" + type, { message:message.toString() })
            })
        });

      
        const io = require('./socket').init(server)
        
        io.on("connection", (socket) => {
            numClient++;
            io.emit("numclient", { numClient });
            console.log("Client Connected :", numClient);
            socket.on("disconnect", () => {
                numClient--;
                console.log("Client Disconnected : ", numClient);
            });
        });
         
    });
};

startService();


const subscribeAll = async () => {
    const client = getMqttClient();
    const users = await User.fetchAll();
    console.log(users);


    for (let user of users) {
        client.subscribe("fit/amm/" + user.device_alias + "/watersystem/status");
        client.subscribe("fit/amm/" + user.device_alias + "/watersystem/data");
    }
}


const publishAll = async () => {
    const client = getMqttClient();
    const users = await User.fetchAll();
    for (let user of users) {
        client.publish("fit/amm/" + user.device_alias + "/watersystem/schedule", user.water_schedule.join(","), { retain: true })
    }
}
