const ArticleModel = require("../models/Article");

module.exports.index = async (req, res, next) => {
  const articles = await ArticleModel.find();
  res.render("articles/index", { articles });
};

module.exports.showPage = async (req, res, next) => {
  const { slug } = req.params;
  const articles = await ArticleModel.findOne({ slug }).populate("products");
  if (!articles) {
    throw new asyncError("Article Page Not Found", 404);
  }
  res.render("articles/showPage", { articles });
};
