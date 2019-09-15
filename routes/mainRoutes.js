const express = require('express');
const seatRouter = express.Router();
const storageRouter = express.Router();
const tableRouter = express.Router();

// imported routes
const seatingRoutes = require('../controllers/seatingController');
const storageRoutes = require('../controllers/storageController');
const tableRoutes = require('../controllers/tableController');


const seatingRoute = new seatingRoutes();
const storageRoute = new storageRoutes();
const tableRoute = new tableRoutes();




// seating routes
seatRouter.get("/", seatingRoute.seatingProductIndexRoute)
seatRouter.get("/newest", seatingRoute.seatingNewProductsRoute);
seatRouter.get("/low-price", seatingRoute.seatingLowPriceProductsRoute);
seatRouter.get("/high-price", seatingRoute.seatingHighPriceProductsRoute);
seatRouter.get("/:id", seatingRoute.seatingShowPageRoute);

// storage routes
storageRouter.get("/", storageRoute.storageIndexProductRoute);
storageRouter.get("/newest", storageRoute.storageNewestProductRoute);
storageRouter.get("/low-price", storageRoute.storageLowPriceProductsRoute);
storageRouter.get("/high-price", storageRoute.storageHighPriceProductsRoute);
storageRouter.get("/:id", storageRoute.storageShowPageRoute);

// table routes
tableRouter.get("/", tableRoute.tableIndexProductRoute);
tableRouter.get("/newest", tableRoute.tableNewestProductsRoute);
tableRouter.get("/low-price", tableRoute.tableLowPriceProductsRoute);
tableRouter.get("/high-price", tableRoute.tableHighPriceProductsRoute);
tableRouter.get("/:id", tableRoute.tableShowPageRoute);

module.exports = {
    seatRouter,
    storageRouter,
    tableRouter
};