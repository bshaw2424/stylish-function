const express = require("express");
const router = express.Router();

const adminSeatingRoutes = require("../../controllers/adminSeatingController");
const seating = new adminSeatingRoutes();

router.get("/products/seating", seating.index)
router.get("/products/seating/new", seating.newSeatingProduct);
router.post("/products/seating", seating.postSeatingProduct);
router.get("/products/seating/:id", seating.showPage);
router.get("/products/seating/:id/edit", seating.edit);
router.put("/products/seating/:id", seating.update);
router.delete("/products/seating/:id", seating.delete);

module.exports = router;
