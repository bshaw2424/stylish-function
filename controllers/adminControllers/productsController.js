const ProductsModel = require("../../models/Products");

exports.index = async (req, res) => {
	try {
		const products = await ProductsModel.find();
		res.render("admin/products/index", { products });
	} catch (error) {
		if (error) {
			res.send(error);
		}
	}
};

exports.create = (req, res) => {
	res.render("admin/products/create");
};

exports.post = async (req, res) => {
	try {
		const productsPost = await new ProductsModel(req.body.Products);
		await productsPost.save();
		res.redirect("/admin/products/index");
	} catch (error) {
		if (error) {
			res.send(error);
		}
	}
};

exports.showPage = async (req, res) => {
	try {
		const productShowPage = await ProductsModel.findById(req.params.id);
		res.render("admin/products/showPage", { productShowPage });
	} catch (error) {
		if (error) {
			res.send(error);
		}
	}
};

exports.edit = async (req, res) => {
	try {
		const Article = await ProductsModel.findById(req.params.id);
		res.render("admin/products/productsEditPage", { Article });
	} catch (error) {
		if (error) {
			res.send(error);
		}
	}
};

exports.update = async (req, res) => {
	try {
		await ProductsModel.findByIdAndUpdate(req.params.id, req.body.Products);
		res.redirect(`/admin/products/index/${req.params.id}`);
	} catch (error) {
		if (error) {
			res.render("pages/error404Page");
		}
	}
};

exports.delete = async (req, res) => {
	try {
		await ProductsModel.findByIdAndDelete(req.params.id);
		res.redirect("/admin/products/index");
	} catch (error) {
		if (error) {
			res.render("pages/error404Page");
		}
	}
};
