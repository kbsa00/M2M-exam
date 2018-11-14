/**
 * Mongoose Schema for Login user. Notice that is is not being used in this
 * application, but created so that we can easily implement it when we need to.
 */
let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    username:{
        type: String,
        unique: true,
        required: true,
    },
    password:{
        type: String,
        required: true
    }
});

let user = mongoose.model('user', userSchema);

module.exports = user;