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
    url: String,
    filename: String,
  },
  description: {
    type: String,
    trim: true,
  },
});

Products.pre("save", function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

module.exports = model("Product", Products);
