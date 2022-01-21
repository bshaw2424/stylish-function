const ArticleModel = require("../../models/Article");
const ProductModel = require("../../models/Product");
const { asyncError } = require("../../utility/error");
const priceConvert = require("../../functions");

module.exports.index = async (req, res, next) => {
  const { slug } = req.params;
  const products = await ArticleModel.findOne({ slug }).populate("products");
  if (!products) {
    throw new asyncError("Product Not Found", 404);
  }
  res.render("admin/products/index", { products });
};

module.exports.new = async (req, res, next) => {
  const { slug } = req.params;
  const article = await ArticleModel.findOne({ slug });
  if (!article) {
    throw new asyncError("Something Went Wrong Creating The Product", 404);
  }
  res.render("admin/products/create", { article });
};

module.exports.create = async (req, res, next) => {
  const { slug } = req.params;
  const { Product } = req.body;
  // find article by slug name
  const article = await ArticleModel.findOne({ slug });
  // create a new product associated with the article
  const product = new ProductModel(Product);
  // file upload (url/filename) for photo using multer
  product.image.url = req.file.path;
  product.image.filename = req.file.filename;
  // push the created product to the article using refs
  article.products.push(product);
  // reference the article to the product areas
  product.article = article;

  await product.save();
  await article.save();
  res.redirect(`/admin/articles/${slug}`);
};

module.exports.showPage = async (req, res, next) => {
  const { product_slug } = req.params;
  const product = await ProductModel.findOne({ slug: product_slug });
  if (!product) {
    throw new asyncError("Product Page Not Found", 404);
  }
  res.render("admin/products/showPage", { product, priceConvert });
};

module.exports.edit = async (req, res, next) => {
  const { slug, product_slug } = req.params;
  const product = await ProductModel.findOne({ slug: product_slug });
  const article = await ArticleModel.findOne({ slug: slug });
  if (!product || !article) {
    throw new asyncError("Product Not Found", 404);
  }
  res.render("admin/products/edit", { article, product });
};

module.exports.update = async (req, res, next) => {
  const { slug, product_slug } = req.params;
  const { Product } = req.body;
  const product = await ProductModel.findOneAndUpdate(
    { slug: product_slug },
    {
      ...Product,
    },
    { new: true },
  );
  // product.image.url = req.file.path;
  // product.image.filename = req.file.filename;
  if (!product) {
    throw new asyncError("Message Not Found", 404);
  }
  await product.save();
  res.redirect(`/admin/articles/${slug}`);
};

module.exports.delete = async (req, res, next) => {
  const { slug, product_slug } = req.params;
  const article = await ArticleModel.findOne({ slug: slug });
  const product = await ProductModel.findOneAndDelete({
    slug: product_slug,
  });
  if (!article || !product) {
    throw new asyncError("Something Went Wrong Deleting Product", 404);
  }
  res.redirect(`/admin/articles/${slug}`);
};
