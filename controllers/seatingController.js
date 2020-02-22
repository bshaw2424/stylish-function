const seatingProduct = require("../models/productModel");

class SeatingRoutes {
	async seatingProducts(req, res) {
		try {
			const seatingProducts = await seatingProduct.find().exec();
			res.render("pages/seating", { seatingProducts });
		} catch (error) {
			if (error) {
				res.render("pages/error404Page");
			}
		}
	}

	async seatingShowPage(req, res) {
		try {
			const products = await seatingProduct.findById(req.params.id).exec();
			res.render("pages/productShowPage", { products });
		} catch (error) {
			if (error) {
				res.render("pages/error404Page");
			}
		}
	}
}

module.exports = SeatingRoutes;
