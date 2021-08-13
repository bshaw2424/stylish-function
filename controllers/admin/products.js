const Article = require("../../models/Article");

module.exports.showPage = async (req, res, next) => {
  const articles = Article.find({});

  res.render("admin/products/showPage", { articles });
};

// module.exports.post = async (req, res, next) => {
//   const { id } = req.params;
//   const { Products } = req.body;
//   const articles = req.body.Products;
//   const productings = Article.findById(id);
//   console.log(productings);
//   res.redirect(`/admin/articles/${id}`);
// };

module.exports.new = async (req, res, next) => {
  const { id, product } = req.params;
  const articles = await Article.findById(id);
  res.render("admin/products/create", { articles, product });
};

module.exports.edit = async (req, res, next) => {
  const { id, product } = req.params;
  // finds the parent document by id
  const articles = await Article.findById(id);
  // finds the subdocument array id
  const products = articles.products.id(product);
  res.render("admin/products/edit", { articles, products });
};

module.exports.update = async (req, res, next) => {
  const { id } = req.params;
  const { Products } = req.body;
  const article_products = await Article.findByIdAndUpdate(id);
  article_products.products.unshift(Products);
  await article_products.save();
  res.redirect(`/admin/articles/${id}`);
};

module.exports.product_update = async (req, res, next) => {
  const { id, product } = req.params;

  const {
    Products: { title, price, image, description },
  } = req.body;

  const articles = await Article.findByIdAndUpdate(id);

  const products = articles.products.id(product); // find subdocument by id
  products.title = title;
  products.price = price;
  products.image = image;
  products.description = description;

  await articles.save(); // save updated product to database
  res.redirect(`/admin/articles/${id}`);
};

module.exports.delete_product = async (req, res, next) => {
  const { id, product } = req.params;
  const articles = await Article.findByIdAndDelete(id);

  console.log(articles);
  res.redirect(`/admin/articles/${id}`);
};
