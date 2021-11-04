const express = require("express");
const router = express.Router();
const passport = require("passport");
const { asyncError } = require("../../utility/error");

const Admin = require("../../controllers/admin/admin");
const { response } = require("express");

router.get("/dashboard", asyncError(Admin.index));
router.get("/login", asyncError(Admin.login));
router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/admin/login" }),
  asyncError(Admin.post),
);
router.get("/logout", asyncError(Admin.logout));

module.exports = router;
