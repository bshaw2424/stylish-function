const { FeaturedModel } = require("../models/Featured");

exports.create = (req, res) => {
	res.render("admin/featured/featuredArticleForm");
};

exports.post = async (req, res) => {
	try {
		const featuredPost = await new FeaturedModel(req.body.Article);
		await featuredPost.save();
		res.redirect("/admin/dashboard");
	} catch (error) {
		if (error) {
			res.send(error);
		}
	}
};
