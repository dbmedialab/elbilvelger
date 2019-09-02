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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
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
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: {
        pathname: '/detail',
        query: {
          elbil: `${this.props.id}`
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx(CardWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx("div", {
      className: "imgTitle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, this.props.modell, " "), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, this.props.merke, " "), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, this.props.type)), __jsx("div", {
      className: "cardFooter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, __jsx("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaMapPin"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    })), " ", this.props.rekkevidde, " km | ", this.props.pris, ",-"), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaBookmark"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }))))));
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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/detail.js":
/*!*************************!*\
  !*** ./pages/detail.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Navbar */ "./Components/Navbar.js");
/* harmony import */ var _elbiler_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elbiler.json */ "./elbiler.json");
var _elbiler_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../elbiler.json */ "./elbiler.json", 1);
/* harmony import */ var _Components_CarCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/CarCard */ "./Components/CarCard.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/mariusgrondahl/Documents/GitHub/elbilvelger/elbilvelgeren/pages/detail.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Appwrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_5___default.a.div`
    background: none;
    padding: 0;
    margin:  60px 0 100px 0;    
    text-align: center;
    font-family: 'barlow', 'helvetica', sans-serif;
`;

class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static getInitialProps({
    query
  }) {
    console.log({
      query
    });
    return {
      query
    };
  }

  render() {
    var elbil = _elbiler_json__WEBPACK_IMPORTED_MODULE_2__.find(function (elbil) {
      return elbil === 10;
    });
    return __jsx(Appwrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx(_Components_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "Hei Detail"), elbil);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/detail.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mariusgrondahl/Documents/GitHub/elbilvelger/elbilvelgeren/pages/detail.js */"./pages/detail.js");


/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/styled");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

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

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=detail.js.map