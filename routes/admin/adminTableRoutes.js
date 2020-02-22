const express = require("express");
const router = express.Router();

const adminTableRoutes = require("../../controllers/adminTableController");
const table = new adminTableRoutes();

router.get("/products/table", table.index);
router.get("/products/table/new", table.newTableProduct);
router.post("/products/table", table.postTableProduct);
router.get("/products/table/:id", table.showPage);
router.get("/products/table/:id/edit", table.edit);
router.put("/products/table/:id", table.update);
router.delete("/products/table/:id", table.delete);

module.exports = router;