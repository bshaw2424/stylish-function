const express = require('express');
const router = express.Router({
    mergeParams: true
});

const storageList = require('../models/storageModel');

router.get("/", async (req, res) => {
    const storage = await storageList
        .find();
    try {
        res.render("pages/storage", {
            storage
        });
    } catch (error) {
        console.log(`Error: ${error}`);
    }
});

// newer filter route
router.get("/newest", async (req, res) => {
    const recentStorageProducts = await storageList
        .find()
        .sort({
            created_on: -1
        })
        .exec()
    try {
        res.render("pages/storageNewest", {
            recentStorageProducts
        })
    } catch (error) {
        console.log(`Error: ${error}`);
    }
});

// low price filter route
router.get("/low-price", async (req, res) => {
    const storageLowPriceProducts = await storageList
        .find()
        .sort({
            price: 1
        })
        .exec()
    try {
        res.render("pages/storageLowPrice", {
            storageLowPriceProducts
        })
    } catch (error) {
        console.log(`Error: ${error}`);
    }
});

// high price filter route
router.get("/high-price", async (req, res) => {
    const storageHighPriceProducts = await storageList
        .find()
        .sort({
            price: -1
        })
        .exec()
    try {
        res.render("pages/storageHighPrice", {
            storageHighPriceProducts
        })
    } catch (error) {
        console.log(`Error: ${error}`);
    }
});

router.get("/:id", async (req, res) => {
    const show = await storageList
        .findById(req.params.id)
        .exec()
    try {
        res.render("pages/productShowPage", {
            show
        })
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;