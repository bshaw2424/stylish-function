const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const slugify = require("slugify");

const Products = new Schema({
  title: {
    type: String,
    trim: true,
  },
  slug: { type: String, unique: true },
  price: {
    type: Number,
    min: [0, "Price can not be Negative"],
  },
  image: {
    type: String,
  },
  description: {
    type: String,
    trim: true,
  },
});

const Articles = new Schema({
  title: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
  },
  sub_description: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  slug: {
    type: String,
    unique: true,
  },
  products: [Products],
  created_on: {
    type: Date,
    default: new Date(),
  },
});

Products.pre("save", function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

Articles.pre("save", function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

module.exports = model("Article", Articles);
