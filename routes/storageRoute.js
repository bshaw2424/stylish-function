const express = require('express');
const router = express.Router({
    mergeParams: true
});
const mongoose = require('mongoose');
const storageList = require('../models/storageModel');


router.get("/", (req, res) => {
    storageList.find({}, (err, storage) => {
        if (err) {
            console.log(`Error: ${err}`)
        } else {
            res.render("pages/storage", {
                storage
            });
        }
    });
});

// newer filter route
router.get("/newest", (req, res) => {
    storageList
        .find()
        .sort({
            created_on: -1
        })
        .exec((err, newestProducts) => {
            if (err) {
                console.log(err)
            } else {
                res.render("pages/storageNewest", {
                    storage_newest: newestProducts
                });
            }
        });
});

// low price filter route
router.get("/low-price", (req, res) => {
    storageList
        .find()
        .sort({
            price: 1
        })
        .exec((err, low_price) => {
            if (err) {
                console.log(err)
            } else {
                res.render("pages/storageLowPrice", {
                    storage_LowPrice: low_price,
                })
            }
        });
});

// high price filter route
router.get("/high-price", (req, res) => {
    storageList
        .find()
        .sort({
            price: -1
        })
        .exec((err, high_price) => {
            if (err) {
                console.log(err)
            } else {
                res.render("pages/storageHighPrice", {
                    storage_highPrice: high_price
                })
            }
        });
});

router.get("/:id", (req, res) => {
    storageList.findById(req.params.id, (err, showing) => {
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