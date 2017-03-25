(function () {
    "use strict";

    exports.apiKey = process.env.GOOGLE_PLACES_API_KEY || "AIzaSyAZEViKGUsEJ-2byueG2TktfWPFoXPoayg";
    exports.outputFormat = process.env.GOOGLE_PLACES_OUTPUT_FORMAT || "json";

})();