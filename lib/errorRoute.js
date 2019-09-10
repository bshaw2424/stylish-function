"use strict";

var express = require('express');

var router = express.Router({
  mergeParams: true
});

var mongoose = require('mongoose'); // const productList = require('../models/productModel');


module.exports = function (req, res) {
  res.render("pages/error");
};