const express = require('express');
const router = express.Router();


router.get("/about-us", (req, res) => res.render("pages/about-us"));

router.get("/affiliate-disclaimer", (req, res) => res.render("pages/affiliate-disclaimer"));

router.get("/contact-us", (req, res) => res.render("pages/contact-us"));

router.get("/privacy", (req, res) => res.render("pages/privacy"));

router.get("/TOS", (req, res) => res.render("pages/TOS"));

module.exports = router;