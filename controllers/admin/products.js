const Article = require("../../models/Article");

module.exports.showPage = async (req, res, next) => {
  await res.render("admin/products/showPage", { articles });
};

module.exports.new = async (req, res, next) => {
  const { id } = req.params;
  const articles_product = await Article.findById(id);
  console.log(articles_product);
  res.render("admin/products/create", { id });
};

module.exports.edit = async (req, res, next) => {
  const { id, product } = req.params;
  // finds the parent document by id
  const articles_product = await Article.findById(id);
  // finds the subdocument array id
  const abby = articles_product.products.id(product);
  res.render("admin/products/edit", { articles_product, abby });
};

module.exports.update = async (req, res, next) => {
  const { id } = req.params;
  const { Products } = req.body;
  const article_products = await Article.findByIdAndUpdate(id);
  article_products.products.push(Products);
  await article_products.save();
  console.log(article_products);
  res.redirect(`/admin/articles/${id}`);
};

module.exports.delete = async (req, res, next) => {
  const { id } = req.params;
  await Article.findByIdAndDelete(id);
  res.redirect(`/admin/articles/${id}`);
};
