'use strict'
module.exports = (sequelize, DataTypes) => {
    const Pedido = sequelize.define('Pedidos', {
      clienteId: DataTypes.INTEGER,
      codigo: DataTypes.INTEGER,
      valorTotal: DataTypes.DECIMAL,
      statusPedido: {
        type: DataTypes.ENUM,
        values:['iniciado','processando','entregue','cancelado']
      },
      tipoPagamento: {
        type: DataTypes.ENUM,
        values:['boleto','cartao','cartao empresa']
      },
      finalizado: DataTypes.BOOLEAN,
      dataCadastro: DataTypes.DATE,
    },{})

    Pedido.association = function(models){
      Pedido.belongsTo(models.usuario,{
        foreignKey:'clienteId',
        as:'usuarioPedido'
      })
      Pedido.belongsToMany(models.ordemPedido,{
        foreignKey:'pedidoId',
        through:'ordemPedido',
        as:'pedidos'
      })
    }
    
    return Pedido;
  };