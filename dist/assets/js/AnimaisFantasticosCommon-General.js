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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/AnimaisFantasticosCommon-General.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/AnimaisFantasticosCommon-General.js":
/*!************************************************!*\
  !*** ./js/AnimaisFantasticosCommon-General.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_AnimaisFantasticosCommon_ScrollSuave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/AnimaisFantasticosCommon-ScrollSuave.js */ \"./js/modules/AnimaisFantasticosCommon-ScrollSuave.js\");\n/* harmony import */ var _modules_AnimaisFantasticosCommon_ScrollAnimacao_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/AnimaisFantasticosCommon-ScrollAnimacao.js */ \"./js/modules/AnimaisFantasticosCommon-ScrollAnimacao.js\");\n/* harmony import */ var _modules_AnimaisFantasticosCommon_Accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/AnimaisFantasticosCommon-Accordion.js */ \"./js/modules/AnimaisFantasticosCommon-Accordion.js\");\n/* harmony import */ var _modules_AnimaisFantasticosCommon_TabImages_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/AnimaisFantasticosCommon-TabImages.js */ \"./js/modules/AnimaisFantasticosCommon-TabImages.js\");\n/* harmony import */ var _modules_AnimaisFantasticosCommon_Modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/AnimaisFantasticosCommon-Modal.js */ \"./js/modules/AnimaisFantasticosCommon-Modal.js\");\n/* harmony import */ var _modules_AnimaisFantasticosCommon_Tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/AnimaisFantasticosCommon-Tooltip.js */ \"./js/modules/AnimaisFantasticosCommon-Tooltip.js\");\n/* harmony import */ var _modules_AnimaisFantasticosCommon_DropdownMenu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/AnimaisFantasticosCommon-DropdownMenu.js */ \"./js/modules/AnimaisFantasticosCommon-DropdownMenu.js\");\n/* harmony import */ var _modules_AnimaisFantasticosCommon_WorkingHours_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/AnimaisFantasticosCommon-WorkingHours.js */ \"./js/modules/AnimaisFantasticosCommon-WorkingHours.js\");\n/* harmony import */ var _modules_AnimaisFantasticosCommon_FetchNumbers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/AnimaisFantasticosCommon-FetchNumbers.js */ \"./js/modules/AnimaisFantasticosCommon-FetchNumbers.js\");\n/* harmony import */ var _modules_AnimaisFantasticosCommon_FetchBitcoinValues_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/AnimaisFantasticosCommon-FetchBitcoinValues.js */ \"./js/modules/AnimaisFantasticosCommon-FetchBitcoinValues.js\");\n/* harmony import */ var _modules_AnimaisFantasticosMobile_Menu_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/AnimaisFantasticosMobile-Menu.js */ \"./js/modules/AnimaisFantasticosMobile-Menu.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst Methods = {\n    init() {\n        _modules_AnimaisFantasticosCommon_ScrollSuave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init();\n        _modules_AnimaisFantasticosCommon_ScrollAnimacao_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\n        _modules_AnimaisFantasticosCommon_Accordion_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init();\n        _modules_AnimaisFantasticosCommon_TabImages_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].init();\n        _modules_AnimaisFantasticosCommon_Modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].init();\n        _modules_AnimaisFantasticosCommon_Tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].init();\n        _modules_AnimaisFantasticosCommon_DropdownMenu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].init();\n        _modules_AnimaisFantasticosCommon_WorkingHours_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].init();\n        _modules_AnimaisFantasticosCommon_FetchNumbers_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"].init();\n        _modules_AnimaisFantasticosCommon_FetchBitcoinValues_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"].init();\n        _modules_AnimaisFantasticosMobile_Menu_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"].init();\n    },\n};\n\ndocument.addEventListener('DOMContentLoaded', Methods.init);\n\n\n//# sourceURL=webpack:///./js/AnimaisFantasticosCommon-General.js?");

/***/ }),

