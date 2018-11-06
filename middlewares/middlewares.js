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
    app.use(passport.initialize());
    app.use(passport.session());

    mongoose.set('useCreateIndex', true);
    mongoose.connect(keys.MONGO_URI, {
        useNewUrlParser: true
    });
};