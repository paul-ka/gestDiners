// ROUTES TODOS
var Invit = require('../models/invit.js');
module.exports 	= function(app) {

	app.get('/invits', Invit.findAll);
	app.post('/invits', Invit.create);
	app.put('/invits/:id', Invit.update);
	app.delete('/invits/:id', Invit.delete);
    
}
