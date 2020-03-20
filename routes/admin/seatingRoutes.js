const express = require("express");
const router = express.Router();

const Seating = require("../../controllers/adminSeatingController");

router.get("/products/seating", Seating.index);
router.get("/products/seating/new", Seating.create);
router.post("/products/seating", Seating.post);
router.get("/products/seating/:id", Seating.showPage);
router.get("/products/seating/:id/edit", Seating.edit);
router.put("/products/seating/:id", Seating.update);
router.delete("/products/seating/:id", Seating.delete);

module.exports = router;
