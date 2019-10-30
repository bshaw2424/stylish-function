const mongoose = require("mongoose");
const featureSchema = require("../Schema/featuredProductSchema");
const featureModel = mongoose.model("featured", featureSchema);

const featuredProducts = new featureModel({
	title: "featured example title",
	main_image: "https://bit.ly/2phYaBh",
	sub_images: ["https://bit.ly/2phYaBh", 'https://bit.ly/2phYaBh'],
	price: 4234,
});

// featuredProducts.save( async(err, feature) =>{
//   try {
//     const data = await feature;
//     console.log(data)
//   } catch (error) {
//     console.log(error)
//   }
// });

module.exports = featureModel;
