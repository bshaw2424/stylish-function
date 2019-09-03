const seatingList = require('../models/seatingModel');

// router.get("/",
     module.exports.seatingIndexProductRoute = async (req, res) => {
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
    };


    // router.get("/newest", 
    module.exports.seatingNewestProducts = async (req, res) => {
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
    };

    // low price filter route
    // router.get("/low-price", 
    module.exports.seatingLowPriceProducts = async (req, res) => {
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
    };

    // high price filter route
    // router.get("/high-price", 
    module.exports.seatingHighPriceProducts = async (req, res) => {
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
    };



    //  seating show page
    module.exports.seatingShowPage = async (req, res) => {
        const {
            params
        } = req;
        const show = await seatingList
            .findById(params.id)
            .exec()
        try {
            res.render("pages/productShowPage", {
                show
            })
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    };



