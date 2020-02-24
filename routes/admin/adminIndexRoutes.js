const express = require("express");
const router = express.Router();

const Admin = require("../../controllers/adminController");
const admin = new Admin();

router.get("/", admin.logIn);
router.get("/index", admin.index);

module.exports = router;
