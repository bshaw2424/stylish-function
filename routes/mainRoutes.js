const express = require('express');

// express router setup for different routes
const seatRouter = express.Router();
const storageRouter = express.Router();
const tableRouter = express.Router();
const indexRouter = express.Router();
const featuredRouter = express.Router();

// imported class routes
const seatingRoutes = require('../controllers/seatingController');
const storageRoutes = require('../controllers/storageController');
const tableRoutes = require('../controllers/tableController');
const seatingFilterRoutes = require('../controllers/seatingFilterController');
const storageFilterRoutes = require('../controllers/storageFilterController');
const tableFilterRoutes = require('../controllers/tableFilterController');
const indexRoutes = require('./indexRoute');

// instaniate class routes

const indexRoute = new indexRoutes();
const seatingRoute = new seatingRoutes();
const storageRoute = new storageRoutes();
const tableRoute = new tableRoutes();
const seatingFilterRoute = new seatingFilterRoutes();
const storageFilterRoute = new storageFilterRoutes();
const tableFilterRoute = new tableFilterRoutes();

// mian index route for site
indexRouter.get("/", indexRoute.mainIndexRoute);

// featured route
featuredRouter.get("/", indexRoute.featuredRoute);

// seating routes
seatRouter.get("/", seatingRoute.seatingProductIndexRoute);
seatRouter.get("/alternative-seating", seatingRoute.seatingAlternativeSubRoute);
seatRouter.get("/lounge-seating", seatingRoute.seatingLoungeSubRoute);
seatRouter.get("/modular-sectional", seatingRoute.seatingModularSubRoute);
seatRouter.get("/newest", seatingFilterRoute.seatingNewProductsRoute);
seatRouter.get("/low-price", seatingFilterRoute.seatingLowPriceProductsRoute);
seatRouter.get("/high-price", seatingFilterRoute.seatingHighPriceProductsRoute);
seatRouter.get("/:id", seatingRoute.seatingShowPageRoute);

// storage routes
storageRouter.get("/", storageRoute.storageIndexProductRoute);
storageRouter.get("/modular-storage", storageRoute.storageModularProductRoute);
storageRouter.get("/ottoman-storage", storageRoute.storageOttomanProductRoute);
storageRouter.get("/newest", storageFilterRoute.storageNewestProductRoute);
storageRouter.get("/low-price", storageFilterRoute.storageLowPriceProductsRoute);
storageRouter.get("/high-price", storageFilterRoute.storageHighPriceProductsRoute);
storageRouter.get("/:id", storageRoute.storageShowPageRoute);

// table routes
tableRouter.get("/", tableRoute.tableIndexProductRoute);
tableRouter.get("/coffee-table-combo", tableRoute.coffeeTableComboProductRoute);
tableRouter.get("/stylish-tables", tableRoute.stylishTableProductRoute);
tableRouter.get("/extendable-dining-tables", tableRoute.extendableDiningTableProductRoute);
tableRouter.get("/newest", tableFilterRoute.tableNewestProductsRoute);
tableRouter.get("/low-price", tableFilterRoute.tableLowPriceProductsRoute);
tableRouter.get("/high-price", tableFilterRoute.tableHighPriceProductsRoute);
tableRouter.get("/:id", tableRoute.tableShowPageRoute);

module.exports = {
    indexRouter,
    seatRouter,
    storageRouter,
    tableRouter,
    featuredRouter
};