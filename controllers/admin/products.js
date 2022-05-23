"use strict";

const ArticleModel = require("../../models/Article");
const ProductModel = require("../../models/Product");
const { AsyncError } = require("../../utility/error"); // function to covert price with a comma
const priceConvert = require("../../functions"); // products associated to article

module.exports.index = async (req, res, next) => {
  const { slug } = req.params;
  const products = await ArticleModel.findOne({ slug }).populate("products");
  res.render("admin/products/index", { products });
};

module.exports.new = async (req, res, next) => {
  const { slug } = req.params;
  const article = await ArticleModel.findOne({
    slug,
  });
  res.render("admin/products/create", {
    article,
  });
}; // creates and add new product associated to article to database

module.exports.create = async (req, res, next) => {
  const { slug } = req.params;
  const { Product } = req.body;

  const article = await ArticleModel.findOne({ slug });
  const product = new ProductModel(Product);

  product.image.url = req.file.path;
  product.image.filename = req.file.filename; // push the created product to the article using refs

  article.products.push(product); // reference the article to the product areas

  product.article = article;
  await product.save();
  await article.save();
  res.redirect(`/admin/articles/${slug}`);
};

module.exports.showPage = async (req, res, next) => {
  const { product_slug } = req.params;
  const product = await ProductModel.findOne({ slug: product_slug });
  res.render("admin/products/showPage", { product, priceConvert });
};

module.exports.edit = async (req, res, next) => {
  const { slug, product_slug } = req.params;
  const product = await ProductModel.findOne({ slug: product_slug });
  const article = await ArticleModel.findOne({ slug: slug });
  res.render("admin/products/edit", { article, product });
};

module.exports.photoEdit = async (req, res) => {
  const { slug, product_slug } = req.params;
  const product = await ProductModel.findOne({ slug: product_slug });
  const article = await ArticleModel.findOne({ slug });
  res.render("admin/products/productPhotoEdit", { article, product });
}; // updates product body and save to database

module.exports.update = async (req, res, next) => {
  const { product_slug } = req.params;
  const { Product } = req.body;
  const product = await ProductModel.findOneAndUpdate(
    {
      slug: product_slug,
    },
    { ...Product },
    {
      new: true,
    },
  );
  await product.save();
  res.redirect(`/admin/articles/${slug}`);
}; // updates product photo and save to database

module.exports.productPhotoUpdate = async (req, res) => {
  const { slug, product_slug } = req.params; //photo file upload path/filename saved to variables

  const url = req.file.path;
  const path = req.file.filename;
  const product = await ProductModel.findOneAndUpdate(
    {
      slug: product_slug,
    },
    {
      new: true,
    },
  );
  product.image.url = url;
  product.image.filename = path;
  await product.save();
  res.redirect(`/admin/articles/${slug}`);
}; // delete product from associated article

module.exports.delete = async (req, res, next) => {
  const { slug, product_slug } = req.params;
  await ArticleModel.findOne({ slug: slug });
  await ProductModel.findOneAndDelete({ slug: product_slug });
  res.redirect(`/admin/articles/${slug}`);
};
