const express = require('express'); 
const app = express(); 

require('./middlewares/middlewares');
require('./services/passport'); 
require('./routes/routes')(app);
require('./model/user');
require('./model/analytics');

const PORT = process.env.PORT || 5000; 

app.listen(PORT);
console.log(`Listening to Port ${PORT}`); 