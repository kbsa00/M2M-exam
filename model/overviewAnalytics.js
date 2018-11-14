let mongoose = require('mongoose');

let overviewAnlyticsSchema = mongoose.Schema({
    deviceID: {
        type: String,
    },
    temps: {
        type: [Number]
    },
    movements: {
        type: Number,
    },
    bpms: {
        type: [Number]
    }
});

let Overviewanalytics = mongoose.model('overviewanalytics', overviewAnlyticsSchema);

module.exports = Overviewanalytics;

module.exports.AddUserAnalytics = (userData, callback) => {
    Overviewanalytics.create(userData, callback);
};

module.exports.updateOverviewAnalytic = function (id, book, options, callback) {
    var query = {
        id: id
    };
    var update = {
        deviceID: userData.deviceID,
        temps: userData.temps,
        movements: userData.movements,
        bpms: userData.bpms
    }
    Overviewanalytics.findOneAndUpdate(query, update, options, callback);
}

module.exports.findAnalytic = (userData, callback) => {
    Overviewanalytics.findOne({
        deviceID: userData.deviceID
    }, callback);
}

module.exports.UpdateUserAnalytics = (foundUser, userData, options, callback) => {
    foundUser.bpms.push(...userData.bpms)
    foundUser.temps.push(...userData.temps);

    let newobj = {
        deviceID: userData.deviceID,
        temps: foundUser.temps,
        movements: userData.movements,
        bpms: foundUser.bpms
    }

    Overviewanalytics.findOneAndUpdate({
        deviceID: userData.deviceID
    }, newobj, options, callback);
}

module.exports.getOverviewAnalytics = (callback, limit) => {
    Overviewanalytics.find(callback).limit(limit);
};