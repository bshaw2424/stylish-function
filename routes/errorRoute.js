const express = require('express');
const router = express.Router({
    mergeParams: true
});
const mongoose = require('mongoose');
// const productList = require('../models/productModel');

module.exports = (req, res) => {
    res.render("pages/error")
};