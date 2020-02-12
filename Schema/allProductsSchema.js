const mongoose = require("mongoose");
const { Schema } = mongoose;
const { seatingProduct, tableproduct } = require('../models/seat-tableProductModel');

const allProductsSchema = new Schema({
	seatingProducts: [{
    type: Schema.Types.ObjectId, 
    ref: 'SeatingProduct', 
    requred: true
  }],
  tableProducts: [{
    type: Schema.Types.ObjectId,
    refs: 'TableProduct',
    required: true
  }]
});

module.exports = allProductsSchema;
