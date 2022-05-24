"use strict";

const ENV = require("dotenv").config();
const ArticleModel = require("../../models/Article");
const { AsyncError } = require("../../utility/error");

module.exports.index = async (req, res) => {
  const articles = await ArticleModel.find();

  res.render("admin/adminIndex", { articles });
};

// login in route

module.exports.login = (req, res) => {
  res.render("admin/login");
};

module.exports.post = (req, res, next) => {
  const redirectUrl = req.session.returnTo || "/dashboard";

  delete req.session.returnTo;
  res.redirect(redirectUrl);
};

module.exports.logout = (req, res) => {
  req.logout();
  res.redirect("/login");
};
