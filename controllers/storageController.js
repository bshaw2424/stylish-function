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
};

// high price filter route
// router.get("/high-price", 
module.exports.storageHighPriceProductsRoute = async (req, res) => {
    const storageHighPriceProducts = await storageList
        .find()
        .sort({
            price: -1
        })
        .exec()
    try {
        res.render("pages/storageHighPrice", {
            storageHighPriceProducts
        })
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

// router.get("/:id", 
module.exports.storageShowPageRoute = async (req, res) => {
    const show = await storageList
        .findById(req.params.id)
        .exec()
    try {
        res.render("pages/productShowPage", {
            show
        })
    } catch (error) {
                console.log(`res.status(404, Error: ${error}`);
            }
}
}

module.exports = storageRoutes;