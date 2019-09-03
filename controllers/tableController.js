const tableList = require('../models/tableModel');


module.exports.tableIndexProductRoute = async (req, res) => {
    const table = await tableList
        .find()
        .exec()
    try {
        res.render("pages/table", {
            table
        });
    } catch (error) {
        console.log(`Error: ${error}`)
    }
};

module.exports.tableNewestProductsRoute = async (req, res) => {
    const newestProducts = await tableList
        .find()
        .sort({
            created_on: -1
        })
        .exec()
    try {
        res.render("pages/tableNewest", {
            newest_Table: newestProducts
        });
    } catch (error) {
        console.log(`Error: ${error}`)
    }
};

module.exports.tableLowPriceProductsRoute = async (req, res) => {
    const low_price = await tableList
        .find()
        .sort({
            price: 1
        })
        .exec()
    try {
        res.render("pages/tableLowPrice", {
            table_LowPrice: low_price
        })
    } catch (error) {
        console.log(`Error: ${error}`)
    }
};

module.exports.tableHighPriceProductsRoute = async (req, res) => {
    const high_price = await tableList
        .find()
        .sort({
            price: -1
        })
        .exec()
    try {
        res.render("pages/tableHighPrice", {
            table_HighPrice: high_price
        })
    } catch (error) {
        console.log(`Error: ${error}`)
    }
};

module.exports.tableShowPageRoute = async (req, res) => {
    const {
        params
    } = req;
    const showing = await tableList
        .findById(params.id)
        .exec()
    try {
        res.render("pages/productShowPage", {
            show: showing
        })
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};