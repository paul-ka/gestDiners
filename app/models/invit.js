// MODEL TODO
var mongoose = require('mongoose');


var InvitSchema = new mongoose.Schema({
  inputInvite: String,
  inputDate: String,
  inputEntree: String,
  inputPlat: String,
  inputDessert: String
});

var Invit = {
    
    model: mongoose.model('Invit', InvitSchema),
    
    create: function(req, res) {
		Invit.model.create({
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
		Invit.model.find(function (err, data) {
			res.send(data);
		});
	},

	update: function(req, res){
		Invit.model.findByIdAndUpdate(req.params.id, {
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
		Invit.model.findByIdAndRemove(req.params.id, function(){
			res.sendStatus(200);
		})
	} 
}

module.exports = Invit;
