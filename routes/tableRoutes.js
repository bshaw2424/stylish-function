const express = require('express');
const tableRouter = express.Router();

const tableRoutes = require('../controllers/tableController');
const tableFilterRoutes = require('../controllers/tableFilterController');

const tableRoute = new tableRoutes();
const tableFilterRoute = new tableFilterRoutes();

tableRouter.get("/", tableRoute.tableIndexProductRoute);
tableRouter.get("/coffee-table-combo", tableRoute.coffeeTableComboProductRoute);
tableRouter.get("/stylish-tables", tableRoute.stylishTableProductRoute);
tableRouter.get("/extendable-dining-tables", tableRoute.extendableDiningTableProductRoute);
tableRouter.get("/newest", tableFilterRoute.tableNewestProductsRoute);
tableRouter.get("/low-price", tableFilterRoute.tableLowPriceProductsRoute);
tableRouter.get("/high-price", tableFilterRoute.tableHighPriceProductsRoute);
tableRouter.get("/:id", tableRoute.tableShowPageRoute);

module.exports = tableRouter;