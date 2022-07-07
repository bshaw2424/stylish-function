"use strict";

const subdomain = require("express-subdomain");
const express = require("express");
const app = express();

const adminRouter = express.Router();
const { AsyncError } = require("../utility/error");
const { checkAuthentication } = require("../middleware");
const Contact = require("../controllers/contact");

//adminRouter.get("/", checkAuthentication, AsyncError(Contact.index));
adminRouter.get("/new", Contact.create);
adminRouter.post("/", AsyncError(Contact.post));

app.use(subdomain("admin", adminRouter));
module.exports = adminRouter;
