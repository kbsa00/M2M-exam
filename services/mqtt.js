let today = new Date();
require('events').EventEmitter.prototype._maxListeners = 100;
const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://m23.cloudmqtt.com:14527', {
    username: "khalid",
    password: "khalid"
});

let msg;
module.exports = (io) => {

    io.configure(function(){
        io.set("transports", ['xhr-polling']); 
        io.set("polling duration", 10);
    });

    io.on('connection', function (socket) {
    client.on('connect', () => {
        client.subscribe('outTopic/message');
        client.subscribe('outTopic/temp');
    });

    client.on('message', (topic, message) => {
        if (topic === 'outTopic/message') {
            msg = message.toString();
                currentMinute = today.getMinutes();
                socket.emit('bpm', {
                    bpm: msg,
                    time: currentMinute
                });
        }

        if(topic === 'outTopic/temp'){
            let tempMessage = message.toString();
            currentMinute = today.getMinutes();
            socket.emit('temp', {
                temp: tempMessage, 
                time: currentMinute
            });
        }
    });
    });
}