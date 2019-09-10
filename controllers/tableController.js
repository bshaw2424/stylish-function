const TableProductRoutes = require('../routes/tables');

class TableRoutes {
    constructor() {
        this.tables = new TableProductRoutes();
    }
    async tableIndexProductRoute(req, res) {
        try {
            const table = await this.tables.tableIndexProductRoute({});
            res.render("pages/table", {
                table
            });
            return table;
        } catch (error) {
            console.log(res.status(404), `Error: ${error}`)
        }
    }

    async tableNewestProductsRoute(req, res) {
        try {
            const newestTableProducts = await this.tables.tableNewestProductsRoute({});
            res.render("pages/tableNewest", {
                newestTableProducts
            })
            return newestTableProducts;
        } catch (error) {
            console.log(res.status(404), `Error: ${error}`)
        }
    }

    async tableLowPriceProductsRoute(req, res) {
        try {
            const lowPriceTableProduct = await this.tables.tableLowPriceProductsRoute({});
            res.render("pages/tableLowPrice", {
                lowPriceTableProduct
            })
            return lowPriceTableProduct;
        } catch (error) {
            console.log(res.status(404), `Error: ${error}`)
        }
    }

    async tableHighPriceProductsRoute(req, res) {
        try {
            const highPriceTableProducts = await this.tables.tableHighPriceProductsRoute({});
            res.render("pages/tableHighPrice", {
                highPriceTableProducts
            })
            return highPriceTableProducts;
        } catch (error) {
            console.log(res.status(404), `Error: ${error}`)
        }
    }

    async tableShowPageRoute(req, res) {
        try {
            const { params } = req;
            const showing = await this.tables.tableShowPageRoute(params.id);
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