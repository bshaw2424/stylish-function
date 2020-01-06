const express = require('express');
const router = express.Router();
const seatingModel = require('../models/productsModel');
const tablesModel = require('../models/productsModel');

router.get("/seating", async (req, res) =>{
  try {
    const seatingProducts = await seatingModel.find({main_category: "Sofa"});
    res.render("pages/seating", { seatingProducts })
  } catch (error) {
    console.log("Error " + error);
  }
});

router.get("/tables", async (req, res) =>{
  try {
    const tableProducts = await tablesModel.find({main_category: "table"});
    res.render("pages/tables", { tableProducts })
  } catch (error) {
    console.log("Error " + error)
  }
});

module.exports = router;