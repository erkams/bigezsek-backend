var userDb = require("./models/User");
var dateDb = require("./models/Hangout");
var mongoose = require('mongoose');

var getUsers = function(id, place, date, hour, callback){
	newHangout(id, place, date, hour);
	
	userDb.find({ id: {'$ne': id}, hangout_place: place, hangout_date: date, hangout_hour: hour }, function(err, users){
		if(err){
			console.log(err);
			throw err;
		} 
		callback(users);
	});

}

var newHangout = function(id, place, date, hour){
	userDb.findOne({ id: id }, function(err, user){
		if(err){
			console.log(err);
			throw err;
		} 
		user.hangout_place = place;
		user.hangout_date = date;
		user.hangout_hour = hour;

		user.save(function(err) {
  			if (err) console.log(err);
  				console.log(user.first_name + ' updated successfully!');
		});
	});

}
var getHangouts = function(place, date, hour, callback){
	userDb.find({ hangout_place: place, hangout_date: date, hangout_hour: hour }, function(err, users){
		if(err){
			console.log(err);
			throw err;
		} 
		callback(users);
	});

}

exports.getUsers = getUsers;

