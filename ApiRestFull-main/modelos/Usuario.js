// Importar la conexion a la base de datos
const sequelize = require("../config");
// Importar DataTypes de Sequelize
const { DataTypes } = require ('sequelize');
// Definir el modelo de Usuario
const Usuario = sequelize.define ('Usuario',{
 id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    id_persona: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },

    usuario: {
        type: DataTypes.STRING(15),
        allowNull: false,
        unique: true
    },

    contraseña: {
        type: DataTypes.STRING(255),
        allowNull: false
    },

    id_rol: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

});

module.exports = Usuario;
