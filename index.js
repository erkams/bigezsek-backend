var express = require('express');
var app = express();

app.get('/test', function (request, response) {
    console.log("get request");
    response.sendFile("I got some json for you ;)");
});

