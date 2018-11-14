let keys = require('../config/keys');
module.exports.authenticate = (req, res, next) => {
    let headerApi = req.headers.authorization;

    if(headerApi === keys.API_KEY){
        return next();
    }else{
        res.send('unauthorized actions'); 
    }
}