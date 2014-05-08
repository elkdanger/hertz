
var azure = require("../providers/azure");

exports.controller = function (app) {

    app.get("/admin", function (req, res) {

        var repository = new azure.tableStorage.TSRepository("Posts");

        res.render("admin/index");

    });

};