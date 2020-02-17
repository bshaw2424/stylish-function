const express = require("express");
const router = express.Router();

const seatingRouteMethods = require("../../controllers/seatingController");
const Seating = new seatingRouteMethods();

router.get("/seating", Seating.seatingProducts);
router.get("/seating/:id", Seating.seatingShowPage);

module.exports = router;
