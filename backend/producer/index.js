var app = module.exports = require('express')();
var models = require('../database/models.js');
var moment = require('moment');
var jwt = require('express-jwt');
var config = require('../config');
var jsonwebtoken = require('jsonwebtoken');
var async = require('async');

console.log('[Producer API] Ready.');


function token_true(name, token_received) {

    models.Producer.findOne({username: name, token: token_received}, function (err, Producer) {

        if (Producer == Null) {
            return true;
        }
        else
            return false;

    });
};


/* Registers a new producer */
app.post('/api/producer/register', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    console.log('[Producer API] Register a new producer.');
    models.Producer.findOne({username: req.body.username}, function (err, Producer) {


        if (err) {
            console.error("Server error creating user!");
            res.send(501, "Server error!");
        } else {

            var token = jsonwebtoken.sign({
                username: req.body.username,
                role: 1,
            }, config.token.secret, { // get secret from config
                expiresIn: config.token.expired // expires in 1 day
            })

            if (Producer == null) {
                var newRecord = new models.Producer({
                    name: req.body.name,
                    email: req.body.email,
                    username: req.body.username,
                    password: req.body.password,
                    date_registered: moment().locale('pt').format('l') + '    ' + moment().locale('pt').format('LT'),
                    token: token,
                });


                newRecord.save(function (err) {
                    if (err) {
                        console.error("Error on saving new record");
                        console.error(err); // log error to Terminal
                        res.send({message: 'Error 404'});
                    } else {
                        console.log("Created a new record!");
                        //recordCreated(newRecord);
                        res.send({message: 'Producer register'});
                    }

                });
                //moment.locale('pt'); //PT
                /*var newActivity = new models.User_history({
                 username : req.body.username,
                 activity : 'Registered on the website',
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

                 });*/

                //res.redirect('/viewRecords');
                //redirects client to request the /viewRecords url
            } else {
                res.send({message: 'Problem regist'});
                //res.redirect('/viewMessage');
            }
        }
    });

});

/* Adds a new product model */
app.post('/api/producer/productmodel/add', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    console.log('[Producer API] Add a new product model.')

    models.ProductModel.findOne({name: req.body.name_model, token: req.body.token}, function (err, ProductModel) {

        if (err) {
            console.error("Server error creating user!");
            res.send(501, "Server error!");
        } else {
            if (ProductModel == null) {
                var newRecord = new models.ProductModel({
                    name: req.body.name_model,
                    token: req.body.token
                });
                newRecord.save(function (err) {
                    if (err) {
                        console.error("Error on saving new record");
                        console.error(err); // log error to Terminal
                        res.send({message: 'Error 404'});

                    } else {
                        console.log("Created a new record!");
                        //recordCreated(newRecord);
                        res.send({message: 'Creating model'});
                    }
                });
            }
        }
    });
});

/* Removes a product model */
app.post('/api/producer/productmodel/remove', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    console.log('[Producer API] TO DO: Remove a product model.');
    res.send({message: 'TO DO: Remove a product model.'});
});

/* Adds a new device type */
app.post('/api/producer/devicetype/add', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    console.log('[Producer API] TO DO: Add a new device type.');
    res.send({message: 'TO DO: Add a new device type.'});
});

/* Removes a device type */
app.post('/api/producer/devicetype/remove', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    console.log('[Producer API] TO DO: Remove a device type.');
    res.send({message: 'TO DO: Remove a device type.'});
});

/* Checks history of a given device type history */
app.post('/api/producer/devicetype/history', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    console.log('[Producer API] TO DO: Check history of a given device type.');
    res.send({message: 'TO DO: Check history of a given device type.'});
});



