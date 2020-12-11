const { Usuario } = require('../models');

async function Salvar(usuario) {
    return await Usuario.create({
        nome: usuario.nome,
        senha: usuario.senha,
        email: usuario.email,
        telefone: usuario.telefone,
        cpf: usuario.cpf,
    })
}

async function BuscarPorId(id) {
    return await Usuario.findById(id);
}

async function BuscarTodos() {
    return await Usuario.findAll();
}

async function Logar(data) {
    const login = await Usuario.findOne({
        where: {
            email: data.email,
            senha: data.senha,
        }
    });

    return login;
}

module.exports = { Salvar, BuscarPorId, BuscarTodos, Logar };