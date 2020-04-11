const { TablesModel } = require("../models/products");

exports.index = async (req, res) => {
	try {
		const tableProducts = await TablesModel.find();
		res.render("admin/table/tableIndex", { tableProducts });
	} catch (error) {
		if (error) {
			res.render("pages/error404Page");
		}
	}
};

exports.create = (req, res) => {
	res.render("admin/table/tableProductForm");
};

exports.post = async (req, res) => {
	try {
		await TablesModel.create(req.body.Product);
		res.redirect("/admin/products/tables");
	} catch (error) {
		if (error) {
			res.render("pages/error404Page");
		}
	}
};

exports.showPage = async (req, res) => {
	try {
		const product = await TablesModel.findById(req.params.id);
		res.render("admin/table/tableShowPage", { product });
	} catch (error) {
		if (error) {
			res.redirect("/admin/products/tables");
		}
	}
};

exports.edit = async (req, res) => {
	try {
		const product = await TablesModel.findById(req.params.id);
		res.render("admin/table/tableEditProduct", { product });
	} catch (error) {
		if (error) {
			res.redirect("/admin/products/tables");
		}
	}
};

exports.update = async (req, res) => {
	try {
		await TablesModel.findByIdAndUpdate(req.params.id, req.body.Product);
		res.redirect(`/admin/products/tables/${req.params.id}`);
	} catch (error) {
		if (error) {
			res.render("pages/error404Page");
		}
	}
};

exports.delete = async (req, res) => {
	try {
		await TablesModel.findByIdAndDelete(req.params.id);
		res.redirect("/admin/products/tables");
	} catch (error) {
		if (error) {
			res.render("pages/error404Page");
		}
	}
};
