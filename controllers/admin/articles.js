const ArticleModel = require("../../models/Article");

module.exports.index = async (req, res) => {
  const articles = await ArticleModel.find().sort({ created_on: "descending" });
  res.render("admin/articles/index", { articles });
};

module.exports.create = (req, res) => {
  res.render("admin/articles/create");
};

module.exports.post = async (req, res) => {
  const { Article } = req.body;
  const article = new ArticleModel(Article);
  await article.save();
  res.redirect("/admin/articles");
};

module.exports.showPage = async (req, res) => {
  const { id } = req.params;
  const articles = await ArticleModel.findById(id);
  res.render("admin/articles/showPage", { articles });
};

module.exports.edit = async (req, res) => {
  const { id } = req.params;
  const articles = await ArticleModel.findById(id);
  res.render("admin/articles/edit", { articles });
};

module.exports.update = async (req, res) => {
  const { id } = req.params;
  const { Article } = req.body;
  const updated_articles = await ArticleModel.findByIdAndUpdate(id, Article, {
    new: true,
  });
  await updated_articles.save();
  res.redirect("/admin/articles");
};

module.exports.delete = async (req, res) => {
  const { id } = req.params;
  await ArticleModel.findByIdAndDelete(id);
  res.redirect("/admin/articles");
};
