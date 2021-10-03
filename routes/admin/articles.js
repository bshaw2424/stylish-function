const express = require("express");
const router = express.Router({ mergeParams: true });
const { asyncError } = require("../../utility/error");
const session = require("express-session");
const { checkAuthentication } = require("../../middleware");
const multer = require("multer");
const { storage } = require("../../cloudinary");
const upload = multer({ storage });

const Article = require("../../controllers/admin/articles");

router
  .route("/")
  .get(checkAuthentication, asyncError(Article.index))
  .post(
    upload.single("Article[image]"),
    checkAuthentication,
    asyncError(Article.post),
  );
router.get("/new", checkAuthentication, Article.create);
router
  .route("/:id")
  .get(checkAuthentication, asyncError(Article.showPage))
  .put(checkAuthentication, asyncError(Article.update))
  .delete(checkAuthentication, asyncError(Article.delete));
router.get(
  "/:id/edit",
  upload.single("Article[image]"),
  checkAuthentication,
  asyncError(Article.edit),
);

module.exports = router;
