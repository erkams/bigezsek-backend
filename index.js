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