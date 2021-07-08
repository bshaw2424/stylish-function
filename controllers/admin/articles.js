const ArticleModel = require("../../models/Articles");

module.exports.index = async (req, res, next) => {
	const articles = await ArticleModel.find();
	res.render("admin/articles/index", { articles });
};

module.exports.create = (req, res) => {
	res.render("admin/articles/create");
};

module.exports.post = async (req, res, next) => {
	const { Products } = req.body;
	const productsPost = new ArticleModel(Products);
	await productsPost.save();
	res.redirect("/admin/articles/index");
};

module.exports.showPage = async (req, res, next) => {
	const { id } = req.params;
	const productShowPage = await ArticleModel.findById(id);
	res.render("admin/articles/showPage", { productShowPage });
};

module.exports.edit = async (req, res, next) => {
	const { id } = req.params;
	const Article = await ArticleModel.findById(id);
	res.render("admin/articles/productsEditPage", { Article });
};

module.exports.update = async (req, res, next) => {
	const { id } = req.params;
	const { Products } = req.body;
	await ProductsModel.findByIdAndUpdate(id, Products);
	res.redirect(`/admin/articles/index/${id}`);
};

module.exports.delete = async (req, res, next) => {
	const { id } = req.params;
	await ProductsModel.findByIdAndDelete(id);
	res.redirect("/admin/articles/index");
};
