var app = module.exports = require('express')();
var models = require('../database/models.js');
require('fetch-everywhere');
require('./manager.js');

console.log('[Device API] Ready.');

/* Registers a new device */
app.post('/api/device/add', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  console.log('[Device API] TO DO: Register a new device.');

    fetch('http://localhost:8182/api/device/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: '_id=1234&current_state=on',
    })
        .then(response => response.json())
        .then(json => {
            this.setState({
                //debug : this.state.debug + json.message + '\n'
            });
        }).catch(error => {
        console.error(error);
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
