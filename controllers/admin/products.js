const ArticleModel = require("../../models/Article");

module.exports.showPage = async (req, res, next) => {
  const { id, product } = req.params;
  const articles = await ArticleModel.findById(id);
  const products = articles.products.id(product);
  res.render("admin/products/showPage", { products });
};

// form to create a new product to parent article
module.exports.new = async (req, res, next) => {
  const { id, product } = req.params;
  const articles = await ArticleModel.findById(id);
  res.render("admin/products/create", { articles, product });
};

module.exports.edit = async (req, res, next) => {
  const { id, product } = req.params;
  // finds the parent document by id
  const articles = await ArticleModel.findById(id);
  // finds the subdocument array id
  const products = articles.products.id(product);
  res.render("admin/products/edit", { articles, products });
};

// creates a new product to parent article
module.exports.update = async (req, res, next) => {
  const { id } = req.params;
  const { Products } = req.body;

  const article_products = await ArticleModel.findByIdAndUpdate(id);

  article_products.products.push({ ...Products });

  await article_products.save();

  res.redirect(`/admin/articles/${id}`);
};

// updates a product in parent article
module.exports.product_update = async (req, res, next) => {
  const { id, product } = req.params;

  // destructed form Products wrapper to access form name attributes
  const {
    Products: { title, price, image, description },
  } = req.body;

  const articles = await ArticleModel.findByIdAndUpdate(id);

  // find subdocument by id
  const products = articles.products.id(product);
  // edit form fields by name
  products.title = title;
  products.price = price;
  products.image = image;
  products.description = description;

  // save updated product to database
  await articles.save();

  res.redirect(`/admin/articles/${id}`);
};

// removes a product from parent article
module.exports.delete_product = async (req, res, next) => {
  const { id, product } = req.params;
  const articles = await ArticleModel.findById(id);

  // find subdocument by id and remove it for the article
  articles.products.id(product).remove();

  await articles.save();

  res.redirect(`/admin/articles/${id}`);
};
