webpackHotUpdate("static/development/pages/elbil.js",{

/***/ "./pages/elbil.js":
/*!************************!*\
  !*** ./pages/elbil.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Components_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/Navbar */ "./Components/Navbar.js");
/* harmony import */ var _Components_CarCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/CarCard */ "./Components/CarCard.js");
/* harmony import */ var _Components_FlexWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/FlexWrapper */ "./Components/FlexWrapper.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _elbiler_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../elbiler.json */ "./elbiler.json");
var _elbiler_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../elbiler.json */ "./elbiler.json", 1);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../lib/apollo */ "./lib/apollo.js");




var _jsxFileName = "/Users/mariusgrondahl/Documents/GitHub/elbilvelger/elbilvelgeren/pages/elbil.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n{\n    labrador {\n    article(id: 71564397) {\n      title\n      bodytextHTML\n      imageId\n    }\n  }\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\nwidth: 100%;\ndisplay: flex;\nflex-direction: column;\nalign-self: center;  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}











var Detail = _emotion_styled__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject());
var ALL_POSTS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_12___default()(_templateObject2());

ElbilDetail.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_ref) {
    var req, query, elbilId;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref.req, query = _ref.query;
            elbilId = Number(query.id);
            return _context.abrupt("return", {
              elbilId: elbilId
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

function ElbilDetail(_ref3) {
  var elbilId = _ref3.elbilId;

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_11__["useQuery"])(ALL_POSTS_QUERY, {
    notifyOnNetworkStatusChange: true
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data,
      fetchMore = _useQuery.fetchMore,
      networkStatus = _useQuery.networkStatus;

  var Title = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data.labrador.article.title); // const bodyText = Json.stringify(data.labrador.article.bodyTe)
  // Filtering out the car that matches the elbilId


  var singleElbil = _elbiler_json__WEBPACK_IMPORTED_MODULE_9__.filter(function (elbil) {
    return elbil.id === elbilId;
  });

  var elBiler = __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(Detail, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(_Components_CarCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    merke: singleElbil[0].modell,
    modell: singleElbil[0].merke,
    type: singleElbil[0].type,
    rekkevidde: singleElbil[0].rekkevidde,
    pris: singleElbil[0].pris,
    bildeURL: singleElbil[0].bildeURL,
    id: singleElbil[0].id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Sitteplasser: ", singleElbil[0].sitteplasser), Title, articleData));

  return __jsx(_Components_FlexWrapper__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(_Components_Navbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), elBiler);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_apollo__WEBPACK_IMPORTED_MODULE_13__["withApollo"])(ElbilDetail));

/***/ })

})
//# sourceMappingURL=elbil.js.1f12639a86b4f3cc148f.hot-update.js.map