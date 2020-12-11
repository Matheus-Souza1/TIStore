const usuarioRepository = require("../repository/usuarioRepository")


module.exports = {
    async show(req, res) {
        try {
            const { id } = req.params;
            const usuario = await usuarioRepository.BuscarPorId(id);
            
            return res.json({ isSuccessful: usuario ? true : false, data: usuario, message: usuario ? "" : `O usuario com o id ${id} não foi encontrado!` });

        } catch (error) {
            console.log(usuario)
            return res.json({ isSuccessful: false, data: null, message: JSON.stringify(error) });
        }
    },
    async index(req, res) {
        try {
            const usuarios = await usuarioRepository.BuscarTodos();
            
            return res.json({ isSuccessful: true, data: usuarios });

        } catch (error) {
            return res.json({ isSuccessful: false, data: null, message: JSON.stringify(error) });
        }
    },
    async store(req, res) {
        try {
            const { nome, senha, email, telefone, cpf } = req.body;
            let usuario = await usuarioRepository.Salvar({ nome, senha, email, telefone, cpf })


            return res.json({ isSuccessful: true, data: usuario });
            
        } catch (error) {
            return res.json({ isSuccessful: false, data: null, message: JSON.stringify(error) });
        }
    },

    async login(req, res) {
        try {
            const { senha, email, } = req.body;
            let usuario = await usuarioRepository.Login({ email, senha });

            if(!usuario){
                res.status(404).send({
                   message:'Usuario ou senha invalidos'
                });
                return;
            }
          
             res.status(201).send({
                 data:{
                    email: usuario.email, 
                    nome: usuario.nome
                 }
             });
        } catch (error) {
            return res.json({ isSuccessful: false, data: null, message: JSON.stringify(error) });
        }
    },
};