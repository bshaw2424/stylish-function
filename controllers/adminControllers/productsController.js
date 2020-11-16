const ProductsModel = require("../../models/Products");

exports.index = async (req, res, next) => {
	const products = await ProductsModel.find();
	res.render("admin/products/index", { products });
};

exports.create = (req, res) => {
	res.render("admin/products/create");
};

exports.post = async (req, res, next) => {
	const { Products } = req.body;
	const productsPost = new ProductsModel(Products);
	await productsPost.save();
	res.redirect("/admin/products/index");
};

exports.showPage = async (req, res, next) => {
	const { id } = req.params;
	const productShowPage = await ProductsModel.findById(id);
	res.render("admin/products/showPage", { productShowPage });
};

exports.edit = async (req, res, next) => {
	const { id } = req.params;
	const Article = await ProductsModel.findById(id);
	res.render("admin/products/productsEditPage", { Article });
};

exports.update = async (req, res, next) => {
	const { id } = req.params;
	await ProductsModel.findByIdAndUpdate(id, req.body.Products);
	res.redirect(`/admin/products/index/${id}`);
};

exports.delete = async (req, res, next) => {
	const { id } = req.params;
	await ProductsModel.findByIdAndDelete(id);
	res.redirect("/admin/products/index");
};
