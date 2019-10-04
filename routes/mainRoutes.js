const express = require('express');
const indexRouter = express.Router();

const indexRoutes = require('./indexRoute');
const indexRoute = new indexRoutes();

indexRouter.get("/", indexRoute.mainIndexRoute);

module.exports = indexRouter;