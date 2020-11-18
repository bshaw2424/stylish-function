const ProductsModel = require("../../models/Products");

module.exports.index = async (req, res, next) => {
	const products = await ProductsModel.find();
	res.render("admin/products/index", { products });
};

module.exports.create = (req, res) => {
	res.render("admin/products/create");
};

module.exports.post = async (req, res, next) => {
	const { Products } = req.body;
	const productsPost = new ProductsModel(Products);
	await productsPost.save();
	res.redirect("/admin/products/index");
};

module.exports.showPage = async (req, res, next) => {
	const { id } = req.params;
	const productShowPage = await ProductsModel.findById(id);
	res.render("admin/products/showPage", { productShowPage });
};

module.exports.edit = async (req, res, next) => {
	const { id } = req.params;
	const Article = await ProductsModel.findById(id);
	res.render("admin/products/productsEditPage", { Article });
};

module.exports.update = async (req, res, next) => {
	const { id } = req.params;
	const { Products } = req.body;
	await ProductsModel.findByIdAndUpdate(id, Products);
	res.redirect(`/admin/products/index/${id}`);
};

module.exports.delete = async (req, res, next) => {
	const { id } = req.params;
	await ProductsModel.findByIdAndDelete(id);
	res.redirect("/admin/products/index");
};
