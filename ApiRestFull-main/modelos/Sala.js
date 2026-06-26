// Importar la conexion a la base de datos
const sequelize = require("../config");
// Importar DataTypes de Sequelize
const { DataTypes } = require ('sequelize');
// Definir el modelo de Usuario
const Sala = sequelize.define("Sala", {
    id_sala: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    numero: {
        type: DataTypes.STRING(10),
        allowNull: false
    }
});    

module.exports = Sala;
    