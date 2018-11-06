const express = require('express'); 
const app = express();
const path = require('path');

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
console.log(`Listening to Port ${PORT}`); 