const express = require("express");
const router = express.Router();

const Tables = require("../../controllers/tableController");

router.get("/tables", Tables.index);
router.get("/tables/sortBy/desc", Tables.descending);
router.get("/tables/sortBy/asc", Tables.ascending);
router.get("/tables/:id", Tables.showPage);

module.exports = router;
