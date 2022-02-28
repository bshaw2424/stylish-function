const express = require("express");
const router = express.Router();

const mainPageArticles = require("../../controllers/articles");

router.get("/", mainPageArticles.index);
router.get("/:slug", mainPageArticles.showPage);

module.exports = router;
