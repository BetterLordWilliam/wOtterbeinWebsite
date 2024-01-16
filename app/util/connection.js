const mysql = require('mysql2');

const connection = mysql.createPool({
  host: 'mysql-1392ee27-wotterbein.a.aivencloud.com',
  port: '12259',
  user: 'avnadmin',
  password: 'AVNS_cbmIBTK50KCB7AO69Zg',
  database: 'wOtterbein'
});

module.exports = connection;