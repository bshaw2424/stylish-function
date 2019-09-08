const seatingList = require('../models/seatingModel');


class SeatingProducts {
    async seatingIndexProductRoute(query) {
        try {
            const seatingIndex = await seatingList.find(query).exec()
            return seatingIndex;
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }
    async seatingNewestProducts(query) {
        try {
            const seatingRecent = await seatingList
                .find(query)
                .sort({
                    created_on: -1
                })
                .exec()
            return seatingRecent;
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }
    async seatingHighPriceProducts(query) {
        try {
            const seatingHighPrice = await seatingList
                .find(query)
                .sort({
                    price: -1
                })
                .exec()
            return seatingHighPrice;
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }
    async seatingLowPriceProducts(query) {
        try {
            const seatingLowPrice = await seatingList
                .find(query)
                .sort({
                    price: 1
                })
                .exec()
            return seatingLowPrice;
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }
    async seatingShowPage(query) {
        try {
            const seatingShowPage = await seatingList
                .findById(query)
                .exec()
                return seatingShowPage;
            } catch (error) {
            console.log(`Error: ${error}`);
        }
    }
}

module.exports = SeatingProducts;