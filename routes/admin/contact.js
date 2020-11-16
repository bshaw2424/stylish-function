const express = require("express");
const router = express.Router();

const contacts = require("../../controllers/adminControllers/contactController");

router.get("/messages", contacts.index);
router.get("/messages/new", contacts.create);
router.post("/messages", contacts.post);
router.get("/messages/:id", contacts.showPage);
router.delete("/messages/:id", contacts.delete);

module.exports = router;
