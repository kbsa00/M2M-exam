let mongoose = require('mongoose');

let analyticsSchema = mongoose.Schema({
    deviceID:{
       type: String,
       required: true
    
    },
    timestamp:{
        type: String,
        required: true
    
    }, 
    temp:{
        type: Number,
        required: true
    },
    movements:{
        type: Number,
        required: true
    },
    bpm:{
        type: Number,
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
