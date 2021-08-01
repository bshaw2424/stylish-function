const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const slugify = require("slugify");

const articleSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  image: {
    type: String,
  },
  sub_description: {
    type: String,
    trim: true,
    require: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  slug: {
    type: String,
    unique: true,
  },
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  created_on: {
    type: Date,
    default: new Date(),
  },
});

articleSchema.pre("save", function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

module.exports = model("Article", articleSchema);
