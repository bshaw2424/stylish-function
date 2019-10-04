const express = require('express');
const storageRouter = express.Router();

const storageRoutes = require('../controllers/storageController');
const storageFilterRoutes = require('../controllers/storageFilterController');

const storageRoute = new storageRoutes();
const storageFilterRoute = new storageFilterRoutes();

storageRouter.get("/", storageRoute.storageIndexProductRoute);
storageRouter.get("/modular-storage", storageRoute.storageModularProductRoute);
storageRouter.get("/ottoman-storage", storageRoute.storageOttomanProductRoute);
storageRouter.get("/newest", storageFilterRoute.storageNewestProductRoute);
storageRouter.get("/low-price", storageFilterRoute.storageLowPriceProductsRoute);
storageRouter.get("/high-price", storageFilterRoute.storageHighPriceProductsRoute);
storageRouter.get("/:id", storageRoute.storageShowPageRoute);

module.exports = storageRouter;