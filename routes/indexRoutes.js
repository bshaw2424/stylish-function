const express = require('express');
const router = express.Router();
const seatingModel = require('../models/productsModel')

router.get("/", (req, res) =>{
  res.render("pages/index");
});

router.get("/cat/seating", async (req, res) =>{
  try {
    const seatingProducts = await seatingModel.find({main_category: "Sofa"});
    res.render("pages/seating", { seatingProducts })
  } catch (error) {
    console.log("Error " + error);
  }
});

router.get("/cat/tables", (req, res) =>{
  res.render("pages/tables")
});

module.exports = router;