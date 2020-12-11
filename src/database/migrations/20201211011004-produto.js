'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
  return queryInterface.createTable('produtos', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    nome: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    descricao: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    categoria: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    preco: {
      allowNull: false,
      type: Sequelize.DECIMAL,
    },
    quantidadeEstoque: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    ativo: {
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
    return queryInterface.dropTable('produtos')
  }
};
