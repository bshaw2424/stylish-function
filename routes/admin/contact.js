const express = require("express");
const router = express.Router();
const { AsyncError } = require("../../utility/error");
const { checkAuthentication } = require("../../middleware");

const Contact = require("../../controllers/admin/contact");

router.get("/", checkAuthentication, AsyncError(Contact.index));
router.get("/new", checkAuthentication, Contact.create);
router.post("/", checkAuthentication, AsyncError(Contact.post));
router.post("/post", checkAuthentication, AsyncError(Contact.update));
router.get("/:id", checkAuthentication, AsyncError(Contact.showPage));
router.delete("/:id", checkAuthentication, AsyncError(Contact.delete));

module.exports = router;
