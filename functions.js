"use strict";

module.exports.convertPriceWithComma = price => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

module.exports.deleteAjaxButton = async (url, method) => {
  await fetch(url, { method });
};
