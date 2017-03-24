var express = require('express');
var bodyParser = require('body-parser');
var User = require("../models/User");
var User = require("../models/Date");
var mongoose = require('mongoose');
var app = express();

app.get('/', function (req, res) {
   res.send('bigezdir');
});

var server = app.listen(8081, function () {
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("http://%s:%s listening..", host, port);
});