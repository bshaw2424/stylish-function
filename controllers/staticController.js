class StaticRoutes {
	indexHomePage(req, res) {
		res.render("pages/index");
	}
	aboutUs(req, res) {
		res.render("pages/about-us");
	}
	affiliateDisclaimer(req, res) {
		res.render("pages/affiliateDisclaimer");
	}
	contactUs(req, res) {
		res.render("pages/contactUs");
	}
	privacyDisclosure(req, res) {
		res.render("pages/privacy-disclosure");
	}
	termsOfService(req, res) {
		res.render("pages/TOS");
	}
}

module.exports = StaticRoutes;
