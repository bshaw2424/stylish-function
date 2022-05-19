"use strict";

const subdomain = require("express-subdomain");
const express = require("express");
const app = express();

const adminRouter = express.Router({ mergeParams: true });
const { AsyncError } = require("../../utility/error");
const passport = require("passport");
const User = require("../../controllers/admin/users");

adminRouter.get("/", AsyncError(User.index));
adminRouter.get("/new", AsyncError(User.create));
adminRouter.post("/", AsyncError(User.post));

app.use(subdomain("admin", adminRouter));
module.exports = adminRouter;
