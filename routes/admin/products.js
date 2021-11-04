const express = require("express");
const router = express.Router({ mergeParams: true });
const { asyncError } = require("../../utility/error");
const multer = require("multer");
const { storage } = require("../../cloudinary");
const upload = multer({ storage });

const product = require("../../controllers/admin/products");

router
  .route("/")
  .get(asyncError(product.index))
  .post(upload.single("Product[image]"), asyncError(product.create));
router.get("/new", asyncError(product.new));
router
  .route("/:product_slug")
  .get(asyncError(product.showPage))
  .put(upload.single("Product[image]"), asyncError(product.update))
  .delete(asyncError(product.delete));
router.get("/:product_slug/edit", asyncError(product.edit));

module.exports = router;
