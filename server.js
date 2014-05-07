var http = require('http');
var express = require('express');
var connect = require('connect');
var routes = require("./routes");
var port = process.env.port || 1337;
var path = require("path");

var app = express();
var router = express.Router();

router.get("/", routes.index);

app.use(router);
app.set('view engine', 'html');
app.set('layout', 'layout');
app.set('views', __dirname + "/views");
app.set('partials', {
    sidebar: "_sidebar"
});

//app.enable('view cache');
app.engine('html', require('hogan-express'));
app.use(express.static(path.join(__dirname + "/public")));

var server = app.listen(port, function () {
    console.log("Server started: http://localhost:" + port);
});
