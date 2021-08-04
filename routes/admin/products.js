const express = require("express");
const router = express.Router({ mergeParams: true });
const { asyncError } = require("../../utility/error");

const product = require("../../controllers/admin/products");

// router.get("/", product.index);
// router.get("/new", product.create);
// router.post("/", asyncError(product.post));
// router.get("/products/:product", asyncError(product.showPage));
router.get("/edit", asyncError(product.edit));
router.put("/", asyncError(product.update));
router.get("/:product/edit", asyncError(product.edit_product));
router.delete("/:product", asyncError(product.delete_product));

module.exports = router;
