const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const slugify = require("slugify");
const ProductModel = require("../models/Product");

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

Articles.pre("save", function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

Articles.post("deleteOne", async function (product) {
  const products = await ProductModel.deleteOne({
    _id: { $in: this.products },
  });
  console.log(products);
});

module.exports = model("Article", Articles);
