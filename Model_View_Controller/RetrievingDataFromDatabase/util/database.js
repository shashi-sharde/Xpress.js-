const mysql = require('mysql2');

const pool =mysql.createPool({
    host: 'localhost',
    user:"root",
    database: "node-complete",
    password:"Shashi@7033"
});

module.exports =pool.promise();