const ArticleModel = require("../../models/Article");

module.exports.index = async (req, res, next) => {
  const articles = await ArticleModel.find({});
  res.render("admin/articles/index", { articles });
};

module.exports.create = async (req, res) => {
  res.render("admin/articles/create");
};

module.exports.post = async (req, res, next) => {
  const { Article } = req.body;
  const article = new ArticleModel(Article);
  await article.save();
  res.redirect("/admin/articles");
};

module.exports.showPage = async (req, res, next) => {
  const { id } = req.params;
  const articles = await ArticleModel.findById(id);
  console.log(articles);
  await res.render("admin/articles/showPage", { articles });
};

module.exports.edit = async (req, res, next) => {
  const { id } = req.params;
  const articles = await ArticleModel.findById(id);
  res.render("admin/articles/edit", { articles });
};

module.exports.update = async (req, res, next) => {
  const { id } = req.params;
  const { Article } = req.body;
  const updated_articles = await ArticleModel.findByIdAndUpdate(id, Article, {
    new: true,
  });
  await updated_articles.save();
  res.redirect("/admin/articles");
};

module.exports.delete = async (req, res, next) => {
  const { id } = req.params;
  await Article.findByIdAndDelete(id);
  res.redirect("/admin/articles");
};
