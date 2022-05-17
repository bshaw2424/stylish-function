"use strict";

const express = require("express");

const router = express.Router();

const { AsyncError } = require("../../utility/error");

const { checkAuthentication } = require("../../middleware");

const Contact = require("../../controllers/admin/contact");

router.get("/", checkAuthentication, AsyncError(Contact.index));
router.get("/new", Contact.create);
router.post("/", AsyncError(Contact.post));
router.get("/sortDesc/:sort", AsyncError(Contact.descSort));
router.get("/sortAsc/:sort", AsyncError(Contact.ascSort));
router.get("/:id", AsyncError(Contact.showPage));
router.delete("/:id", AsyncError(Contact.delete));
module.exports = router;
