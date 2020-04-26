const express = require('express');
//const crypto = require('crypto');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);  //estou criando uma sessao

routes.get('/ongs', OngController.index);     //rota para listagem das ongs criadas  
routes.post('/ongs', OngController.create);  //rota para create no banco de dados

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);  //nao esquecer do "id" para identificar no momento do delete

module.exports = routes;