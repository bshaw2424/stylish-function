const ArticleModel = require("../models/Article");
const ProductModel = require("../models/Product");

module.exports.index = async (req, res) => {
  const articles = await ArticleModel.find({});
  res.render("articles/index", { articles });
};

module.exports.showPage = async (req, res) => {
  const { slug } = req.params;
  const articles = await ArticleModel.findOne({ slug });
  console.log(articles);
  res.render("articles/showPage", { articles });
};
