let mongoose = require('mongoose');


//Du må bestemme deg hvordan du skal strukturere data systemet her ... 
let UserAnalyticsSchema = mongoose.Schema({

});

let userAnalytics = mongoose.model('UserAnalytics', UserAnalyticsSchema);

module.exports.AddUserAnalytics = (userData, callback) => {
    userAnalytics.create(userData, callback);
};

module.exports.getUserAnalytics = (callback, limit) => {
    userAnalytics.find(callback).limit(limit);
};

module.exports.deleteUserAnalytic = (id, callback) =>{
    let query = {_id: id}; 
    userAnalytics.remove(query, callback); 
}