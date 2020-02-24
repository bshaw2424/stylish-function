const express = require("express");
const router = express.Router();

const adminTableRoutes = require("../../controllers/adminTableController");
const table = new adminTableRoutes();

router.get("/products/tables", table.index);
router.get("/products/tables/new", table.create);
router.post("/products/tables", table.post);
router.get("/products/tables/:id", table.showPage);
router.get("/products/tables/:id/edit", table.edit);
router.put("/products/tables/:id", table.update);
router.delete("/products/tables/:id", table.delete);

module.exports = router;
