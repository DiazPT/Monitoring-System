var app = module.exports = require('express')();
var models = require('../database/models.js');

console.log('[Producer API] Ready.');

/* Registers a new producer */
app.post('/api/producer/register', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  console.log('[Producer API] TO DO: Register a new producer.');
  res.send({message : 'TO DO: Register a new producer.'});
});

/* Adds a new product model */
app.post('/api/producer/productmodel/add', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  console.log('[Producer API] TO DO: Add a new product model.');
  res.send({message : 'TO DO: Add a new product model.'});
});

/* Removes a product model */
app.post('/api/producer/productmodel/remove', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  console.log('[Producer API] TO DO: Remove a product model.');
  res.send({message : 'TO DO: Remove a product model.'});
});

/* Adds a new device type */
app.post('/api/producer/devicetype/add', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  console.log('[Producer API] TO DO: Add a new device type.');
  res.send({message : 'TO DO: Add a new device type.'});
});

/* Removes a device type */
app.post('/api/producer/devicetype/remove', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  console.log('[Producer API] TO DO: Remove a device type.');
  res.send({message : 'TO DO: Remove a device type.'});
});

/* Checks history of a given device type history */
app.post('/api/producer/devicetype/history', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  console.log('[Producer API] TO DO: Check history of a given device type.');
  res.send({message : 'TO DO: Check history of a given device type.'});
});