/***/ "./js/modules/AnimaisFantasticosCommon-Accordion.js":
/*!**********************************************************!*\
  !*** ./js/modules/AnimaisFantasticosCommon-Accordion.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Methods = {\n    init() {\n        Methods.accordionView();\n    },\n    accordionView() {\n        const accordionList = document.querySelectorAll('.js--accordion dt');\n        const activeClass = 'ativo';\n\n        function activeAccordion() {\n            this.classList.toggle(activeClass);\n            this.nextElementSibling.classList.toggle(activeClass);\n        }\n\n        if (accordionList.length) {\n            accordionList[0].classList.add(activeClass);\n            accordionList[0].nextElementSibling.classList.add(activeClass);\n            accordionList.forEach((item) => {\n                item.addEventListener('click', activeAccordion);\n            });\n        }\n    },\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    init: Methods.init,\n});\n\n\n//# sourceURL=webpack:///./js/modules/AnimaisFantasticosCommon-Accordion.js?");

/***/ }),

/***/ "./js/modules/AnimaisFantasticosCommon-DropdownMenu.js":
/*!*************************************************************!*\
  !*** ./js/modules/AnimaisFantasticosCommon-DropdownMenu.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AnimaisFantasticosCommon_Helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimaisFantasticosCommon-Helpers.js */ \"./js/modules/AnimaisFantasticosCommon-Helpers.js\");\n\n\nconst Methods = {\n    dropdownMenus: document.querySelectorAll('[data-dropdown]'),\n    init() {\n        Methods.putEvents();\n    },\n\n    putEvents() {\n        Methods.dropdownMenus.forEach((subMenu) => {\n            ['click', 'touchstart'].forEach((userEvent) => {\n                subMenu.addEventListener(userEvent, Methods.handleClickTouch);\n            });\n        });\n    },\n\n    handleClickTouch(ev) {\n        ev.preventDefault();\n        this.classList.add('active');\n        _AnimaisFantasticosCommon_Helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clickOutside(ev.currentTarget, ['click', 'touchstart'], () => this.classList.remove('active'));\n    },\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    init: Methods.init,\n});\n\n\n//# sourceURL=webpack:///./js/modules/AnimaisFantasticosCommon-DropdownMenu.js?");

/***/ }),

/***/ "./js/modules/AnimaisFantasticosCommon-FetchBitcoinValues.js":
/*!*******************************************************************!*\
  !*** ./js/modules/AnimaisFantasticosCommon-FetchBitcoinValues.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Methods = {\n    init() {\n        Methods.fetchBitcoinValues();\n    },\n\n    async fetchBitcoinValues() {\n        try {\n            const bitcoinValues = await (await fetch('https://blockchain.info/ticker')).json();\n            const btcPreco = document.querySelector('.btc-preco');\n            btcPreco.innerText = (1000 / bitcoinValues.BRL.sell).toFixed(4);\n        } catch (erro) {\n            throw new Error(erro);\n        }\n    },\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    init: Methods.init,\n});\n\n\n//# sourceURL=webpack:///./js/modules/AnimaisFantasticosCommon-FetchBitcoinValues.js?");

/***/ }),

/***/ "./js/modules/AnimaisFantasticosCommon-FetchNumbers.js":
/*!*************************************************************!*\
  !*** ./js/modules/AnimaisFantasticosCommon-FetchNumbers.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AnimaisFantasticosCommon_Helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimaisFantasticosCommon-Helpers.js */ \"./js/modules/AnimaisFantasticosCommon-Helpers.js\");\n/* harmony import */ var _AnimaisFantasticosCommon_NumberAnimation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimaisFantasticosCommon-NumberAnimation.js */ \"./js/modules/AnimaisFantasticosCommon-NumberAnimation.js\");\n\n\n\nconst Methods = {\n    init() {\n        Methods.fetchAnimais('./animaisapi.json');\n    },\n    async fetchAnimais(url) {\n        try {\n            const animaisResponse = await (await fetch(url)).json();\n            const numerosGrid = document.querySelector('.numeros-grid');\n            animaisResponse.map((animal) => {\n                const animalElement = Methods.createAnimal(animal);\n                return numerosGrid.appendChild(animalElement);\n            });\n            _AnimaisFantasticosCommon_NumberAnimation_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\n        } catch (erro) {\n            throw new Error(erro);\n        }\n    },\n    createAnimal(animal) {\n        const animalTemplate = _AnimaisFantasticosCommon_Helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElementWithClass('div', 'numero-animal');\n        animalTemplate.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;\n        return animalTemplate;\n    },\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    init: Methods.init,\n});\n\n\n//# sourceURL=webpack:///./js/modules/AnimaisFantasticosCommon-FetchNumbers.js?");

