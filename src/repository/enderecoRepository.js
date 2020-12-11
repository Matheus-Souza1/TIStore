const { Enderecos } = require('../models');

async function Salvar(endereco) {
    return await Enderecos.create({
        userId:endereco.userId,
        numero: endereco.numero,
        rua: endereco.rua,
        bairro: endereco.bairro,
        cidade: endereco.cidade,
        uf: endereco.uf,
        cep: endereco.cep,
        tipoEndereco: endereco.tipoEndereco,
        dataRegistro: endereco.dataRegistro
    });
}

async function BuscarPorId(id) {
    return await Enderecos.findByPk(id);
}

async function BuscarTodos() {
    return await Enderecos.findAll();
}
async function Atualizar(id, endereco) {
    let atualizar = await Enderecos.update(endereco,
        {where: {id: id}});
  
}
async function BuscarPorTipoEndereco(tipoEndereco) {
    return await Enderecos.findAll({where:{tipoEndereco: tipoEndereco}});
}



module.exports = { Salvar, BuscarPorId, BuscarTodos, Atualizar, BuscarPorTipoEndereco };