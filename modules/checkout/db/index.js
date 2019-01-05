const mysql = require('mysql');

const db = mysql.createConnection({
  host: '172.17.0.2',
  user: 'root',         // Change user here if the mysql user on your computer differs
  database: 'booking',
});


module.exports = db;
