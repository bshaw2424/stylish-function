const express = require("express");
const router = express.Router({ mergeParams: true });
const { asyncError } = require("../../utility/error");

const Articles = require("../../controllers/admin/articles");

router.get("/", asyncError(Articles.index));
router.get("/new", Articles.create);
router.post("/", asyncError(Articles.post));
router.get("/:id", asyncError(Articles.showPage));
router.get("/:id/edit", asyncError(Articles.edit));
router.put("/:id", asyncError(Articles.update));
router.delete("/:id", asyncError(Articles.delete));

module.exports = router;
