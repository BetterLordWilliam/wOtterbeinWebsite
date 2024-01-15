const mysql = require('mysql2');

// ESTABLISH DATABASE CONNECTION.
const connection = mysql.createPool({
  host: 'mysql-1392ee27-wotterbein.a.aivencloud.com',
  port: '12259',
  database: 'wOtterbein',
  user: 'avnadmin',
  password: 'AVNS_cbmIBTK50KCB7AO69Zg'
});

module.exports = connection;