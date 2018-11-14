const axios = require('axios');
const mqtt = require('mqtt');
let keys = require('../config/keys');

const client = mqtt.connect('mqtt://m23.cloudmqtt.com:14527', {
    username: "khalid",
    password: "khalid"
});

client.on('connect', () => {
    client.subscribe('outTopic/postreq');
});

client.on('message', (topic, message) => {
    if (topic === 'outTopic/postreq') {

        if (process.env.NODE_ENV === 'production') {
            let obj = JSON.parse(message.toString());

            axios.post('https://m2m-exam.herokuapp.com/api/UserAnalytics', {
                    deviceID: obj.deviceID,
                    timestamp: obj.timestamp,
                    temp: obj.temp,
                    movements: obj.movements,
                    bpm: obj.bpm
                },{
                    headers: { Authorization: keys.API_KEY}
                }).then(() => console.log('hey hey pushed TIL DB'))
                .catch(err => console.log(err));
        } else {
            let obj = JSON.parse(message.toString());
            axios.post('http://localhost:5000/api/UserAnalytics', {
                    deviceID: obj.deviceID,
                    timestamp: obj.timestamp,
                    temp: obj.temp,
                    movements: obj.movements,
                    bpm: obj.bpm
                },{
                    headers: { Authorization: keys.API_KEY}
                })
                .then((res) => {
                    console.log('pushed te db')
                })
                .catch(error => console.log(error));
        }
    }
});