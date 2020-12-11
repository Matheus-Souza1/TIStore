'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
  return queryInterface.createTable('ordempedidos', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    pedidoId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'pedidos',
        key: 'id'
      }
    },
    produtoId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: { 
        model: 'produtos',
        key: 'id'
      }
    },
    
    quantidade: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    valorUnitario: {
      allowNull: false,
      type: Sequelize.DECIMAL,
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
    return queryInterface.dropTable('ordempedidos')
  }
};
