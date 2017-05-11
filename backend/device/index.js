var app = module.exports = require('express')();
var models = require('../database/models.js');
var moment = require('moment');
require('fetch-everywhere');
require('./manager.js');

console.log('[Device API] Ready.');


/* Registers a new device */
app.post('/api/device/add', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    console.log('[Device API] TO DO: Register a new device.');
        models.User.findOne({username: req.body.username, token: req.body.token}, function (err, User) {

            if (User === null) {
                console.log("nao da");
                res.json({
                    message: 'Invalid session'
                })
            }
            else{
                fetch('http://localhost:8182/api/device/add', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: '_id=' + req.body.device_name + '&current_state=on',
                })
                    .then(response => response.json())
                    .then(json => {
                        /*if(json.message === 'result, 0'){

                         }
                         else{

                         }*/
                        if(json.result === '0'){
                            res.json({
                                message: 'device added'
                            })

                            //moment.locale('pt');

                            var newActivity = new models.User_history({
                                username : req.body.username,
                                activity : 'Added the device: ' + req.body.device_name,
                                time : moment().locale('pt').format('l')+ '    ' + moment().locale('pt').format('LT'),
                            });

                            newActivity.save(function(err){
                                if (err) {
                                    console.error("Error on saving activity");
                                    console.error(err); // log error to Terminal

                                } else {
                                    console.log("History updated");
                                    //recordCreated(newRecord);

                                }

                            });
                        }
                        else{
                            res.json({
                                message: 'device not added'
                            })
                        }
                    }).catch(error => {
                    console.error(error);
                });
            }


        });
});






/* Removes a device */
app.post('/api/device/remove', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  console.log('[Device API] TO DO: Remove a device.');
  res.send({message : 'TO DO: Remove a device.'});
});

/* Consults history of a given device */
app.post('/api/device/history', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  console.log('[Device API] TO DO: Consult a device\'s history.');
  res.send({message : 'TO DO: Consult a device\'s history.'});
});

/* Changes the state of a device */
app.post('/api/device/state', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  console.log('[Device API] TO DO: Change the state of a device.');
  res.send({message : 'TO DO: Change the state of a device.'});
});