const { FeaturedModel } = require("../../models/Featured");

exports.index = async (req, res) => {
	try {
		const Articles = await FeaturedModel.find();
		res.render("admin/featured/articles", { Articles });
	} catch (error) {
		if (error) {
			res.send(error);
		}
	}
};

exports.create = (req, res) => {
	res.render("admin/featured/featuredArticleForm");
};

exports.post = async (req, res) => {
	try {
		const featuredPost = await new FeaturedModel(req.body.Article);
		await featuredPost.save();
		res.redirect("/admin/featured/articles");
	} catch (error) {
		if (error) {
			res.send(error);
		}
	}
};

exports.showPage = async (req, res) => {
	try {
		const featuredArticle = await FeaturedModel.findById(req.params.id);
		res.render("admin/featured/showPage", { featuredArticle });
	} catch (error) {
		if (error) {
			res.send(error);
		}
	}
};

exports.edit = async (req, res) => {
	try {
		const Article = await FeaturedModel.findById(req.params.id);
		res.render("admin/featured/articleEditPage", { Article });
	} catch (error) {
		if (error) {
			res.send(error);
		}
	}
};

exports.update = async (req, res) => {
	try {
		await FeaturedModel.findByIdAndUpdate(req.params.id, req.body.Article);
		res.redirect(`/admin/featured/articles/${req.params.id}`);
	} catch (error) {
		if (error) {
			res.render("pages/error404Page");
		}
	}
};

exports.delete = async (req, res) => {
	try {
		await FeaturedModel.findByIdAndDelete(req.params.id);
		res.redirect("/admin/featured/articles");
	} catch (error) {
		if (error) {
			res.render("pages/error404Page");
		}
	}
};
