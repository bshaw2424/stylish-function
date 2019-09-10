const express = require('express');
const router = express.Router({
    mergeParams: true
});

// imported routes
const seatRoutes = require('./seating');
const seatingRoutes = require('../controllers/seatingController');
const storageRoutes = require('../controllers/storageController');
const tableRoutes = require('../controllers/tableController');

const seatingRoute = new seatingRoutes();
const storageRoute = new storageRoutes();
const tableRoute = new tableRoutes();

// seating routes
router.get("/seating", seatingRoute)
router.get("/seating/newest", seatingRoute);
router.get("/seating/low-price", seatingRoute);
router.get("/seating/high-price", seatingRoute);
router.get("/seating/:id", seatingRoute);

// storage routes
router.get("/storage", storageRoute);
router.get("/storage/newest", storageRoute);
router.get("/storage/low-price", storageRoute);
router.get("/storage/high-price", storageRoute);
router.get("/storage/:id", storageRoute);

// table routes
router.get("/tables", tableRoute);
router.get("/tables/newest", tableRoute);
router.get("/tables/tables/low-price", tableRoute);
router.get("/tables/high-price", tableRoute);
router.get("/tables/:id", tableRoute);


module.exports = router;