/***/ }),

/***/ "./js/modules/AnimaisFantasticosCommon-Helpers.js":
/*!********************************************************!*\
  !*** ./js/modules/AnimaisFantasticosCommon-Helpers.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    clickOutside(element, events, callback) {\n        const htmlElement = document.documentElement;\n        function handleClickOutside(ev) {\n            if (!element.contains(ev.target)) {\n                delete element.dataset.outside;\n                /* eslint-disable */\n                events.forEach(userEvent => htmlElement.removeEventListener(userEvent, handleClickOutside));\n                /* eslint-enable */\n                callback();\n            }\n        }\n        if (!element.hasAttribute('data-outside')) {\n            events.forEach((userEvent) => {\n                setTimeout(() => { htmlElement.addEventListener(userEvent, handleClickOutside); });\n            });\n            element.dataset.outside = '';\n        }\n    },\n    createElementWithClass(el, className) {\n        const element = document.createElement(el);\n        if (className.length > 0) {\n            if (Array.isArray(className)) {\n                className.map(eachClass => element.classList.add(eachClass));\n            } else if (className.indexOf(',') > 0) {\n                className.split(',').map(eachClass => element.classList.add(eachClass.trim()));\n            } else {\n                element.classList.add(className);\n            }\n            return element;\n            /* eslint-disable */\n        } else {\n            /* eslint-enable */\n            throw new Error('The className must be a String or an Array');\n        }\n    },\n});\n\n\n//# sourceURL=webpack:///./js/modules/AnimaisFantasticosCommon-Helpers.js?");

/***/ }),

/***/ "./js/modules/AnimaisFantasticosCommon-Modal.js":
/*!******************************************************!*\
  !*** ./js/modules/AnimaisFantasticosCommon-Modal.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Methods = {\n    botaoAbrir: document.querySelector('[data-modal=\"abrir\"]'),\n    botaoFechar: document.querySelector('[data-modal=\"fechar\"]'),\n    containerModal: document.querySelector('[data-modal=\"container\"]'),\n    init() {\n        Methods.abrirModal();\n        Methods.fecharModal();\n        Methods.fecharModalPeloContainer();\n    },\n    abrirModal() {\n        Methods.botaoAbrir.addEventListener('click', (ev) => {\n            ev.preventDefault();\n            Methods.containerModal.classList.add('ativo');\n        });\n    },\n    fecharModal() {\n        Methods.botaoFechar.addEventListener('click', (ev) => {\n            ev.preventDefault();\n            Methods.containerModal.classList.remove('ativo');\n        });\n    },\n    fecharModalPeloContainer() {\n        Methods.containerModal.addEventListener('click', (ev) => {\n            if (ev.target === Methods.containerModal) {\n                Methods.containerModal.classList.remove('ativo');\n            }\n        });\n    },\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    init: Methods.init,\n});\n\n\n//# sourceURL=webpack:///./js/modules/AnimaisFantasticosCommon-Modal.js?");

/***/ }),

/***/ "./js/modules/AnimaisFantasticosCommon-NumberAnimation.js":
/*!****************************************************************!*\
  !*** ./js/modules/AnimaisFantasticosCommon-NumberAnimation.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Methods = {\n    init() {\n        Methods.observerAction();\n    },\n    incrementNumbers() {\n        document.querySelectorAll('[data-numero]').forEach((el) => {\n            const totalNumber = +el.textContent;\n            const toIncrimentIn = Math.floor(totalNumber / 100);\n            let start = 0;\n            const timer = setInterval(() => {\n                start += toIncrimentIn;\n                el.textContent = start;\n                if (start > totalNumber) {\n                    el.textContent = totalNumber;\n                    clearInterval(timer);\n                }\n            }, 25 * Math.random());\n        });\n    },\n    observerAction() {\n        let observer;\n        const handleMutation = (mutation) => {\n            if (mutation[0].target.classList.contains('ativo')) {\n                Methods.incrementNumbers();\n                observer.disconnect();\n            }\n        };\n        observer = new MutationObserver(handleMutation);\n        observer.observe(document.querySelector('.numeros'), { attributes: true });\n    },\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    init: Methods.init,\n});\n\n\n//# sourceURL=webpack:///./js/modules/AnimaisFantasticosCommon-NumberAnimation.js?");

/***/ }),

