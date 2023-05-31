const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'postgres',
  port: process.env.DB_PORT || '5432',
  database: process.env.DB_NAME || 'Products',
  password: process.env.DB_PASSWORD || '',
  // max: 12,
})

pool.connect()
  .then(() => {
    console.log('Connected to Products database');
  })
  .catch((error) => {
    console.log('Could not connect to Products database', error);
  })

  module.exports = pool;