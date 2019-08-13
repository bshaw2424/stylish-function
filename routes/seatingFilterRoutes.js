const express = require("express");
const router = express.Router({
    mergeParams: true
});
const seatingList = require("../models/seatingModel");

module.exports = newest_seating_filter = async (req, res) => {
    const newestProducts = await seatingList
        .find({})
        .sort({
            created_on: -1
        })
        .exec()
    try {
        res.render("pages/seating", {
            seating: newestProducts
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = low_price_seating_filter = async (req, res) => {
    const low_price = await seatingList
        .find()
        .sort({
            price: 1
        })
        .exec()
    try {
        res.render("pages/seating", {
            seating: low_price,
        });
    } catch (error) {
        console.log(error);
    }
}