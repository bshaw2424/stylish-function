const mongoose = require("mongoose");
const featuredProductSchema = require("../Schema/featuredProductsSchema");
const featuredModel = mongoose.model("featureProduct", featuredProductSchema);

const featuredList = new featuredModel({
	title: "sample product",
	main_category: "Sofa",
	sub_category: "modular_sofa",
	product_price: 2400,
	main_image: "https://bit.ly/2pipyz8",
	sub_images: null,
	product_description: "this is a example description",
});

// featuredList.save((err, product) =>{
//   if(err){
//     console.log(err)
//   } else {
//     console.log('saved to database');
//     console.log(product)
//   }
// });

module.exports = featuredModel;
