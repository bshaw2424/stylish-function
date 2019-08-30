const express = require("express");
const router = express.Router({
    mergeParams: true
});

const seatingList = require('../models/seatingModel');
const errormessage = require('./errorRoute');

    router.get("/", async (req, res) => {
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
    });

    // newer filter route
    router.get("/newest", async (req, res) => {
        const seatingRecentProducts = await seatingList
            .find()
            .sort({
                created_on: -1
            })
            .exec()
        try {
            res.render("pages/seatingNewest", {
                seatingRecentProducts
            })
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    });

    // low price filter route
    router.get("/low-price", async (req, res) => {
        const seatingLowPriceProducts = await seatingList
            .find()
            .sort({
                price: 1
            })
            .exec()
        try {
            res.render("pages/seatingLowPrice", {
                seatingLowPriceProducts
            })
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    });

    // high price filter route
    router.get("/high-price", async (req, res) => {
        const seatingHighPriceProducts = await seatingList
            .find()
            .sort({
                price: -1
            })
            .exec()
        try {
            res.render("pages/seatingHighPrice", {
                seatingHighPriceProducts
            })
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    });



    // show page
    router.get("/:id", async (req, res) => {
        const show = await seatingList
            .findById(req.params.id)
            .exec()
        try {
            res.render("pages/productShowPage", {
                show
            })
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    });

    router.get("*", (req,res) =>{
        res.send("this is a catach all route")
    });

    module.exports = router;