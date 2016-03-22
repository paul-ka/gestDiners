var mongoose = require('mongoose');
var PartySchema = new mongoose.Schema({
  inputInvite: String,
  inputDate: String,
  inputEntree: String,
  inputPlat: String,
  inputDessert: String
});

var Party = {
    
    model: mongoose.model('Party', PartySchema),
    
    create: function(req, res) {
		Party.model.create({
			inputInvite: req.body.inputInvite,
			inputDate: req.body.inputDate,
			inputEntree: req.body.inputEntree,
			inputPlat: req.body.inputPlat,
			inputDessert: req.body.inputDessert
		}, function(){
			res.sendStatus(200);
		})
	},

	findAll: function(req, res) {
		Party.model.find(function (err, data) {
			res.send(data);
		});
	},

	update: function(req, res){
		Party.model.findByIdAndUpdate(req.params.id, {
			inputInvite: req.body.inputInvite,
			inputDate: req.body.inputDate,
			inputEntree: req.body.inputEntree,
			inputPlat: req.body.inputPlat,
			inputDessert: req.body.inputDessert
		}, function(){
			res.sendStatus(200);
		})
	},

	delete: function(req, res){
		Party.model.findByIdAndRemove(req.params.id, function(){
			res.sendStatus(200);
		})
	} 
}

module.exports = Party;