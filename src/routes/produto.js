const app = require('express');
const ProdutoController = require('../controllers/produtoController');


const routes = app.Router();

routes.get('/produto', ProdutoController.index);
routes.get('/produto/:id', ProdutoController.show);
routes.get('/produto/categoria/:categoria', ProdutoController.showCategoria);
routes.post('/produto',  ProdutoController.store);
routes.put('/produto/:id', ProdutoController.update);

module.exports = routes;
