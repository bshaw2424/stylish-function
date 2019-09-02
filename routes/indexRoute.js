const express = require('express');
const app = express();
const router = express.Router({
  mergeParams: true
});
const mongoose = require('mongoose');
const seatingRoutes = require('./seatingController');
// const productList = require('../models/productModel');
app.use('/seating', seatingRoutes);
app.set("view engine", "ejs");

module.exports.homeIndex = (req, res) => {
  res.render("pages/index")
};


module.exports = router;