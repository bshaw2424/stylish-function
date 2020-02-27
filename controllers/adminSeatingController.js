const { seatingModel } = require("../models/products");

exports.index = async (req, res) => {
	try {
		const seatingProducts = await seatingModel.find().exec();
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
		await seatingModel.create(req.body.product);
		res.redirect("/admin/products/seating");
	} catch (error) {
		if (error) {
			res.render("pages/error404Page");
		}
	}
};

exports.showPage = async (req, res) => {
	try {
		const product = await seatingModel.findById(req.params.id).exec();
		res.render("admin/seating/seatingShowPage", { product });
	} catch (error) {
		if (error) {
			res.redirect("/admin/product-index");
		}
	}
};

exports.edit = async (req, res) => {
	try {
		const product = await seatingModel.findById(req.params.id).exec();
		res.render("admin/seating/editSeatingProduct", { product });
	} catch (error) {
		if (error) {
			res.render("pages/error404Page");
		}
	}
};

exports.update = async (req, res) => {
	try {
		await seatingModel.findByIdAndUpdate(req.params.id, req.body.product);
		res.redirect(`/admin/products/seating/${req.params.id}`);
	} catch (error) {
		if (error) {
			res.render("pages/error404Page");
		}
	}
};

exports.delete = async (req, res) => {
	try {
		await seatingModel.findByIdAndDelete(req.params.id);
		res.redirect("/admin/products/seating");
	} catch (error) {
		if (error) {
			res.render("pages/error404Page");
		}
	}
};
