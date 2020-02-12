const mongoose = require("mongoose");
const allProductsSchema = require("../Schema/allproductsSchema");
const {seatingProduct, tableProduct } = require('../models/seat-tableProductModel');
const allProducts = mongoose.model("Product", allProductsSchema);

const products = new allProducts({
	seatingProduct: ...
});

products.save(err =>{
  if(err) return err;

  const seating = new seatingProduct({
    title: 'table product',
	  category: 'extendable',
	  product_price: 22400,
	  main_image: 'https://bit.ly/2pipyz8',
	  sub_images: null,
	  product_description: 'this is a table example description'
  });

  seating.save((err, product) =>{
    if(err) {
      console.log(err)
    }
  })

})
module.exports = allProducts;
