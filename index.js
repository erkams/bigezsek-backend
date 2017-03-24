var express = require('express');
var bodyParser = require('body-parser');
//var dbHelper = require('dbHelper');
var userDb = require("./models/User");
var hangoutDb = require("./models/Hangout");
var mongoose = require('mongoose');
var app = express();

app.get('/getHangouts', function (req, res) {
	place = req.query.place;
	date = req.query.date;
	hour = req.query.hour;
	dbHelper.getUsers(place, date, hour, function(users){
		res.send(users);
	});
});

var server = app.listen(process.env.PORT || 8082, function () {
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("http://%s:%s listening..", host, port);
});

var userObj = new userDb({	
  		first_name: "Burcu",
  		last_name: "Vuslat",
  		age: 23,
  		bio: "Sinefil ve dizisever...",
  		pic_url: "http://i.hizliresim.com/V00pmy.jpg",
  		hangout_place: "ChIJuQfSbQbQyhQRo686317fLx4",
  		hangout_date: "26.3.2017",
  		hangout_hour: "aksam",
  		id: "5" });
userObj.save(function(err) {
  		if (err) console.log(err);
  		console.log(userObj.first_name + ' saved successfully!');
	});
var userObj = new userDb({	
  		first_name: "Betül",
  		last_name: "Aras",
  		age: 21,
  		bio: "Bilgi University",
  		pic_url: "http://i.hizliresim.com/V00pby.jpg",
  		hangout_place: "ChIJuQfSbQbQyhQRo686317fLx4",
  		hangout_date: "26.3.2017",
  		hangout_hour: "aksam",
  		id: "6" });
userObj.save(function(err) {
  		if (err) console.log(err);
  		console.log(userObj.first_name + ' saved successfully!');
	});
