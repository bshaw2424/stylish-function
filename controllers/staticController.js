exports.index = (req, res) => res.render("pages/index");

exports.aboutUs = (req, res) => res.render("pages/about-us");

exports.affiliateDisclaimer = (req, res) =>
	res.render("pages/affiliateDisclaimer");

exports.contactUs = (req, res) => res.render("pages/contactUs");

exports.privacyDisclosure = (req, res) =>
	res.render("pages/privacy-disclosure");

exports.termsOfService = (req, res) => res.render("pages/TOS");
