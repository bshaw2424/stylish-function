const tableList = require('../models/tableModel');


class TableProducts {
    async tableIndexProductRoute(query) {
        try {
            const tableIndex = await tableList.find(query).exec()
            return tableIndex;
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }
    async tableNewestProducts(query) {
        try {
            const tableRecent = await tableList
                .find(query)
                .sort({ created_on: -1 })
                .exec()
            return tableRecent;
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }
    async tableHighPriceProducts(query) {
        try {
            const tableHighPrice = await tableList
                .find(query)
                .sort({
                    price: -1
                })
                .exec()
            return tableHighPrice;
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }
    async tableLowPriceProducts(query) {
        try {
            const tableLowPrice = await tableList
                .find(query)
                .sort({
                    price: 1
                })
                .exec()
            return tableLowPrice;
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }
    async tableShowPage(req, res) {
        const { params } = req;
        try {
            const tableShowPage = await tableList
                .findById(params.id)
                .exec()
            return tableShowPage;
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }
}

module.exports = TableProducts;