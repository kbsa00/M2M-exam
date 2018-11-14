let keys = require('../config/keys');
/**
 * Simple Middleware that I created that checks if the user
 * sent with a API-KEY when they want to do a POST to our Database.
 */
module.exports.authenticate = (req, res, next) => {
    let headerApi = req.headers.authorization;

    if(headerApi === keys.API_KEY){
        return next();
    }else{
        res.send('unauthorized actions'); 
    }
}