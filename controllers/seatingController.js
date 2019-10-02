const seatingList = require('../models/seatingModel');

class SeatingRoute {

    seatingProductIndexRoute(req, res) {
        seatingList.find({})
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

    seatingModularSubRoute(req, res) {
        seatingList
            .find({
                category: "modular"
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

    seatingAlternativeSubRoute(req, res) {
        seatingList
            .find({
                category: "alternative"
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

    seatingLoungeSubRoute(req, res) {
        seatingList
            .find({
                category: "lounge"
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

    seatingShowPageRoute(req, res) {
        const {
            params
        } = req;
        seatingList
        .findById(params.id)
        .exec((err, showProductDetails) => {
            if (err) {
                console.log(err)
            } else {
                res.render("pages/productShowPage", {
                    showProductDetails
                })
            }
        });
    }
}

module.exports = SeatingRoute;