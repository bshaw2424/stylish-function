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
router.get("/seating", seatingRoute.seatingProductIndexRoute)
router.get("/seating/newest", seatingRoute.seatingNewProductsRoute);
router.get("/seating/low-price", seatingRoute.seatingLowPriceProductsRoute);
router.get("/seating/high-price", seatingRoute.seatingHighPriceProductsRoute);
router.get("/seating/:id", seatingRoute.seatingShowPageRoute);

// storage routes
router.get("/storage", storageRoute.storageIndexProductRoute);
router.get("/storage/newest", storageRoute.storageNewestProductRoute);
router.get("/storage/low-price", storageRoute.storageLowPriceProductsRoute);
router.get("/storage/high-price", storageRoute.storageHighPriceProductsRoute);
router.get("/storage/:id", storageRoute.storageShowPageRoute);

// table routes
router.get("/tables", tableRoute.tableIndexProductRoute);
router.get("/tables/newest", tableRoute.tableNewestProductsRoute);
router.get("/tables/low-price", tableRoute.tableLowPriceProductsRoute);
router.get("/tables/high-price", tableRoute.tableHighPriceProductsRoute);
router.get("/tables/:id", tableRoute.tableShowPageRoute);


module.exports = router;