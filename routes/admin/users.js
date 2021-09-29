const express = require("express");
const router = express.Router({ mergeParams: true });
const { asyncError } = require("../../utility/error");
const passport = require("passport");

const User = require("../../controllers/admin/users");

router.get("/", asyncError(User.index));
router.get("/new", asyncError(User.create));
router.post("/", asyncError(User.post));

module.exports = router;
