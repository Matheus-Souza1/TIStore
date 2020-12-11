const { Produtos } = require('../models');


async function Salvar(produto) {
    return await Produtos.create({
        nome: produto.nome,
        descricao: produto.descricao,
        categoria: produto.categoria,
        preco: produto.preco,
        quantidadeEstoque: produto.quantidadeEstoque,
        ativo: produto.ativo,
        dataCadastro: produto.dataCadastro
    });
}

async function BuscarPorId(id) {
    return await Produtos.findByPk(id);
}

async function BuscarTodos() {
    return await Produtos.findAll();
}
async function Atualizar(id, produto) {
    let atualizar = await Produtos.update(produto,
        { where: { id: id } });

}

async function AtualizarProduto(produto) {
    await produto.save();

}

async function BuscarPorCategoria(categoria) {
    return await Produtos.findAll({ where: { categoria: categoria } });
}



module.exports = { Salvar, BuscarPorId, BuscarTodos, Atualizar, BuscarPorCategoria, AtualizarProduto };