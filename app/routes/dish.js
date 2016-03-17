// ROUTES DISHS
var Dish = require('../models/dish.js');
module.exports 	= function(app) {

	app.get('/dishs', Dish.findAll);
	app.post('/dishs', Dish.create);
	app.put('/dishs/:id', Dish.update);
	app.delete('/dishs/:id', Dish.delete);
    
}