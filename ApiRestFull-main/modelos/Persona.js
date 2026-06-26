// Importar la conexion a la base de datos
const sequelize = require("../config");
// Importar DataTypes de Sequelize
const { DataTypes } = require ('sequelize');
// Definir el modelo de Usuario
const Persona = sequelize.define("Persona", {

    id_persona: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    dni: {
        type: DataTypes.STRING(10),
        unique: true,
        allowNull: false
    },

    apellido: {
        type: DataTypes.STRING(30),
        allowNull: false
    },

    nombre: {
        type: DataTypes.STRING(30),
        allowNull: false
    },

    telefono: {
        type: DataTypes.STRING(15),
        allowNull: true
    },

    fecha_nacimiento: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },

    sexo: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING(100),
        allowNull: true
    },

});

module.exports = Persona;