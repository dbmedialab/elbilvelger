module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Components/Car.js":
/*!***************************!*\
  !*** ./Components/Car.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_CarCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/CarCard */ "./Components/CarCard.js");
/* harmony import */ var _elbiler_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elbiler.json */ "./elbiler.json");
var _elbiler_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../elbiler.json */ "./elbiler.json", 1);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/mariusgrondahl/Documents/GitHub/elbilvelger/elbilvelgeren/Components/Car.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Footer = _emotion_styled__WEBPACK_IMPORTED_MODULE_5___default.a.footer`
    position: fixed;
    display: flex;
    width: 100vw;
    box-sizing: border-box;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    bottom: 0;
    left: 0;
    height: 50px;
    background: #fff;        
`;
const Footerinner = _emotion_styled__WEBPACK_IMPORTED_MODULE_5___default.a.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    
    button{
      background: none; 
      border: none;
      margin: .5rem;
    }
`;
const FlexWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_5___default.a.div`
    background: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: .5rem;
    padding-bottom: 3rem;
    align-content: center;
    align-items: center;
    @media (min-width: 600px) {
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
    }

    .react-reveal{
      width: 100%;
      @media (min-width: 600px) {
        width: 30vw;
        margin: 1rem;
      }
  }`;

class Car extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sortByRange", index => {
      let filterCopy = [...this.state.elbilDefault];
      filterCopy.sort(function (a, b) {
        return a.rekkevidde - b.rekkevidde;
      });
      this.setState({
        elbiler: filterCopy
      });
      filterCopy.reverse();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sortByPrice", index => {
      let filterCopy = [...this.state.elbilDefault];
      filterCopy.sort(function (a, b) {
        return a.pris - b.pris;
      });
      this.setState({
        elbiler: filterCopy.reverse()
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "reset", () => {
      let elbilDefault = [...this.state.elbilDefault];
      this.setState({
        elbiler: elbilDefault
      });
    });

    this.state = {
      elbiler: _elbiler_json__WEBPACK_IMPORTED_MODULE_3__,
      elbilDefault: [..._elbiler_json__WEBPACK_IMPORTED_MODULE_3__]
    };
  }

  render() {
    const elBiler = this.state.elbiler.map(elbil => __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, __jsx(_Components_CarCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      merke: elbil.modell,
      modell: elbil.merke,
      rekkevidde: elbil.rekkevidde,
      pris: elbil.pris,
      bildeURL: elbil.bildeURL,
      type: elbil.type,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    })));
    return __jsx(FlexWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, elBiler, __jsx(Footer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, __jsx(Footerinner, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, __jsx("button", {
      onClick: this.sortByRange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, "Rekkevidde"), __jsx("button", {
      onClick: this.sortByPrice,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, "Pris"), __jsx("button", {
      onClick: this.reset,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, "Tilbakestill"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Car);

/***/ }),

/***/ "./Components/CarCard.js":
/*!*******************************!*\
  !*** ./Components/CarCard.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/mariusgrondahl/Documents/GitHub/elbilvelger/elbilvelgeren/Components/CarCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class CarCard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const CardWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-size: cover;
  background-position: center center;
  background-image: url(/static/img/${this.props.bildeURL});
  padding: 0;
  margin-bottom: 1.3rem;
  height: 35vh;
  color: #fff;  
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px; 

    .imgTitle{
      position: relative;
      color: #fff;
      background: linear-gradient(to top, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0) 100%);
      width: auto;
      bottom: 0;
      font-weigth: bold;
      padding: 2rem 0 .7rem 0rem;
      font-size: 1.4rem;
      text-align: center;
      font-weight: bold;
      text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    }
  
    ul {
      width: 100%;
      list-style: none;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 0 ;
      padding: 0;
   }
  
    ul li{
      margin: 1rem;
    }
  
    .cardFooter{
      position: relative;
      display: flex;
      flex-direction: row;
      padding: .5rem;
      background: rgba(0,0,0,0.8);
      color: #fff;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
`;
    return __jsx(CardWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx("div", {
      className: "imgTitle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, this.props.modell, " "), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, this.props.merke, " "), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, this.props.type)), __jsx("div", {
      className: "cardFooter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, __jsx("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaMapPin"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    })), " ", this.props.rekkevidde, " km | ", this.props.pris, ",-"), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaBookmark"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CarCard);

/***/ }),

