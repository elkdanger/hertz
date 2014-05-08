var http = require('http'),
    express = require('express'),
    connect = require('connect'),
    routes = require("./controllers"),
    port = process.env.port || 1337,
    fs = require("fs"),
    path = require("path");

var app = express();
var router = express.Router();

app.use(router);
app.set('view engine', 'html');
app.set('layout', 'layout');
app.set('views', __dirname + "/views");
app.set('partials', {
    sidebar: "_sidebar"
});

// Load our controllers
fs.readdirSync("./controllers").forEach(function (file) {
    console.log("Processing controller:", file);

    if (file.substr(-3) == ".js") {
        route = require("./controllers/" + file);
        route.controller(app);
    }
});

//app.enable('view cache');
app.engine('html', require('hogan-express'));
app.use(express.static(path.join(__dirname + "/public")));

var server = app.listen(port, function () {
    console.log("Server started: http://localhost:" + port);
});
