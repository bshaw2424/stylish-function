const seatingList = require('../models/seatingModel');

class SeatingFilterRoutes {

    seatingNewProductsRoute(req, res) {
        seatingList.find({})
            .sort({
                created_on: -1
            })
            .exec((err, seatingProducts) => {
                if (err) {
                    console.log(err)
                } else {
                    res.render("pages/seating", {
                        seatingProducts
                    })
                }
            });
    }

    seatingHighPriceProductsRoute(req, res) {
        seatingList.find({})
            .sort({
                price: -1
            })
            .exec((err, seatingProducts) => {
                if (err) {
                    console.log(err)
                } else {
                    res.render("pages/seating", {
                        seatingProducts
                    });
                }
            });
    }

    seatingLowPriceProductsRoute(req, res) {
        seatingList.find({})
            .sort({
                price: 1
            })
            .exec((err, seatingProducts) => {
                if (err) {
                    console.log(err)
                } else {
                    res.render("pages/seating", {
                        seatingProducts
                    })
                }
            });
    }
}

module.exports = SeatingFilterRoutes;