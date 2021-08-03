const express = require("express");
const router = express.Router({ mergeParams: true });
const { asyncError } = require("../../utility/error");

const product = require("../../controllers/admin/products");

// router.get("/", product.index);
router.get("/new", product.create);
router.post("/", asyncError(product.post));
router.get("/:product", asyncError(product.showPage));
router.get("/:product/edit", asyncError(product.edit));
router.put("/:product", asyncError(product.update));
router.delete("/:product", asyncError(product.delete));

module.exports = router;
