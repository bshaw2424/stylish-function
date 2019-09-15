const seatingList = require('../models/seatingModel');

class SeatingRoute {

    seatingProductIndexRoute(req, res) {
        seatingList.find({})
            .exec((err, seatingProductIndex) => {
                if (err) {
                    console.log(err)
                } else {
                    res.render("pages/seating", {
                        seatingProductIndex
                    });
                }
            })
    }

    seatingNewProductsRoute(req, res) {
        seatingList.find({})
            .sort({
                created_on: -1
            })
            .exec((err, seatingRecentProducts) => {
                if (err) {
                    console.log(err)
                } else {
                    res.render("pages/seatingNewest", {
                        seatingRecentProducts
                    })
                }
            })
    }

    seatingHighPriceProductsRoute(req, res) {

        seatingList.find({})
            .sort({
                price: -1
            })
            .exec((err, seatingHighPriceProducts) => {
                if (err) {
                    console.log(err)
                } else {
                    res.render("pages/seatingHighPrice", {
                        seatingHighPriceProducts
                    })
                }
            })

    }

    seatingLowPriceProductsRoute(req, res) {

        seatingList.find({})
            .sort({
                price: 1
            })
            .exec((err, seatingLowPriceProducts) => {
                if (err) {
                    console.log(err)
                } else {
                    res.render("pages/seatingLowPrice", {
                        seatingLowPriceProducts
                    })
                }
            })
    }

    seatingShowPageRoute(req, res) {
        const {
            params
        } = req;
        seatingList.findById(params.id)
            .exec((err, show) => {
                if (err) {
                    console.log(err)
                } else {
                    res.render("pages/productShowPage", {
                        show
                    })
                }
            })
    }
}

module.exports = SeatingRoute;