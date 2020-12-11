const app = require('express');
const ordemPedidoController = require('../controllers/ordemPedidoController');


const routes = app.Router();

routes.get('/ordemPedido/:id', ordemPedidoController.show);
routes.get('/ordemPedido/produto/:produtoId', ordemPedidoController.showProduto);
routes.get('/ordemPedido/pedido/:pedidoId', ordemPedidoController.showPedido);
routes.post('/ordemPedido', ordemPedidoController.store);
routes.put('/ordemPedido/:id',ordemPedidoController.update);

module.exports = routes;
