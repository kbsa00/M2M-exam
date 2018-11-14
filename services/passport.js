/**
 * This code is for the login function that I wanted to implement but did not because
 * i wanted it to be easier for you to interact with the webpage without have to login
 */

const passport = require('passport');
let LocalUser = require('../model/user');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    LocalUser.findById(id).then(user => {
        done(null, user);
    });
});

passport.use(new LocalStrategy(
    function (username, password, done) {
        
        LocalUser.findOne({
            username: username
        }, (err, user) => {

            if (err) {
                return done(err);
            }

            if (!user) {
                return done(null, false, {
                    message: "User does not exist"
                });
            }

            if (user) {

                let passwordCheck = bcrypt.compareSync(password, user.password);
                if (passwordCheck) {
                   return done(null, user);
                }
                else {
                   return done(null, false,{
                      message: "Invalid Password"
                   });
                }
            }
        });
    }
));