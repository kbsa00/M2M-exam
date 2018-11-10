const express = require('express'); 
const app = express();
const path = require('path');
const http = require('http'); 
const socket = require('socket.io'); 

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

const server = http.Server(app); 
const PORT = process.env.PORT || 5000;
server.listen(PORT);
console.log(`Listening to Port ${PORT}`);
const io = socket(server);
io.configure(function(){
    io.set("transports", ['xhr-polling']); 
    io.set("polling duration", 10);
});
require('./services/mqtt')(io);