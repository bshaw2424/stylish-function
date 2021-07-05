const express = require("express");
const router = express.Router();

const mainPageArticles = require("../../controllers/articles");

router.get("/", mainPageArticles.index);
router.get("/:id", mainPageArticles.showPage);

module.exports = router;
