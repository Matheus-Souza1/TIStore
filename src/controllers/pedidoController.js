const pedidoRepository = require("../repository/pedidoRepository");

module.exports = {
    async show(req, res) {
        try {
            const { id } = req.params;
            const pedido = await pedidoRepository.BuscarPorId(id);

            return res.json({ isSuccessful: pedido ? true : false, data: pedido, message: pedido ? "" : `O pedido com o id ${id} não foi encontrado!` });
   
        } catch (error) {
            return res.json({ isSuccessful: false, data: null, message: JSON.stringify(error) });
        }
    },

    async store(req, res) {
        try {
            const { clienteId,codigo,valorTotal,statusPedido,tipoPagamento,finalizado,dataCadastro } = req.body;

            let pedido = await pedidoRepository.Salvar({  clienteId,codigo,valorTotal,statusPedido,tipoPagamento,finalizado,dataCadastro});
            
            return res.json({ isSuccessful: true, data: pedido });

        } catch (error) {
            return res.json({ isSuccessful: false, data: null, message: JSON.stringify(error) });
        }
    },

    async update(req, res) {
        try {
            const id = req.params.id;
            const { clienteId,codigo,valorTotal,statusPedido,tipoPagamento,finalizado,dataCadastro} = req.body;

            let pedido = await pedidoRepository.Atualizar(id, {  clienteId,codigo,valorTotal,statusPedido,tipoPagamento,finalizado,dataCadastro});
           
            return res.json({ isSuccessful: true, data: pedido });

        } catch (error) {
            return res.json({ isSuccessful: false, data: null, message: JSON.stringify(error) });
        }
    },
    async showCliente(req, res) {
        try {
            const { clienteId } = req.params;
            const pedido = await pedidoRepository.BuscarPorCliente(clienteId);

            return res.json({ isSuccessful: pedido ? true : false, data: pedido, message: pedido ? "" : `O pedido com o cliente ${clienteId} não foi encontrado!` });
      
        } catch (error) {
            return res.json({ isSuccessful: false, data: null, message: JSON.stringify(error) });
        }
    }

};