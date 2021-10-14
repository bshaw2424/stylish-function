const ArticleModel = require("../../models/Article");
const ProductModel = require("../../models/Product");

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
  const product = await ProductModel.findById(product_id);
  const article = await ArticleModel.findById(id);
  res.render("admin/products/edit", { article, product });
};

module.exports.update = async (req, res) => {
  const { id, product_id } = req.params;
  const { Product } = req.body;
  const product = await ProductModel.findByIdAndUpdate(
    product_id,
    {
      ...Product,
    },
    { new: true },
  );
  product.image.url = req.file.path;
  product.image.filename = req.file.filename;
  await product.save();
  res.redirect(`/admin/articles/${id}`);
};

module.exports.delete = async (req, res) => {
  const { id, product_id } = req.params;
  const articles = await ArticleModel.findById(id);
  const products = await ProductModel.findByIdAndDelete(
    { _id: product_id },
    { $in: articles.products },
  );
  await articles.save();
  res.redirect(`/admin/articles/${id}`);
};
