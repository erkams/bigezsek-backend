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
  		first_name: "Melih",
  		last_name: "Mutlu",
  		age: 33,
  		bio: "Boğaziçi Üniversitesi",
  		pic_url: "http://i.hizliresim.com/7qqm1W.jpg",
  		hangout_place: "ChIJuQfSbQbQyhQRo686317fLx4",
  		hangout_date: "26.3.2017",
  		hangout_hour: "aksam",
  		id: "2" });

	userObj.save(function(err) {
  		if (err) console.log(err);
  		console.log(userObj.first_name + ' saved successfully!');
	});

var userObj = new userDb({	
  		first_name: "Erkam",
  		last_name: "Şeker",
  		age: 21,
  		bio: "Takılma amaçlı..",
  		pic_url: "http://i.hizliresim.com/7qqm1W.jpg",
  		hangout_place: "ChIJuQfSbQbQyhQRo686317fLx4",
  		hangout_date: "26.3.2017",
  		hangout_hour: "aksam",
  		id: "3" });

	userObj.save(function(err) {
  		if (err) console.log(err);
  		console.log(userObj.first_name + ' saved successfully!');
	});
var userObj = new userDb({	
  		first_name: "Tuğçe",
  		last_name: "Hünerli",
  		age: 19,
  		bio: "Öğrenci",
  		pic_url: "http://i.hizliresim.com/7qqm1W.jpg",
  		hangout_place: "ChIJuQfSbQbQyhQRo686317fLx4",
  		hangout_date: "26.3.2017",
  		hangout_hour: "aksam",
  		id: "4" });

	userObj.save(function(err) {
  		if (err) console.log(err);
  		console.log(userObj.first_name + ' saved successfully!');
	});
var userObj = new userDb({	
  		first_name: "Burcu",
  		last_name: "Vuslat",
  		age: 23,
  		bio: "Sinefil ve dizisever...",
  		pic_url: "http://i.hizliresim.com/7qqm1W.jpg",
  		hangout_place: "ChIJuQfSbQbQyhQRo686317fLx4",
  		hangout_date: "26.3.2017",
  		hangout_hour: "aksam",
  		id: "5" });

var userObj = new userDb({	
  		first_name: "Betül",
  		last_name: "Aras",
  		age: 21,
  		bio: "Bilgi University",
  		pic_url: "http://i.hizliresim.com/7qqm1W.jpg",
  		hangout_place: "ChIJuQfSbQbQyhQRo686317fLx4",
  		hangout_date: "26.3.2017",
  		hangout_hour: "aksam",
  		id: "6" });

var userObj = new userDb({	
  		first_name: "Elif",
  		last_name: "Gezgin",
  		age: 20,
  		bio: "#museum #art #hiking",
  		pic_url: "http://i.hizliresim.com/7qqm1W.jpg",
  		hangout_place: "ChIJuQfSbQbQyhQRo686317fLx4",
  		hangout_date: "26.3.2017",
  		hangout_hour: "aksam",
  		id: "7" });
	userObj.save(function(err) {
  		if (err) console.log(err);
  		console.log(userObj.first_name + ' saved successfully!');
	});
var hangoutObj = new hangoutDb({	
  		place: "ChIJuQfSbQbQyhQRo686317fLx4",
  		date: "26.3.2017",
 		hour: "aksam" });

	hangoutObj.save(function(err) {
  		if (err) console.log(err);
  		console.log(hangoutObj.place + ' saved successfully!');
	});
var hangoutObj = new hangoutDb({	
  		place: "ChIJJeArFfzJyhQRBO0aNppJLR4",
  		date: "26.3.2017",
 		hour: "aksam" });

	hangoutObj.save(function(err) {
  		if (err) console.log(err);
  		console.log(hangoutObj.place + ' saved successfully!');
	});
var hangoutObj = new hangoutDb({	
  		place: "ChIJuSZM1__JyhQRhwXKF-O5Jek",
  		date: "26.3.2017",
 		hour: "aksam" });

	hangoutObj.save(function(err) {
  		if (err) console.log(err);
  		console.log(hangoutObj.place + ' saved successfully!');
	});