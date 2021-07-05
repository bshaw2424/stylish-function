exports.index = (req, res) => res.render("pages/index");

exports.aboutUs = (req, res) => res.render("static/aboutUs");

exports.affiliateDisclaimer = (req, res) => res.render("static/about-us");

exports.affiliateDisclaimer = (req, res) =>
	res.render("static/affiliateDisclaimer");

exports.contactUs = (req, res) => res.render("static/contactUs");

exports.privacyDisclosure = (req, res) =>
	res.render("static/privacy-disclosure");

exports.termsOfService = (req, res) => res.render("static/TOS");