app.post('/api/producer/device/models', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    var all_devices =[];
    models.Producer.findOne({username: req.body.username, token: req.body.token}, function (err, Prod) {
        if (err) {
            res.json({
                message: 'Invalid session'
            })
        } else {
            if (Prod === null) {
                console.log(req.body.username + '' + req.body.token);
                console.log("nao da");
                res.json({
                    message: 'Invalid session'
                })
            }
            else {
                for (i = 0; i < Prod.device_models.length; i++) {
                    all_devices.push({
                        label: Prod.device_models[i],
                        value: Prod.device_models[i],
                    })

                }
                res.json({
                    message: 'ok',
                    models: all_devices
                });
            }
        }

    });
});


app.post('/api/producer/device/types', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    var all_devices =[];
    models.Producer.findOne({username: req.body.username, token: req.body.token}, function (err, Prod) {
        if (err) {
            res.json({
                message: 'Invalid session'
            })
        } else {
            if (Prod === null) {
                console.log(req.body.username + '' + req.body.token);
                console.log("nao da");
                res.json({
                    message: 'Invalid session'
                })
            }
            else {
                for (i = 0; i < Prod.device_types.length; i++) {
                    all_devices.push({
                        label: Prod.device_types[i],
                        value: Prod.device_types[i],
                    })

                }
                res.json({
                    message: 'ok',
                    models: all_devices
                });
            }
        }

    });
});

app.post('/api/producer/producers/all', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    var all_devices =[];
    models.Producer.find({username: req.body.username, token: req.body.token}, function (err, Prod) {
        if (err) {
            res.json({
                message: 'Invalid session'
            })
        } else {
            models.Producer.distinct('name', function(err, all_producers){
                if (Prod === null) {
                    console.log(req.body.username + '' + req.body.token);
                    console.log("nao da");
                    res.json({
                        message: 'Invalid session'
                    })
                }
                else {
                    for (i = 0; i < all_producers.length; i++) {
                        all_devices.push({
                            label: all_producers[i],
                            value: all_producers[i],
                        })

                    }

                    res.json({
                        message: 'ok',
                        producers: all_devices
                    });
                }
            });

        }

    });
});





app.post('/api/producer/producers/model', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    var all_devices =[];
    models.Producer.find({username: req.body.username, token: req.body.token}, function (err, Prod) {
        if (err) {
            res.json({
                message: 'Invalid session'
            })
        } else {
            models.Producer.distinct('name', function(err, all_producers){
                if (Prod === null) {
                    console.log(req.body.username + '' + req.body.token);
                    console.log("nao da");
                    res.json({
                        message: 'Invalid session'
                    })
                }
                else {

                    for (i = 0; i < all_producers.length; i++) {
                        models.Producer.findOne({username:all_producers[i]}, function (err,producer_model){
                            for (i = 0; i < producer_model.device_models.length; i++){
                                all_devices.push({
                                    label: producer_model.device_models[i],
                                    value: producer_model.device_models[i],
                                })
                            }
                        });


                    }
                    setTimeout(function(){
                        //console.log(all_devices);
                        res.json({
                            message: 'ok',
                            models: all_devices,
                        });
                    }, 2000);

                }
            });

        }

    });
});





app.post('/api/producer/producers/type', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    var all_devices =[];
    models.Producer.find({username: req.body.username, token: req.body.token}, function (err, Prod) {
        if (err) {
            res.json({
                message: 'Invalid session'
            })
        } else {
            models.Producer.distinct('name', function(err, all_producers){
                if (Prod === null) {
                    console.log(req.body.username + '' + req.body.token);
                    console.log("nao da");
                    res.json({
                        message: 'Invalid session'
                    })
                }
                else {

                    for (i = 0; i < all_producers.length; i++) {
                        models.Producer.findOne({username:all_producers[i]}, function (err,producer_model){
                            for (i = 0; i < producer_model.device_types.length; i++){
                                all_devices.push({
                                    label: producer_model.device_types[i],
                                    value: producer_model.device_types[i],
                                })
                            }
                        });


                    }
                    setTimeout(function(){
                        //console.log(all_devices);
                        res.json({
                            message: 'ok',
                            types: all_devices,
                        });
                    }, 2000);

                }
            });

        }

    });
});
