const produtoRepository = require("../repository/produtoRepository");

module.exports = {
    async show(req, res) {
        try {
            const { id } = req.params;
            const produto = await produtoRepository.BuscarPorId(id);

            return res.json({ isSuccessful: produto ? true : false, data: produto, message: produto ? "" : `O produto com o id ${id} não foi encontrado!` });
        } catch (error) {
            return res.json({ isSuccessful: false, data: null, message: JSON.stringify(error) });
        }
    },

    async index(req, res) {
        try {
            const produtos = await produtoRepository.BuscarTodos();
           
            return res.json({ isSuccessful: true, data: produtos });

        } catch (error) {
            return res.json({ isSuccessful: false, data: null, message: JSON.stringify(error) });
        }
    },

    async store(req, res) {
        try {
            const {nome, descricao, categoria, preco, quantidadeEstoque, ativo, dataCadastro } = req.body;

            let produto = await produtoRepository.Salvar({ nome, descricao, categoria, preco, quantidadeEstoque, ativo, dataCadastro });

            return res.json({ isSuccessful: true, data: produto });

        } catch (error) {
            return res.json({ isSuccessful: false, data: null, message: JSON.stringify(error) });
        }
    },

    async update(req, res) {
        try {
            const id = req.params.id;
            const { nome, descricao, categoria, preco, quantidadeEstoque, ativo, dataCadastro } = req.body;

            let produto = await produtoRepository.Atualizar(id, { nome, descricao, categoria, preco, quantidadeEstoque, ativo, dataCadastro });
        
            return res.json({ isSuccessful: true, data: produto });

        } catch (error) {
            return res.json({ isSuccessful: false, data: null, message: JSON.stringify(error) });
        }
    },
    async showCategoria(req, res) {
        try {
            const { categoria } = req.params;
            const produto = await produtoRepository.BuscarPorCategoria(categoria);

            return res.json({ isSuccessful: produto ? true : false, data: produto, message: produto ? "" : `O produto com a categoria ${categoria} não foi encontrado!` });
      
        } catch (error) {
            return res.json({ isSuccessful: false, data: null, message: JSON.stringify(error) });
        }
    }

};