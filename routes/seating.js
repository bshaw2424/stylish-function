const express = require('express');
const router = express.Router();


// seating routes
router.get("/seating", (req, res) => res.render("pages/seating"))
router.get("/seating/category/:category", (req, res) => res.send("this is the sofa section"))
router.get("/seating/category/:category/:id", (req, res) => res.render("pages/example"))



module.exports = router;