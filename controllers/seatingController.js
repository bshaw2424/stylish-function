const { seatingModel } = require("../Schema/productSchema");

class SeatingRoutes {
	async index(req, res) {
		try {
			const seatingProducts = await seatingModel.find().exec();
			res.render("pages/seating", { seatingProducts });
		} catch (error) {
			if (error) {
				res.render("pages/error404Page");
			}
		}
	}

	async ascending(req, res) {
		try {
			const ascending = await seatingModel
				.find()
				.sort({ price: 1 })
				.exec();
			res.render("pages/seatingAsc", { ascending });
		} catch (error) {
			if (error) {
				res.render("pages/error404Page");
			}
		}
	}

	async descending(req, res) {
		try {
			const descending = await seatingModel
				.find()
				.sort({ price: -1 })
				.exec();
			res.render("pages/seatingDesc", { descending });
		} catch (error) {
			if (error) {
				console.log(error);
				res.render("pages/error404Page");
			}
		}
	}

	async showPage(req, res) {
		try {
			const products = await seatingModel.findById(req.params.id).exec();
			res.render("pages/productShowPage", { products });
		} catch (error) {
			if (error) {
				res.render("pages/error404Page");
			}
		}
	}
}

module.exports = SeatingRoutes;
