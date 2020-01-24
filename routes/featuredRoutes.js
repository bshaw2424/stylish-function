const express = require('express');
const router = express.Router();
const featuredModel = require("../models/featuredProductModel");

router.get("/", async (req, res) =>{
  try {
    const featuredProducts = await featuredModel.find().exec();
    res.render("pages/featured", { featuredProducts });
  } catch (error) {
    if(error){
      res.render("pages/error404Page");
    }
  }
});

module.exports = router;