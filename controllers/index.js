
var models = {
    Post: require("../models/post")
};

exports.controller = function (app) {

    app.get("/", function (req, res) {

        var post = new models.Post();

        res.locals = {
            posts: [post, new models.Post(), new models.Post()]
        };

        res.render("index");
    });

    app.get("/tags", function (req, res) {

        res.render("tags");

    });

    app.get("/about", function (req, res) {

        res.render("about");

    });
};