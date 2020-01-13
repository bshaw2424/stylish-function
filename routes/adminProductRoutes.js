const express = require('express');
const router = express.Router();
const productsModel = require('../models/productsModel');

router.get("/", (req, res) => res.render("admin/admin-index"));

router.get("/login", (req, res) =>{
    res.render("admin/login")
});

// index product route
router.get("/products", async (req, res) =>{
  try {
    const indexProducts = await productsModel.find({}).exec();
     res.render("admin/products-index", { indexProducts });
  } catch (error) {
  //  fix this to show a better error meassage
     res.render("pages/error404Page")
  }
 
});

// show new product form
router.get("/products/new", (req, res) =>{
  res.render("admin/products-form")
});

// create a new product
router.post("/products", (req, res) =>{
  const response = req.body.title
  res.render("admin/products-index", {pick: response});
});

// product show page
router.get("/products/:id", async (req, res) =>{
  try {
    const product_show_page = await productsModel.findById(req.params.id).exec();
    res.render("admin/productShowPage", { product_show_page })
  } catch (error) {
    res.send(error)
    res.redirect("admin/product-index")
  }
});

// edit product form
router.get("/products/:id", async (req, res) => {
  try {
    const product_edit_page = await productsModel
					.findById(req.params.id)
          .exec();
    res.render("admin/product_edit", { product_edit_page });
  } catch (error) {
   res.send(error) 
  }
  
  
});

// update a product / redirect
router.put("/products/:id", (req, res) =>{
  res.send("this is the put section")
});

// delete a product / redirect
router.delete("/products/:id", (req, res) =>{
  res.send("this is the delete section")
});

module.exports = router;