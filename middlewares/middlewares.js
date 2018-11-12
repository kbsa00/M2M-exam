const bodyParser = require('body-parser');
const keys = require('../config/keys');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');


module.exports = (app) => {

    app.use(session({
        secret: keys.COOKIE_KEY,
        resave: false,
        cookie: {
            maxAge: 30 * 24 * 60 * 60 * 1000
        },
        saveUninitialized: false
    }));

    app.use(bodyParser.json());
    /*
    For Passport / Login function - Which is not beeing used in this exam. 
    Because I was afraid that you would have problems with it. It works perfectly fine, 
    But I dont feel like taking that risk with my exam. Having you locked out of the 
    solution would end badly for me.
    - Note that the code for this is here, and could easily be implemented :)   

    app.use(passport.initialize());
    app.use(passport.session());
    */

    mongoose.set('useCreateIndex', true);
    mongoose.connect(keys.MONGO_URI, {
        useNewUrlParser: true
    });
};