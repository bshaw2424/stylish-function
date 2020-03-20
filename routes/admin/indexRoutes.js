const express = require("express");
const router = express.Router();

const Admin = require("../../controllers/adminController");

router.get("/", Admin.logIn);
router.get("/index", Admin.index);
router.get("/logout", Admin.logOut);

module.exports = router;
