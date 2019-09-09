const seatRoutes = require('../routes/seating');


class SeatingRoute {
    constructor() {
        this.seating = new seatRoutes()
    }
    async seatIndex(req, res) {
        try {
            const seat = await this.seating.seatingIndexProductRoute({});
            return res.render("pages/seating", { seat });
        } catch (error) {
            console.log(res.status(404), `Error: ${error}`);
        }
    }
    async seatingNewProducts(req, res) {
        try {
            const seatingRecentProducts = await this.seating.seatingNewestProducts({});
            return res.render("pages/seatingNewest", {
                seatingRecentProducts
            });
        } catch (error) {
            console.log(res.status(404), `Error: ${error}`);
        }
    }
    async seatingHighPriceProducts(req, res) {
        try {
            const seatingHighPriceProducts = await this.seating.seatingHighPriceProducts({});
            return res.render("pages/seatingHighPrice", {
                seatingHighPriceProducts
            })
        } catch (error) {
            console.log(res.status(404), `Error: ${error}`);
        }
    }
    async seatingLowPriceProducts(req, res) {
        try {
            const seatingLowPrice = await this.seating.seatingLowPriceProducts({});
            return res.render("pages/seatingLowPrice", {
                seatingLowPrice
            });
        } catch (error) {
            console.log(res.status(404), `Error: ${error}`);
        }
    }
    async seatingShowPage(req, res) {
        const {
            params
        } = req;
        try {
            const show = await this.seating.seatingShowPage(params.id);
            return res.render("pages/productShowPage", {
                show
            });
        } catch (error) {
            console.log(res.status(404), `Error: ${error}`);
        }
    }
}

module.exports = SeatingRoute;