const tableProduct = require("../models/productModel");

class TableRoutes {
	async tableProducts(req, res) {
		try {
			const tableProducts = await tableProduct.find().exec();
			res.render("pages/tables", { tableProducts });
		} catch (error) {
			if (error) {
				res.render("pages/error404Page");
			}
		}
	}

	async tableShowPage(req, res) {
		try {
			const products = await tableProduct.findById(req.params.id).exec();
			res.render("pages/productShowPage", { products });
		} catch (error) {
			if (error) {
				res.render("pages/error404Page");
			}
		}
	}
}

module.exports = TableRoutes;
