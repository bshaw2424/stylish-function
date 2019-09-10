"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var storageList = require('../models/storageModel');

var StorageProducts =
/*#__PURE__*/
function () {
  function StorageProducts() {
    _classCallCheck(this, StorageProducts);
  }

  _createClass(StorageProducts, [{
    key: "storageIndexProductRoute",
    value: function () {
      var _storageIndexProductRoute = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(query) {
        var storageIndex;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return storageList.find(query).exec();

              case 3:
                storageIndex = _context.sent;
                return _context.abrupt("return", storageIndex);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log("Error: ".concat(_context.t0));

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function storageIndexProductRoute(_x) {
        return _storageIndexProductRoute.apply(this, arguments);
      }

      return storageIndexProductRoute;
    }()
  }, {
    key: "storageNewestProducts",
    value: function () {
      var _storageNewestProducts = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(query) {
        var storageRecent;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return storageList.find(query).sort({
                  created_on: -1
                }).exec();

              case 3:
                storageRecent = _context2.sent;
                return _context2.abrupt("return", storageRecent);

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                console.log("Error: ".concat(_context2.t0));

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      function storageNewestProducts(_x2) {
        return _storageNewestProducts.apply(this, arguments);
      }

      return storageNewestProducts;
    }()
  }, {
    key: "storageHighPriceProducts",
    value: function () {
      var _storageHighPriceProducts = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(query) {
        var storageHighPrice;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return storageList.find(query).sort({
                  price: -1
                }).exec();

              case 3:
                storageHighPrice = _context3.sent;
                return _context3.abrupt("return", seatingHighPrice);

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                console.log("Error: ".concat(_context3.t0));

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }));

      function storageHighPriceProducts(_x3) {
        return _storageHighPriceProducts.apply(this, arguments);
      }

      return storageHighPriceProducts;
    }()
  }, {
    key: "storageLowPriceProducts",
    value: function () {
      var _storageLowPriceProducts = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(query) {
        var storageLowPrice;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return storageList.find(query).sort({
                  price: 1
                }).exec();

              case 3:
                storageLowPrice = _context4.sent;
                return _context4.abrupt("return", storageLowPrice);

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                console.log("Error: ".concat(_context4.t0));

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 7]]);
      }));

      function storageLowPriceProducts(_x4) {
        return _storageLowPriceProducts.apply(this, arguments);
      }

      return storageLowPriceProducts;
    }()
  }, {
    key: "storageShowPage",
    value: function () {
      var _storageShowPage = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(req, res) {
        var params, _storageShowPage2;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                params = req.params;
                _context5.prev = 1;
                _context5.next = 4;
                return storageList.findById(params.id).exec();

              case 4:
                _storageShowPage2 = _context5.sent;
                return _context5.abrupt("return", _storageShowPage2);

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](1);
                console.log("Error: ".concat(_context5.t0));

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[1, 8]]);
      }));

      function storageShowPage(_x5, _x6) {
        return _storageShowPage.apply(this, arguments);
      }

      return storageShowPage;
    }()
  }]);

  return StorageProducts;
}();

module.exports = StorageProducts;