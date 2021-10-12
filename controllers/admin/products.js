const { ArticleModel, ProductModel } = require("../../models/Article");

module.exports.index = async (req, res) => {
  const { id } = req.params;
  const products = await ArticleModel.findById(id).populate("products");
  res.render("admin/products/index", { products });
};

module.exports.new = async (req, res) => {
  const { id } = req.params;
  const article = await ArticleModel.findById(id);
  res.render("admin/products/create", { article });
};

// creates a new product to parent article
module.exports.create = async (req, res) => {
  const { id } = req.params;
  const { Product } = req.body;
  const article = await ArticleModel.findById(id);
  const product = new ProductModel(Product);
  product.image.url = req.file.path;
  product.image.filename = req.file.filename;
  article.products.push(product);
  await product.save();
  await article.save();
  res.redirect(`/admin/articles/${id}`);
};

module.exports.showPage = async (req, res) => {
  const { product_id } = req.params;
  const product = await ProductModel.findById(product_id);
  res.render("admin/products/showPage", { product });
};

module.exports.edit = async (req, res) => {
  const { id, product_id } = req.params;
  // finds the parent document by id
  const article = await ArticleModel.findById(id);
  // finds the subdocument array id
  const product = await ArticleModel.findById(id).populate("products", "_id");
  res.render("admin/products/edit", { article, ...product });
};

// updates a product in parent article
module.exports.update = async (req, res) => {
  const { id, product } = req.params;

  // destructed form Products wrapper to access form name attributes
  // const {
  //   Products: { title, price, image, description },
  // } = req.body;

  const articles = await ArticleModel.findByIdAndUpdate(id);

  // find subdocument by id
  const products = articles.products.id(product);
  // edit form fields by name
  // products.title = title;
  // products.price = price;
  // // products.image.url = req.file.path;
  // // products.image.filename = req.file.filename;
  // // products.image = image;
  // products.description = description;

  // save updated product to database
  // await articles.save();

  // res.redirect(`/admin/articles/${id}`);
  console.log("a " + products, "b " + articles);
};

// removes a product from parent article
module.exports.delete_product = async (req, res) => {
  const { id, product } = req.params;
  const articles = await ArticleModel.findById(id);

  // find subdocument by id and remove it for the article
  articles.products.id(product).remove();

  await articles.save();

  res.redirect(`/admin/articles/${id}`);
};
