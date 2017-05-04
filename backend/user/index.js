var app = module.exports = require('express')();
var models = require('../database/models.js');



console.log('[User API] Ready.');

/* Registers a new user */
app.post('/api/user/register', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  console.log('[User API] TO DO: Register a new user.');
    models.User.findOne({username:req.body.username}, function(err,User){


        if(err){
            console.error("Server error creating user!");
            res.send(501,"Server error!");
        }else{

            if(User==null){
                var newRecord = new models.User({
                    name : req.body.name,
                    email : req.body.email,
                    username: req.body.username,
                    password: req.body.password,
                    date_registered: this.setTime(this.getTime()+h*60*60*1000),
                });


                newRecord.save(function(err){
                    if (err) {
                        console.error("Error on saving new record");
                        console.error(err); // log error to Terminal

                    } else {
                        console.log("Created a new record!");
                        //recordCreated(newRecord);
                    }

                });

                //res.redirect('/viewRecords');
                //redirects client to request the /viewRecords url
            } else{
                //res.redirect('/viewMessage');
            }
        }
    });
  res.send({message : 'TO DO: Register a new user.'});
});

/* Consults user's device history */
app.post('/api/user/devices', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  console.log('[User API] TO DO: Consult user\'s device history.');
  res.send({message : 'TO DO: Consult user\'s device history.'});
});

/* Consults user's history */
app.post('/api/user/history', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  console.log('[User API] TO DO: Consult user\'s history.');
  res.send({message : 'TO DO: Consult user\'s history.'});
});


