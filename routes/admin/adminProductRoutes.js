const express = require('express');
const router = express.Router();
const products = require('../../models/seatingTableProductModel');


router.get("/", (req, res) => res.render("admin/login"));

router.get("/index", async (req, res) =>{
  try {
    const allProducts = await products.find().exec();
    res.render("admin/admin-index", { allProducts })
  } catch (error) {
    if(error){
      res.render("pages/error404Page")
    }
  }
    
});

// index product route
router.get("/products", async (req, res) =>{
  try {
    const indexProducts = await products.find({}).exec();
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
    await products.create(req.body.product);
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
    const product = await products.findById(req.params.id).exec();
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
    const product = await products
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
    const put_request = await products.findByIdAndUpdate(req.params.id, req.body.product);
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
     await products.findByIdAndRemove(req.params.id);
    console.log(`${req.params.id} was removed successfull!`);
    res.redirect('/admin/products');
  } catch (error) {
    if(error){
      res.render("pages/error404Page")
    }
  }
});

module.exports = router;