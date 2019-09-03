const express = require('express');
const router = express.Router({
    mergeParams: true
});

// imported routes
const mainIndexPageRoute = require('./indexRoute');
const catchAllRoute = require('./errorRoute');
const seatingRoutes = require('../controllers/seatingController');
const storageRoutes = require('../controllers/storageController');
const tableRoutes = require('../controllers/tableController');

// // home page
// router.get("/", indexPage.homeIndexRoute);

// seating routes
router.get("/", seatingRoutes.seatingIndexProductRoute);
router.get("/newest", seatingRoutes.seatingNewestProductsRoute);
router.get("/low-price", seatingRoutes.seatingLowPriceProductsRoute);
router.get("/high-price", seatingRoutes.seatingHighPriceProductsRoute);
router.get("/:id", seatingRoutes.seatingShowPageRoute);

// storage routes
router.get("/", storageRoutes.storageIndexProductRoute);
router.get("/newest", storageRoutes.storageNewestProductsRoute);
router.get("/low-price", storageRoutes.storageLowPriceProductsRoute);
router.get("/high-price", storageRoutes.storageHighPriceProductsRoute);
router.get("/:id", storageRoutes.storageShowPageRoute);

// table routes
router.get("/", tableRoutes.tableIndexProductRoute);
router.get("/newest", tableRoutes.tableNewestProductsRoute);
router.get("/low-price", tableRoutes.tableLowPriceProductsRoute);
router.get("/high-price", tableRoutes.tableHighPriceProductsRoute);
router.get("/:id", tableRoutes.tableShowPageRoute);

module.exports = router;