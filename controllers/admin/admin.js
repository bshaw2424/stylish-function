const ArticleModel = require("../../models/Article");

module.exports.index = async (req, res, next) => {
  const articles = await ArticleModel.find();
  res.render("admin/adminIndex", { articles });
};

module.exports.logIn = (req, res) => {
  res.render("admin/login");
};

module.exports.logOut = (req, res) => {
  res.render("admin/logout");
};
