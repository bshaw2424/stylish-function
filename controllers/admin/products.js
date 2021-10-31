const ArticleModel = require("../../models/Article");
const ProductModel = require("../../models/Product");

module.exports.index = async (req, res) => {
  const { slug } = req.params;
  const products = await ArticleModel.findOne({ slug }).populate("products");
  res.render("admin/products/index", { products });
};

module.exports.new = async (req, res) => {
  const { slug } = req.params;
  const article = await ArticleModel.findOne({ slug });
  res.render("admin/products/create", { article });
};

module.exports.create = async (req, res) => {
  const { slug } = req.params;
  const { Product } = req.body;
  const article = await ArticleModel.findOne({ slug });
  const product = new ProductModel(Product);
  product.image.url = req.file.path;
  product.image.filename = req.file.filename;
  article.products.push(product);
  product.article = article;
  await product.save();
  await article.save();
  res.redirect(`/admin/articles/${slug}`);
};

module.exports.showPage = async (req, res) => {
  const { product_slug } = req.params;
  const product = await ProductModel.findOne({ slug: product_slug });
  res.render("admin/products/showPage", { product });
};

module.exports.edit = async (req, res) => {
  const { slug, product_slug } = req.params;
  const product = await ProductModel.findOne({ product_slug });
  const article = await ArticleModel.findOne({ slug });
  res.render("admin/products/edit", { article, product });
};

module.exports.update = async (req, res) => {
  const { slug, product_slug } = req.params;
  const { Product } = req.body;
  const product = await ProductModel.findOneAndUpdate(
    { product_slug },
    {
      ...Product,
    },
    { new: true },
  );
  product.image.url = req.file.path;
  product.image.filename = req.file.filename;
  await product.save();
  res.redirect(`/admin/articles/${slug}`);
};

module.exports.delete = async (req, res) => {
  let id = [];
  const { slug, product_slug } = req.params;
  const articles = await ArticleModel.findOne({ slug });
  const delete_product = await ProductModel.findOneAndDelete({
    slug: product_slug,
  });
  if (delete_product) {
    console.log(
      delete_product._id,
      articles.products.map(a => a._id),
    );
  }

  // res.redirect(`/admin/articles/${slug}`);
};
