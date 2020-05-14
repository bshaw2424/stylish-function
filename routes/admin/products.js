const express = require("express");
const router = express.Router();

const Products = require("../../controllers/adminControllers/productsController");

router.get("/", Products.index);
router.get("/new", Products.create);
router.get("/", Products.post);
router.get("/:id", Products.showPage);
router.get("/:id/edit", Products.edit);
router.put("/:id", Products.update);
router.delete("/:id", Products.delete);

module.exports = router;
