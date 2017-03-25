var NearBySearch = require("googleplaces/NearBySearch");
var config = require("./config.js");

var nearBySearch = new NearBySearch(config.apiKey, config.outputFormat);

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