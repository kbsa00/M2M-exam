const axios = require('axios');
const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://m23.cloudmqtt.com:14527',{
    username: "khalid",
    password: "khalid"
});

client.on('connect', () => {
    client.subscribe('outTopic/postreq');
});

client.on('message', (topic, message) => {
    if (topic === 'outTopic/postreq') {

        if (process.env.NODE_ENV === 'production') {
            axios.post('https://m2m-exam.herokuapp.com/api/UserAnalytics', message.toString())
                .catch(err => console.log(err));
        } else {
            let obj = JSON.parse(message.toString());
            axios.post('http://localhost:5000/api/UserAnalytics', {
                    deviceID: obj.deviceID,
                    timestamp: obj.timestamp,
                    temp: obj.temp,
                    movements: obj.movements,
                    bpm: obj.bpm
                })
                .then((res) => {
                    console.log('Able to push to database');
                })
                .catch(error => console.log(error));
        }
    }
});

