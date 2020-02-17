const express = require("express");
const router = express.Router();

const staticRouteMethods = require("../../controllers/staticController");
const Static = new staticRouteMethods();

router.get("/", Static.indexHomePage);
router.get("/about-us", Static.aboutUs);
router.get("/affiliate-disclaimer", Static.affiliateDisclaimer);
router.get("/contact-us", Static.contactUs);
router.get("/privacy-disclosure", Static.privacyDisclosure);
router.get("/TOS", Static.termsOfService);

module.exports = router;