/***/ "./js/modules/AnimaisFantasticosCommon-ScrollAnimacao.js":
/*!***************************************************************!*\
  !*** ./js/modules/AnimaisFantasticosCommon-ScrollAnimacao.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Methods = {\n    init() {\n        Methods.animationOnScroll();\n    },\n    animationOnScroll() {\n        const sectionsToScrollOnViewport = document.querySelectorAll('.js--scroll');\n        if (sectionsToScrollOnViewport.length) {\n            const posToStartAnimation = window.innerHeight * 0.8;\n\n            const scrollOnViewport = () => {\n                sectionsToScrollOnViewport.forEach((section) => {\n                    const sectionTop = section.getBoundingClientRect().top - posToStartAnimation;\n                    return sectionTop < 0 ? section.classList.add('ativo') : 0;\n                });\n            };\n\n            scrollOnViewport();\n            window.addEventListener('scroll', scrollOnViewport);\n        }\n    },\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    init: Methods.init,\n});\n\n\n//# sourceURL=webpack:///./js/modules/AnimaisFantasticosCommon-ScrollAnimacao.js?");

/***/ }),

/***/ "./js/modules/AnimaisFantasticosCommon-ScrollSuave.js":
/*!************************************************************!*\
  !*** ./js/modules/AnimaisFantasticosCommon-ScrollSuave.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Methods = {\n    init() {\n        Methods.smoothScroll();\n    },\n    smoothScroll() {\n        const linksInternos = document.querySelectorAll('.js--menu a[href^=\"#\"]');\n        if (linksInternos.length) {\n            linksInternos.forEach(link => link.addEventListener('click', Methods.scrollToSection));\n        }\n    },\n    scrollToSection(event) {\n        event.preventDefault();\n        const href = event.currentTarget.getAttribute('href');\n        const sectionToScroll = document.querySelector(href);\n\n        sectionToScroll.scrollIntoView({\n            behavior: 'smooth',\n            block: 'start',\n        });\n\n        // Alternative Method\n        // const topDistance = sectionToScroll.offsetTop;\n        // window.scrollTo({\n        //     left: 0,\n        //     top: topDistance,\n        //     behavior: 'smooth'\n        // })\n    },\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    init: Methods.init,\n});\n\n\n//# sourceURL=webpack:///./js/modules/AnimaisFantasticosCommon-ScrollSuave.js?");

/***/ }),

/***/ "./js/modules/AnimaisFantasticosCommon-TabImages.js":
/*!**********************************************************!*\
  !*** ./js/modules/AnimaisFantasticosCommon-TabImages.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Methods = {\n    init() {\n        Methods.initTabNav();\n    },\n    initTabNav() {\n        const tabMenu = document.querySelectorAll('.js--tabmenu li');\n        const tabContent = document.querySelectorAll('.js--tabcontent section');\n\n        if (tabMenu.length && tabContent.length) {\n            tabContent[0].classList.add('ativo');\n\n            const activeTab = (index) => {\n                tabContent.forEach((section) => {\n                    section.classList.remove('ativo', section.dataset.animationOrientation);\n                });\n                const animationDirection = tabContent[index].dataset.animationOrientation;\n                tabContent[index].classList.add('ativo', animationDirection);\n            };\n\n            tabMenu.forEach((itemMenu, index) => {\n                itemMenu.addEventListener('click', () => {\n                    activeTab(index);\n                });\n            });\n        }\n    },\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    init: Methods.init,\n});\n\n\n//# sourceURL=webpack:///./js/modules/AnimaisFantasticosCommon-TabImages.js?");

/***/ }),

