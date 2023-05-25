import mongoose from 'mongoose';
const { Schema } = mongoose;

const products = new Schema({
  id: Number, // String is shorthand for {type: String}
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: String,
});

const productInfo = new Schema({
  id: Number, // String is shorthand for {type: String}
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: String,
  features: [{ feature: String, value: Date }],
});

const styles = new Schema ({
  product_id: String,
  results: [
    {
      style_id: Number,
      name: String,
      original_price: String,
      sale_price: String,
      default: Boolean;
      photos: [
        {
          thumbnail_url: String,
          url: String,
        }
      ]
    }
  ]
})