const {
	productsModel,
	seatingModel,
	tableModel,
} = require("../Schema/productSchema");

class Admin {
	logIn(req, res) {
		res.render("admin/login");
	}

	async index(req, res) {
		try {
			const seatingProducts = await seatingModel.find().exec();
			const tableproducts = await tableModel.find().exec();
			res.render("admin/adminIndex", { seatingProducts, tableproducts });
		} catch (error) {
			if (error) {
				console.log(error);
				res.render("pages/error404Page");
			}
		}
	}
}

module.exports = Admin;
