let mongoose = require('mongoose');

let analyticsSchema = mongoose.Schema({
    deviceid:{
       type: String,
       required: true
    
    },
    avragebpm:{
        type: String,
        required: true
    
    }, 
    dateTime:{
        type: String,
        required: true
    }
});

let Analytics = mongoose.model('analytics', analyticsSchema);

module.exports.AddUserAnalytics = (userData, callback) => {
    Analytics.create(userData, callback);
};

module.exports.getUserAnalytics = (callback, limit) => {
    Analytics.find(callback).limit(limit);
};

module.exports.deleteUserAnalytic = (id, callback) =>{
    let query = {_id: id}; 
    Analytics.remove(query, callback); 
}
