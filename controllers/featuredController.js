const FeaturedModel = require("../models/Featured");

exports.create = (req, res) => {
	res.render("admin/featured/featuredArticleForm");
};

exports.post = async (req, res) => {
	try {
		const seatingPost = await new FeaturedModel(req.body.Article);
		await seatingPost.save();
		res.redirect("/admin/products/seating");
	} catch (error) {
		if (error) {
			res.redirect("admin/products/seating");
		}
	}
};
