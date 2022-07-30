"use strict";

const ArticleModel = require("../models/Article");

module.exports.index = async (req, res) => {
  const articles = await ArticleModel.find().sort({ created_on: "Desc" });
  res.render("articles/index", { articles });
};

module.exports.showPage = async (req, res, next) => {
  const { slug } = req.params;
  const articles = await ArticleModel.findOne({ slug }).populate("products");
  res.render("articles/showPage", { articles });
};
