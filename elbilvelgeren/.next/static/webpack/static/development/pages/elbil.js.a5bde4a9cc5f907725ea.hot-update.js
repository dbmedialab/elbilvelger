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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Navbar */ "./Components/Navbar.js");
/* harmony import */ var _Components_CarCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/CarCard */ "./Components/CarCard.js");
/* harmony import */ var _Components_FlexWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/FlexWrapper */ "./Components/FlexWrapper.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _elbiler_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../elbiler.json */ "./elbiler.json");
var _elbiler_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../elbiler.json */ "./elbiler.json", 1);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/apollo */ "./lib/apollo.js");


var _jsxFileName = "/Users/mariusgrondahl/Documents/GitHub/elbilvelger/elbilvelgeren/pages/elbil.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n{\n    labrador {\n    article(id: 71564397) {\n      title\n      bodytextHTML\n      imageId\n    }\n  }\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\nwidth: 100%;\ndisplay: flex;\nflex-direction: column;\nalign-self: center;  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}












var Detail = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject());
var ALL_POSTS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_11___default()(_templateObject2()); // ElbilDetail.getInitialProps = async ({req}) =>{
//   let url = ''
//   if (typeof window !== "undefined") {
//     url = window.location.href
//   } else {
//     url = req.url
//   }
//   let parameter = url.split("=")
//   // Getting the id from the second part of the URL
//   let elbilId = Number(parameter[1])
//   // Returning elbilId to the id from Params
//   return {elbilId};
// }

function ElbilDetail() {
  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_10__["useQuery"])(ALL_POSTS_QUERY, {
    notifyOnNetworkStatusChange: true
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data,
      fetchMore = _useQuery.fetchMore,
      networkStatus = _useQuery.networkStatus;

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {});

  var articleData = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data); // Getting ID from Router


  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  var queryId = router.query.id; // Filtering out all the Cars that does not match the id 

  var elbilDetail = _elbiler_json__WEBPACK_IMPORTED_MODULE_8__.findIndex(function elbil() {
    return elbil.id === 2;
  });
  console.log(elbilDetail);
  console.log(queryId); // Mapping the id that remains after filtering

  var elBil = _elbiler_json__WEBPACK_IMPORTED_MODULE_8__.map(function (elbil) {
    return __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx(Detail, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx(_Components_CarCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      merke: elbil.modell,
      modell: elbil.merke,
      type: elbil.type,
      rekkevidde: elbil.rekkevidde,
      pris: elbil.pris,
      bildeURL: elbil.bildeURL,
      id: elbil.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }), __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, "Sitteplasser: ", elbil.sitteplasser), articleData));
  });
  return __jsx(_Components_FlexWrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx(_Components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), elBil);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_apollo__WEBPACK_IMPORTED_MODULE_12__["withApollo"])(ElbilDetail));

/***/ })

})
//# sourceMappingURL=elbil.js.a5bde4a9cc5f907725ea.hot-update.js.map