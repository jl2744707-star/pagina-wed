// Importar la conexion a la base de datos
const sequelize = require("../config");
// Importar DataTypes de Sequelize
const { DataTypes } = require ('sequelize');
// Definir el modelo de Usuario
const Turno = sequelize.define("Turno", {
    id_turno: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    id_paciente: {
        type: DataTypes.INTEGER,
        allowNull: false,

    },
    id_profesional: {
        type: DataTypes.INTEGER,
        allowNull: false,
       
    },
    id_horario: {
        type: DataTypes.INTEGER,
        allowNull: false,
       
    },
    estado: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    id_sala: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
    }
});

module.exports = Turno;