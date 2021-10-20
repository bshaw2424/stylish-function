const ArticleModel = require("../models/Article");

module.exports.index = async (req, res) => {
  const articles = await ArticleModel.find({});
  res.render("articles/index", { articles });
};

module.exports.showPage = async (req, res) => {
  const { slug } = req.params;
  const articleShowPage = await ArticleModel.findOne({ slug });
  console.log(req.params);
  res.render("articles/showPage", { articleShowPage });
};
