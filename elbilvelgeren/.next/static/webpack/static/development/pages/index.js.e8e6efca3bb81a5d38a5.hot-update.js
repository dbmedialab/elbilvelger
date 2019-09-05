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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "/Users/mariusgrondahl/Documents/GitHub/elbilvelger/elbilvelgeren/Components/CarCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\ndisplay: flex;\nflex-direction: column;\njustify-content: flex-end;\nbackground-size: cover;\nbackground-position: center center;\nbackground-image: url(/static/img/", ");\npadding: 0;\nmargin-bottom: 1.3rem;\nheight: 35vh;\nmax-width: 1024px;\ncolor: #fff;  \nborder-bottom-left-radius: 5px;\nborder-bottom-right-radius: 5px; \n\n  .imgTitle{\n    position: relative;\n    color: #fff;\n    background: linear-gradient(to top, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0) 100%);\n    width: auto;\n    bottom: 0;\n    font-weigth: bold;\n    padding: 2rem 0 .7rem 0rem;\n    font-size: 1.4rem;\n    text-align: center;\n    font-weight: bold;\n    text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);\n  }\n\n  ul {\n    width: 100%;\n    list-style: none;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    margin: 0 ;\n    padding: 0;\n }\n\n  ul li{\n    margin: 1rem;\n  }\n\n  .cardFooter{\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    padding: .5rem;\n    background: rgba(0,0,0,0.8);\n    color: #fff;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n\n    li{\n      font-size: 1.2rem;\n      font-weight: bold;\n\n      .price{\n        font-weight: 400;\n        background: #3CA069;\n        padding: .2rem .7rem;\n        border-radius: 3px;\n      }\n\n      .light{\n        font-weight: 200;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var CardWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject(), function (props) {
  return props.bildeURL;
});

var CarCard =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CarCard, _Component);

  function CarCard() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CarCard);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CarCard).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CarCard, [{
    key: "numberWithSpaces",
    value: function numberWithSpaces(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: {
          pathname: '/elbil',
          query: {
            id: "".concat(this.props.id)
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, __jsx(CardWrapper, {
        bildeURL: this.props.bildeURL,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, __jsx("div", {
        className: "imgTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, this.props.modell, " "), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, this.props.merke, " "), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, this.props.type)), __jsx("div", {
        className: "cardFooter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaMapMarkerAlt"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      })), " ", this.props.rekkevidde, " ", __jsx("span", {
        className: "light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "km")), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, __jsx("span", {
        className: "price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "Fra: ", this.numberWithSpaces("".concat(this.props.pris)), ",-"))))));
    }
  }]);

  return CarCard;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CarCard);

/***/ })

})
//# sourceMappingURL=index.js.e8e6efca3bb81a5d38a5.hot-update.js.map