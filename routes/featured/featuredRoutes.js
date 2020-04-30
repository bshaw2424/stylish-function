const express = require("express");
const router = express.Router();

const Featured = require("../../controllers/featuredController");

router.get("/featured-article", Featured.index);
router.get("/featured-article/new", Featured.create);
router.post("/featured-article", Featured.post);
router.get("/featured-article/:id", Featured.showPage);
router.get("/featured-article/:id/edit", Featured.edit);
router.put("/featured-article/:id", Featured.update);
router.delete("/featured-article/:id", Featured.delete);

module.exports = router;
