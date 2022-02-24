const express = require("express");
const router = express.Router();

const AdminArticles = require("../../controllers/admin/featured");

router.get("/", AdminArticles.index);
router.get("/new", AdminArticles.create);
router.post("/", AdminArticles.post);
router.get("/:id", AdminArticles.showPage);
router.get("/:id/edit", AdminArticles.edit);
router.put("/:id", AdminArticles.update);
router.delete("/:id", AdminArticles.delete);

module.exports = router;
