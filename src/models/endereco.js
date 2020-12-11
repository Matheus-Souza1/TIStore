'use strict'
module.exports = (sequelize, DataTypes) => {
    const Endereco = sequelize.define('Enderecos', {
        userId: DataTypes.INTEGER,
        numero: DataTypes.STRING,
        rua: DataTypes.STRING,
        bairro: DataTypes.STRING,
        cidade: DataTypes.STRING,
        uf: DataTypes.STRING,
        cep: DataTypes.STRING,
        tipoEndereco: {
            type: DataTypes.ENUM,
            values: ['residencial', 'entrega', 'pagamento']
        },
        dataRegistro: DataTypes.DATE
    })

    Endereco.association = (models) => {
        Endereco.belongsTo(models.Usuario, {
            foreignKey: 'userId',
            as: 'usuarios'
        })
    }


    return Endereco;
};