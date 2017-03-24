var userDb = require("./models/User");
var dateDb = require("./models/Hangout");
var mongoose = require('mongoose');

var getUsers = function(place, date, hour, callback){
	User.find({ hangout_place: place, hangout_date: date, hangout_hour: hour }, function(err, users){
		if(err){
			console.log(err);
			throw err;
		} 
		callback(users);
	});

}

exports.getUsers = getUsers;

