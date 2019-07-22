const mongoose    = require('mongoose');
const { Schema }  = mongoose;
 productSchema = require('../Schema/productSchema');
const productModel = mongoose.model('product', productSchema);


// let Products = new productModel({
//     title: 'lounge Chair',
//     main_image: 'https://bit.ly/2ELcwxX',
//     sub_image:  ['https://bit.ly/2ELcwxX','https://bit.ly/2ELcwxX'],
//     price: 218.99,
//     category: 'storage',
//     description: 'Lend any arrangement a midcentury-inspired touch with this lounge chair. The frame of this piece is crafted from solid wood, upholstered with a polyester blend in a solid color, and features button tufted details, and square arms. It is perfectly at home in modern and contemporary aesthetics. This chair contains flame retardant material, and therefore is fire resistant. To clean, we recommend wiping with a damp cloth. This lounge chair requires assembly upon arrival.',
// });

// Products.save((err, product) =>{
//     if(err) {
//         console.log(`there was a error ${err}`)
//     } else {
//         console.log("product saved to database");
//         console.log(product)
//     }
// })

module.exports = productModel;
