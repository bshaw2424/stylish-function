const { FeaturedModel } = require("../models/Featured");

exports.index = async (req, res) => {
	try {
		const Articles = await FeaturedModel.find().limit(3);
		res.render("pages/index", { Articles });
	} catch (error) {
		if (error) {
			res.send(error);
		}
	}
};

exports.aboutUs = async (req, res) => res.render("pages/static/aboutUs");

exports.affiliateDisclaimer = (req, res) => res.render("pages/static/about-us");

exports.affiliateDisclaimer = (req, res) =>
	res.render("pages/static/affiliateDisclaimer");

exports.contactUs = (req, res) => res.render("pages/static/contactUs");

exports.privacyDisclosure = (req, res) =>
	res.render("pages/static/privacy-disclosure");

exports.termsOfService = (req, res) => res.render("pages/static/TOS");
