const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const slugify = require("slugify");

const Products = Schema({
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
    type: String,
  },
  description: {
    type: String,
    trim: true,
    required: [true, "description is required"],
  },
});

Products.pre("save", function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

module.exports = model("Product", Products);
