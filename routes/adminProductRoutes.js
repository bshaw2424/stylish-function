const express = require('express');
const router = express.Router();
const productsModel = require('../models/productsModel');

router.get("/", (req, res) => res.render("admin/admin-index"));

router.get("/login", (req, res) =>{
    res.render("admin/login")
});

// index product route
router.get("/products", (req, res) =>{
   
  res.render("admin/products");
})

// show new product form
router.get("/products/new", (req, res) =>{
  res.render("admin/products-form")
});

// create a new product
router.post("/products", (req, res) =>{
  
  res.render("admin/products", {});
});

// product show page
router.get("/products/:id", (req, res) =>{
  res.send(req.params.id + " show page")
});

// edit product form
router.get("/products/:id/edit", (req, res) => {
	res.send(req.params.id + " this is the edit section");
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