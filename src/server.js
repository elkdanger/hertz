var http = require('http');
var express = require('express');
var connect = require('connect');
var serveStatic = require('serve-static');

var port = process.env.port || 1337;

var app = express();

app.use(serveStatic('public', { 'index': ['index.html'] }));

var server = app.listen(port, function () {
    console.log("Server started: http://localhost:" + port);
});
