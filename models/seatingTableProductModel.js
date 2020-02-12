const mongoose = require('mongoose');
const products = require('../Schema/productSchema');

// const product = new products ({
// 	title: 'main product',
//     main_category: 'seating',
// 	sub_category: 'modular',
// 	price: 224400,
// 	main_image: 'https://bit.ly/2pipyz8',
// 	sub_images: null,
// 	product_description: 'this is a table example description'
// });

// product.save((err, product) =>{
//   if(err){
//     console.log(err)
//   } else {
//     console.log('saved to database');
//     console.log(product)
//   }
// });

module.exports = products;