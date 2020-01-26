const express = require('express');
const router = express.Router();
const productsModel = require('../models/productsModel');

router.get("/", (req, res) => res.render("admin/login"));

router.get("/index", async (req, res) =>{
  try {
    const allProducts = await productsModel.find().exec();
    const sofaProducts = await productsModel
					.find({ main_category: "Sofa" })
					.exec();
				const tableProducts = await productsModel
					.find({ main_category: "Table" })
          .exec();
        const featuredProducts = await productsModel.find({main_category: "featured"}).exec()
    res.render("admin/admin-index", { allProducts, sofaProducts, tableProducts, featuredProducts })
  } catch (error) {
    if(error){
      res.render("pages/error404Page")
    }
  }
    
});

// index product route
router.get("/products", async (req, res) =>{
  try {
    const indexProducts = await productsModel.find({main_category: "Sofa"}).exec();
    const tableIndex = await productsModel.find({main_category: "Table"}).exec();
    const featuredProducts = await productsModel.find({main_category: "featured"}).exec();
    res.render("admin/products-index", { indexProducts, tableIndex, featuredProducts });
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
    res.redirect("/admin/index")
  } catch (error) {
    if(error){
      console.log(error)
      res.render("pages/error404Page")
    }
  }
});

// product show page
router.get("/products/:id", async (req, res) =>{
  try {
    const product = await productsModel.findById(req.params.id).exec();
    res.render("admin/productShowPage", { product })
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
    res.redirect(`/admin/products/${req.params.id}`)
  } catch (error) {
    if(error){
      res.render("pages/error404Page")
    }
  }
});

// delete a product / redirect
router.delete("/products/:id", async (req, res) =>{
  try {
     await productsModel.findByIdAndRemove(req.params.id);
    console.log(`${req.params.id} was removed successfull!`);
    res.redirect('/admin/products');
  } catch (error) {
    if(error){
      res.render("pages/error404Page")
    }
  }
});

module.exports = router;