const mongoose = require('mongoose');
const {
    Schema
} = mongoose;
const productSchema = require('../Schema/productSchema');
const tableModel = mongoose.model('table', productSchema);


// let tableProducts = new tableModel({
//     title: 'lounge Chair',
//     main_image: 'https://bit.ly/31gGVhh',
//     sub_image: ['https://bit.ly/2STDh9Q', 'https://bit.ly/2K5jfGK', 'https://bit.ly/2yqblB7'],
//     price: 218.99,
//     category: 'sofa',
//     description: 'Lend any arrangement a midcentury-inspired touch with this lounge chair. The frame of this piece is crafted from solid wood, upholstered with a polyester blend in a solid color, and features button tufted details, and square arms. It is perfectly at home in modern and contemporary aesthetics. This chair contains flame retardant material, and therefore is fire resistant. To clean, we recommend wiping with a damp cloth. This lounge chair requires assembly upon arrival.',
// });

// tableProducts.save((err, tables) => {
//     if (err) {
//         console.log(`there was a error ${err}`)
//     } else {
//         console.log("product saved to database");
//         console.log(tables)
//     }
// });

module.exports = tableModel;