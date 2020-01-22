const express = require('express');
const router = express.Router();
const productsModel = require('../models/productsModel');

router.get("/seating", async (req, res) =>{
  try {
    const seatingProducts = await productsModel.find({main_category: "Sofa"});
    res.render("pages/seating", { seatingProducts })
  } catch (error) {
    if(error){
      res.render("pages/error404Page")
    }
  }
});

router.get("/tables", async (req, res) =>{
  try {
    const tableProducts = await productsModel.find({main_category: "Table"});
    res.render("pages/tables", { tableProducts })
  } catch (error) {
    res.render("pages/error404Page")
  }
});

module.exports = router;