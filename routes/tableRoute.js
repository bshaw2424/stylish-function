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
                    newest_Table: newestProducts
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
                    table_LowPrice: low_price
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
                    table_HighPrice: high_price
                })
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

module.exports = router;