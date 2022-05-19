"use strict";

const subdomain = require("express-subdomain");
const express = require("express");
const app = express();

const adminRouter = express.Router({ mergeParams: true });
const { AsyncError } = require("../../utility/error");
const multer = require("multer");
const { storage } = require("../../cloudinary");
const upload = multer({ storage });

const product = require("../../controllers/admin/products");

adminRouter
  .route("/")
  .get(AsyncError(product.index))
  .post(upload.single("Product[image]"), AsyncError(product.create));
adminRouter.get("/new", AsyncError(product.new));
adminRouter
  .route("/:product_slug")
  .get(AsyncError(product.showPage))
  .patch(upload.single("Product[image]"), AsyncError(product.update))
  .delete(AsyncError(product.delete)); //product update routes
adminRouter.get("/:product_slug/edit", AsyncError(product.edit));
adminRouter.get("/:product_slug/photo-edit", AsyncError(product.photoEdit)); //product photo update
adminRouter.patch(
  "/:product_slug/product-photo",
  upload.single("Product[image]"),
  AsyncError(product.productPhotoUpdate),
);

app.use(subdomain("admin", adminRouter));
module.exports = adminRouter;
