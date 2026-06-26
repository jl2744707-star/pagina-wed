// Importar la conexion a la base de datos
const sequelize = require("../config");
// Importar DataTypes de Sequelize
const { DataTypes } = require ('sequelize');
// Definir el modelo de Usuario
const Atencion = sequelize.define("Atencion", {
    id_atencion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
    id_turno: {
        type: DataTypes.INTEGER,
        allowNull: false,
       
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    observaciones: {
        type: DataTypes.STRING(255),
        allowNull: true
    }
});

module.exports = Atencion;