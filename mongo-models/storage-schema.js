const mongoose = require('mongoose');
const {Schema} = mongoose;

const storageSchema = new Schema({
    title: {
        type: String,
        required: true
    }, 
    main_image: {
        type: String,
        required: true
    }, 
    sub_image: [String],
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = storageSchema;