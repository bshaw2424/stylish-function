const express = require('express');
const router = express.Router();
const featuredModel = require("../models/featuredModel");

router.get("/", async (req, res) =>{
  try {
    res.render("admin-featured/featuredIndex")
  } catch (error) {
    if(error){
      console.log(error)
    }
  }
});

router.get("/products", async (req, res) =>{
  try {
    const featuredProducts = await featuredModel.find().exec();
    res.render("admin-featured/featuredProducts", {featuredProducts})
  } catch (error) {
    console.log(error)
  }
});

router.get("/products/new", (req, res) =>{
  res.render("admin-featured/featuredForm")
});

router.post("/products", async (req, res) =>{
  try {
    const feature = await featuredModel.create(req.body.featured);
    console.log(feature)
    res.redirect("/")
  } catch (error) {
    console.log(error)
  }
});

router.get("/product/:id", async (req, res) => {
  try {
    const show = await featuredModel.findById(req.params.id).exec()
    res.render("admin-featured/featuredShowPage", {show})
  } catch (error)  {
    console.log(error)
  }
});

router.get("/products/:id/edit", async (req, res) =>{
  try {
    const featureProduct = await featuredModel.findById().exec();
    res.render("admin-featured/featuredEditPage", {featureProduct})
  } catch (error) {
    console.log(errror)
  }
});

router.put("/products/:id", async (req, res) =>{
  try {
    await featured.findByIdAndUpdate(req.params.id);
    res.redirect("/product")
  } catch (error) {
    console.log(error)
  } 
});

router.delete("products/:id", async (req, res) => {
  try{
   await featured.findByIdAndRemove(req.params.id);
  console.log("item(s) was removed successfully")
  res.redirect("/")
  }catch(error){
    console.log(error)
  }

})
module.exports = router;