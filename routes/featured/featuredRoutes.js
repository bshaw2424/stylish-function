const express = require("express");
const router = express.Router();

const Featured = require("../../controllers/featuredController");

router.get("/featured-article/new", Featured.create);
router.post("/featured-article", Featured.post);

module.exports = router;
