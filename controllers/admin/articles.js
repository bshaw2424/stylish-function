const ArticleModel = require("../../models/Articles");

module.exports.index = async (req, res, next) => {
	const articles = await ArticleModel.find();
	res.render("admin/articles/index", { articles });
};

module.exports.create = (req, res) => {
	res.render("admin/articles/create");
};

module.exports.post = async (req, res, next) => {
	const { Article, title, price, image, description } = req.body;
	const article = new ArticleModel(Article);
	article.products.push({
		title,
		price,
		image, 
		description
	})
	await article.save()
	res.redirect("/admin.stylishfunction.com/articles");
};

module.exports.showPage = async (req, res, next) => {
	const { id } = req.params;
	const article = await ArticleModel.findById(id);
	res.render("admin/articles/showPage", { article });
};

module.exports.edit = async (req, res, next) => {
	const { id } = req.params;
	const article = await ArticleModel.findById(id);
	res.render("admin/articles/edit", { article });
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
