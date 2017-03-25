var express = require('express');
var bodyParser = require('body-parser');
var socket = require('socket.io');
var dbHelper = require('./dbHelper');
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
		console.log(JSON.stringify(users));
		res.send(JSON.stringify(users));
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
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
/*
var main = io.sockets.on('connection', function (socket){

});
*/
