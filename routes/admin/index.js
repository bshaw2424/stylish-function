"use strict";

const express = require("express");

const router = express.Router();

const passport = require("passport");

const { AsyncError } = require("../../utility/error");

const Admin = require("../../controllers/admin/admin");

const { response } = require("express");

router.get("/dashboard", AsyncError(Admin.index));
router.get("/login", AsyncError(Admin.login));
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/admin/login",
  }),
  AsyncError(Admin.post),
);
router.get("/logout", AsyncError(Admin.logout));
module.exports = router;
