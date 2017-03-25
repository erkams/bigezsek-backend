var config = require("./config.js");
var nearBySearch = require("googleplaces")("AIzaSyAZEViKGUsEJ-2byueG2TktfWPFoXPoayg","json").nearBySearch;

var getNearbyPlaces = function(location, radius, callback){
	params = {
        location: location,
        radius: radius
    };

	nearBySearch(params, function (error, response) {
        if (error) throw error;
        console.log(response);
    	callback(response);
    });
}

exports.getNearbyPlaces = getNearbyPlaces;