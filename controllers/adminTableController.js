const { tablesModel } = require("../models/products");

exports.index = async (req, res) => {
	try {
		const tableProducts = await tablesModel.find();
		res.render("admin/table/tableIndex", { tableProducts });
	} catch (error) {
		if (error) {
			console.log(error);
			res.render("pages/error404Page");
		}
	}
};

exports.create = (req, res) => {
	res.render("admin/table/tableProductForm");
};

exports.post = async (req, res) => {
	try {
		await tablesModel.create(req.body.product);
		res.redirect("/admin/products/tables");
	} catch (error) {
		console.log(error);
		if (error) {
			res.render("pages/error404Page");
		}
	}
};

exports.showPage = async (req, res) => {
	try {
		const product = await tablesModel.findById(req.params.id);
		res.render("admin/table/tableShowPage", { product });
	} catch (error) {
		if (error) {
			res.redirect("/admin/products/tables");
		}
	}
};

exports.edit = async (req, res) => {
	try {
		const product = await tablesModel.findById(req.params.id);
		res.render("admin/table/tableEditProduct", { product });
	} catch (error) {
		if (error) {
			console.log(error);
			res.redirect("/admin/products/tables");
		}
	}
};

exports.update = async (req, res) => {
	const {
		title,
		main_category,
		price,
		main_image,
		sub_images,
		linkAddress,
		product_description,
	} = req.body;

	const product = {
		title,
		main_category,
		price,
		main_image,
		sub_images,
		linkAddress,
		product_description,
	};
	try {
		await tablesModel.findByIdAndUpdate(req.params.id, product);
		res.redirect(`/admin/products/tables/${req.params.id}`);
	} catch (error) {
		if (error) {
			res.render("pages/error404Page");
		}
	}
};

exports.delete = async (req, res) => {
	try {
		await tablesModel.findByIdAndDelete(req.params.id);
		res.redirect("/admin/products/tables");
	} catch (error) {
		if (error) {
			res.render("pages/error404Page");
		}
	}
};
