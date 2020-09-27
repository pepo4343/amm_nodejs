
const mqtt = require("mqtt")
const config =require("../config")

let _client;
const mqttInit = () => {
    _client = mqtt.connect(`mqtt://${config.MQTT_BROKER_IP}`, { clientId: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10).toUpperCase(), })
}

const getMqttClient = ()=>{
    if (_client) {
        return _client;
    }

    throw "Can't connect to mqtt";
}
exports.mqttInit = mqttInit;
exports.getMqttClient = getMqttClient;