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
    if(error){
     res.render("pages/error404Page")
    }
  }
 
});

// show new product form
router.get("/products/new", (req, res) =>{
  res.render("admin/products-form")
});

// create a new product
router.post("/products", async (req, res) =>{
  try {
    const added_product = await productsModel.create(req.body.product);
    console.log(added_product)
    res.redirect("/admin/products")
  } catch (error) {
    if(error){
      res.render("pages/error404Page")
    }
  }
});

// product show page
router.get("/products/:id", async (req, res) =>{
  try {
    const product_show_page = await productsModel.findById(req.params.id).exec();
    res.render("admin/productShowPage", { product_show_page })
  } catch (error) {
    if(error){
      res.redirect("/admin/product-index")
    }
  }
});

// edit product form
router.get("/products/:id/edit", async (req, res) => {
  try {
    const product = await productsModel
					.findById(req.params.id)
          .exec();
    res.render("admin/product_edit", { product });
  } catch (error) {
    if(error){
      res.render("pages/error404Page");
    }
  }
});

// update a product / redirect
router.put("/products/:id", async (req, res) =>{
  try {
    const put_request = await productsModel.findByIdAndUpdate(req.params.id, req.body.product);
    console.log(put_request)
    res.redirect(`/admin/products`)
  } catch (error) {
    if(error){
      res.render("pages/error404Page")
    }
  }
});

// delete a product / redirect
router.delete("/products/:id", (req, res) =>{
  res.send("this is the delete section")
});

module.exports = router;