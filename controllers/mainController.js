const express = require('express');
const router = express.Router({
    mergeParams: true
});

// imported routes
const mainIndexPageRoute = require('../routes/indexRoute');
const catchAllRoute = require('../routes/errorRoute');
const seatingRoutes = require('../routes/seatingRoutes');
const storageRoutesRoutes = require('../routes/seatingRoutes');
const tableRoutes = require('../routes/seatingRoutes');

// home page
router.get("/", indexPage.homeIndex);

// seating routes
router.get("/", seatingRoutes.seatingIndexProductRoute);
router.get("/newest", seatingRoutes.seatingNewestProducts);
router.get("/low-price", seatingRoutes.seatingLowPriceProducts);
router.get("/high-price", seatingRoutes.seatingHighPriceProducts);
router.get("/:id", seatingRoutes.seatingShowPage);

// storage routes
router.get("/", seatingRoutes.seatingIndexProductRoute);
router.get("/newest", seatingRoutes.seatingNewestProducts);
router.get("/low-price", seatingRoutes.seatingLowPriceProducts);
router.get("/high-price", seatingRoutes.seatingHighPriceProducts);
router.get("/:id", seatingRoutes.seatingShowPage);

// table routes
router.get("/", seatingRoutes.seatingIndexProductRoute);
router.get("/newest", seatingRoutes.seatingNewestProducts);
router.get("/low-price", seatingRoutes.seatingLowPriceProducts);
router.get("/high-price", seatingRoutes.seatingHighPriceProducts);
router.get("/:id", seatingRoutes.seatingShowPage);