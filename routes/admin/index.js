"use strict";

const subdomain = require("express-subdomain");
const express = require("express");
const app = express();

const adminRouter = express.Router();
const passport = require("passport");
const { AsyncError } = require("../../utility/error");
const { checkAuthentication } = require("../../middleware");
const Admin = require("../../controllers/admin/admin");

adminRouter.get("/dashboard", checkAuthentication, AsyncError(Admin.index));
adminRouter.get("/", AsyncError(Admin.login));
adminRouter.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  AsyncError(Admin.post),
);
adminRouter.get("/logout", AsyncError(Admin.logout));

app.use(subdomain("admin", adminRouter));
module.exports = adminRouter;