/***/ "./Components/Navbar.js":
/*!******************************!*\
  !*** ./Components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/mariusgrondahl/Documents/GitHub/elbilvelger/elbilvelgeren/Components/Navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const NavbarWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: #3CA069;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    height: 50px;
    padding: 0rem .8rem 0rem .8rem;
    color: white;      
`;

class Navbar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(NavbarWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("div", {
      className: "logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("img", {
      src: "../static/img/elbilvelgerlogo.svg",
      alt: "elbilvelger",
      width: "140",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./elbiler.json":
/*!**********************!*\
  !*** ./elbiler.json ***!
  \**********************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"bildeURL\":\"etron.jpg\",\"merke\":\"Audi\",\"modell\":\"e-tron\",\"type\":\"55\",\"rekkevidde\":415,\"pris\":652061,\"storelse\":\"Stor\",\"sitteplasser\":\"5\",\"tester\":[\"https://www.dinside.no/motor/derfor-gir-vi-elbilen-til-audi-terningkast-seks/70709759\"],\"leverandorer\":\"https://www.audi.no/no/web/no/bilmodeller/audi-tron/audi-e-tron.html\"},{\"id\":2,\"bildeURL\":\"etron.jpg\",\"merke\":\"Audi\",\"modell\":\"e-tron\",\"type\":\"55 advanced plus\",\"rekkevidde\":415,\"pris\":739580,\"storelse\":\"Stor\",\"sitteplasser\":\"5\",\"tester\":[\"https://www.dinside.no/motor/derfor-gir-vi-elbilen-til-audi-terningkast-seks/70709759\"],\"leverandorer\":\"https://www.audi.no/no/web/no/bilmodeller/audi-tron/audi-e-tron.html\"},{\"id\":3,\"bildeURL\":\"etron.jpg\",\"merke\":\"Audi\",\"modell\":\"e-tron\",\"type\":\"Exclusive\",\"rekkevidde\":415,\"pris\":821900,\"storelse\":\"Stor\",\"sitteplasser\":\"5\",\"tester\":[\"https://www.dinside.no/motor/derfor-gir-vi-elbilen-til-audi-terningkast-seks/70709759\"],\"leverandorer\":\"https://www.audi.no/no/web/no/bilmodeller/audi-tron/audi-e-tron.html\"},{\"id\":4,\"bildeURL\":\"default.jpg\",\"merke\":\"BMW\",\"modell\":\"i3\",\"type\":\"120Ah\",\"rekkevidde\":310,\"pris\":309000,\"storelse\":\"Liten\",\"sitteplasser\":\"4\",\"tester\":[\"https://www.dinside.no/motor/norges-favoritten-far-lengre-rekkevidde/70261709\"],\"leverandorer\":\"https://www.bmw.no/no/ssl/configurator.html#/8P21/FBHGI,S0230,S02D6,S02VB,S02VC,S0428,S0494,S04EX,S04T9,S04U6,S04U7,S0548,S0570,S05DA,S0654,S06AC,S06AE,S06AK,S06AP,S0853,S0885,S08R9,S08SM,S08TG,S0993,S09AA/I01/esl/new/\"},{\"id\":5,\"bildeURL\":\"default.jpg\",\"merke\":\"BMW\",\"modell\":\"i3\",\"type\":\"120Ah Charged\",\"rekkevidde\":310,\"pris\":318900,\"storelse\":\"Liten\",\"sitteplasser\":\"4\",\"tester\":[\"https://www.dinside.no/motor/norges-favoritten-far-lengre-rekkevidde/70261709\"],\"leverandorer\":\"https://www.bmw.no/no/ssl/configurator.html#/8P21/FBHGI,S0230,S02D6,S02VB,S02VC,S0428,S0494,S04EX,S04T9,S04U6,S04U7,S0548,S0570,S05DA,S0654,S06AC,S06AE,S06AK,S06AP,S0853,S0885,S08R9,S08SM,S08TG,S0993,S09AA/I01/esl/new/\"},{\"id\":6,\"bildeURL\":\"default.jpg\",\"merke\":\"BMW\",\"modell\":\"i3\",\"type\":\"120Ah Charged +\",\"rekkevidde\":310,\"pris\":338900,\"storelse\":\"Liten\",\"sitteplasser\":\"4\",\"tester\":[\"https://www.dinside.no/motor/norges-favoritten-far-lengre-rekkevidde/70261709\"],\"leverandorer\":\"https://www.bmw.no/no/ssl/configurator.html#/8P21/FBHGI,S0230,S02D6,S02VB,S02VC,S0428,S0494,S04EX,S04T9,S04U6,S04U7,S0548,S0570,S05DA,S0654,S06AC,S06AE,S06AK,S06AP,S0853,S0885,S08R9,S08SM,S08TG,S0993,S09AA/I01/esl/new/\"},{\"id\":7,\"bildeURL\":\"default.jpg\",\"merke\":\"BMW\",\"modell\":\"i3\",\"type\":\"120Ah fully Charged\",\"rekkevidde\":310,\"pris\":368900,\"storelse\":\"Liten\",\"sitteplasser\":\"4\",\"tester\":[\"https://www.dinside.no/motor/norges-favoritten-far-lengre-rekkevidde/70261709\"],\"leverandorer\":\"https://www.bmw.no/no/ssl/configurator.html#/8P21/FBHGI,S0230,S02D6,S02VB,S02VC,S0428,S0494,S04EX,S04T9,S04U6,S04U7,S0548,S0570,S05DA,S0654,S06AC,S06AE,S06AK,S06AP,S0853,S0885,S08R9,S08SM,S08TG,S0993,S09AA/I01/esl/new/\"},{\"id\":8,\"bildeURL\":\"default.jpg\",\"merke\":\"Citroen\",\"modell\":\"E-Berlingo\",\"type\":\"Multispace\",\"rekkevidde\":170,\"pris\":227500,\"storelse\":\"Mellom\",\"sitteplasser\":\"2\",\"tester\":[\"https://www.dinside.no/motor/psa-tar-alle-pa-senga-med-to-nye-elbiler/69199883\"],\"leverandorer\":\"https://www.citroen.no/modeller/citroen/berlingo-electric-multispace.html\"},{\"id\":9,\"bildeURL\":\"default.jpg\",\"merke\":\"Citroen\",\"modell\":\"C-Zero\",\"type\":\"Feel\",\"rekkevidde\":150,\"pris\":144380,\"storelse\":\"Liten\",\"sitteplasser\":\"4\",\"tester\":[\"https://www.dinside.no/motor/test-elbil-som-duger/61639141\"],\"leverandorer\":\"https://www.citroen.no/biler/citroen/c-zero.html\"},{\"id\":10,\"bildeURL\":\"default.jpg\",\"merke\":\"Hyundai\",\"modell\":\"Ioniq\",\"type\":\"EV\",\"rekkevidde\":280,\"pris\":244000,\"storelse\":\"Mellom\",\"sitteplasser\":\"5\",\"tester\":[\"https://www.dinside.no/motor/test-hyundai-ioniq---svaert-attraktiv-elbil/60948143\"],\"leverandorer\":\"https://www.hyundai.no/modeller/ioniq-electric/\"},{\"id\":11,\"bildeURL\":\"default.jpg\",\"merke\":\"Hyundai\",\"modell\":\"Ioniq\",\"type\":\"Teknikk\",\"rekkevidde\":280,\"pris\":269000,\"storelse\":\"Mellom\",\"sitteplasser\":\"5\",\"tester\":[\"https://www.dinside.no/motor/test-hyundai-ioniq---svaert-attraktiv-elbil/60948143\"],\"leverandorer\":\"https://www.hyundai.no/modeller/ioniq-electric/\"},{\"id\":12,\"bildeURL\":\"default.jpg\",\"merke\":\"Hyundai\",\"modell\":\"Kona Electric\",\"type\":\"Teknikk\",\"rekkevidde\":449,\"pris\":325000,\"storelse\":\"Mellom\",\"sitteplasser\":\"5\",\"tester\":[\"https://www.dinside.no/motor/vi-har-kjort-nissan-leafs-sterkeste-konkurrent/70039730\"],\"leverandorer\":\"https://www.hyundai.no/modeller/kona-electric/\"},{\"id\":13,\"bildeURL\":\"default.jpg\",\"merke\":\"DS\",\"modell\":\"3 Crossback E-Tense\",\"type\":\"136 So Chic\",\"rekkevidde\":300,\"pris\":319900,\"storelse\":\"Liten\",\"sitteplasser\":\"5\",\"tester\":[\"https://www.dinside.no/motor/norges-forste-test-av-elektrisk-suv-fra-ds/70865528\"],\"leverandorer\":\"https://www.dsautomobiles.no/elbil-hybrid/elbiler.html\"},{\"id\":14,\"bildeURL\":\"default.jpg\",\"merke\":\"DS\",\"modell\":\"3 Crossback E-Tense\",\"type\":\"136 Grand Chic\",\"rekkevidde\":300,\"pris\":349900,\"storelse\":\"Liten\",\"sitteplasser\":\"5\",\"tester\":[\"https://www.dinside.no/motor/norges-forste-test-av-elektrisk-suv-fra-ds/70865528\"],\"leverandorer\":\"https://www.dsautomobiles.no/elbil-hybrid/elbiler.html\"},{\"id\":15,\"bildeURL\":\"default.jpg\",\"merke\":\"Kia\",\"modell\":\"E-Niro\",\"type\":\"First Edition\",\"rekkevidde\":485,\"pris\":370600,\"storelse\":\"Mellom\",\"sitteplasser\":\"5\",\"tester\":[\"https://www.dinside.no/motor/vi-har-testet-elbilen-6000-nordmenn-star-i-ko-for-her-er-var-dom/70531310\"],\"leverandorer\":\"https://www.kia.com/no/modeller/e-niro/opplev-e-Niro/\"},{\"id\":16,\"bildeURL\":\"default.jpg\",\"merke\":\"Kia\",\"modell\":\"E-Soul\",\"type\":\"Classic\",\"rekkevidde\":250,\"pris\":228100,\"storelse\":\"Mellom\",\"sitteplasser\":\"5\",\"tester\":[\"https://www.elbil24.no/tester/denne-gir-mest-elbil-for-penga/70747144\"],\"leverandorer\":\"https://www.kia.com/no/modeller/e-soul/opplev-e-soul/\"},{\"id\":17,\"bildeURL\":\"default.jpg\",\"merke\":\"Kia\",\"modell\":\"E-Soul\",\"type\":\"Active\",\"rekkevidde\":250,\"pris\":228100,\"storelse\":\"Mellom\",\"sitteplasser\":\"5\",\"tester\":[\"https://www.elbil24.no/tester/denne-gir-mest-elbil-for-penga/70747144\"],\"leverandorer\":\"https://www.kia.com/no/modeller/e-soul/opplev-e-soul/\"},{\"id\":18,\"bildeURL\":\"default.jpg\",\"merke\":\"Kia\",\"modell\":\"E-Soul\",\"type\":\"Exclusive\",\"rekkevidde\":250,\"pris\":265100,\"storelse\":\"Mellom\",\"sitteplasser\":\"5\",\"tester\":[\"https://www.elbil24.no/tester/denne-gir-mest-elbil-for-penga/70747144\"],\"leverandorer\":\"https://www.kia.com/no/modeller/e-soul/opplev-e-soul/\"},{\"id\":19,\"bildeURL\":\"default.jpg\",\"merke\":\"Mitsubishi\",\"modell\":\"i-Miev\",\"type\":\"16 kWh\",\"rekkevidde\":105,\"pris\":149900,\"storelse\":\"Liten\",\"sitteplasser\":\"4\",\"tester\":[\"https://www.dinside.no/motor/testkjort-mitsubishi-i-miev-klar-for-kundene/61732696\"],\"leverandorer\":\"https://www.mitsubishi-motors.no/biler/imiev\"},{\"id\":20,\"bildeURL\":\"default.jpg\",\"merke\":\"Nissan\",\"modell\":\"Leaf\",\"type\":\"40kWh Acenta\",\"rekkevidde\":270,\"pris\":278000,\"storelse\":\"Mellom\",\"sitteplasser\":\"5\",\"tester\":[\"https://www.dinside.no/motor/kommer-til-kort-i-kulda/69570276\"],\"leverandorer\":\"https://www.nissan.no/biler/nye-biler/leaf.html\"},{\"id\":21,\"bildeURL\":\"default.jpg\",\"merke\":\"Nissan\",\"modell\":\"Leaf\",\"type\":\"40kWh N-Conneca\",\"rekkevidde\":270,\"pris\":294500,\"storelse\":\"Mellom\",\"sitteplasser\":\"5\",\"tester\":[\"https://www.dinside.no/motor/kommer-til-kort-i-kulda/69570276\"],\"leverandorer\":\"https://www.nissan.no/biler/nye-biler/leaf.html\"},{\"id\":22,\"bildeURL\":\"default.jpg\",\"merke\":\"Nissan\",\"modell\":\"Leaf\",\"type\":\"40kWh Tekna\",\"rekkevidde\":270,\"pris\":307500,\"storelse\":\"Mellom\",\"sitteplasser\":\"5\",\"tester\":[\"https://www.dinside.no/motor/kommer-til-kort-i-kulda/69570276\"],\"leverandorer\":\"https://www.nissan.no/biler/nye-biler/leaf.html\"},{\"id\":23,\"bildeURL\":\"default.jpg\",\"merke\":\"Nissan\",\"modell\":\"Leaf\",\"type\":\"62kWh e+ N-Conneca\",\"rekkevidde\":385,\"pris\":346800,\"storelse\":\"Mellom\",\"sitteplasser\":\"5\",\"tester\":[\"https://www.elbil24.no/tester/okt-rekkevidde-men-hva-med-resten/71082650\"],\"leverandorer\":\"https://www.nissan.no/biler/nye-biler/leaf.html\"},{\"id\":24,\"bildeURL\":\"default.jpg\",\"merke\":\"Nissan\",\"modell\":\"Leaf\",\"type\":\"62 kWh e+ Tekna\",\"rekkevidde\":385,\"pris\":375000,\"storelse\":\"Mellom\",\"sitteplasser\":\"5\",\"tester\":[\"https://www.elbil24.no/tester/okt-rekkevidde-men-hva-med-resten/71082650\"],\"leverandorer\":\"https://www.nissan.no/biler/nye-biler/leaf.html\"},{\"id\":25,\"bildeURL\":\"default.jpg\",\"merke\":\"Nissan\",\"modell\":\"E-NV200\",\"type\":\"Evalia 40 kWt 5-s\",\"rekkevidde\":200,\"pris\":322840,\"storelse\":\"Stor\",\"sitteplasser\":\"5\",\"tester\":[\"https://www.dinside.no/motor/nissan-e-nv200-provekjort/61216187\"],\"leverandorer\":\"https://www.nissan.no/biler/nye-biler/e-nv200-evalia.html\"},{\"id\":26,\"bildeURL\":\"default.jpg\",\"merke\":\"Nissan\",\"modell\":\"E-NV200\",\"type\":\"Evalia 40 kWt 7-s\",\"rekkevidde\":200,\"pris\":334840,\"storelse\":\"Stor\",\"sitteplasser\":\"7\",\"tester\":[\"https://www.dinside.no/motor/nissan-e-nv200-provekjort/61216187\"],\"leverandorer\":\"https://www.nissan.no/biler/nye-biler/e-nv200-evalia.html\"},{\"id\":27,\"bildeURL\":\"default.jpg\",\"merke\":\"Nissan\",\"modell\":\"E-NV200\",\"type\":\"Comfort Plus 40 kWt\",\"rekkevidde\":200,\"pris\":288990,\"storelse\":\"Stor\",\"sitteplasser\":\"2\",\"tester\":[\"https://www.dinside.no/motor/nissan-e-nv200-provekjort/61216187\"],\"leverandorer\":\"https://www.nissan.no/biler/nye-biler/e-nv200-evalia.html\"},{\"id\":28,\"bildeURL\":\"default.jpg\",\"merke\":\"Nissan\",\"modell\":\"E-NV200\",\"type\":\"Premium 40 kWt\",\"rekkevidde\":200,\"pris\":305990,\"storelse\":\"Stor\",\"sitteplasser\":\"2\",\"tester\":[\"https://www.dinside.no/motor/nissan-e-nv200-provekjort/61216187\"],\"leverandorer\":\"https://www.nissan.no/biler/nye-biler/e-nv200-evalia.html\"},{\"id\":29,\"bildeURL\":\"default.jpg\",\"merke\":\"Opel\",\"modell\":\"Ampera-E\",\"type\":\"Premium\",\"rekkevidde\":423,\"pris\":359900,\"storelse\":\"Mellom\",\"sitteplasser\":\"5\",\"tester\":[\"https://www.dinside.no/motor/opel-ampera-e-innfrir-til-fulle/66931394\"],\"leverandorer\":\"https://www.opel.no/personbil/ampera-e/modelloversikt.html\"},{\"id\":30,\"bildeURL\":\"default.jpg\",\"merke\":\"Peugeot\",\"modell\":\"iOn\",\"type\":\"Active\",\"rekkevidde\":150,\"pris\":163600,\"storelse\":\"Liten\",\"sitteplasser\":\"4\",\"tester\":[\"https://www.dinside.no/motor/test-elbil-som-duger/61639141\"],\"leverandorer\":\"https://www.peugeot.no/modell/peugeot-modeller/ion.html\"},{\"id\":31,\"bildeURL\":\"default.jpg\",\"merke\":\"Peugeot\",\"modell\":\"e-Partner Tepee\",\"rekkevidde\":170,\"pris\":192000,\"storelse\":\"Mellom\",\"sitteplasser\":\"3\",\"tester\":[\"https://www.dinside.no/motor/psa-tar-alle-pa-senga-med-to-nye-elbiler/69199883\"],\"leverandorer\":\"https://www.peugeot.no/modell/peugeot-modeller/partner-tepee-electric.html\"},{\"id\":32,\"bildeURL\":\"default.jpg\",\"merke\":\"Renault\",\"modell\":\"Kangoo Electric\",\"type\":\"5-seter\",\"rekkevidde\":270,\"pris\":268400,\"storelse\":\"Mellom\",\"sitteplasser\":\"5\",\"tester\":[\"https://www.dinside.no/motor/billigere-renault-kangoo-ze/61290789\"],\"leverandorer\":\"https://renault.no/elbil/kangoo-maxi-ze-personbil\"},{\"id\":33,\"bildeURL\":\"default.jpg\",\"merke\":\"Renault\",\"modell\":\"Twizy\",\"type\":\"Intens\",\"rekkevidde\":90,\"pris\":93000,\"storelse\":\"Liten\",\"sitteplasser\":\"2\",\"tester\":[\"https://www.dinside.no/motor/renault-twizy-vintertestes/61501189\"],\"leverandorer\":\"https://renault.no/elbil/twizy\"},{\"id\":34,\"bildeURL\":\"default.jpg\",\"merke\":\"Renault\",\"modell\":\"Zoe\",\"type\":\"Z.E 40 R90 Life\",\"rekkevidde\":400,\"pris\":245000,\"storelse\":\"Mellom\",\"sitteplasser\":\"5\",\"tester\":[\"https://www.dinside.no/motor/zoe-i-strupen-pa-konkurrentene/63605077\"],\"leverandorer\":\"https://renault.no/elbil/zoe\"},{\"id\":35,\"bildeURL\":\"default.jpg\",\"merke\":\"Renault\",\"modell\":\"Zoe\",\"type\":\"Z.E 40 R110 Intens\",\"rekkevidde\":400,\"pris\":270000,\"storelse\":\"Mellom\",\"sitteplasser\":\"5\",\"tester\":[\"https://www.dinside.no/motor/zoe-i-strupen-pa-konkurrentene/63605077\"],\"leverandorer\":\"https://renault.no/elbil/zoe\"},{\"id\":36,\"bildeURL\":\"default.jpg\",\"merke\":\"VW\",\"modell\":\"Golf\",\"rekkevidde\":229,\"pris\":326200,\"storelse\":\"Mellom\",\"sitteplasser\":\"5\",\"tester\":[\"https://www.dinside.no/motor/endelig-med-bedre-rekkevidde/67454759\"],\"leverandorer\":\"https://www.volkswagen.no/no/biler/e-golf-elbil.html\"},{\"id\":37,\"bildeURL\":\"default.jpg\",\"merke\":\"VW\",\"modell\":\"UP!\",\"rekkevidde\":133,\"pris\":211300,\"storelse\":\"Liten\",\"sitteplasser\":\"4\",\"tester\":[\"https://www.dinside.no/motor/vi-sparte-200-kroner-dagen-med-elbil/61244198\"],\"leverandorer\":\"https://www.volkswagen.no/no/biler/e-up-elbil.html\"}]");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Car__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Car */ "./Components/Car.js");
/* harmony import */ var _Components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Navbar */ "./Components/Navbar.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/mariusgrondahl/Documents/GitHub/elbilvelger/elbilvelgeren/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Appwrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_3___default.a.div`
    background: none;
    padding: 0;
    margin:  60px 0 0 0;    
    text-align: center;
    font-family: 'barlow', 'helvetica', sans-serif;
`;

class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(Appwrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["Global"], {
      styles: {
        'body, html': {
          margin: 0,
          padding: ".1rem",
          background: "#2d2d2d"
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), __jsx(_Components_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), __jsx(_Components_Car__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mariusgrondahl/Documents/GitHub/elbilvelger/elbilvelgeren/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/styled");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-reveal/Fade":
/*!************************************!*\
  !*** external "react-reveal/Fade" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map