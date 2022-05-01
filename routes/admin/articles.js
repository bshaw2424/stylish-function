"use strict";

const express = require("express");

const router = express.Router({
  mergeParams: true,
});

const { AsyncError } = require("../../utility/error");

const session = require("express-session");

const { checkAuthentication } = require("../../middleware");

const multer = require("multer");

const { storage } = require("../../cloudinary");

const upload = multer({
  storage,
});

const Article = require("../../controllers/admin/articles");

router.route("/").get(AsyncError(Article.index)).post(
  upload.single("Article[image]"),

  AsyncError(Article.post),
);
router.get("/new", checkAuthentication, Article.create);
router
  .route("/:slug")
  .get(AsyncError(Article.showPage))
  .patch(checkAuthentication, AsyncError(Article.update))
  .delete(checkAuthentication, AsyncError(Article.delete)); //edit routes

router.get("/:slug/edit", checkAuthentication, AsyncError(Article.edit));
router.get(
  "/:slug/photo-edit",
  checkAuthentication,
  AsyncError(Article.photoEdit),
); //photo update

router.patch(
  "/:slug/photo",
  upload.single("Article[image]"),
  checkAuthentication,
  AsyncError(Article.photoUpdate),
);
module.exports = router;
