const app = require('express');
const UsuarioController = require('../controllers/usuarioController');


const routes = app.Router();

routes.get('/usuarios', UsuarioController.index);
routes.get('/usuarios/:id', UsuarioController.show);
routes.post('/usuarios', UsuarioController.store);
routes.post('/usuarios/login',UsuarioController.login);

module.exports = routes;
