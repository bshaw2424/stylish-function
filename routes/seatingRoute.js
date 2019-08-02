const express = require('express');
const router = express.Router({
    mergeParams: true
});
const mongoose = require('mongoose');
const seatingList = require('../models/seatingModel');


router.get("/", (req, res) => {
    seatingList.find({}, (err, seating) => {
        if (err) {
            console.log(`Error: ${err}`)
        } else {
            res.render("pages/seating", {
                seating
            });
        }
    });
});

// newer filter route
router.get("/newest", (req, res) => {
    seatingList
        .find({})
        .sort({
            created_on: -1
        })
        .exec((err, newestProducts) => {
            if (err) {
                console.log(err)
            } else {
                res.render("pages/seatingNewest", {
                    newest_seats: newestProducts
                });
            }
        });
});

// low price filter route
router.get("/low-price", (req, res) => {
    seatingList
        .find()
        .sort({
            price: 1
        })
        .exec((err, low_price) => {
            if (err) {
                console.log(err)
            } else {
                res.render("pages/seatingLowPrice", {
                    lowPricing: low_price,
                    sortBy: req.query.lowPrice
                })
            }
        });
});

// high price filter route
router.get("/high-price", (req, res) => {
    seating
        .find()
        .sort({
            price: -1
        })
        .exec((err, high_price) => {
            if (err) {
                console.log(err)
            } else {
                res.render("pages/seatingHighPrice", {
                    highPricing: high_price
                })
            }
        });
});

router.get("/:id", (req, res) => {
    seatingList.findById(req.params.id, (err, seatingShowPage) => {
        if (err) {
            console.log(`Error: ${err}`)
        } else {
            res.render("pages/productShowPage", {
                show: seatingShowPage
            });
        }
    })
});


module.exports = router;