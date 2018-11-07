const express = require('express'); 
const app = express();
const path = require('path');
const mqtt = require('mqtt'); 
const client = mqtt.connect('mqtt://m23.cloudmqtt.com:14527', {username:"khalid", password:"khalid"});


require('./model/user');
require('./middlewares/middlewares')(app);
require('./services/passport'); 
require('./routes/routes')(app);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);


client.on('connect', () => {
    client.subscribe('outTopic/message')
    client.subscribe('#');
});

client.on('message', (topic, message) => {
    if(topic === 'outTopic/message') {
      console.log(message.toString());
    }
    console.log(message.toString());
  })

console.log(`Listening to Port ${PORT}`); 