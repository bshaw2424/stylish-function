const express = require('express');
const router = express.Router();

// imported routes
const mainIndexPageRoute = require('./indexRoute');
const catchAllRoute = require('./errorRoute');
const seatingRoutes = require('./seatingController');
const storageRoutes = require('./storageController');
const tableRoutes = require('./tableController');

// home page
router.get("/seating", seatingRoutes.seatingIndexProductRoute);
router.get("/seating/newest", seatingRoutes.seatingNewestProductsRoute);
router.get("/seating/low-price", seatingRoutes.seatingLowPriceProductsRoute);
router.get("/seating/high-price", seatingRoutes.seatingHighPriceProductsRoute);
router.get("/seating/:id", seatingRoutes.seatingShowPageRoute);

// storage routes
router.get("/storage", storageRoutes.storageIndexProductRoute);
router.get("/storage/newest", storageRoutes.storageNewestProductsRoute);
router.get("/storage/low-price", storageRoutes.storageLowPriceProductsRoute);
router.get("/storage/high-price", storageRoutes.storageHighPriceProductsRoute);
router.get("/storage/:id", storageRoutes.storageShowPageRoute);

// table routes
router.get("/tables", tableRoutes.tableIndexProductRoute);
router.get("/tables/newest", tableRoutes.tableNewestProductsRoute);
router.get("/tables/tables/low-price", tableRoutes.tableLowPriceProductsRoute);
router.get("/tables/high-price", tableRoutes.tableHighPriceProductsRoute);
router.get("/tables/:id", tableRoutes.tableShowPageRoute);


module.exports = router;