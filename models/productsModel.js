const mongoose = require('mongoose');
const productSchema = require('../Schema/productsSchema');
const productModel = mongoose.model('product', productSchema);

const productList = new productModel ({
	title: 'sample product',
	main_category: 'Sofa',
	sub_category: 'modular_sofa',
	product_price: 2400,
	main_image: 'https://bit.ly/2pipyz8',
	sub_images: null,
	product_description: 'this is a example description'
});

productList.save((err, product) =>{
  if(err){
    console.log(err)
  } else {
    console.log('saved to database');
    console.log(product)
  }
});

module.exports = productModel;