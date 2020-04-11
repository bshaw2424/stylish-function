const { SeatingModel } = require("../models/products");

exports.index = async (req, res) => {
	try {
		const seatingProducts = await SeatingModel.find();
		res.render("admin/seating/seatingIndex", { seatingProducts });
	} catch (error) {
		if (error) {
			res.render("pages/error404Page");
		}
	}
};

exports.create = (req, res) => {
	res.render("admin/seating/seatingProductForm");
};

exports.post = async (req, res) => {
	try {
		await SeatingModel.create(req.body.Product);
		res.redirect("/admin/products/seating");
	} catch (error) {
		if (error) {
			res.redirect("admin/products/seating");
		}
	}
};

exports.showPage = async (req, res) => {
	try {
		const product = await SeatingModel.findById(req.params.id);
		res.render("admin/seating/seatingShowPage", { product });
	} catch (error) {
		if (error) {
			res.redirect("/admin/product-index");
		}
	}
};

exports.edit = async (req, res) => {
	try {
		const product = await SeatingModel.findById(req.params.id);
		res.render("admin/seating/editSeatingProduct", { product });
	} catch (error) {
		if (error) {
			res.render("pages/error404Page");
		}
	}
};

exports.update = async (req, res) => {
	try {
		await SeatingModel.findByIdAndUpdate(req.params.id, req.body.Product);
		res.redirect(`/admin/products/seating/${req.params.id}`);
	} catch (error) {
		if (error) {
			res.render("pages/error404Page");
		}
	}
};

exports.delete = async (req, res) => {
	try {
		await SeatingModel.findByIdAndDelete(req.params.id);
		res.redirect("/admin/products/seating");
	} catch (error) {
		if (error) {
			res.render("pages/error404Page");
		}
	}
};
