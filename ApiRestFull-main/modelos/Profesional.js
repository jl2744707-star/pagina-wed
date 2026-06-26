// Importar la conexion a la base de datos
const sequelize = require("../config");
// Importar DataTypes de Sequelize
const { DataTypes } = require ('sequelize');
// Definir el modelo de Usuario
const Profesional = sequelize.define("Profesional", {
    id_profesional: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    id_persona: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
    },
    matricula: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    id_especialidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
       
    }
});

module.exports = Profesional;