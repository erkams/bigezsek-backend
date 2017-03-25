var express = require('express');
var bodyParser = require('body-parser');
var dbHelper = require('./dbHelper');
var app = express();

app.get('/getUsers', function (req, res) {
	id = req.query.id;
	place = req.query.place;
	date = req.query.date;
	hour = req.squery.hour;
	dbHelper.getUsers(id, place, date, hour, function(users){
		console.log(JSON.stringify(users));
		res.send(JSON.stringify(users));
	});
});

app.route('/newHangout').post(function(req, res) {
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

