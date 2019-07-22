const express = require('express');
const router = express.Router({
  mergeParams: true
});
const mongoose = require('mongoose');
const productList = require('../models/productModel');

// nav links
router.get("/product-guide", (req, res) => {
  productList.find({}, (err, products) => {
    if (err) {
      console.log(`Error: ${err}`)
    } else {
      res.render("pages/product_guide", {
        products: products
      });
    }
  });
});

router.get("/inspiration", (req, res) => {
  productList.find({}, (err, seating) => {
    if (err) {
      console.log(`Error: ${err}`)
    } else {
      res.render("pages/inspiration");
    }
  });
});

router.get("/resources", (req, res) => {
  productList.find({}, (err, seating) => {
    if (err) {
      console.log(`Error: ${err}`)
    } else {
      res.send("this is the resource page")
      // res.render("pages/seating", {seats: seating}); 
    }
  });
});

// product links
router.get("/seating", (req, res) => {
  productList.find({
    category: 'seating'
  }, (err, seating) => {
    if (err) {
      console.log(`Error: ${err}`)
    } else {
      res.render("pages/seating", {
        seating: seating
      });
    }
  });
});

router.get("/storage", (req, res) => {
  productList.find({
    category: 'storage'
  }, (err, storage) => {
    if (err) {
      console.log(`Error: ${err}`)
    } else {
      res.render("pages/storage", {
        storage: storage
      });
    }
  });
});

router.get("/table", (req, res) => {
  productList.find({
    category: 'table'
  }, (err, table) => {
    if (err) {
      console.log(`Error: ${err}`)
    } else {
      res.render("pages/table", {
        table: table
      });
    }
  });
});

router.get("/:id", (req, res) => {
  productList.findById(req.params.id, (err, showing) => {
    if (err) {
      console.log(`Error: ${err}`)
    } else {
      res.render("pages/productShowPage", {
        show: showing
      });
    }
  })
});


// Catch all 404 route
// router.get("*", (req, res) => res.render('pages/error'));


// // newer filter route
// router.get("/newest", (req, res) => {
//   productList
//     .find()
//     .sort({created_on: -1})
//     .exec((err, newestProducts) => {
//       if(err) {
//         console.log(err)
//     } else {
//         res.render("pages/seatingNewest", {newest_seats: newestProducts});
//     }
//   });
// });

// // low price filter route
// router.get("/low-price", (req, res) => {
//     productList
//       .find()
//       .sort({price: 1})
//       .exec((err, low_price) => {
//         if(err) {
//           console.log(err)
//       } else {
//           res.render("pages/seatingLowPrice", {lowPricing: low_price, sortBy: req.query.lowPrice})
//       }
//     });
//   });

// // high price filter route
//   router.get("/high-price", (req, res) => {
//     productList
//       .find()
//       .sort({price: -1})
//       .exec((err, high_price) => {
//         if(err) {
//           console.log(err)
//       } else {
//           res.render("pages/seatingHighPrice", {highPricing: high_price})
//       }
//     });
//   });




module.exports = router;