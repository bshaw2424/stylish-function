"use strict";

const ENV = require("dotenv").config();
const ArticleModel = require("../../models/Article");
const { AsyncError } = require("../../utility/error");

module.exports.index = async (req, res) => {
  const articles = await ArticleModel.find();

  if (!articles) {
    throw new AsyncError("Articles Not Found", 404);
  }
  res.render("admin/adminIndex", { articles });
};

// login in route

module.exports.login = (req, res) => {
  res.render("admin/login");
};

module.exports.post = (req, res, next) => {
  const redirectUrl = req.session.returnTo || "/dashboard";

  delete req.session.returnTo;
  res.redirect("/dashboard");
};

module.exports.logout = (req, res) => {
  req.logout();
  res.redirect("/login");
};
