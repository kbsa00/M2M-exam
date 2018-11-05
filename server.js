const express = require('express'); 
const app = express(); 

require('./middlewares/middlewares');
require('./services/passport'); 
require('./routes/routes')(app);
require('./model/user');
require('./model/analytics');

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {

    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })

}


app.listen(PORT);
console.log(`Listening to Port ${PORT}`); 