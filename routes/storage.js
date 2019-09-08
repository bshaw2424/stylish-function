const storageList = require('../models/storageModel');


class StorageProducts {
    async storageIndexProductRoute(query) {
        try {
            const storageIndex = await storageList.find(query).exec()
            return storageIndex;
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }
    async storageNewestProducts(query) {
        try {
            const storageRecent = await storageList
                .find(query)
                .sort({
                    created_on: -1
                })
                .exec()
            return storageRecent;
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }
    async storageHighPriceProducts(query) {
        try {
            const storageHighPrice = await storageList
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
    async storageLowPriceProducts(query) {
        try {
            const storageLowPrice = await storageList
                .find(query)
                .sort({
                    price: 1
                })
                .exec()
            return storageLowPrice;
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }
    async storageShowPage(req, res) {
        const {
            params
        } = req;
        try {
            const storageShowPage = await storageList
                .findById(params.id)
                .exec()
            return storageShowPage;
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }
}

module.exports = StorageProducts;