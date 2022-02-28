const express = require("express");
const router = express.Router();

const indexProductPage = require("../../controllers/products");

router.get("/:product_slug", indexProductPage.product_showPage);

module.exports = router;
