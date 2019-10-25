const mongoose = require("mongoose");
const featuredSchema = require('../Schema/featuredSchema');
const featuredModel = mongoose.model('feature', featuredSchema);

let featuredProducts = new featuredModel({
	title: 'chair section',
	title_description: 'modular chairs to help save space',
	image: 'this is where the image will go.'
});

featuredProducts.save( featured => {
	try {
		
		console.log(featured)
	} catch (error) {
		console.log(`Error: ${error}`)
	}
});

module.exports = featuredModel;
