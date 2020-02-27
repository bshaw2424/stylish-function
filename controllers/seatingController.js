const { seatingModel } = require("../models/products");

exports.index = async (req, res) => {
	try {
		const seatingProducts = await seatingModel.find();
		res.render("pages/seating", { seatingProducts });
	} catch (error) {
		if (error) {
			res.render("pages/error404Page");
		}
	}
};

exports.ascending = async (req, res) => {
	try {
		const ascending = await seatingModel.find().sort({ price: 1 });
		res.render("pages/seatingAsc", { ascending });
	} catch (error) {
		if (error) {
			res.render("pages/error404Page");
		}
	}
};

exports.descending = async (req, res) => {
	try {
		const descending = await seatingModel.find().sort({ price: -1 });
		res.render("pages/seatingDesc", { descending });
	} catch (error) {
		if (error) {
			console.log(error);
			res.render("pages/error404Page");
		}
	}
};

exports.showPage = async (req, res) => {
	try {
		const products = await seatingModel.findById(req.params.id);
		res.render("pages/productShowPage", { products });
	} catch (error) {
		if (error) {
			res.render("pages/error404Page");
		}
	}
};
