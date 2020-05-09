const { FeaturedModel } = require("../models/Featured");

exports.index = async (req, res) => {
	try {
		const Articles = await FeaturedModel.find();
		res.render("pages/index", { Articles });
	} catch (error) {
		if (error) {
			res.send(error);
		}
	}
};

exports.aboutUs = (req, res) => res.render("pages/about-us");

exports.affiliateDisclaimer = (req, res) =>
	res.render("pages/affiliateDisclaimer");

exports.contactUs = (req, res) => res.render("pages/contactUs");

exports.privacyDisclosure = (req, res) =>
	res.render("pages/privacy-disclosure");

exports.termsOfService = (req, res) => res.render("pages/TOS");
