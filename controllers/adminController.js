const { seatingModel, tablesModel } = require("../models/products");

exports.logIn = (req, res) => {
	res.render("admin/login");
};

exports.logOut = (req, res) => {
	res.render("admin/logout");
};

exports.index = async (req, res) => {
	try {
		const seatingProducts = await seatingModel.find().exec();
		const tableproducts = await tablesModel.find().exec();
		res.render("admin/adminIndex", { seatingProducts, tableproducts });
	} catch (error) {
		if (error) {
			console.log(error);
			res.render("pages/error404Page");
		}
	}
};
