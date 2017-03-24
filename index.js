var express = require('express');
var bodyParser = require('body-parser');
var userDb = require("./models/User");
var dateDb = require("./models/Date");
var mongoose = require('mongoose');
var app = express();

app.get('/', function (req, res) {
   res.send('bigezdir');
});

var server = app.listen(process.env.PORT || 8082, function () {
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("http://%s:%s listening..", host, port);
});

var userObj = new userDb({	
  		first_name: "Erkam",
  		last_name: "Şeker",
  		age: 19,
  		bio: "Gezmek isteyen kızlar onlayn mı? 😎",
  		pic_url: "http://g.hizliresim.com/johnny-depp-01-f310",
  		id: "1" });

	userObj.save(function(err) {
  		if (err) console.log(err);
  		console.log(userObj.first_name + ' saved successfully!');
	});

var dateObj = new dateDb({	
  		id: "ChIJJeArFfzJyhQRBO0aNppJLR4",
  		date: new Date(),
 		hour: "oglen" });

	dateObj.save(function(err) {
  		if (err) console.log(err);
  		console.log(dateObj.id + ' saved successfully!');
	});