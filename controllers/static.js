"use strict";

const ArticleModel = require("../models/Article");

module.exports.index = async (req, res) => {
  const articles = await ArticleModel.find()
    .sort({
      created_on: "DESC",
    })
    .limit(4);

  res.render("pages/index", {
    articles,
  });
};

module.exports.aboutUs = (req, res) => res.render("static/aboutUs");

module.exports.affiliateDisclaimer = (req, res) =>
  res.render("static/about-us");

module.exports.affiliateDisclaimer = (req, res) =>
  res.render("static/affiliateDisclaimer");

module.exports.contactUs = (req, res) => res.render("static/contactUs");

module.exports.contactUsSuccess = (req, res) => res.render("static/success");

module.exports.privacyDisclosure = (req, res) =>
  res.render("static/privacy-disclosure");

module.exports.termsOfService = (req, res) => res.render("static/TOS");
