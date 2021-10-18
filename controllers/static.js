const ArticleModel = require("../models/Article");

module.exports.index = async (req, res) => {
  const articles = await ArticleModel.find({});
  res.render("pages/index", { articles });
};

exports.aboutUs = (req, res) => res.render("static/aboutUs");

exports.affiliateDisclaimer = (req, res) => res.render("static/about-us");

exports.affiliateDisclaimer = (req, res) =>
  res.render("static/affiliateDisclaimer");

exports.contactUs = (req, res) => res.render("static/contactUs");

exports.privacyDisclosure = (req, res) =>
  res.render("static/privacy-disclosure");

exports.termsOfService = (req, res) => res.render("static/TOS");
