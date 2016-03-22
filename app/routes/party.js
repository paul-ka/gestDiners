var Party = require('../models/party.js');
module.exports 	= function(app) {

	app.get('/partys', Party.findAll);
	app.post('/partys', Party.create);
	app.put('/partys/:id', Party.update);
	app.delete('/partys/:id', Party.delete);
    
}