const express = require('express');
const router = express.Router({
    mergeParams: true
});
const mongoose = require('mongoose');
const tableList = require('../models/tableModel');


router.get("/", (req, res) => {
    tableList.find({}, (err, table) => {
        if (err) {
            console.log(`Error: ${err}`)
        } else {
            res.render("pages/table", {
                table
            });
        }
    });
});

router.get("/:id", (req, res) => {
    tableList.findById(req.params.id, (err, showing) => {
        if (err) {
            console.log(`Error: ${err}`)
        } else {
            res.render("pages/productShowPage", {
                show: showing
            });
        }
    })
});

// newer filter route
router.get("/newest", (req, res) => {
    tableList
        .find()
        .sort({
            created_on: -1
        })
        .exec((err, newestProducts) => {
            if (err) {
                console.log(err)
            } else {
                res.render("pages/tableNewest", {
                    newest_seats: newestProducts
                });
            }
        });
});

// low price filter route
router.get("/low-price", (req, res) => {
    tableList
        .find()
        .sort({
            price: 1
        })
        .exec((err, low_price) => {
            if (err) {
                console.log(err)
            } else {
                res.render("pages/tableLowPrice", {
                    lowPricing: low_price,
                    sortBy: req.query.lowPrice
                })
            }
        });
});

// high price filter route
router.get("/high-price", (req, res) => {
    tableList
        .find()
        .sort({
            price: -1
        })
        .exec((err, high_price) => {
            if (err) {
                console.log(err)
            } else {
                res.render("pages/tableHighPrice", {
                    highPricing: high_price
                })
            }
        });
});

module.exports = router;