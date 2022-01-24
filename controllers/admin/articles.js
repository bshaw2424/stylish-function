const ArticleModel = require("../../models/Article");
const { AsyncError } = require("../../utility/error");

module.exports.index = async (req, res, next) => {
  const articles = await ArticleModel.find();
  if (!articles) {
    throw new AsyncError("Article Not Found", 404);
  }
  res.render("admin/articles/index", { articles });
};

module.exports.create = (req, res) => {
  res.render("admin/articles/create");
};

module.exports.post = async (req, res, next) => {
  let { Article } = req.body;
  const article = new ArticleModel(Article);

  article.image.url = req.file.path;
  article.image.filename = req.file.filename;
  if (!article) {
    throw new AsyncError("Something Went Wrong Creating Article", 404);
  }
  await article.save();
  res.redirect("/admin/articles");
};

module.exports.showPage = async (req, res, next) => {
  const { slug } = req.params;
  const articles = await ArticleModel.findOne({ slug }).populate("products");
  if (!articles) {
    throw new AsyncError("Can Not Find Article", 404);
  }
  res.render("admin/articles/showPage", { articles });
};

module.exports.edit = async (req, res, next) => {
  const { slug } = req.params;
  const articles = await ArticleModel.findOne({ slug: slug });
  if (!articles) {
    throw new AsyncError("Can Not Find Article", 404);
  }
  res.render("admin/articles/edit", { articles });
};

module.exports.update = async (req, res) => {
  const { slug } = req.params;
  const { Article } = req.body;

  const article = await ArticleModel.findOneAndUpdate(
    { slug: slug },
    {
      ...Article,
    },
    { new: true },
  );
  // article.image.url = req.file.path;
  // article.image.filename = req.file.filename;

  await article.save();
  res.redirect("/admin/articles");
};

module.exports.delete = async (req, res, next) => {
  const { slug } = req.params;
  const deleteArticle = await ArticleModel.findOneAndDelete({ slug: slug });
  if (!deleteArticle) {
    throw new AsyncError("Can Not Find Article To Delete", 404);
  }
  res.redirect("/admin/articles");
};
