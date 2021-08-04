const ArticleModel = require("../models/Article");

module.exports.index = async (req, res, next) => {
  const products = await ArticleModel.find();
  res.render("articles/index", { article: "title" });
};

module.exports.showPage = async (req, res, next) => {
  const { id } = req.params;
  const productShowPage = await ArticleModel.findById(id);
  res.render("articles/showPage", { articleShowPage });
};
