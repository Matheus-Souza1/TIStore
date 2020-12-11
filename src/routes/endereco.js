const app = require('express');
const EnderecoController = require('../controllers/EnderecoController');


const routes = app.Router();

routes.get('/endereco', EnderecoController.index);
routes.get('/endereco/:id', EnderecoController.show);
routes.get('/endereco/tipo/:tipoEndereco', EnderecoController.showTipoEndereco);
routes.post('/endereco', EnderecoController.store);
routes.put('/endereco/:id', EnderecoController.update);

module.exports = routes;
