/**
 * This file handles MQTT and also Socket. I am using a IOSOCKET library 
 * to send the relevent information to the Client. The Client is subscribing 
 * to the socket.
 */

let today = new Date();
let requests = require('../services/requestaxios');
require('events').EventEmitter.prototype._maxListeners = 100;
const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://m23.cloudmqtt.com:14527', {
    username: "khalid",
    password: "khalid"
});

module.exports = (io) => {

    client.on('connect', () => {
        client.subscribe('outTopic/message');
        client.subscribe('outTopic/temp');
        client.subscribe('outTopic/movement');
        client.subscribe('outTopic/postreq');
    });

    io.on('connection', function (socket) {

        client.on('message', (topic, message) => {
            if (topic === 'outTopic/message') {
                currentMinute = today.getMinutes();
                socket.emit('bpm', {
                    bpm: message.toString(),
                    time: currentMinute
                });
            }

            if (topic === 'outTopic/temp') {
                currentMinute = today.getMinutes();
                socket.emit('temp', {
                    temp: message.toString(),
                    time: currentMinute
                });
            }

            if (topic === 'outTopic/movement') {
                socket.emit('movement', message.toString());
            }
        });
    });
}