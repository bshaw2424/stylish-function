const express = require("express");
const router = express.Router();

const seatingController = require("../../controllers/seatingController");

const seating = new seatingController();

router.get("/seating", seating.index);
router.get("/seating/sortBy/desc", seating.descending);
router.get("/seating/sortBy/asc", seating.ascending);
router.get("/seating/:id", seating.showPage);

module.exports = router;
