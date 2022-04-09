"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const ArticleModel = require("../../models/Article");

const {
  AsyncError
} = require("../../utility/error"); //show all admin articles


module.exports.index = async (req, res, next) => {
  const articles = await ArticleModel.find();
  res.render("admin/articles/index", {
    articles
  });
}; //new article form


module.exports.create = (req, res) => {
  res.render("admin/articles/create");
}; //make a new article


module.exports.post = async (req, res) => {
  let {
    Article
  } = req.body;
  const article = new ArticleModel(Article);
  article.image.url = req.file.path;
  article.image.filename = req.file.filename;
  await article.save();
  res.redirect("/admin/articles");
}; //article products page related to articles


module.exports.showPage = async (req, res, next) => {
  const {
    slug
  } = req.params;
  const articles = await ArticleModel.findOne({
    slug
  }).populate("products");
  res.render("admin/articles/showPage", {
    articles
  });
}; //article edit page


module.exports.edit = async (req, res) => {
  const {
    slug
  } = req.params;
  const articles = await ArticleModel.findOne({
    slug: slug
  });
  res.render("admin/articles/edit", {
    articles
  });
};

module.exports.update = async (req, res) => {
  const {
    slug
  } = req.params;
  const {
    Article
  } = req.body;
  const article = await ArticleModel.findOneAndUpdate({
    slug: slug
  }, _objectSpread({}, Article), {
    new: true
  });
  await article.save();
  res.redirect("/admin/articles");
};

module.exports.photoEdit = async (req, res) => {
  const {
    slug
  } = req.params;
  const articles = await ArticleModel.findOne({
    slug: slug
  });
  res.render("admin/articles/photoEdit", {
    articles
  });
};

module.exports.photoUpdate = async (req, res) => {
  const {
    slug
  } = req.params;
  const url = req.file.path;
  const path = req.file.filename;
  const article = await ArticleModel.findOneAndUpdate({
    slug
  }, {
    new: true
  });
  article.image.url = url;
  article.image.filename = path;
  await article.save();
  res.redirect("/admin/articles");
}; //delete article by slug name


module.exports.delete = async (req, res, next) => {
  const {
    slug
  } = req.params;
  await ArticleModel.findOneAndDelete({
    slug: slug
  });
  res.redirect("/admin/articles");
};