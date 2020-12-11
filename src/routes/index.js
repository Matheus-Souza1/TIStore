const bodyParser = require('body-parser');
const usuario = require('./usuario');
const endereco = require('./endereco');
const produto = require('./produto');
const pedido = require('./pedido');
const ordemPedido = require('./ordemPedido');

module.exports = app => {
	app.use(
		bodyParser.json(),
		bodyParser.urlencoded({ extended: false, parameterLimit: 100 }),
		usuario,
		endereco,
		produto,
		pedido,
		ordemPedido,
		)
	}