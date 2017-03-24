var express = require('express');
var app = express();

app.get('/test', function (request, response) {
    console.log("get request");
    response.sendFile("I got some json for you ;)");
});

var server = app.listen(process.env.PORT || 8082, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);

});