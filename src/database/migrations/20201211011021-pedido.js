'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
  return queryInterface.createTable('pedidos', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    clienteId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: { 
        model: 'usuarios',
        key: 'id'
      }
    },
    codigo: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    valorTotal: {
      allowNull: false,
      type: Sequelize.DECIMAL,
    },
    statusPedido: {
      allowNull: false,
      type: Sequelize.ENUM('iniciado','processando','entregue','cancelado'),
    },
    tipoPagamento: {
      allowNull: false,
      type: Sequelize.ENUM('boleto','cartao','cartao empresa'),
    },
    finalizado: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    dataCadastro: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    }
  })
},
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pedidos')
  }
};
