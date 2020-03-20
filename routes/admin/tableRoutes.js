const express = require("express");
const router = express.Router();

const Tables = require("../../controllers/adminTableController");

router.get("/products/tables", Tables.index);
router.get("/products/tables/new", Tables.create);
router.post("/products/tables", Tables.post);
router.get("/products/tables/:id", Tables.showPage);
router.get("/products/tables/:id/edit", Tables.edit);
router.put("/products/tables/:id", Tables.update);
router.delete("/products/tables/:id", Tables.delete);

module.exports = router;
