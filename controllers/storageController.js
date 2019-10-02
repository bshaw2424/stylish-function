const storageList = require('../models/storageModel');

class StorageRoutes {

    storageIndexProductRoute(req, res) {

        storageList
            .find({})
            .exec((err, storageProducts) => {
                if (err) {
                    console.log(err)
                } else {
                    res.render("pages/storage", {
                        storageProducts
                    });
                }
            })
    }

    storageModularProductRoute(req, res) {
        storageList
            .find({
                category: "modular"
            })
            .exec((err, storageProducts) => {
                if (err) {
                    console.log(err)
                } else {
                    res.render("pages/storage", {
                        storageProducts
                    });
                }
            })
    }

    storageOttomanProductRoute(req, res) {
        storageList
            .find({
                category: "ottoman"
            })
            .exec((err, storageProducts) => {
                if (err) {
                    console.log(err)
                } else {
                    res.render("pages/storage", {
                        storageProducts
                    });
                }
            });
    }

    storageShowPageRoute(req, res) {
        const {
            params
        } = req;
        storageList
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

module.exports = StorageRoutes;