const tableList = require('../models/tableModel');

class TableRoutes {

    tableIndexProductRoute(req, res) {

        tableList
            .find({})
            .exec((err, tableProductIndex) => {
                if (err) {
                    console.log(err)
                } else {
                    res.render("pages/table", {
                        tableProductIndex
                    });
                }
            })
    }

    tableNewestProductsRoute(req, res) {

        tableList
            .find({})
            .sort({
                created_on: -1
            })
            .exec((err, newestTableProducts) => {
                if (err) {
                    console.log(err)
                } else {
                    res.render("pages/tableNewest", {
                        newestTableProducts
                    })
            return newestTableProducts;
        } catch (error) {
            console.log(res.status(404), `Error: ${error}`)
        }
    }

    tableLowPriceProductsRoute(req, res) {

        tableList
            .find({})
            .sort({
                price: 1
            })
            .exec((err, lowPriceTableProduct) => {
                if (err) {
                    console.log(err)
                } else {
                    res.render("pages/tableLowPrice", {
                        lowPriceTableProduct
                    })
            return lowPriceTableProduct;
        } catch (error) {
            console.log(res.status(404), `Error: ${error}`)
        }
    }

    tableHighPriceProductsRoute(req, res) {

        tableList
            .find({})
            .sort({
                price: -1
            }).
        exec((err, highPriceTableProducts) => {
            if (err) {
                console.log(err)
            } else {
                res.render("pages/tableHighPrice", {
                    highPriceTableProducts
                })
            }
        })

    }

    tableShowPageRoute(req, res) {

        const {
            params
        } = req;
        tableList
            .find(params.id)
            .exec((err, show) => {
                if (err) {
                    console.log(err)
                } else {
                    res.render("pages/productShowPage", {
                        show: showing
                    })
            return showing;
        } catch (error) {
            console.log(res.status(404), `Error: ${error}`)
        }
    }
};


module.exports = TableRoutes;