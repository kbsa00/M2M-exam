const Analytics = require('../model/analytics');
const OverviewAnalytics = require('../model/overviewAnalytics');

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

    app.post('/api/OverviewAnalytics', function (req, res) {
        let userData = req.body;
    
        OverviewAnalytics.findAnalytic(userData, function (err, foundUser) {
            if(!foundUser){
                OverviewAnalytics.AddUserAnalytics(userData, function(err, callback){
                    if(err) throw err; 
                }); 
            }else{
                OverviewAnalytics.UpdateUserAnalytics(foundUser, userData, {}, function (err, callback) {
                    if (err) throw err;
                });
            }
        });
        res.status(200).send();
    });

    app.get('/api/OverviewAnalytics', (req,res) =>{
        OverviewAnalytics.getOverviewAnalytics(function (err, userdata) {
            if (err) throw err;
            res.json(userdata);
        });
    });
}