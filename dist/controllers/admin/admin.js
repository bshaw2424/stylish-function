"use strict";

const ENV = require("dotenv").config();

const ArticleModel = require("../../models/Article");

const {
  AsyncError
} = require("../../utility/error");

module.exports.index = async (req, res) => {
  const articles = await ArticleModel.find();

  if (!articles) {
    throw new AsyncError("Articles Not Found", 404);
  }

  res.render("admin/adminIndex", {
    articles
  });
};

module.exports.login = (req, res) => {
  res.render("admin/login");
};

module.exports.post = (req, res, next) => {
  // return to current spot when logged back in
  const redirectUrl = req.session.returnTo || "/admin/dashboard";

  if (!redirectUrl) {
    throw new AsyncError("Login Failed", 404);
  }

  delete req.session.returnTo;
  res.redirect(redirectUrl);
};

module.exports.logout = (req, res) => {
  req.logout();
  res.redirect("/admin/login");
};