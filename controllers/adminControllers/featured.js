const { FeaturedModel } = require("../../models/Featured");

module.exports.index = async (req, res, next) => {
		const Articles = await FeaturedModel.find();
		res.render("admin/featured/articles", { Articles });
};

module.exports.create = (req, res) => {
	res.render("admin/featured/featuredArticleForm");
};

module.exports.post = async (req, res, next) => {
		const { Article } = req.body
		const featuredPost = new FeaturedModel(Article);
		await featuredPost.save();
		res.redirect("/admin/featured/articles");
};

module.exports.showPage = async (req, res, next) => {
		const { id } = req.params;
		const featuredArticle = await FeaturedModel.findById(id);
		res.render("admin/featured/showPage", { featuredArticle });
};

module.exports.edit = async (req, res, next) => {
		const { id } = req.params;
		const Article = await FeaturedModel.findById(id);
		res.render("admin/featured/articleEditPage", { Article });
};

module.exports.update = async (req, res, next) => {
	  const { id } = req.params;
		const { Article } = req.body;
		await FeaturedModel.findByIdAndUpdate(id, Article);
		res.redirect(`/admin/featured/articles/${id}`);
};

module.exports.delete = async (req, res, next) => {
		const { id } = req.params;
		await FeaturedModel.findByIdAndDelete(id);
		res.redirect("/admin/featured/articles")
};
