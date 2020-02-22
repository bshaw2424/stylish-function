const express = require("express");
const router = express.Router();

const adminMethods = require("../../controllers/adminController");
const Admin = new adminMethods();

router.get("/", Admin.adminLogIn);
router.get("/index", Admin.adminMainIndexPage);


module.exports = router;
