const express = require("express");
const router = express.Router();

const tableController = require("../../controllers/tableController");
const tableProduct = new tableController();

router.get("/tables", tableProduct.index);
router.get("/tables/sortBy/desc", tableProduct.descending);
router.get("/tables/sortBy/asc", tableProduct.ascending);
router.get("/tables/:id", tableProduct.showPage);

module.exports = router;
