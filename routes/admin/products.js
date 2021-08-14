const express = require("express");
const router = express.Router({ mergeParams: true });
const { asyncError } = require("../../utility/error");

const product = require("../../controllers/admin/products");

// router.get("/new", product.create);

// router.get("/new", asyncError(product.new));
// router.post("/", asyncError(product.post));

router.get("/new", asyncError(product.new));
router.get("/:product", asyncError(product.showPage));
router.get("/:product/edit", asyncError(product.edit));
router.put("/add", asyncError(product.update));
router.put("/:product", asyncError(product.product_update));
router.delete("/:product", asyncError(product.delete_product));

module.exports = router;
