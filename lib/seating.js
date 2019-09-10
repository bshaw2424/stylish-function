"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var seatingList = require('../models/seatingModel');

var SeatingProducts =
/*#__PURE__*/
function () {
  function SeatingProducts() {
    _classCallCheck(this, SeatingProducts);
  }

  _createClass(SeatingProducts, [{
    key: "seatingIndexProductRoute",
    value: function () {
      var _seatingIndexProductRoute = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(query) {
        var seatingIndex;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return seatingList.find(query).exec();

              case 3:
                seatingIndex = _context.sent;
                return _context.abrupt("return", seatingIndex);

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

      function seatingIndexProductRoute(_x) {
        return _seatingIndexProductRoute.apply(this, arguments);
      }

      return seatingIndexProductRoute;
    }()
  }, {
    key: "seatingNewestProducts",
    value: function () {
      var _seatingNewestProducts = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(query) {
        var seatingRecent;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return seatingList.find(query).sort({
                  created_on: -1
                }).exec();

              case 3:
                seatingRecent = _context2.sent;
                return _context2.abrupt("return", seatingRecent);

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

      function seatingNewestProducts(_x2) {
        return _seatingNewestProducts.apply(this, arguments);
      }

      return seatingNewestProducts;
    }()
  }, {
    key: "seatingHighPriceProducts",
    value: function () {
      var _seatingHighPriceProducts = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(query) {
        var seatingHighPrice;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return seatingList.find(query).sort({
                  price: -1
                }).exec();

              case 3:
                seatingHighPrice = _context3.sent;
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

      function seatingHighPriceProducts(_x3) {
        return _seatingHighPriceProducts.apply(this, arguments);
      }

      return seatingHighPriceProducts;
    }()
  }, {
    key: "seatingLowPriceProducts",
    value: function () {
      var _seatingLowPriceProducts = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(query) {
        var seatingLowPrice;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return seatingList.find(query).sort({
                  price: 1
                }).exec();

              case 3:
                seatingLowPrice = _context4.sent;
                return _context4.abrupt("return", seatingLowPrice);

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

      function seatingLowPriceProducts(_x4) {
        return _seatingLowPriceProducts.apply(this, arguments);
      }

      return seatingLowPriceProducts;
    }()
  }, {
    key: "seatingShowPage",
    value: function () {
      var _seatingShowPage = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(query) {
        var _seatingShowPage2;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return seatingList.findById(query).exec();

              case 3:
                _seatingShowPage2 = _context5.sent;
                return _context5.abrupt("return", _seatingShowPage2);

              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5["catch"](0);
                console.log("Error: ".concat(_context5.t0));

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 7]]);
      }));

      function seatingShowPage(_x5) {
        return _seatingShowPage.apply(this, arguments);
      }

      return seatingShowPage;
    }()
  }]);

  return SeatingProducts;
}();

module.exports = SeatingProducts;