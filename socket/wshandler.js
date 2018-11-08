let index = 0;
var today = new Date();
let p;

module.exports = (io) => {
    io.on('connection', function (socket) {
        for (let i = 0; i < 10; i++) {
            currentMinute = today.getMinutes();
            socket.emit('bpm', {
                bpm: i,
                time: currentMinute
            });
        }
    });
}