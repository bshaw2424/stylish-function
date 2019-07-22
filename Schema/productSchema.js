const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    }, 
    main_image: {
        type: String,
        required: true, 
    }, 
    sub_image: [String],
    category: { 
        type: String,
        required: true
     },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }, 
    created_on: {
        type: Date,
        default: Date.now()
    }
})




module.exports = productSchema;