/***/ "./js/modules/AnimaisFantasticosCommon-Tooltip.js":
/*!********************************************************!*\
  !*** ./js/modules/AnimaisFantasticosCommon-Tooltip.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Methods = {\n    allTooltips: document.querySelectorAll('[data-tooltip]'),\n    init() {\n        Methods.onMouseOver();\n    },\n\n    onMouseOver() {\n        Methods.allTooltips.forEach((tooltip) => {\n            tooltip.addEventListener('mouseover', (ev) => {\n                const tooltipContainer = Methods.createContainerTooltip(ev.currentTarget);\n                Methods.onMouseLeave.tooltip = Methods.onMouseMove.tooltip = tooltipContainer;\n                Methods.onMouseLeave.element = ev.currentTarget;\n                ev.currentTarget.addEventListener('mouseleave', Methods.onMouseLeave);\n                ev.currentTarget.addEventListener('mousemove', Methods.onMouseMove);\n            });\n        });\n    },\n\n    onMouseLeave: {\n        element: '',\n        tooltip: '',\n        handleEvent() {\n            this.tooltip.remove();\n            this.element.removeEventListener('mouseleave', this);\n            this.element.removeEventListener('mousemove', Methods.onMouseMove);\n        },\n    },\n\n    onMouseMove: {\n        tooltip: '',\n        handleEvent(ev) {\n            this.tooltip.style.top = `${ev.pageY + 10}px`;\n            this.tooltip.style.left = `${ev.pageX + 10}px`;\n        },\n    },\n\n    createContainerTooltip(el) {\n        const tooltipContainer = document.createElement('div');\n        const textToTooltip = el.getAttribute('aria-label');\n        tooltipContainer.classList.add('tooltip');\n        tooltipContainer.textContent = textToTooltip;\n        document.body.appendChild(tooltipContainer);\n        return tooltipContainer;\n    },\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    init: Methods.init,\n});\n\n\n//# sourceURL=webpack:///./js/modules/AnimaisFantasticosCommon-Tooltip.js?");

/***/ }),

/***/ "./js/modules/AnimaisFantasticosCommon-WorkingHours.js":
/*!*************************************************************!*\
  !*** ./js/modules/AnimaisFantasticosCommon-WorkingHours.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Methods = {\n    init() {\n        const funcionamento = document.querySelector('[data-semana]');\n        const diasSemana = funcionamento.dataset.semana.split(',').map(Number);\n        const horarioSemana = funcionamento.dataset.hora.split(',').map(Number);\n        const dataAgora = new Date();\n        const diaAgora = dataAgora.getDay();\n        const horarioAgora = dataAgora.getHours();\n\n        if (diasSemana.indexOf(diaAgora) !== -1\n            && (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1])) {\n            funcionamento.classList.add('aberto');\n        }\n    },\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    init: Methods.init,\n});\n\n\n//# sourceURL=webpack:///./js/modules/AnimaisFantasticosCommon-WorkingHours.js?");

/***/ }),

/***/ "./js/modules/AnimaisFantasticosMobile-Menu.js":
/*!*****************************************************!*\
  !*** ./js/modules/AnimaisFantasticosMobile-Menu.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AnimaisFantasticosCommon_Helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimaisFantasticosCommon-Helpers.js */ \"./js/modules/AnimaisFantasticosCommon-Helpers.js\");\n\n\nconst Methods = {\n    menuMobile: document.querySelector('[data-menu=\"button\"]'),\n    listaMenu: document.querySelector('[data-menu=\"lista\"]'),\n    eventos: ['click', 'touchstart'],\n    init() {\n        Methods.openMenu();\n    },\n\n    handleClickEvent() {\n        Methods.menuMobile.classList.add('active');\n        Methods.listaMenu.classList.add('active');\n        _AnimaisFantasticosCommon_Helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clickOutside(Methods.listaMenu, Methods.eventos, () => {\n            Methods.menuMobile.classList.remove('active');\n            Methods.listaMenu.classList.remove('active');\n        });\n    },\n\n    openMenu() {\n        Methods.eventos.forEach(() => {\n            Methods.menuMobile.addEventListener('click', Methods.handleClickEvent);\n        });\n    },\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    init: Methods.init,\n});\n\n\n//# sourceURL=webpack:///./js/modules/AnimaisFantasticosMobile-Menu.js?");

/***/ })

/******/ });