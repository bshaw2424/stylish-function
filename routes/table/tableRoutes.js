const express = require("express");
const router = express.Router();
const productsModel = require("../models/productsModel");

router.get("/tables", async (req, res) =>{
  try {
    const tableProducts = await productsModel.find({main_category: "Table"}).where("ma");
    res.render("pages/tables", { tableProducts })
  } catch (error) {
    res.render("pages/error404Page")
  }
});

module.exports = router;