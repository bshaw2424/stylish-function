const express = require("express");
const router = express.Router();

const Admin = require("../../controllers/adminControllers/adminController");

router.get("/", Admin.logIn);
router.get("/dashboard", Admin.index);
router.get("/logout", Admin.logOut);

module.exports = router;
