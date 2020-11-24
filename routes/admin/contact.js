const express = require("express");
const router = express.Router();

const contacts = require("../../controllers/adminControllers/contact");
const { asyncError } = require("../../utility/error");

router.get("/", asyncError(contacts.index));
router.get("/new", contacts.create);
router.post("/", asyncError(contacts.post));
router.get("/:id", asyncError(contacts.showPage));
router.delete("/:id", asyncError(contacts.delete));

module.exports = router;
