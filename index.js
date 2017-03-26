var express = require('express');
var bodyParser = require('body-parser');
var socket = require('socket.io');
var dbHelper = require('./dbHelper');
var placesHelper = require('./placesHelper');
var app = express();

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/getUsers', function (req, res) {
	id = req.query.id;
	place = req.query.place;
	date = req.query.date;
	hour = req.query.hour;
	dbHelper.getUsers(id, place, date, hour, function(users){
		res.send(JSON.stringify(users));
	});
});

app.get('/sendMessage', function (req, res) {
	from = req.query.from;
	to = req.query.to;
	message = req.query.message;
	dbHelper.sendMessage(from, to, message, function(messageObj){
		res.send(JSON.stringify(messageObj));
	});

});

app.get('/getMessagesbyUser', function (req, res) {
	from = req.query.from;
	to = req.query.to;
	dbHelper.getMessagesbyUser(from, to, function(messages){
		res.send(JSON.stringify(messages));
	});

});

app.get('/getNearbyPlaces', function (req, res) {
	location = req.query.location;
	radius = req.query.radius;
	placesHelper.getNearbyPlaces(location, radius, function(places){
		res.send(JSON.stringify(places));

	});
});

app.route('/newHangout').post(function (req, res) {
    id = req.query.id;
 	place = req.query.place;
 	date = req.query.date;
	hour = req.query.hour;
	dbHelper.newHangout(id, place, date, hour);
});

/*
app.get('/newHangout', function (req, res) {
	id = req.query.id;
	place = req.query.place;
	date = req.query.date;
	hour = req.query.hour;
	dbHelper.newHangout(id, place, date, hour);
});
*/

var server = app.listen(process.env.PORT || 8080, function () {
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("http://%s:%s listening..", host, port);
});

var io = socket.listen(server);


io.sockets.on('connection', function (socket) {

	// when the client emits 'adduser', this listens and executes
	socket.on('startChat', function(username, to){
		// store the username in the socket session for this client
		socket.username = username;
		socket.to = to;
		// store the room name in the socket session for this client
		socket.room = username + "-" + to;
		// add the client's username to the global list
		// send client to room 1
		socket.join(socket.room);
		// echo to client they've connected
		socket.emit('updatechat', 'SERVER', 'you have connected to ' + socket.room);
		// echo to room 1 that a person has connected to their room
		socket.broadcast.to(socket.room).emit('updatechat', 'SERVER', username + ' has connected to this room');
		
	});

	// when the client emits 'sendchat', this listens and executes
	socket.on('sendchat', function (data) {
		// we tell the client to execute 'updatechat' with 2 parameters
		io.sockets.in(socket.room).emit('updatechat', socket.username, data);
	});

	socket.on('switchRoom', function(newroom){

		socket.leave(socket.room);

		socket.join(newroom);
		socket.emit('updatechat', 'SERVER', 'you have connected to '+ newroom);
		
		socket.broadcast.to(socket.room).emit('updatechat', 'SERVER', socket.username+' has left this room');
		
		socket.room = newroom;
		socket.broadcast.to(newroom).emit('updatechat', 'SERVER', socket.username+' has joined this room');
	});

	// when the user disconnects..
	socket.on('disconnect', function(){
		socket.broadcast.emit('updatechat', 'SERVER', socket.username + ' has disconnected');
		socket.leave(socket.room);
	});
});

