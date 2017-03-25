var mongoose = require('mongoose');
var userDb = require("./models/User");
var hangoutDb = require("./models/Hangout");
var messageDb = require("./models/Message");

//get users who want to hangout at 'place' at 'hour' on that 'date'
var getUsers = function(id, place, date, hour, callback){
	newHangout(id, place, date, hour);

	userDb.find({ id: {'$ne': id}, hangout_place: place, hangout_date: date, hangout_hour: hour }, function(err, users){
		if(err){
			console.log(err);
			throw err;
		} 
		console.log(JSON.stringify(users));
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
	hangoutDb.find({ place: place, date: date, hour: hour }, function(err, hangouts){
		if(err){
			console.log(err);
			throw err;
		} 
		console.log(JSON.stringify(hangouts));
		callback(hangouts);
	});
}

var saveMessage = function(message, from, to){
	var messageObj = new Message({
  		message: message,
  		from: from,
  		to: to });

	messageObj.save(function(err) {
  			if (err) console.log(err);
  				console.log(messageObj.message + ' added successfully!');
		});
}

var getMessagesbyUser = function(id, date, hour, callback){
	messageDb.find({ from: from, to: to }).sort({created_at: +1}).exec(function(err, messsages){
		if(err){
			console.log(err);
			throw err;
		} 
		console.log(JSON.stringify(messages));
		callback(messages);
	});
}

var getMessageUsers = function(id, callback){
	messageDb.find({ $or:[{from: id}, {to: id}] }, function(err, messages){
		if(err){
			console.log(err);
			throw err;
		} 
		var user_ids = [];

	messages.forEach(function (message){
		if(message.from != id){
			if(!(message.from in user_ids)) user_ids.push(message.from);
		}else{
			if(!(message.to in user_ids)) user_ids.push(message.to);
		}
	});

	userDb.find({})
		callback(users);
	});
}

exports.getUsers = getUsers;
exports.newHangout = newHangout;
exports.getHangouts = getHangouts;
exports.saveMessage = saveMessage;
exports.getMessageUsers = getMessageUsers;
exports.getMessagesbyUser = getMessagesbyUser;

