const express = require("express");
const router = express.Router();
const { asyncError } = require("../../utility/error");
const { checkAuthentication } = require("../../middleware");

const Contact = require("../../controllers/admin/contact");

router.get("/", checkAuthentication, asyncError(Contact.index));
router.get("/new", checkAuthentication, Contact.create);
router.post("/", checkAuthentication, asyncError(Contact.post));
router.post("/post", checkAuthentication, asyncError(Contact.update));
router.get("/:id", checkAuthentication, asyncError(Contact.showPage));
router.delete("/:id", checkAuthentication, asyncError(Contact.delete));

module.exports = router;
