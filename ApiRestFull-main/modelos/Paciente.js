// Importar la conexion a la base de datos
const sequelize = require("../config");
// Importar DataTypes de Sequelize
const { DataTypes } = require ('sequelize');
// Definir el modelo de Usuario
const Paciente = sequelize.define("Paciente", {
    id_paciente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    id_persona: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    zona: {
        type: DataTypes.STRING(50),
        allowNull: true
    },

});

module.exports = Paciente;