const storageList = require('../models/storageModel');

class StorageRoutes {

   storageIndexProductRoute(req, res) {

        storageList
            .find({})
            .exec((err, storageProductIndex) => {
                if (err) {
                    console.log(err)
                } else {
                    res.render("pages/storage", {
                        storageProductIndex
                    });
                }
            })
    }

    storageNewestProductRoute(req, res) {

        storageList
            .find({})
            .sort({
                created_on: -1
            })
            .exec((err, recentStorageProducts) => {
                if (err) {
                    console.log(err)
                } else {
                    res.render("pages/storageNewest", {
                        recentStorageProducts
                    })
                }
            })
    }

    storageLowPriceProductsRoute(req, res) {

        storageList
            .find({})
            .sort({
                price: 1
            })
            .exec((err, storageLowPriceProduct) => {
                if (err) {
                    console.log(err)
                } else {
                    res.render("pages/storageLowPrice", {
                        storageLowPriceProduct
                    })
                }
            })
    }

   storageHighPriceProductsRoute(req, res) {
           storageList
                .find({})
                .sort({
                    price: -1
                })
                .exec((err, storageHighPriceProducts) => {
                    if (err) {
                        console.log(err)
                    } else {
                        res.render("pages/storageHighPrice", {
                            storageHighPriceProducts
                        })
                    }
                })
 
    }

    storageShowPageRoute(req, res) {

        const {
            params
        } = req;
        storageList
            .findById(params.id)
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

module.exports = StorageRoutes;