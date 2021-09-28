const bcrypt = require("bcrypt");
const ENV = require("dotenv").config();
const session = require("express-session");
const ArticleModel = require("../../models/Article");
const UsersModel = require("../../models/AdminUsers");

module.exports.requireLogin = (req, res, next) => {
  if (!req.session.id) {
    return res.redirect("/admin/login");
  }
  next();
};

module.exports.index = async (req, res, next) => {
  const articles = await ArticleModel.find();
  res.render("admin/adminIndex", { articles });
};

module.exports.login = (req, res) => {
  res.render("admin/login");
};

module.exports.post = async (req, res) => {
  const login_user = process.env.LOGIN_USERNAME;
  const login_password = process.env.HASH_PASSWORD;
  const { password, username } = req.body;
  const validUsername = login_user === username;

  // const hash = await bcrypt.hash(user_password, 12);
  const validPassword = await bcrypt.compare(password, login_password);
  console.log((req.session.user_id = username));
  !validPassword || !validUsername
    ? res.redirect("/admin/login")
    : res.redirect("/admin/dashboard");
};

module.exports.logout = (req, res) => {
  req.session.destory();
  res.redirect("/admin/login");
};
