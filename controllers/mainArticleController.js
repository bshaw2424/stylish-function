const { FeaturedModel } = require("../models/Featured");

exports.index = async (req, res) => {
	try {
		const Articles = await FeaturedModel.find();
		res.render("pages/featured", { Articles });
	} catch (error) {
		if (error) {
			res.send(error);
		}
	}
};

exports.showPage = async (req, res) => {
	try {
		const Articles = await FeaturedModel.findById(req.params.id);
		res.render("pages/articleShowPage", { Articles });
	} catch (error) {
		if (error) {
			res.send(error);
		}
	}
};
