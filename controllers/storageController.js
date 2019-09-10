const StorageProductRoutes = require('../routes/storage');

class StorageRoutes {

constructor() {
        this.storage = new StorageProductRoutes();
    }

async storageIndexProductRoute(req, res) {
    try {
        const storage = await this.storage.storageIndexProductRoute({});
        res.render("pages/storage", {
            storage
        });
        return storage;
    } catch (error) {
        console.log(res.status(404), `Error: ${error}`);
    }
}
async storageNewestProductRoute(req, res) {
    try {
        const recentStorageProducts = await this.storage.storageNewestProducts({});
        res.render("pages/storageNewest", {
            recentStorageProducts
        })
        return recentStorageProducts;
    } catch (error) {
        console.log(res.status(404), `Error: ${error}`);
    }
}
async storageLowPriceProductsRoute(req, res) {
        try {
            const storageLowPriceProduct = await this.storage.storageLowPriceProducts({});
            res.render("pages/storageLowPrice", { storageLowPriceProduct })
            return storageLowPriceProduct;
        } catch (error) {
            console.log(res.status(404), `Error: ${error}`);
        }
}
async storageHighPriceProductsRoute(req, res) {
        try {
            const storageHighPriceProducts = await this.storage.storageHighPriceProducts({});
                res.render("pages/storageHighPrice", { storageHighPriceProducts })
                return storageHighPriceProducts;
            } catch (error) {
                console.log(res.status(404), `Error: ${error}`);
            }
}
async storageShowPageRoute(req, res) {
           try {
                const { params } = req;               
                const show = await this.storage.storageShowPage(params.id);
                res.render("pages/productShowPage", { show })
                return show;
            } catch (error) {
                console.log(res.status(404), `Error: ${error}`);
            }
}
}

module.exports = StorageRoutes;