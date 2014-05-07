
exports.index = function(req, res) {

	res.locals = {
		name: "Steve"
	};
	
	res.render("index");

};