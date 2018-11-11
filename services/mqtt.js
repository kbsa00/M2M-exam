let today = new Date();
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
        });
    });
}



/**
 * 
let msg;
module.exports = (io) => {  
    io.on('connection', function (socket) {
        socket.on('disconnect', function () {
            
            console.log('disconnected');
        });
        
        client.on('connect', () => {
            client.subscribe('outTopic/message');
            client.subscribe('outTopic/temp');
        });

        client.on('message', (topic, message) => {
            if (topic === 'outTopic/message') {
                currentMinute = today.getMinutes();
                socket.emit('bpm', {
                    bpm: message.toString(),
                    time: currentMinute
                });
            }

            if (topic === 'outTopic/temp') {
                let tempMessage = message.toString();
                console.log(tempMessage)
                currentMinute = today.getMinutes();
                socket.emit('temp', {
                    temp: tempMessage,
                    time: currentMinute
                });
            }
        });
    });
}
 */