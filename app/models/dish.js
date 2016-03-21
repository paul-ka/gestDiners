// MODEL TODO
var mongoose = require('mongoose');


var dishSchema = new mongoose.Schema({
	meal: String,
	ingredients: String,
	image: String,
	category: String,
	recipe:String,
	stars:String
});

var Dish = {
	model: mongoose.model('Dish', dishSchema),
	create: function (req, res) {
		Dish.model.create({
			meal: req.body.meal,
			ingredients: req.body.ingredients,
			category: req.body.category,
			recipe: req.body.recipe,
			image: req.body.image
		}, function () {

			res.sendStatus(200);
		})
	},

	findAll: function (req, res) {
		Dish.model.find(function (err, data) {
			res.send(data);
		});
	},

	update: function (req, res) {
		Dish.model.findByIdAndUpdate(req.params.id, {
			meal: req.body.meal,
			ingredients: req.body.ingredients,
			category: req.body.category,
			recipe: req.body.recipe,
			stars: req.body.stars,
			image: req.body.image
		}, function () {

			res.sendStatus(200);
		})
	},

	delete: function (req, res) {
		Dish.model.findByIdAndRemove(req.params.id, function () {
			res.sendStatus(200);
		})
	}
}

module.exports = Dish;
