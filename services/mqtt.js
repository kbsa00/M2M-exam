let today = new Date();
const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://m23.cloudmqtt.com:14527', {
    username: "khalid",
    password: "khalid"
});

let msg;
module.exports = (io) => {
    io.on('connection', function (socket) {
    client.on('connect', () => {
        client.subscribe('outTopic/message')
        client.subscribe('#');
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
    });
    });
}

/**
 *     io.on('connection', function (socket, message){
        console.log(message.toString());
        currentMinutes = today.getMinutes();
        socket.emit('bpm', {
            bpm: message.toString(),
            time: currentMinutes
        });
        
    });
 */