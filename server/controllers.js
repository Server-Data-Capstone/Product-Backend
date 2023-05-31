const pool = require('./pool.js')
module.exports = {

  getProducts: function (req, res) {
    let amount = req.query.count * req.query.page;
    let queryStr = 'EXPLAIN ANALYZE SELECT * FROM product';
    return pool
      .query(queryStr)
      .then((response) => {
        res.send(response.rows.slice(0, amount)).status(200);
      })
      .catch((err) => console.error('Error executing query', err.stack))
  },

  getProductbyId: function (req, res) {
    let queryStr = `SELECT product.id, name, slogan, description, category, default_price, jsonb_agg(jsonb_build_object(
      'feature', features.feature,
      'value', features.value
      )) features
     FROM product
     LEFT JOIN features
     ON product.id = features.product_id
     WHERE product.id=${req.params.product_id}
     GROUP BY product.id`;

    return pool
      .query(queryStr)
      .then((response) => {
        console.log(response.rows);
        res.send(response.rows).status(200);
      })
      .catch((err) => console.error('Error executing query', err.stack))
  },

  getStyles: function (req, res) {



  },

  getRelated: function (req, res) {
    let queryStr = `EXPLAIN ANALYZE SELECT jsonb_agg(related_product_id) FROM related
     WHERE current_product_id=${req.params.product_id}`;

    return pool
      .query(queryStr)
      .then((response) => {
        console.log(response.rows[0].jsonb_agg);
        res.send(response.rows[0].jsonb_agg).status(200);
      })
      .catch((err) => console.error('Error executing query', err.stack))

  },

}