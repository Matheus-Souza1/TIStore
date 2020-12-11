const { OrdemPedidos } = require('../models');


async function Salvar(ordem) {
    return await OrdemPedidos.create({
        pedidoId: ordem.pedidoId,
        produtoId: ordem.produtoId,
        quantidade: ordem.quantidade,
        valorUnitario: ordem.valorUnitario
    });
}

async function BuscarPorId(id) {
    return await OrdemPedidos.findById(id);
}

async function Atualizar(id, ordemPedido) {
    let atualizar = await OrdemPedidos.update(ordemPedido,
        { where: { id: id } });

}

async function BuscarPorProduto(produtoId) {
    return await OrdemPedidos.findAll({ where: { produtoId: produtoId } });
}
async function BuscarPorPedido(pedidoId) {
    return await OrdemPedidos.findAll({ where: { pedidoId: pedidoId } });
}




module.exports = { Salvar, BuscarPorId, Atualizar, BuscarPorProduto, BuscarPorPedido };