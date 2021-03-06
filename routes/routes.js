const Analytics = require('../model/analytics');
const OverviewAnalytics = require('../model/overviewAnalytics');
let {authenticate} = require('../middlewares/security'); 

/**
 * Routes for the Database/REST-Api that I created.
 * Notice that routes with POST has to send with API-Key. 
 * Routes without API are GET's. So it's easier for you to check the 
 * Database without have to use a API-KEY.
 * 
 */

module.exports = (app) => {
  
    app.get('/api/UserAnalytics', (req, res) => {
        Analytics.getUserAnalytics(function (err, userdata) {
            if (err) throw err;
            res.json(userdata);
        });
    });

    app.post('/api/UserAnalytics', authenticate, (req, res) => {
        let userdata = req.body;
        Analytics.AddUserAnalytics(userdata, function (err, callback) {
            if (err) throw err;
            res.json(userdata);
        });
    });

    app.post('/api/OverviewAnalytics', authenticate, function (req, res) {
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