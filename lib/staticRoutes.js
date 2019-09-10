"use strict";

var express = require('express');

var router = express.Router(); // Static information routes

router.get("/about-us", function (req, res) {
  return res.render("pages/about-us");
});
router.get("/affiliate-disclaimer", function (req, res) {
  return res.render("pages/affiliate-disclaimer");
});
router.get("/contact-us", function (req, res) {
  return res.render("pages/contact-us");
});
router.post("/contact-us", function (req, res) {
  return res.send("your form was posted");
});
router.get("/privacy", function (req, res) {
  return res.render("pages/privacy");
});
router.get("/TOS", function (req, res) {
  return res.render("pages/TOS");
});
module.exports = router;