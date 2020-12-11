const enderecoRepository = require("../repository/enderecoRepository")

module.exports = {
    async show(req, res) {
        try {
            const { id } = req.params;
            const usuario = await enderecoRepository.BuscarPorId(id);

            return res.json({ isSuccessful: usuario ? true : false, data: usuario, message: usuario ? "" : `O endereco com o id ${id} não foi encontrado!` });
       
        } catch (error) {
            return res.json({ isSuccessful: false, data: null, message: JSON.stringify(error) });
        }
    },

    async index(req, res) {
        try {
            const usuarios = await enderecoRepository.BuscarTodos();
            
            return res.json({ isSuccessful: true, data: usuarios });
       
        } catch (error) {
            
            return res.json({ isSuccessful: false, data: null, message: JSON.stringify(error) });
        }
    },

    async store(req, res) {
        try {
            const { userId, numero, rua, bairro, cidade, uf, cep, tipoEndereco, dataRegistro } = req.body;

            let endereco = await enderecoRepository.Salvar({ userId, numero, rua, bairro, cidade, uf, cep, tipoEndereco, dataRegistro });
            
            return res.json({ isSuccessful: true, data: endereco });

        } catch (error) {
            return res.json({ isSuccessful: false, data: null, message: JSON.stringify(error) });
        }
    },

    async update(req, res) {
        try {
            const id = req.params.id;
            const { userId, numero, rua, bairro, cidade, uf, cep, tipoEndereco, dataRegistro } = req.body;

            let endereco = await enderecoRepository.Atualizar(id, { userId, numero, rua, bairro, cidade, uf, cep, tipoEndereco, dataRegistro });
          
            return res.json({ isSuccessful: true, data: endereco });

        } catch (error) {
            return res.json({ isSuccessful: false, data: null, message: JSON.stringify(error) });
        }
    },
    async showTipoEndereco(req, res) {
        try {
            const { tipoEndereco } = req.params;
            const usuario = await enderecoRepository.BuscarPorTipoEndereco(tipoEndereco);

            return res.json({ isSuccessful: usuario ? true : false, data: usuario, message: usuario ? "" : `O endereco com o tipo ${tipoEndereco} não foi encontrado!` });
       
        } catch (error) {
            return res.json({ isSuccessful: false, data: null, message: JSON.stringify(error) });
        }
    }

};