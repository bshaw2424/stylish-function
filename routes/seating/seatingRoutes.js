const express = require("express");
const router = express.Router();

const Seating = require("../../controllers/seatingController");

router.get("/seating", Seating.index);
router.get("/seating/sortBy/desc", Seating.descending);
router.get("/seating/sortBy/asc", Seating.ascending);
router.get("/seating/:id", Seating.showPage);

module.exports = router;
