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

const Articles = new Schema({
  title: {
    type: String,
    trim: true,
  },
  image: {
    url: String,
    filename: String,
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
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
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

const ArticleModel = model("Article", Articles);
const ProductModel = model("Product", Products);

module.exports = { ArticleModel, ProductModel };
