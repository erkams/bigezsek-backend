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

var server = app.listen(process.env.PORT || 8082, function () {
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("http://%s:%s listening..", host, port);
});

var io = socket.listen(server);

io.on('connection', function(socket){
	console.log(socket)
  	socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

/*
var main = io.sockets.on('connection', function (socket){

});
*/
