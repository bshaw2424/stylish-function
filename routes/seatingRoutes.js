const express = require('express');
const seatRouter = express.Router();

const seatingRoutes = require('../controllers/seatingController');
const seatingFilterRoutes = require('../controllers/seatingFilterController');

const seatingRoute = new seatingRoutes();
const seatingFilterRoute = new seatingFilterRoutes();

seatRouter.get("/", seatingRoute.seatingProductIndexRoute);
seatRouter.get("/alternative-seating", seatingRoute.seatingAlternativeSubRoute);
seatRouter.get("/lounge-seating", seatingRoute.seatingLoungeSubRoute);
seatRouter.get("/modular-sectional", seatingRoute.seatingModularSubRoute);
seatRouter.get("/newest", seatingFilterRoute.seatingNewProductsRoute);
seatRouter.get("/low-price", seatingFilterRoute.seatingLowPriceProductsRoute);
seatRouter.get("/high-price", seatingFilterRoute.seatingHighPriceProductsRoute);
seatRouter.get("/:id", seatingRoute.seatingShowPageRoute);

module.exports = seatRouter;