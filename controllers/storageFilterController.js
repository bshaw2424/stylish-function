const storageList = require('../models/storageModel');

class StorageFilterRoutes{

    storageNewestProductRoute(req, res) {
        storageList
        .find({})
        .sort({
            created_on: -1
        })
        .exec((err, storageProducts) => {
            if (err) {
                console.log(err)
            } else {
                res.render("pages/storage", {
                    storageProducts
                })
            }
        });
    }

    storageLowPriceProductsRoute(req, res) {
        storageList
        .find({})
        .sort({
            price: 1
        })
        .exec((err, storageProducts) => {
            if (err) {
                console.log(err)
            } else {
                res.render("pages/storage", {
                    storageProducts
                })
            }
        });
    }

    storageHighPriceProductsRoute(req, res) {
        storageList
        .find({})
        .sort({
            price: -1
        })
        .exec((err, storageProducts) => {
            if (err) {
                console.log(err)
            } else {
                res.render("pages/storage", {
                    storageProducts
                })
            }
        });
    }
}

module.exports = StorageFilterRoutes;