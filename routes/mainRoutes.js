const express = require('express');
const router = express.Router({
    mergeParams: true
});

// imported routes
const seatRoutes = require('./seating');
const seatingRoutes = require('../controllers/seatingController');
const storageRoutes = require('../controllers/storageController');
const tableRoutes = require('../controllers/tableController');

const seats = new seatRoutes();
// home page
router.get("/seating", seats.seatingIndexProductRoute({}), {});
router.get("/seating/newest", seatingRoutes.seatingNewestProductsRoute);
router.get("/seating/low-price", seatingRoutes.seatingLowPriceProductsRoute);
router.get("/seating/high-price", seatingRoutes.seatingHighPriceProductsRoute);
router.get("/seating/:id", seatingRoutes.seatingShowPageRoute);

// storage routes
// router.get("/storage", storageRoutes.storageIndexProductRoute);
// router.get("/storage/newest", storageRoutes.storageNewestProductsRoute);
// router.get("/storage/low-price", storageRoutes.storageLowPriceProductsRoute);
// router.get("/storage/high-price", storageRoutes.storageHighPriceProductsRoute);
// router.get("/storage/:id", storageRoutes.storageShowPageRoute);

// // table routes
// router.get("/tables", tableRoutes.tableIndexProductRoute);
// router.get("/tables/newest", tableRoutes.tableNewestProductsRoute);
// router.get("/tables/tables/low-price", tableRoutes.tableLowPriceProductsRoute);
// router.get("/tables/high-price", tableRoutes.tableHighPriceProductsRoute);
// router.get("/tables/:id", tableRoutes.tableShowPageRoute);


module.exports = router;