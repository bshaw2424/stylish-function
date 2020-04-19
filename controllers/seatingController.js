const { SeatingModel } = require("../models/products");

exports.index = async (req, res) => {
	try {
		const seatingProducts = await SeatingModel.find();
		res.render("pages/seating", { seatingProducts });
	} catch (error) {
		if (error) {
			res.render("pages/error404Page");
		}
	}
};

exports.ascending = async (req, res) => {
	try {
		const ascending = await SeatingModel.find().sort({ price: 1 });
		res.render("pages/seatingAsc", { ascending });
	} catch (error) {
		if (error) {
			res.render("pages/error404Page");
		}
	}
};

exports.descending = async (req, res) => {
	try {
		const descending = await SeatingModel.find().sort({ price: -1 });
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
		const product = await SeatingModel.findById(req.params.id);
		res.render("pages/seatingShowPage", { product });
	} catch (error) {
		if (error) {
			res.render("pages/error404Page");
		}
	}
};
