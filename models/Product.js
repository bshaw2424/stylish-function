"use strict";

const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const slugify = require("slugify");

const Article = require("./Article");

const Products = new Schema({
  title: {
    type: String,
    trim: true,
  },
  slug: {
    type: String,
    unique: true,
  },
  price: {
    type: Number,
    min: [0, "Price can not be Negative"],
  },
  image: {
    url: String,
    filename: String,
  },
  description: {
    type: String,
    trim: true,
  },
  key_features: {
    type: String,
  },
  drawbacks: {
    type: String,
  },
  article: {
    type: Schema.Types.ObjectID,
    ref: "Article",
  },
});
Products.pre("save", function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});
const Product = model("Product", Products);
module.exports = Product;
