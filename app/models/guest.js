// MODEL GUEST
var mongoose = require('mongoose');


var guestSchema = new mongoose.Schema({
 	name: String,
	allergy: String,
	hated: String
});

var Guest = {
    
    model: mongoose.model('Guest', guestSchema),
    
    create: function(req, res) {
		Guest.model.create({
			name: req.body.name,
			allergy: req.body.allergy,
			hated: req.body.hated
		}, function(){
			res.sendStatus(200);
		})
	},

	findAll: function(req, res) {
		Guest.model.find(function (err, data) {
			res.send(data);
		});
	},

	update: function(req, res){
		Guest.model.findByIdAndUpdate(req.params.id, {
			name: req.body.name,
			allergy: req.body.allergy,
			hated: req.body.hated
		}, function(){
			res.sendStatus(200);
		})
	},

	delete: function(req, res){
		Guest.model.findByIdAndRemove(req.params.id, function(){
			res.sendStatus(200);
		})
	} 
}

module.exports = Guest;
