"use strict";

module.exports.convertPriceWithComma = price =>
  price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
