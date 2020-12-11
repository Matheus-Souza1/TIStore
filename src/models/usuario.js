module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
        nome: DataTypes.STRING,
        senha: DataTypes.STRING,
        email: DataTypes.STRING,
        telefone: DataTypes.STRING,
        cpf: DataTypes.STRING,
    });

    return Usuario;
}