webpackHotUpdate("static/development/pages/index.js",{

/***/ "./Components/CarCard.js":
/*!*******************************!*\
  !*** ./Components/CarCard.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");






var _jsxFileName = "/Users/mariusgrondahl/Documents/GitHub/elbilvelger/elbilvelgeren/Components/CarCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background-size: cover;\n  background-position: top center;\n  padding: 0rem;\n  margin-bottom: 1.3rem;\n  height: 35vh;\n  color: #fff;    \n\n    .imgTitle{\n      color: #fff;\n      text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.6);\n      line-height: 2rem;\n    }\n  \n   ul {\n      width: 100%;\n      list-style: none;\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      text-align: center;\n      margin: 0 ;\n      padding: 0;\n  }\n  \n    ul li{\n      margin: 1rem;\n  }\n  \n  .cardFooter{\n      position: relative;\n      bottom: -4px;\n      display: flex;\n      flex-direction: row;\n      padding: .5rem;\n      background: #fafafa;\n      color: #2d2d2d;\n      border-bottom-left-radius: 5px;\n      border-bottom-right-radius: 5px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var CardWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject());

var CarCard =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CarCard, _Component);

  function CarCard() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CarCard);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CarCard).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CarCard, [{
    key: "render",
    value: function render() {
      var imgStyle = {
        backgroundImage: "url(" + "img/" + this.props.bildeURL + ")"
      };
      return __jsx(CardWrapper, {
        style: imgStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx("h2", {
        className: "imgTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, this.props.modell, " "), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, this.props.merke, " "), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, this.props.type)), __jsx("div", {
        className: "cardFooter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaMapPin"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      })), " ", this.props.rekkevidde, " km | ", this.props.pris, ",-"), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaBookmark"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      })))));
    }
  }]);

  return CarCard;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CarCard);

/***/ })

})
//# sourceMappingURL=index.js.46b43e816fd274833b1d.hot-update.js.map