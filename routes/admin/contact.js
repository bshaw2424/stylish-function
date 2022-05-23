"use strict";

const subdomain = require("express-subdomain");
const express = require("express");
const app = express();

const adminRouter = express.Router();
const { AsyncError } = require("../../utility/error");
const { checkAuthentication } = require("../../middleware");
// contact admin controller
const Contact = require("../../controllers/admin/contact");

adminRouter.get("/", checkAuthentication, AsyncError(Contact.index));
adminRouter.get("/new", Contact.create);
adminRouter.post("/", AsyncError(Contact.post));
adminRouter.get("/sortDesc/:sort", AsyncError(Contact.descSort));
adminRouter.get("/sortAsc/:sort", AsyncError(Contact.ascSort));
adminRouter.get("/:id", AsyncError(Contact.showPage));
adminRouter.delete("/:id", AsyncError(Contact.delete));

app.use(subdomain("admin", adminRouter));
module.exports = adminRouter;
