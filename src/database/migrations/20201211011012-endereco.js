'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
  return queryInterface.createTable('enderecos', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    userId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'usuarios',
        key: 'id',
      }
    },
    numero: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    rua: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    bairro: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    cidade: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    uf: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    cep: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    tipoEndereco:{
      allowNull: false,
      type: Sequelize.ENUM('residencial','entrega','pagamento'),
    },
    dataRegistro:{
      allowNull: false,
      type: Sequelize.DATE
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
    return queryInterface.dropTable('enderecos')
  }
};
