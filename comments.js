// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create a server
var server = app.listen(8081, function () {
    var host = "localhost";
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});