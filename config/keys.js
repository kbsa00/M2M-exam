/**
 * This just handles the Keys for Production and Development based on which 
 * environment we are in.
 */
if(process.env.NODE_ENV == 'production'){
    module.exports = require('./prod');
}else{
    module.exports = require('./dev');
}
