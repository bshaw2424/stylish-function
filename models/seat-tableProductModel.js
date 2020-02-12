const mongoose = require('mongoose');
const productSchema = require('../Schema/productSchema');
const seatingProduct = mongoose.model('SeatingProduct', productSchema);
const tableProduct = mongoose.model('TableProduct', productSchema);

// const tableProducts = new tableProduct ({
// 	title: 'table product',
// 	category: 'extendable',
// 	product_price: 22400,
// 	main_image: 'https://bit.ly/2pipyz8',
// 	sub_images: null,
// 	product_description: 'this is a table example description'
// });

// tableProducts.save((err, product) =>{
//   if(err){
//     console.log(err)
//   } else {
//     console.log('saved to database');
//     console.log(product)
//   }
// });

module.exports = { tableProduct, seatingProduct };