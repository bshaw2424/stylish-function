const mongoose = require('mongoose');
const { Schema } = mongoose;

const trendingProducts = new Schema({
  title:{
    type: String,
    required: true
  },
  main_image: {
    type: String,
    required: true
  },
  sub_image: [String],
  price: {
    type: String,
    required: true
  },
  created_on: {
    type: Date,
    default: Date.now()
  }
});

module.exports =  trendingProducts;