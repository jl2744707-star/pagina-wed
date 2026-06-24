const { Pool } = require('pg');

// Configuracion de la conexion 
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'admin0110',
    port: 5432,
});
module.exports = pool;

pool.connect()
.then(() => console.log('Conectado a PostgresSQL'))
.catch(err => console.log(err));