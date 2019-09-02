webpackHotUpdate("static/development/pages/detail.js",{

/***/ "./pages/detail.js":
/*!*************************!*\
  !*** ./pages/detail.js ***!
  \*************************/
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
/* harmony import */ var _Components_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/Navbar */ "./Components/Navbar.js");
/* harmony import */ var _elbiler_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../elbiler.json */ "./elbiler.json");
var _elbiler_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../elbiler.json */ "./elbiler.json", 1);
/* harmony import */ var _Components_CarCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/CarCard */ "./Components/CarCard.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");






var _jsxFileName = "/Users/mariusgrondahl/Documents/GitHub/elbilvelger/elbilvelgeren/pages/detail.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n    background: none;\n    padding: 0;\n    margin:  60px 0 100px 0;    \n    text-align: center;\n    font-family: 'barlow', 'helvetica', sans-serif;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var Appwrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject());

var App =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      var prop = "".concat(this.getInitialProps);
      var elBiler = _elbiler_json__WEBPACK_IMPORTED_MODULE_8__.find(function (elbil) {
        return __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_10___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, __jsx(_Components_CarCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
          merke: elbil.modell,
          modell: elbil.merke,
          rekkevidde: elbil.rekkevidde,
          pris: elbil.pris,
          bildeURL: elbil.bildeURL,
          type: elbil.type,
          id: elbil.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }));
      });
      return __jsx(Appwrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx(_Components_Navbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Hei Detail"), elBiler);
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var query = _ref.query;
      console.log({
        query: query
      });
      return {
        query: query
      };
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=detail.js.2ccf8305b2d78252f6a0.hot-update.js.map