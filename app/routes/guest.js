// ROUTES GUESTS
var Guest = require('../models/guest.js');
module.exports 	= function(app) {

	app.get('/guests', Guest.findAll);
	app.post('/guests', Guest.create);
	app.put('/guests/:id', Guest.update);
	app.delete('/guests/:id', Guest.delete);
    
}
