const mongoose = require ('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  product_price: {
    type: Number,
    required: true
  },
  main_image: {
    type: String,
    required: true
  },
  sub_images: {
    type: [String]
  },
  product_description: {
    type: String,
    required: true
  },
  create_on: {
    type: Date,
    default: Date.now()
  }
});

module.exports = productSchema;