const mongoose = require('mongoose');
const { Schema } = mongoose;

const featuredSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  title_description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  created_on: {
    type: Date,
    default: Date.now()
  }
});

module.exports = featuredSchema;