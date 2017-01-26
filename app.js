var app = require('express')();
var http = require('http').Server(app);
// creates a new socket.io instance attached to the http server.
var io = require('socket.io')(http);
// Req = request and res = response
app.get('/', function(req, res){
  // Sends the index..html file as a response
  res.sendfile('index.html');
});
//Whenever someone connects this gets executed
//io.on handles connection and disconection events using the socet object.
io.on('connection', function(socket){
  console.log('A user connected');

  //Whenever someone disconnects this piece of code executed
  socket.on('disconnect', function () {
    console.log('A user disconnected');
  });

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
