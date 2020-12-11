const { DATE } = require("sequelize");
const ordemPedidoRepository = require("../repository/ordemPedidoRepository");
const pedidoRepository = require("../repository/pedidoRepository");
const produtoRepository = require("../repository/produtoRepository");

module.exports = {
    async show(req, res) {
        try {
            const { id } = req.params;
            const produto = await ordemPedidoRepository.BuscarPorId(id);

            return res.json({ isSuccessful: produto ? true : false, data: produto, message: produto ? "" : `A ordem do pedido com o id ${id} não foi encontrado!` });
      
        } catch (error) {
            return res.json({ isSuccessful: false, data: null, message: JSON.stringify(error) });
        }
    },

    async store(req, res) {
        try {
            const { produtoId, quantidade, valorUnitario, clienteId } = req.body;
            let code = Math.floor(Math.random() * (999 + 1));

            let produto = await produtoRepository.BuscarPorId(produtoId);
            if (!produto) {
                return res.json({ isSuccessful: false, data: null, message: "Produto nao existe" });
            }

            let pedido = await pedidoRepository.Salvar({
                codigo: code,
                clienteId: clienteId,
                statusPedido: "iniciado",
                valorTotal: produto.preco * quantidade,
                finalizado: false,
                dataCadastro: new Date().toISOString()
            });
            if (!pedido) {
                return res.json({ isSuccessful: false, data: null, message: "Pedido nao existe" });
            }

            if (!(quantidade <= produto.quantidadeEstoque)) {
                return res.json({ isSuccessful: false, data: null, message: "Produto nao possui estoque" });
            }

            produto.quantidadeEstoque = produto.quantidadeEstoque - quantidade;

            await produtoRepository.AtualizarProduto(produto);


            let ordemPedido = await ordemPedidoRepository.Salvar({ pedidoId: pedido.id, produtoId: produto.id, quantidade, valorUnitario });

            return res.json({ isSuccessful: true, data: ordemPedido, message: "Ordem pedido adicionado" });

        } catch (error) {
            return res.json({ isSuccessful: false, data: null, message: "error:" + error });
        }
    },

    async update(req, res) {
        try {
            const id = req.params.id;
            const { pedidoId, produtoId, quantidade, valorUnitario } = req.body;

            let pedidoItem = await ordemPedidoRepository.Atualizar(id, { pedidoId, produtoId, quantidade, valorUnitario });
            
            return res.json({ isSuccessful: true, data: pedidoItem });

        } catch (error) {
            return res.json({ isSuccessful: false, data: null, message: JSON.stringify(error) });
        }
    },
    async showProduto(req, res) {
        try {
            const { produtoId } = req.params;
            const pedidoItem = await ordemPedidoRepository.BuscarPorProduto(produtoId);

            return res.json({ isSuccessful: pedidoItem ? true : false, data: pedidoItem, message: pedidoItem ? "" : `A ordem do pedido com o produto ${produtoId} não foi encontrado!` });
       
        } catch (error) {
            return res.json({ isSuccessful: false, data: null, message: JSON.stringify(error) });
        }
    },
    async showPedido(req, res) {
        try {
            const { pedidoId } = req.params;
            const pedidoItem = await ordemPedidoRepository.BuscarPorPedido(pedidoId);

            return res.json({ isSuccessful: pedidoItem ? true : false, data: pedidoItem, message: pedidoItem ? "" : `O pedido  ${pedidoId} não foi encontrado!` });
       
        } catch (error) {
            return res.json({ isSuccessful: false, data: null, message: JSON.stringify(error) });
        }
    }

};