"use strict";

var express = require('express');

var router = express.Router({
  mergeParams: true
}); // imported routes

var seatRoutes = require('./seating');

var seatingRoutes = require('../controllers/seatingController');

var storageRoutes = require('../controllers/storageController');

var tableRoutes = require('../controllers/tableController');

var seatingRoute = new seatingRoutes();
var storageRoute = new storageRoutes();
var tableRoute = new tableRoutes(); // seating routes

router.get("/seating", seatingRoute);
router.get("/seating/newest", seatingRoute);
router.get("/seating/low-price", seatingRoute);
router.get("/seating/high-price", seatingRoute);
router.get("/seating/:id", seatingRoute); // storage routes

router.get("/storage", storageRoute);
router.get("/storage/newest", storageRoute);
router.get("/storage/low-price", storageRoute);
router.get("/storage/high-price", storageRoute);
router.get("/storage/:id", storageRoute); // table routes

router.get("/tables", tableRoute);
router.get("/tables/newest", tableRoute);
router.get("/tables/tables/low-price", tableRoute);
router.get("/tables/high-price", tableRoute);
router.get("/tables/:id", tableRoute);

module.exports = router;