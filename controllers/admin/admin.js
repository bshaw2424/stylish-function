const ENV = require("dotenv").config();
const { ArticleModel } = require("../../models/Article");

module.exports.index = async (req, res) => {
  const articles = await ArticleModel.find();
  res.render("admin/adminIndex", { articles });
};

module.exports.login = (req, res) => {
  res.render("admin/login");
};

module.exports.post = (req, res) => {
  const redirectUrl = req.session.returnTo || "/admin/dashboard";
  delete req.session.returnTo;
  res.redirect(redirectUrl);
};

module.exports.logout = (req, res) => {
  req.logout();
  res.redirect("/admin/login");
};
