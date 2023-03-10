const mysql = require('mysql2');
const config = require('../Configuration/config');

const connection = mysql.createConnection({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

module.exports = connection;