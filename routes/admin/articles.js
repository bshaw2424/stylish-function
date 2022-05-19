"use strict";

const subdomain = require("express-subdomain");
const express = require("express");
const app = express();

const adminRouter = express.Router({ mergeParams: true });
const { AsyncError } = require("../../utility/error");
const session = require("express-session");
const { checkAuthentication } = require("../../middleware");
const multer = require("multer");
const { storage } = require("../../cloudinary");
const upload = multer({ storage });

const Article = require("../../controllers/admin/articles");

adminRouter
  .route("/")
  .get(AsyncError(Article.index))
  .post(upload.single("Article[image]"), AsyncError(Article.post));
adminRouter.get("/new", checkAuthentication, Article.create);
adminRouter
  .route("/:slug")
  .get(AsyncError(Article.showPage))
  .patch(checkAuthentication, AsyncError(Article.update))
  .delete(checkAuthentication, AsyncError(Article.delete)); //edit routes
adminRouter.get("/:slug/edit", checkAuthentication, AsyncError(Article.edit));
adminRouter.get(
  "/:slug/photo-edit",
  checkAuthentication,
  AsyncError(Article.photoEdit),
);
adminRouter.patch(
  "/:slug/photo",
  upload.single("Article[image]"),
  checkAuthentication,
  AsyncError(Article.photoUpdate),
);

app.use(subdomain("admin", adminRouter));
module.exports = adminRouter;
