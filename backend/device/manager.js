var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http,{'pingInterval': 2500, 'pingTimeout': 10000});

/* Registers a new client in the socket engine. */
io.use(function(socket, next) {
  return next();
});

/* Handles the connection of a device */
io.on('connection', (device) => {
  console.log('[Device Manager API] TO DO: Handle the connection of a device.');
});

http.listen(8080, function() {
  console.log(`[Device Manager API] Ready.`);
});

module.exports = this;
