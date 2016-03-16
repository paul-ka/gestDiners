// MODEL TODO
var mongoose = require('mongoose');


var dishSchema = new mongoose.Schema({
  description: String
});

var Dish = {
    
    model: mongoose.model('Dish', dishSchema),
    
    create: function(req, res) {
		Dish.model.create({
			description: req.body.description
		}, function(){
			res.sendStatus(200);
		})
	},

	findAll: function(req, res) {
		Dish.model.find(function (err, data) {
			res.send(data);
		});
	},

	update: function(req, res){
		Dish.model.findByIdAndUpdate(req.params.id, {
			description: req.body.description
		}, function(){
			res.sendStatus(200);
		})
	},

	delete: function(req, res){
		Dish.model.findByIdAndRemove(req.params.id, function(){
			res.sendStatus(200);
		})
	} 
}

module.exports = Dish;
