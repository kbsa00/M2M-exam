const Analytics = require('../model/analytics');

module.exports = (app) => {
    app.get('/api/test', (req, res) => {
        res.json({
            test: "tester dette"
        });
    });
    app.get('/api/UserAnalytics', (req, res) => {
        Analytics.getUserAnalytics(function (err, userdata) {
            if (err) throw err;
            res.json(userdata);
        });
    });

    app.post('/api/UserAnalytics', (req, res) => {
        let userdata = req.body;
        Analytics.AddUserAnalytics(userdata, function (err, callback) {
            if (err) throw err;
            res.json(userdata);
        });
    });
}