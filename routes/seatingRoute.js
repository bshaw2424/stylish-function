const express = require("express");
const router = express.Router({
    mergeParams: true
});
const newest_filter = require("./seatingFilterRoutes");
const low_price_seating_filter = require("./seatingFilterRoutes");

const seatingList = require("../models/seatingModel");

router.get("/", async (req, res) => {
    const seating = await seatingList.find({}).exec();
    try {
        res.render("pages/seating", {
            seating
        });
    } catch (error) {
        console.log(`Error: ${error}`);
    }
});

// newer filter route
router.get("/newest", newest_filter);

// low price filter route
router.get("/low-price", low_price_seating_filter);

// high price filter route
router.get("/high-price", (req, res) => {
    seatingList
        .find()
        .sort({
            price: -1
        })
        .exec((err, high_price) => {
            if (err) {
                console.log(err);
            } else {
                res.render("pages/seatingHighPrice", {
                    highPricing: high_price
                });
            }
        });
});

router.get("/:id", (req, res) => {
    seatingList.findById(req.params.id, (err, seatingShowPage) => {
        if (err) {
            console.log(`Error: ${err}`);
        } else {
            res.render("pages/productShowPage", {
                show: seatingShowPage
            });
        }
    });
});

module.exports = router;