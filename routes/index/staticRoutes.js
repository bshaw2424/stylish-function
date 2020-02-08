const express = require('express');
const router = express.Router();
const featured = require('../../models/featuredModel')

router.get("/", async (req, res) => {
  const feature = await featured.find().exec();
  res.render("pages/index", {feature})
});

router.get("/:id", async (req, res) => {
  const show = await featured.findById(req.params.id).exec()
  res.render("pages/indexShow", {show})
});

router.get("/about-us", (req, res) => res.render("pages/about-us"));

router.get("/affiliate-disclaimer", (req, res) => res.render("pages/affiliate-disclaimer"));

router.get("/contact-us", (req, res) => res.render("pages/contact-us"));

router.get("/privacy", (req, res) => res.render("pages/privacy"));

router.get("/TOS", (req, res) => res.render("pages/TOS"));

module.exports = router;