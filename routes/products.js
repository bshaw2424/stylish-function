const express = require("express");
const router = express.Router();

const Products = require("../controllers/mainControllers/ProductsController");

router.get("/", Products.index);
router.get("/:id", Products.showPage);

module.exports = router;
