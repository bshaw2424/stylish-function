"use strict";

const express = require("express");

const router = express.Router({
  mergeParams: true
});

const {
  AsyncError
} = require("../../utility/error");

const passport = require("passport");

const User = require("../../controllers/admin/users");

router.get("/", AsyncError(User.index));
router.get("/new", AsyncError(User.create));
router.post("/", AsyncError(User.post));
module.exports = router;