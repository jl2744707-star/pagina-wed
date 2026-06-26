// Importar la conexion a la base de datos
const sequelize = require("../config");
// Importar DataTypes de Sequelize
const { DataTypes } = require ('sequelize');
// Definir el modelo de Usuario
const Rol = sequelize.define("Rol", {

    id_rol: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    nombre_rol: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true
    }

});

module.exports = Rol;