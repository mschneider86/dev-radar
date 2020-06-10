const { Router } = require('express');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.create);
routes.put('/devs/:_id', DevController.update);
routes.delete('/devs/:_id', DevController.delete);

routes.get('/search', SearchController.index);

module.exports = routes;
