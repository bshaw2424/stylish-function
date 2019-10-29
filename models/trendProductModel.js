const mongoose = require('mongoose');
const { model } = mongoose;
const trendingSchema = require('../Schema/trendProductSchema');
const trendingModel = model('trend', trendingSchema);

const trendingProducts = new trendingModel({
	title: "trending product test",
	main_image: "https://bit.ly/2phYaBh",
	price: 40054
});

// trendingProducts.save(async(err, trending) =>{
//   try {
//     const trend = await trending;
//     console.log(trend)
//     console.log('trending saved to database')
//   } catch (error) {
//     console.log(error)
//   }
// });

module.exports = trendingModel;