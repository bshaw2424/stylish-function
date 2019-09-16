const express = require('express');
const router = express.Router();
const StaticRoutes = require('../controllers/staticController');

const staticRoute = new StaticRoutes();


router.get("/about-us", staticRoute.aboutUsRoute);

router.get("/affiliate-disclaimer", staticRoute.affiliateDisclaimerRoute);

router.get("/contact-us", staticRoute.contactUsRoute);

router.get("/privacy", staticRoute.privacyDisclaimerRoute);

router.get("/TOS", staticRoute.termsOfServiceRoute);

module.exports = router;