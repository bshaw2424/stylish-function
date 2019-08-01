const express = require('express');
const router = express.Router({
  mergeParams: true
});
const mongoose = require('mongoose');
// const productList = require('../models/productModel');

router.get("/", (req, res) => {
  res.render("pages/index")
});


module.exports = router;