const express = require('express');
const router = express.Router();



// seating routes
router.get("/seating", (req, res) => res.render("pages/seating"))

router.get("/storage", (req, res) => res.render("pages/storage"))

router.get("/table", (req, res) => res.render("pages/table"))

module.exports = router;