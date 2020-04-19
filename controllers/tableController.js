const { TablesModel } = require("../models/products");

exports.index = async (req, res) => {
	try {
		const tableProducts = await TablesModel.find();
		res.render("pages/tables", { tableProducts });
	} catch (error) {
		if (error) {
			res.render("pages/error404Page");
		}
	}
};

exports.ascending = async (req, res) => {
	try {
		const ascending = await TablesModel.find().sort({ price: 1 });
		res.render("pages/tables", { ascending });
	} catch (error) {
		if (error) {
			res.render("pages/error404Page");
		}
	}
};

exports.descending = async (req, res) => {
	try {
		const descending = await TablesModel.find().sort({ price: -1 });
		res.render("pages/tables", { descending });
	} catch (error) {
		if (error) {
			res.render("pages/error404Page");
		}
	}
};

exports.showPage = async (req, res) => {
	try {
		const product = await TablesModel.findById(req.params.id);
		res.render("pages/tablesShowPage", { product });
	} catch (error) {
		if (error) {
			res.render("pages/error404Page");
		}
	}
};
