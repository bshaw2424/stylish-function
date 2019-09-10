const SeatProductRoutes = require('../routes/seating');


class SeatingRoute {
    constructor() {
        this.seating = new SeatProductRoutes()
    }
    async seatIndex(req, res) {
        try {
            const seatingProductIndex = await this.seating.seatingIndexProductRoute({});
            res.render("pages/seating", { seatingProductIndex });
            return seatingProductIndex;
        } catch (error) {
            console.log(res.status(404), `Error: ${error}`);
        }
    }
    async seatingNewProducts(req, res) {
        try {
            const seatingRecentProducts = await this.seating.seatingNewestProducts({});
            res.render("pages/seatingNewest", {
                seatingRecentProducts
            })
            return seatingRecentProducts;
        } catch (error) {
            console.log(res.status(404), `Error: ${error}`);
        }
    }
    async seatingHighPriceProducts(req, res) {
        try {
            const seatingHighPriceProducts = await this.seating.seatingHighPriceProducts({});
            res.render("pages/seatingHighPrice", {
                seatingHighPriceProducts
            })
            return seatingHighPriceProducts; 
        } catch (error) {
            console.log(res.status(404), `Error: ${error}`);
        }
    }
    async seatingLowPriceProducts(req, res) {
        try {
            const seatingLowPriceProducts = await this.seating.seatingLowPriceProducts({});
           res.render("pages/seatingLowPrice", {
            seatingLowPriceProducts
            });
            return seatingLowPriceProducts;
        } catch (error) {
            console.log(res.status(404), `Error: ${error}`);
        }
    }
    async seatingShowPage(req, res) {
        try {
            const { params } = req;
            const show = await this.seating.seatingShowPage(params.id);
            res.render("pages/productShowPage", {
                show
            })
            return show;
        } catch (error) {
            console.log(res.status(404), `Error: ${error}`);
        }
    }
}

module.exports = SeatingRoute;