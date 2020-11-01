/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/components/banner/static/scripts/us2020-old.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/banner/static/scripts/place-counts-old.js":
/*!******************************************************************!*\
  !*** ./src/components/banner/static/scripts/place-counts-old.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _resize=_interopRequireDefault(__webpack_require__(/*! ./resize.js */ \"./src/components/banner/static/scripts/resize.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/* eslint-disable import/extensions */ /* adapted from:\nhttps://github.com/bbc/responsive-news/blob/b1f47ddb1b7db374cd6904f331565162690dea3e/tabloid/webapp/static/js/module/components/us2016/banner.es6\n*/ // Do we need to do this check?\nvar canCssTransition=function canCssTransition(){return false;};// SIMULATE NO TRANSITION RESPONSE\nvar BANNER_PREFIX='nw-us2020-banner';var chartId=\"\".concat(BANNER_PREFIX,\"__chart\");var resultsBarId=\"\".concat(BANNER_PREFIX,\"__bar\");var votesBarDemId=\"\".concat(BANNER_PREFIX,\"__votes-bar--dem\");var votesBarGopId=\"\".concat(BANNER_PREFIX,\"__votes-bar--gop\");var countDemId=\"\".concat(BANNER_PREFIX,\"__votes-count--dem\");var countGopId=\"\".concat(BANNER_PREFIX,\"__votes-count--gop\");var insideClass=\"\".concat(BANNER_PREFIX,\"__votes-count--inside\");var outsideClass=\"\".concat(BANNER_PREFIX,\"__votes-count--outside\");var underClass=\"\".concat(BANNER_PREFIX,\"__chart--under\");var animationEndNames=['msAnimationEnd','webkitAnimationEnd','animationend'];// better with symbols\nvar PLACEMENT={INSIDE:'IN',OUTSIDE:'OUT',UNDER:'UNDER'};var placeLabel=function placeLabel(_ref){var label=_ref.label,placement=_ref.placement;if(placement===PLACEMENT.INSIDE){label.classList.add(insideClass);label.classList.remove(outsideClass);return;}if(placement===PLACEMENT.OUTSIDE){label.classList.remove(insideClass);label.classList.add(outsideClass);return;}label.classList.remove(insideClass);label.classList.remove(outsideClass);};var getLabelPlacement=function getLabelPlacement(_ref2){var label=_ref2.label,barId=_ref2.barId,otherBarId=_ref2.otherBarId,resultWidth=_ref2.resultWidth;var labelWidth=label.offsetWidth;var bar=document.getElementById(barId);var otherBar=document.getElementById(otherBarId);var barWidth=bar.clientWidth;var otherBarWidth=otherBar.clientWidth;var halfResultWidth=(resultWidth-1)/2;// spaceAvailable is space between color bar and center OR other party's bar. Can be negative.\nvar spaceAvailable=Math.min(halfResultWidth-barWidth,resultWidth-otherBarWidth-barWidth);if(barWidth>=labelWidth){return PLACEMENT.INSIDE;}if(labelWidth>spaceAvailable){return PLACEMENT.UNDER;}return PLACEMENT.OUTSIDE;};var positionLabels=function positionLabels(){var chartElement=document.getElementById(chartId);var resultsBarElement=document.getElementById(resultsBarId);var resultWidth=resultsBarElement.clientWidth;var leftLabel=document.getElementById(countDemId);var rightLabel=document.getElementById(countGopId);var leftLabelPlacement=getLabelPlacement({align:'left',label:leftLabel,barId:votesBarDemId,otherBarId:votesBarGopId,resultWidth:resultWidth});var rightLabelPlacement=getLabelPlacement({align:'right',label:rightLabel,barId:votesBarGopId,otherBarId:votesBarDemId,resultWidth:resultWidth});if(leftLabelPlacement===PLACEMENT.UNDER||rightLabelPlacement===PLACEMENT.UNDER){chartElement.classList.add(underClass);placeLabel({label:leftLabel,placement:PLACEMENT.UNDER});placeLabel({label:rightLabel,placement:PLACEMENT.UNDER});return;}chartElement.classList.remove(underClass);placeLabel({label:leftLabel,placement:leftLabelPlacement});placeLabel({label:rightLabel,placement:rightLabelPlacement});};var initializeBanner=function initializeBanner(){positionLabels();if(canCssTransition()){[votesBarDemId,votesBarGopId].forEach(function(votesBarId){animationEndNames.forEach(function(eventName){var votesBarElement=document.getElementById(votesBarId);votesBarElement.addEventListener(eventName,function(){positionLabels();},false);});});}(0,_resize.default)(function(){positionLabels();});};var _default=initializeBanner;exports.default=_default;\n\n//# sourceURL=webpack:///./src/components/banner/static/scripts/place-counts-old.js?");

/***/ }),

/***/ "./src/components/banner/static/scripts/resize.js":
/*!********************************************************!*\
  !*** ./src/components/banner/static/scripts/resize.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;/*\nExtracted from ORB page resize utility as of 2020-10-25:\n    https://github.com/bbc/nav-orbit/blob/2a1bd4f51156ced2d448e6c8bb0cb24c4b043b4b/static-sources/js/features/masthead/_layoutprimarynav.js\n*/ /**\n Responsible for deciding when to re-layout the masthead\n */function handleResize(callback){var throttle;var currentWidth=0;return function resizeHandler(){// FWGEL-754: Don't resize unless the width has changed\n// iPhones fire window.resize when the address bar comes in/out of view\nif(window.innerWidth===currentWidth){return;}currentWidth=window.innerWidth;// we only run the layout code when a window resize has stopped\nif(throttle){clearTimeout(throttle);}throttle=setTimeout(function runCallback(){callback();},100);// PAN\n};}var listenForWindowResize=function listenForWindowResize(callback){window.addEventListener('resize',handleResize(callback),false);// handle rotation of device, re-layout after rotation is complete\nwindow.addEventListener('orientationchange',function(){setTimeout(handleResize(callback),100);},false);};var _default=listenForWindowResize;exports.default=_default;\n\n//# sourceURL=webpack:///./src/components/banner/static/scripts/resize.js?");

/***/ }),

/***/ "./src/components/banner/static/scripts/us2020-old.js":
/*!************************************************************!*\
  !*** ./src/components/banner/static/scripts/us2020-old.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var _placeCountsOld=_interopRequireDefault(__webpack_require__(/*! ./place-counts-old.js */ \"./src/components/banner/static/scripts/place-counts-old.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/* eslint-disable import/extensions */ // classic version of cuts-the-mustard\nvar cutsTheMustard=function cutsTheMustard(){return'addEventListener'in window&&'querySelector'in document&&'localStorage'in window;};if(cutsTheMustard()){if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',function(){(0,_placeCountsOld.default)();},false);}else{(0,_placeCountsOld.default)();}}\n\n//# sourceURL=webpack:///./src/components/banner/static/scripts/us2020-old.js?");

/***/ })

/******/ });