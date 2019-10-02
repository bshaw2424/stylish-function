const tableList = require('../models/tableModel');

class TableRoutes {

    tableIndexProductRoute(req, res) {
        tableList
        .find({})
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

    coffeeTableComboProductRoute(req, res) {
        tableList
        .find({category: "coffee-table-combo"})
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
    
    extendableDiningTableProductRoute(req, res) {
        tableList
        .find({category: "extendable-dining-tables"})
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
    
    stylishTableProductRoute(req, res) {
        tableList
        .find({category: "stylish-tables"})
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

    tableShowPageRoute(req, res) {
        const {
            params
        } = req;
        tableList
        .findById(params.id)
        .exec((err, showProductDeatils) => {
            if (err) {
                console.log(err)
            } else {
                res.render("pages/productShowPage", {
                    showProductDetails
                })
            }
        });
    }
};

module.exports = TableRoutes;