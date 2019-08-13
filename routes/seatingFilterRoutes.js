const express = require("express");
const router = express.Router({
    mergeParams: true
});
const seatingList = require("../models/seatingModel");

module.exports = seating_index_route = async (req, res) => {
    const seating = await seatingList
        .find()
        .exec()
    try {
        res.render("pages/seating", {
            seating
        });
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

module.exports = seating_newest_seating_filter = async (req, res) => {
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
            seating: low_price
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = seating_high_price_filter = async (req, res) => {
    const high_price = await seatingList
        .find()
        .sort({
            price: -1
        })
        .exec()
    try {
        res.render("pages/seatingHighPrice", {
            highPricing: high_price
        });
    } catch (error) {
        console.log(error)
    }

}

module.exports = seating_find_by_id_route = async (req, res) => {
    const seatingShowPage = await seatingList.findById(req.params.id)
    try {
        res.render("pages/productShowPage", {
            show: seatingShowPage
        });
    } catch (error) {
        console.log(error)
    }

}