var app = require('express')();
var db = require('./database/index.js');
var user = require('./user/index.js');
var device = require('./device/index.js');
var producer = require('./producer/index.js');
var recordmodel = require('./database/models.js');
var jwt = require('express-jwt');
var config = require('./config');
var jsonwebtoken  = require('jsonwebtoken');
const routes = require('./socket'); // file with module to deal with the routes for each http request

/* CORS handling. */
app.use(require('body-parser').urlencoded({
  extended: true
}));

/* Logs a user/producer in */
app.post('/api/login', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  console.log('[Monitoring API] TO DO: Log a user/producer in.');
    recordmodel.User.findOne({username:req.body.username, password:req.body.password}, function(err,User){
        if (err) {
            console.error(err);
            res.send({message : 'Error 404'})
        } else { // sucess send the array of online users
            console.log(User);

            if(User == null){
                recordmodel.Producer.findOne({username:req.body.username, password:req.body.password}, function(err,Producer){
                    if(Producer ==null)
                        res.send({message : 'Username or Password wrong'});
                    else
                        var token = jsonwebtoken.sign({
                            username: req.body.username,
                            role: 2,
                        }, config.token.secret, { // get secret from config
                            expiresIn: config.token.expired // expires in 1 day
                        })

                    res.json({
                        token: token,
                        io:io,
                        message: 'Login producer'
                    })

                    recordmodel.User.findOne({username: req.body.username}, function(err, contact) {

                        contact.token = token;
                        contact.save(function(err) {
                            if(!err) {
                                console.log("contact " + contact.username + " created at " + contact.date_registered + " updated");
                            }
                            else {
                                console.log("Error: could not save contact " + contact.username);
                            }
                        });

                    });
                    //res.send({message : 'Login user'});
                });
            }

            else{

                var token = jsonwebtoken.sign({
                    username: req.body.username,
                    role: 1,
                }, config.token.secret, { // get secret from config
                    expiresIn: config.token.expired // expires in 1 day
                })

                res.json({
                    token: token,
                    message: 'Login ok'
                })

                recordmodel.User.findOne({username: req.body.username}, function(err, contact) {

                        contact.token = token;
                        contact.save(function(err) {
                            if(!err) {
                                console.log("contact " + contact.username + " created at " + contact.date_registered + " updated");
                            }
                            else {
                                console.log("Error: could not save contact " + contact.username);
                            }
                        });

                });
                //res.send({message : 'Login user'});
            }


        }
    });


});


app.post('/api/user/devices', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    console.log('[User API] TO DO: Consult user\'s device history.');
    res.send({message : 'TO DO: Consult user\'s device history.'});
});




app.use(user);
app.use(device);
app.use(producer);

app.listen(3000, function () {
  console.log('[Monitoring API] Ready.');
});


const http = require('http');
const port = '3000'
app.set('port', port);
const server = http.createServer(app);

/*
const io = require('socket.io')(server); //creates the websocket
//const io = require('socket.io')(server);
	 // call the function in routes that awaits connections in the websocket.
console.log();
routes.connect(io);

server.listen(port, () => console.log(`API running on localhost:${port}`));*/

