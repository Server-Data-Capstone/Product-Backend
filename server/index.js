require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan')
const app = express()
app.use(cors());
app.use(express.json());
const controllers = require('./controllers');

app.get('/products', controllers.getProducts);
app.get('/products/:product_id', controllers.getProductbyId);
//app.get('/products/:product_id/styles', controllers.getStyles);
 app.get('/products/:product_id/related', controllers.getRelated);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server available at http://localhost:${PORT}`);
});