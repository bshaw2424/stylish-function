const tableList = require('../models/tableModel');

class TableFilterController {

    tableNewestProductsRoute(req, res) {
        tableList
            .find({})
            .sort({
                created_on: -1
            })
            .exec((err, tableProducts) => {
                if (err) {
                    console.log(err)
                } else {
                    res.render("pages/table", {
                        tableProducts
                    });
                }
            });
    }

    tableLowPriceProductsRoute(req, res) {
        tableList
            .find({})
            .sort({
                price: 1
            })
            .exec((err, tableProducts) => {
                if (err) {
                    console.log(err)
                } else {
                    res.render("pages/table", {
                        tableProducts
                    })
                }
            });
    }

    tableHighPriceProductsRoute(req, res) {
        tableList
            .find({})
            .sort({
                price: -1
            }).
        exec((err, tableProducts) => {
            if (err) {
                console.log(err)
            } else {
                res.render("pages/table", {
                    tableProducts
                })
            }
        });

    }
}

module.exports = TableFilterController;