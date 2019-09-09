const storageRoutes = require('../routes/storage');

class storageRoutes {

constructor() {
        this.storage = storageRoutes;
    }

async storageIndexProductRoute(req, res) {
    try {
        const storage = await this.storage.storageIndexProductRoute({});
        res.render("pages/storage", {
            storage
        });
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
    } catch (error) {
        console.log(`res.status(404),Error: ${error}`);
    }
}
async storageLowPriceProductsRoute(req, res) {
        try {
            const storageLowPriceProduct = await this.storage.storageLowPriceProducts({});
            res.render("pages/storageLowPrice", { storageLowPriceProduct })
        } catch (error) {
            console.log(`res.status(404), Error: ${error}`);
        }
}
async storageHighPriceProductsRoute(req, res) {
        try {
            const storageHighPriceProducts = await this.storage.storageHighPriceProducts({});
                res.render("pages/storageHighPrice", { storageHighPriceProducts })
            } catch (error) {
                console.log(`res.status(404E, rror: ${error}`);
            }
}
async storageShowPageRoute(req, res) {
            const { params } = req;
           try {
                const show = await this.storage.storageShowPage(params.id);
                res.render("pages/productShowPage", { show })
            } catch (error) {
                console.log(`res.status(404, Error: ${error}`);
            }
}
}

module.exports = storageRoutes;