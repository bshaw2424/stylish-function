const express = require("express");
const router = express.Router({ mergeParams: true });
const { AsyncError } = require("../../utility/error");
const multer = require("multer");
const { storage } = require("../../cloudinary");
const upload = multer({ storage });

const product = require("../../controllers/admin/products");

router
  .route("/")
  .get(AsyncError(product.index))
  .post(upload.single("Product[image]"), AsyncError(product.create));
router.get("/new", AsyncError(product.new));

router
  .route("/:product_slug")
  .get(AsyncError(product.showPage))
  .patch(upload.single("Product[image]"), AsyncError(product.update))
  .delete(AsyncError(product.delete));

//product update routes
router.get("/:product_slug/edit", AsyncError(product.edit));
router.get("/:product_slug/photo-edit", AsyncError(product.photoEdit)); //product photo update

router.patch(
  "/:product_slug/product-photo",
  upload.single("Product[image]"),
  AsyncError(product.productPhotoUpdate),
);

module.exports = router;
