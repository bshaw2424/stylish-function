const express = require("express");
const router = express.Router();
const { asyncError } = require("../../utility/error");

const Products = require("../../controllers/adminControllers/productsController");

router.get("/", asyncError(Products.index));
router.get("/new", Products.create);
router.post("/", asyncError(Products.post));
router.get("/:id", asyncError(Products.showPage));
router.get("/:id/edit", asyncError(Products.edit));
router.put("/:id", asyncError(Products.update));
router.delete("/:id", asyncError(Products.delete));

module.exports = router;
