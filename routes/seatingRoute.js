const express = require("express");
const router = express.Router({
    mergeParams: true
});
// seating routes
const seating_index_route = require("./seatingFilterRoutes");
const seating_newest_filter_route = require("./seatingFilterRoutes");
const seating_high_price_filter_route = require("./seatingFilterRoutes");
const seating_low_price_seating_filter_route = require("./seatingFilterRoutes");
const seating_find_by_id_route = require("./seatingFilterRoutes");

const seatingList = require("../models/seatingModel");

router.get("/", seating_index_route);

// newer filter route
router.get("/newest", seating_newest_filter_route);

// low price filter route
router.get("/low-price", seating_low_price_seating_filter_route);

// high price filter route
router.get("/high-price", seating_high_price_filter_route);

router.get("/:id", seating_find_by_id_route);

module.exports = router;