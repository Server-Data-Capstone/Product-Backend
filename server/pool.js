const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  database: 'products',
  max: 10,
  idleTimeoutMillis: 30000,
})

pool.connect();

pool.query('SELECT NOW()')
  .then(res => console.log('Connected'))
  .catch(e => console.log(e))

module.exports = pool;