'use strict'
module.exports = (sequelize, DataTypes) => {
    const OrdemPedido = sequelize.define('OrdemPedidos', {
      pedidoId: DataTypes.INTEGER,
      produtoId: DataTypes.INTEGER,
      quantidade: DataTypes.INTEGER,
      valorUnitario: DataTypes.DECIMAL,
    },{})
    
    OrdemPedido.association = function(models){
        OrdemPedido.belongsTo(models.pedido,{
        foreignKey:'pedidoId',
        as:'pedidos'
      })
      OrdemPedido.belongsTo(models.produto,{
        foreignKey:'produtoId',
        as:'produtos'
      })
    }
    
      
  
    return OrdemPedido;
  };