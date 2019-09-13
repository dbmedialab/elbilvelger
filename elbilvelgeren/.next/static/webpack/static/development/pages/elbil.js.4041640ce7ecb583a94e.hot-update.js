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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Components_Navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/Navbar */ "./Components/Navbar.js");
/* harmony import */ var _Components_CarCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/CarCard */ "./Components/CarCard.js");
/* harmony import */ var _Components_FlexWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Components/FlexWrapper */ "./Components/FlexWrapper.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _elbiler_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../elbiler.json */ "./elbiler.json");
var _elbiler_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../elbiler.json */ "./elbiler.json", 1);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../lib/apollo */ "./lib/apollo.js");







var _jsxFileName = "/Users/mariusgrondahl/Documents/GitHub/elbilvelger/elbilvelgeren/pages/elbil.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n{\n    labrador {\n    article(id: 71564397) {\n      title\n      bodytextHTML\n      imageId\n    }\n  }\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\nwidth: 100%;\ndisplay: flex;\nflex-direction: column;\nalign-self: center;  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}











var Detail = _emotion_styled__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject());
var ALL_POSTS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_15___default()(_templateObject2());

var elbilDetail =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(elbilDetail, _Component);

  function elbilDetail() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, elbilDetail);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(elbilDetail).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(elbilDetail, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_14__["useQuery"])(ALL_POSTS_QUERY, {
        notifyOnNetworkStatusChange: true
      }),
          loading = _useQuery.loading,
          error = _useQuery.error,
          data = _useQuery.data,
          fetchMore = _useQuery.fetchMore,
          networkStatus = _useQuery.networkStatus;

      var articleData = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data);
    }
  }, {
    key: "getId",
    value: function getId() {
      var url = '';

      if (true) {
        url = window.location.href;
      } else {}

      var parameter = url.split("="); // Getting the id from the second part of the URL

      var elbilId = Number(parameter[1]);
      return elbilId;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      // Filtering out the car that matches the elbilId
      var singleElbil = _elbiler_json__WEBPACK_IMPORTED_MODULE_12__.filter(function (elbil) {
        return elbil.id === _this.getId;
      });

      var elBiler = __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_13___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, __jsx(Detail, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, __jsx(_Components_CarCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
        merke: singleElbil[0].modell,
        modell: singleElbil[0].merke,
        type: singleElbil[0].type,
        rekkevidde: singleElbil[0].rekkevidde,
        pris: singleElbil[0].pris,
        bildeURL: singleElbil[0].bildeURL,
        id: singleElbil[0].id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Sitteplasser: ", singleElbil[0].sitteplasser), articleData));

      return __jsx(_Components_FlexWrapper__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, __jsx(_Components_Navbar__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), elBiler);
    }
  }]);

  return elbilDetail;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_apollo__WEBPACK_IMPORTED_MODULE_16__["withApollo"])(elbilDetail));

/***/ })

})
//# sourceMappingURL=elbil.js.4041640ce7ecb583a94e.hot-update.js.map