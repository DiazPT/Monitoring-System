var app = require('express')();
var db = require('./database/index.js');
var user = require('./user/index.js');
var device = require('./device/index.js');
var producer = require('./producer/index.js');
var recordmodel = require('./database/models.js');

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

            if(User == null)
            res.send({message : 'Username or Password wrong'});
            else
                res.send({message : 'Login ok'});


            //res.render('viewRecords', templateData); // renders the view records layout with the data
        }
    });


});

app.use(user);
app.use(device);
app.use(producer);

app.listen(3000, function () {
  console.log('[Monitoring API] Ready.');
});


