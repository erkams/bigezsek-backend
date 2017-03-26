var mongoose = require('mongoose');
var User = require("./models/User");
var Hangout = require("./models/Hangout");
var Message = require("./models/Message");

//get users who want to hangout at 'place' at 'hour' on that 'date'
var getUsers = function(id, place, date, hour, callback){
	newHangout(id, place, date, hour);

	User.find({ id: {'$ne': id}, hangout_place: place, hangout_date: date, hangout_hour: hour }, function(err, users){
		if(err){
			console.log(err);
			throw err;
		} 
		console.log(JSON.stringify(users));
		callback(users);
	});
}

var newHangout = function(id, place, date, hour){
	User.findOne({ id: id }, function(err, user){
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

	Hangout.findOne({ place: place, date: date, hour: hour}, function(err,hangout){
		if(err){
			console.log(err);
			throw err;
		} 
		if(hangout == null){
			hangout = new Hangout({
				place: place,
				date: date,
				hour: hour,
				users: [id]
			});
		}
		if(!(id in hangout.users)) hangout.users.push(id);

		hangout.save(function(err) {
  			if (err) console.log(err);
  				console.log(hangout.place + ', ' + hangout.users.length + ' updated successfully!');
		});
	});
}

var getHangouts = function(places, callback){
	Hangout.find({ place: {$in: places} }, function(err, hangouts){
		if(err){
			console.log(err);
			throw err;
		} 
		console.log(JSON.stringify(hangouts));
		callback(hangouts);
	});
}

var sendMessage = function(from, to, message, callback){
	var messageObj = new Message({
  		message: message,
  		from: from,
  		to: to });

	messageObj.save(function(err) {
  		if (err) console.log(err);
  			callback(messageObj);
  			console.log(messageObj.message + ' sent successfully!');
	});
}

var getMessagesbyUser = function(from, to, callback){
	Message.find({ $or:[{from: from, to: to }, { from: to, to: from }] }).sort({created_at: +1}).exec(function(err, messages){
		if(err){
			console.log(err);
			throw err;
		} 
		console.log(JSON.stringify(messages));
		callback(messages);
	});
}
/*
var getMessageUsers = function(id, callback){
	Message.find({ $or:[{from: id}, {to: id}] }, function(err, messages){
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

	User.find({})
		callback(users);
	});
}*/

exports.getUsers = getUsers;
exports.newHangout = newHangout;
exports.getHangouts = getHangouts;
exports.sendMessage = sendMessage;
exports.getMessagesbyUser = getMessagesbyUser;

