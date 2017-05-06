var storeio; // To store passed io in connect

exports.connect = function (io) {

    io.on('connection', (socket) => {  // first time it is called is when the client connects sucessfully
        storeio = io;
        console.log('client connected with socket id = ' + socket.id); // client connect

        /// treat received events on this connection HERE INSIDE the callback
        //example record creation event (JUST an Example)


        //when a user leaves this event is executed cleanup what you need here for example update user database
        socket.on('disconnect', function (){
            console.log("User disconnected");
        });

    });

};