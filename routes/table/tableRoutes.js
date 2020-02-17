const express = require("express");
const router = express.Router();

const tableProductMethods = require("../../controllers/tableController");
const Table = new tableProductMethods();

router.get("/tables", Table.tableProducts);
router.get("/tables/:id", Table.tableShowPage);

module.exports = router;
