"use strict";

const express = require("express");

const router = express.Router();

const Static = require("../../controllers/static");

router.get("/", Static.index);
router.get("/about-us", Static.aboutUs);
router.get("/affiliate-disclaimer", Static.affiliateDisclaimer);
router.get("/contact-us", Static.contactUs);
router.get("/contact-us/success", Static.contactUsSuccess);
router.get("/privacy-disclosure", Static.privacyDisclosure);
router.get("/TOS", Static.termsOfService);
module.exports = router;