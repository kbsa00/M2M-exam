/**
 * Mongoose Schema for Login user. 
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