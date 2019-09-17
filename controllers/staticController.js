

class StaticRoutes {
    aboutUsRoute(req, res) {
        res.render("pages/about-us")
    }
    affiliateDisclaimerRoute(req, res) {
        res.render("pages/affiliate-disclaimer")
    }
    contactUsRoute(req, res) {
        res.render("pages/contact-us");
    }
    privacyDisclaimerRoute(req, res) {
        res.render("pages/privacy")
    }
    termsOfServiceRoute(req, res) {
        res.render("pages/TOS")
    }
}


module.exports = StaticRoutes;