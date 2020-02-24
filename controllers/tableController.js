const { tableModel } = require("../Schema/productSchema");

class TableProducts {
	async index(req, res) {
		try {
			const tableProducts = await tableModel.find().exec();
			res.render("pages/tables", { tableProducts });
		} catch (error) {
			if (error) {
				res.render("pages/error404Page");
			}
		}
	}

	async ascending(req, res) {
		try {
			const ascending = await tableModel
				.find()
				.sort({ price: 1 })
				.exec();
			res.render("pages/tables", { ascending });
		} catch (error) {
			if (error) {
				res.render("pages/error404Page");
			}
		}
	}

	async descending(req, res) {
		try {
			const descending = await tableModel
				.find()
				.sort({ price: -1 })
				.exec();
			res.render("pages/tables", { descending });
		} catch (error) {
			if (error) {
				res.render("pages/error404Page");
			}
		}
	}

	async showPage(req, res) {
		try {
			const products = await tableModel.findById(req.params.id).exec();
			res.render("pages/productShowPage", { products });
		} catch (error) {
			if (error) {
				res.render("pages/error404Page");
			}
		}
	}
}

module.exports = TableProducts;
