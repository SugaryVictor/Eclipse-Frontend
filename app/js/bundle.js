/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/js/modules/swipers.js":
/*!***********************************!*\
  !*** ./app/js/modules/swipers.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
var sliderTopCategories = document.querySelector('.top-categories');
var sliderLastTransaction = document.querySelector('.last-transaction');
var sliderCards = document.querySelector('.card');
var sliderFast = document.querySelector('.fast__tegs-wrapper'); // SLIDER FOR TOP_CATEGORIES

var topCategories = new Swiper(sliderTopCategories, {
  slidesPerView: 3,
  spaceBetween: 9,
  loop: false,
  slidesPerGroup: 3,
  //   Navigation arrows
  navigation: {
    nextEl: '.top-categories__btn.btn-next',
    prevEl: '.top-categories__btn.btn-prev'
  }
}); // SLIDER FOR LAST TRANSACTION

var lastTransaction = new Swiper(sliderLastTransaction, {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: false,
  slidesPerGroup: 1,
  //   Navigation arrows
  navigation: {
    nextEl: '.last-transaction__btn.btn-next',
    prevEl: '.last-transaction__btn.btn-prev'
  }
}); // SLIDER FOR LAST TRANSACTION

var cards = new Swiper(sliderCards, {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: false
}); // SLIDER FOR FAST PEYMENT

var fast = new Swiper(sliderFast, {
  slidesPerView: 'auto',
  slidesPerGroup: 2,
  spaceBetween: 10
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./app/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_swipers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/swipers.js */ "./app/js/modules/swipers.js");

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map