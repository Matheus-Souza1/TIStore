const { Pedidos } = require('../models');


async function Salvar(pedido) {
    return await Pedidos.create({
        clienteId:pedido.clienteId,
        codigo: pedido.codigo,
        valorTotal: pedido.valorTotal,
        statusPedido: pedido.statusPedido,
        tipoPagamento: pedido.tipoPagamento,
        finalizado: pedido.finalizado,
        dataCadastro: pedido.dataCadastro
     
    });
}

async function BuscarPorId(id) {
    return await Pedidos.findById(id);
}

async function Atualizar(id, pedido) {
    let atualizar = await Pedidos.update(pedido,
        {where: {id: id}});
  
}
async function BuscarPorCliente(clienteId) {
    return await Pedidos.findAll({where:{clienteId: clienteId}});
}



module.exports = { Salvar, BuscarPorId, Atualizar, BuscarPorCliente };