const app = require('express');
const PedidoController = require('../controllers/pedidoController');


const routes = app.Router();

routes.get('/pedido/:id', PedidoController.show);
routes.get('/pedido/cliente/:clienteId', PedidoController.showCliente);
routes.post('/pedido', PedidoController.store);
routes.put('/pedido/:id',PedidoController.update);

module.exports = routes;
