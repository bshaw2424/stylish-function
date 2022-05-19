"use strict";

const subdomain = require("express-subdomain");
const express = require("express");
const app = express();

const adminRouter = express.Router();
const AdminArticles = require("../../controllers/admin/featured");

adminRouter.get("/", AdminArticles.index);
adminRouter.get("/new", AdminArticles.create);
adminRouter.post("/", AdminArticles.post);
adminRouter.get("/:id", AdminArticles.showPage);
adminRouter.get("/:id/edit", AdminArticles.edit);
adminRouter.put("/:id", AdminArticles.update);
adminRouter.delete("/:id", AdminArticles.delete);

app.use(subdomain("admin", adminRouter));
module.exports = adminRouter;
