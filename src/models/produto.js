'use strict'
module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define('Produtos', {
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    categoria: DataTypes.STRING,
    preco: DataTypes.DECIMAL,
    quantidadeEstoque: DataTypes.INTEGER,
    ativo: DataTypes.BOOLEAN,
    dataCadastro: DataTypes.DATE,
  }, {})

  Produto.association = (models) => {
    Produto.belongsToMany(models.ordemPedido, {
      foreignKey: 'produtoId',
      through: 'ordemPedido',
      as: 'usuarioPedido'
    })
  }


  return Produto;
};