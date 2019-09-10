"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var tableList = require('../models/tableModel');

var TableProducts =
/*#__PURE__*/
function () {
  function TableProducts() {
    _classCallCheck(this, TableProducts);
  }

  _createClass(TableProducts, [{
    key: "tableIndexProductRoute",
    value: function () {
      var _tableIndexProductRoute = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(query) {
        var tableIndex;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return tableList.find(query).exec();

              case 3:
                tableIndex = _context.sent;
                return _context.abrupt("return", tableIndex);

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

      function tableIndexProductRoute(_x) {
        return _tableIndexProductRoute.apply(this, arguments);
      }

      return tableIndexProductRoute;
    }()
  }, {
    key: "tableNewestProducts",
    value: function () {
      var _tableNewestProducts = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(query) {
        var tableRecent;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return tableList.find(query).sort({
                  created_on: -1
                }).exec();

              case 3:
                tableRecent = _context2.sent;
                return _context2.abrupt("return", tableRecent);

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

      function tableNewestProducts(_x2) {
        return _tableNewestProducts.apply(this, arguments);
      }

      return tableNewestProducts;
    }()
  }, {
    key: "tableHighPriceProducts",
    value: function () {
      var _tableHighPriceProducts = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(query) {
        var tableHighPrice;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return tableList.find(query).sort({
                  price: -1
                }).exec();

              case 3:
                tableHighPrice = _context3.sent;
                return _context3.abrupt("return", tableHighPrice);

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

      function tableHighPriceProducts(_x3) {
        return _tableHighPriceProducts.apply(this, arguments);
      }

      return tableHighPriceProducts;
    }()
  }, {
    key: "tableLowPriceProducts",
    value: function () {
      var _tableLowPriceProducts = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(query) {
        var tableLowPrice;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return tableList.find(query).sort({
                  price: 1
                }).exec();

              case 3:
                tableLowPrice = _context4.sent;
                return _context4.abrupt("return", tableLowPrice);

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

      function tableLowPriceProducts(_x4) {
        return _tableLowPriceProducts.apply(this, arguments);
      }

      return tableLowPriceProducts;
    }()
  }, {
    key: "tableShowPage",
    value: function () {
      var _tableShowPage = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(req, res) {
        var params, _tableShowPage2;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                params = req.params;
                _context5.prev = 1;
                _context5.next = 4;
                return tableList.findById(params.id).exec();

              case 4:
                _tableShowPage2 = _context5.sent;
                return _context5.abrupt("return", _tableShowPage2);

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

      function tableShowPage(_x5, _x6) {
        return _tableShowPage.apply(this, arguments);
      }

      return tableShowPage;
    }()
  }]);

  return TableProducts;
}();

module.exports = TableProducts;