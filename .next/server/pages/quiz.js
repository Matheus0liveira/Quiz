module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/quiz/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Question/index.js":
/*!******************************************!*\
  !*** ./src/components/Question/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/Question/styles.js\");\nvar _jsxFileName = \"/media/matheus-oliveira/Data/Projects/ReactJs/quiz/src/components/Question/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Question = ({\n  question,\n  answers,\n  nextQuestion,\n  countQuestion\n}) => {\n  const {\n    answer_a,\n    answer_b,\n    answer_c,\n    answer_d,\n    answer_e,\n    answer_f\n  } = answers;\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"QuestionWrapper\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    count: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, \"Question: \", countQuestion + 1), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    quest: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, question), answer_a && __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    answer: true,\n    onClick: () => console.log(answer_a),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 20\n    }\n  }, answer_a), answer_b && __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    answer: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 20\n    }\n  }, answer_b), answer_c && __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    answer: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 20\n    }\n  }, answer_c), answer_d && __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    answer: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 20\n    }\n  }, answer_d), answer_e && __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    answer: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 20\n    }\n  }, answer_e), answer_f && __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    answer: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 20\n    }\n  }, answer_f), __jsx(\"button\", {\n    onClick: nextQuestion,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, \" Next\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Question);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9RdWVzdGlvbi9pbmRleC5qcz9hMjczIl0sIm5hbWVzIjpbIlF1ZXN0aW9uIiwicXVlc3Rpb24iLCJhbnN3ZXJzIiwibmV4dFF1ZXN0aW9uIiwiY291bnRRdWVzdGlvbiIsImFuc3dlcl9hIiwiYW5zd2VyX2IiLCJhbnN3ZXJfYyIsImFuc3dlcl9kIiwiYW5zd2VyX2UiLCJhbnN3ZXJfZiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUE7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLENBQUM7QUFBRUMsVUFBRjtBQUFZQyxTQUFaO0FBQXFCQyxjQUFyQjtBQUFtQ0M7QUFBbkMsQ0FBRCxLQUF3RDtBQUV2RSxRQUFNO0FBQ0pDLFlBREk7QUFFSkMsWUFGSTtBQUdKQyxZQUhJO0FBSUpDLFlBSkk7QUFLSkMsWUFMSTtBQU1KQztBQU5JLE1BT0ZSLE9BUEo7QUFRQSxTQUdFLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNENBQUQ7QUFBTSxTQUFLLE1BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBdUJFLGFBQWEsR0FBRyxDQUF2QyxDQURGLEVBR0UsTUFBQyw0Q0FBRDtBQUFNLFNBQUssTUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWFILFFBQWIsQ0FIRixFQUtHSSxRQUFRLElBQUksTUFBQyw0Q0FBRDtBQUFNLFVBQU0sTUFBWjtBQUFhLFdBQU8sRUFBRSxNQUFNTSxPQUFPLENBQUNDLEdBQVIsQ0FBWVAsUUFBWixDQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW9EQSxRQUFwRCxDQUxmLEVBT0dDLFFBQVEsSUFBSSxNQUFDLDRDQUFEO0FBQU0sVUFBTSxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBY0EsUUFBZCxDQVBmLEVBU0dDLFFBQVEsSUFBSSxNQUFDLDRDQUFEO0FBQU0sVUFBTSxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBY0EsUUFBZCxDQVRmLEVBV0dDLFFBQVEsSUFBSSxNQUFDLDRDQUFEO0FBQU0sVUFBTSxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBY0EsUUFBZCxDQVhmLEVBYUdDLFFBQVEsSUFBSSxNQUFDLDRDQUFEO0FBQU0sVUFBTSxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBY0EsUUFBZCxDQWJmLEVBZUdDLFFBQVEsSUFBSSxNQUFDLDRDQUFEO0FBQU0sVUFBTSxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBY0EsUUFBZCxDQWZmLEVBa0JFO0FBQVEsV0FBTyxFQUFFUCxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbEJGLENBSEY7QUE0QkQsQ0F0Q0Q7O0FBd0NlSCx1RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1F1ZXN0aW9uL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUXVlc3Rpb25XcmFwcGVyLCBUZXh0IH0gZnJvbSAnLi9zdHlsZXMnO1xuXG5jb25zdCBRdWVzdGlvbiA9ICh7IHF1ZXN0aW9uLCBhbnN3ZXJzLCBuZXh0UXVlc3Rpb24sIGNvdW50UXVlc3Rpb24gfSkgPT4ge1xuXG4gIGNvbnN0IHtcbiAgICBhbnN3ZXJfYSxcbiAgICBhbnN3ZXJfYixcbiAgICBhbnN3ZXJfYyxcbiAgICBhbnN3ZXJfZCxcbiAgICBhbnN3ZXJfZSxcbiAgICBhbnN3ZXJfZlxuICB9ID0gYW5zd2VycztcbiAgcmV0dXJuIChcblxuXG4gICAgPFF1ZXN0aW9uV3JhcHBlcj5cbiAgICAgIDxUZXh0IGNvdW50PlF1ZXN0aW9uOiB7Y291bnRRdWVzdGlvbiArIDF9PC9UZXh0PlxuXG4gICAgICA8VGV4dCBxdWVzdD57cXVlc3Rpb259PC9UZXh0PlxuXG4gICAgICB7YW5zd2VyX2EgJiYgPFRleHQgYW5zd2VyIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKGFuc3dlcl9hKX0+e2Fuc3dlcl9hfTwvVGV4dCA+fVxuXG4gICAgICB7YW5zd2VyX2IgJiYgPFRleHQgYW5zd2VyPnthbnN3ZXJfYn08L1RleHQgPn1cblxuICAgICAge2Fuc3dlcl9jICYmIDxUZXh0IGFuc3dlcj57YW5zd2VyX2N9PC9UZXh0ID59XG5cbiAgICAgIHthbnN3ZXJfZCAmJiA8VGV4dCBhbnN3ZXI+e2Fuc3dlcl9kfTwvVGV4dCA+fVxuXG4gICAgICB7YW5zd2VyX2UgJiYgPFRleHQgYW5zd2VyPnthbnN3ZXJfZX08L1RleHQgPn1cblxuICAgICAge2Fuc3dlcl9mICYmIDxUZXh0IGFuc3dlcj57YW5zd2VyX2Z9PC9UZXh0ID59XG5cblxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtuZXh0UXVlc3Rpb259PiBOZXh0PC9idXR0b24+XG5cblxuICAgIDwvUXVlc3Rpb25XcmFwcGVyPlxuXG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Question/index.js\n");

/***/ }),

/***/ "./src/components/Question/styles.js":
/*!*******************************************!*\
  !*** ./src/components/Question/styles.js ***!
  \*******************************************/
/*! exports provided: QuestionWrapper, Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"QuestionWrapper\", function() { return QuestionWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Text\", function() { return Text; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst QuestionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.main.withConfig({\n  displayName: \"styles__QuestionWrapper\",\n  componentId: \"sc-17mofh1-0\"\n})([\"width:50%;\"]);\nconst Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({\n  displayName: \"styles__Text\",\n  componentId: \"sc-17mofh1-1\"\n})([\"\", \";\"], props => props.answer && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"margin:1rem 0;background:#F8F8F2;color:#282A36;padding:1rem;transition:background .2s ease;cursor:pointer;&:hover{background:#B6B6B6;}\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9RdWVzdGlvbi9zdHlsZXMuanM/OWZhYiJdLCJuYW1lcyI6WyJRdWVzdGlvbldyYXBwZXIiLCJzdHlsZWQiLCJtYWluIiwiVGV4dCIsImgxIiwicHJvcHMiLCJhbnN3ZXIiLCJjc3MiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdPLE1BQU1BLGVBQWUsR0FBR0Msd0RBQU0sQ0FBQ0MsSUFBVjtBQUFBO0FBQUE7QUFBQSxrQkFBckI7QUFJQSxNQUFNQyxJQUFJLEdBQUdGLHdEQUFNLENBQUNHLEVBQVY7QUFBQTtBQUFBO0FBQUEsY0FFYkMsS0FBSyxJQUFJQSxLQUFLLENBQUNDLE1BQU4sSUFBZ0JDLDZEQUFoQiw0SUFGSSxDQUFWIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUXVlc3Rpb24vc3R5bGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cblxuZXhwb3J0IGNvbnN0IFF1ZXN0aW9uV3JhcHBlciA9IHN0eWxlZC5tYWluYFxuXG4gIHdpZHRoOiA1MCU7XG5gO1xuZXhwb3J0IGNvbnN0IFRleHQgPSBzdHlsZWQuaDFgXG5cbiAgJHtwcm9wcyA9PiBwcm9wcy5hbnN3ZXIgJiYgY3NzYFxuXG4gICAgbWFyZ2luOiAxcmVtIDA7XG4gICAgYmFja2dyb3VuZDogI0Y4RjhGMjtcbiAgICBjb2xvcjogIzI4MkEzNjtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjJzIGVhc2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJjpob3ZlcntcbiAgICAgIGJhY2tncm91bmQ6ICNCNkI2QjY7XG4gICAgfVxuICBgXG4gIH07XG5cbmA7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Question/styles.js\n");

/***/ }),

/***/ "./src/components/Results/index.js":
/*!*****************************************!*\
  !*** ./src/components/Results/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/media/matheus-oliveira/Data/Projects/ReactJs/quiz/src/components/Results/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Results = () => {\n  return __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 10\n    }\n  }, \"Results\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Results);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZXN1bHRzL2luZGV4LmpzPzZhYzciXSwibmFtZXMiOlsiUmVzdWx0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFHQSxNQUFNQSxPQUFPLEdBQUcsTUFBTTtBQUVwQixTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELENBSEQ7O0FBT2VBLHNFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUmVzdWx0cy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cblxuY29uc3QgUmVzdWx0cyA9ICgpID0+IHtcblxuICByZXR1cm4gPGgxPlJlc3VsdHM8L2gxPjtcbn07XG5cblxuXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRzOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Results/index.js\n");

/***/ }),

/***/ "./src/context/user.js":
/*!*****************************!*\
  !*** ./src/context/user.js ***!
  \*****************************/
/*! exports provided: UserContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserContext\", function() { return UserContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/media/matheus-oliveira/Data/Projects/ReactJs/quiz/src/context/user.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst UserContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])();\n\nconst UserProvider = ({\n  children\n}) => {\n  const {\n    0: user,\n    1: setUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    name: '',\n    dificulty: ''\n  });\n  return __jsx(UserContext.Provider, {\n    value: {\n      user,\n      setUser\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProvider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC91c2VyLmpzPzhkYmYiXSwibmFtZXMiOlsiVXNlckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiVXNlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsInVzZVN0YXRlIiwibmFtZSIsImRpZmljdWx0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFHTyxNQUFNQSxXQUFXLGdCQUFHQywyREFBYSxFQUFqQzs7QUFHUCxNQUFNQyxZQUFZLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFFckMsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQyxzREFBUSxDQUM5QjtBQUNFQyxRQUFJLEVBQUUsRUFEUjtBQUVFQyxhQUFTLEVBQUU7QUFGYixHQUQ4QixDQUFoQztBQVNBLFNBRUUsTUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUU7QUFBRUosVUFBRjtBQUFRQztBQUFSLEtBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFR0YsUUFGSCxDQUZGO0FBU0QsQ0FwQkQ7O0FBdUJlRCwyRUFBZiIsImZpbGUiOiIuL3NyYy9jb250ZXh0L3VzZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cblxuZXhwb3J0IGNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5cbmNvbnN0IFVzZXJQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcblxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShcbiAgICB7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGRpZmljdWx0eTogJydcbiAgICB9XG4gICk7XG5cblxuXG4gIHJldHVybiAoXG5cbiAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgc2V0VXNlciB9fT5cblxuICAgICAge2NoaWxkcmVufVxuXG5cbiAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvdmlkZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/user.js\n");

/***/ }),

/***/ "./src/pages/quiz/index.js":
/*!*********************************!*\
  !*** ./src/pages/quiz/index.js ***!
  \*********************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_useUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/useUser */ \"./src/utils/useUser.js\");\n/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Question */ \"./src/components/Question/index.js\");\n/* harmony import */ var _components_Results__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Results */ \"./src/components/Results/index.js\");\nvar _jsxFileName = \"/media/matheus-oliveira/Data/Projects/ReactJs/quiz/src/pages/quiz/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nconst Quiz = ({\n  quiz\n}) => {\n  const {\n    0: quizQuestion,\n    1: setQuizQuestion\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([{\n    question: '',\n    answers: {\n      answer_a: \"\",\n      answer_b: \"\",\n      answer_c: \"\",\n      answer_d: \"\",\n      answer_e: \"\",\n      answer_f: \"\"\n    },\n    correct_answers: {\n      answer_a: \"\",\n      answer_b: \"\",\n      answer_c: \"\",\n      answer_d: \"\",\n      answer_e: \"\",\n      answer_f: \"\"\n    }\n  }]);\n  const {\n    0: countQuestion,\n    1: setCountQuestion\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0);\n  const {\n    0: showResults,\n    1: setShowResults\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const {\n    user\n  } = Object(_utils_useUser__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (!user.name) {\n      return next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/home');\n    }\n\n    ;\n    const newQuiz = quiz.map((quiz, index) => {\n      if (index < user.dificulty) {\n        return {\n          question: quiz.question,\n          answers: quiz.answers,\n          correct_answers: quiz.correct_answers\n        };\n      }\n\n      ;\n    }).filter(quiz => quiz !== undefined);\n    return setQuizQuestion(newQuiz);\n  }, [user]);\n\n  const handleNextQuest = () => {\n    console.log('Clicked');\n    countQuestion < quizQuestion.length - 1 ? setCountQuestion(prevState => prevState + 1) : setShowResults(true);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, console.log(quizQuestion), !showResults ? __jsx(_components_Question__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    countQuestion: countQuestion,\n    question: quizQuestion[countQuestion].question,\n    answers: quizQuestion[countQuestion].answers // correct_answers={quizQuestion[countQuestion].correct_answers}\n    ,\n    nextQuestion: handleNextQuest,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 11\n    }\n  }) : __jsx(_components_Results__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 11\n    }\n  }), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }\n  }));\n};\n\nasync function getStaticProps() {\n  const result = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://quizapi.io/api/v1/questions', {\n    headers: {\n      'X-Api-Key': \"lCYLQgZXpyARHxOsGt6qe59DiLJawH8CbOIwDLdl\"\n    }\n  });\n  const quiz = result.data;\n  return {\n    props: {\n      quiz\n    }\n  };\n}\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quiz);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcXVpei9pbmRleC5qcz85OTU3Il0sIm5hbWVzIjpbIlF1aXoiLCJxdWl6IiwicXVpelF1ZXN0aW9uIiwic2V0UXVpelF1ZXN0aW9uIiwidXNlU3RhdGUiLCJxdWVzdGlvbiIsImFuc3dlcnMiLCJhbnN3ZXJfYSIsImFuc3dlcl9iIiwiYW5zd2VyX2MiLCJhbnN3ZXJfZCIsImFuc3dlcl9lIiwiYW5zd2VyX2YiLCJjb3JyZWN0X2Fuc3dlcnMiLCJjb3VudFF1ZXN0aW9uIiwic2V0Q291bnRRdWVzdGlvbiIsInNob3dSZXN1bHRzIiwic2V0U2hvd1Jlc3VsdHMiLCJ1c2VyIiwidXNlVVNlciIsInVzZUVmZmVjdCIsIm5hbWUiLCJSb3V0ZXIiLCJwdXNoIiwibmV3UXVpeiIsIm1hcCIsImluZGV4IiwiZGlmaWN1bHR5IiwiZmlsdGVyIiwidW5kZWZpbmVkIiwiaGFuZGxlTmV4dFF1ZXN0IiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsInByZXZTdGF0ZSIsImdldFN0YXRpY1Byb3BzIiwicmVzdWx0IiwiYXhpb3MiLCJnZXQiLCJoZWFkZXJzIiwicHJvY2VzcyIsInRva2VuQVBJIiwiZGF0YSIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQUlBLE1BQU1BLElBQUksR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFjO0FBQ3pCLFFBQU07QUFBQSxPQUFDQyxZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ0Msc0RBQVEsQ0FBQyxDQUFDO0FBRWhEQyxZQUFRLEVBQUUsRUFGc0M7QUFHaERDLFdBQU8sRUFBRTtBQUNQQyxjQUFRLEVBQUUsRUFESDtBQUVQQyxjQUFRLEVBQUUsRUFGSDtBQUdQQyxjQUFRLEVBQUUsRUFISDtBQUlQQyxjQUFRLEVBQUUsRUFKSDtBQUtQQyxjQUFRLEVBQUUsRUFMSDtBQU1QQyxjQUFRLEVBQUU7QUFOSCxLQUh1QztBQVdoREMsbUJBQWUsRUFBRTtBQUNmTixjQUFRLEVBQUUsRUFESztBQUVmQyxjQUFRLEVBQUUsRUFGSztBQUdmQyxjQUFRLEVBQUUsRUFISztBQUlmQyxjQUFRLEVBQUUsRUFKSztBQUtmQyxjQUFRLEVBQUUsRUFMSztBQU1mQyxjQUFRLEVBQUU7QUFOSztBQVgrQixHQUFELENBQUQsQ0FBaEQ7QUFxQkEsUUFBTTtBQUFBLE9BQUNFLGFBQUQ7QUFBQSxPQUFnQkM7QUFBaEIsTUFBb0NYLHNEQUFRLENBQUMsQ0FBRCxDQUFsRDtBQUNBLFFBQU07QUFBQSxPQUFDWSxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ2Isc0RBQVEsQ0FBQyxLQUFELENBQTlDO0FBRUEsUUFBTTtBQUFFYztBQUFGLE1BQVdDLDhEQUFPLEVBQXhCO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUVkLFFBQUksQ0FBQ0YsSUFBSSxDQUFDRyxJQUFWLEVBQWdCO0FBRWQsYUFBT0Msa0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLE9BQVosQ0FBUDtBQUVEOztBQUFBO0FBRUQsVUFBTUMsT0FBTyxHQUFHdkIsSUFBSSxDQUFDd0IsR0FBTCxDQUFTLENBQUN4QixJQUFELEVBQU95QixLQUFQLEtBQWlCO0FBRXhDLFVBQUlBLEtBQUssR0FBR1IsSUFBSSxDQUFDUyxTQUFqQixFQUE0QjtBQUUxQixlQUFPO0FBRUx0QixrQkFBUSxFQUFFSixJQUFJLENBQUNJLFFBRlY7QUFHTEMsaUJBQU8sRUFBRUwsSUFBSSxDQUFDSyxPQUhUO0FBSUxPLHlCQUFlLEVBQUVaLElBQUksQ0FBQ1k7QUFKakIsU0FBUDtBQU9EOztBQUFBO0FBRUYsS0FiZSxFQWFiZSxNQWJhLENBYU4zQixJQUFJLElBQUlBLElBQUksS0FBSzRCLFNBYlgsQ0FBaEI7QUFlQSxXQUFPMUIsZUFBZSxDQUFDcUIsT0FBRCxDQUF0QjtBQUdELEdBMUJRLEVBMEJOLENBQUNOLElBQUQsQ0ExQk0sQ0FBVDs7QUE0QkEsUUFBTVksZUFBZSxHQUFHLE1BQU07QUFHNUJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFFQWxCLGlCQUFhLEdBQUdaLFlBQVksQ0FBQytCLE1BQWIsR0FBc0IsQ0FBdEMsR0FLSWxCLGdCQUFnQixDQUFDbUIsU0FBUyxJQUFJQSxTQUFTLEdBQUcsQ0FBMUIsQ0FMcEIsR0FXSWpCLGNBQWMsQ0FBQyxJQUFELENBWGxCO0FBZUQsR0FwQkQ7O0FBc0JBLFNBQ0UsbUVBQ0djLE9BQU8sQ0FBQ0MsR0FBUixDQUFZOUIsWUFBWixDQURILEVBSUcsQ0FBQ2MsV0FBRCxHQUlHLE1BQUMsNERBQUQ7QUFDRSxpQkFBYSxFQUFFRixhQURqQjtBQUVFLFlBQVEsRUFBRVosWUFBWSxDQUFDWSxhQUFELENBQVosQ0FBNEJULFFBRnhDO0FBR0UsV0FBTyxFQUFFSCxZQUFZLENBQUNZLGFBQUQsQ0FBWixDQUE0QlIsT0FIdkMsQ0FJRTtBQUpGO0FBS0UsZ0JBQVksRUFBRXdCLGVBTGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSCxHQWdCRyxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFwQk4sRUE0QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTVCRixDQURGO0FBNkNELENBMUhEOztBQTRITyxlQUFlSyxjQUFmLEdBQWdDO0FBR3JDLFFBQU1DLE1BQU0sR0FBRyxNQUFNQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVUscUNBQVYsRUFBaUQ7QUFHcEVDLFdBQU8sRUFBRTtBQUFFLG1CQUFhQywwQ0FBb0JDO0FBQW5DO0FBSDJELEdBQWpELENBQXJCO0FBU0EsUUFBTXhDLElBQUksR0FBR21DLE1BQU0sQ0FBQ00sSUFBcEI7QUFFQSxTQUFPO0FBQUVDLFNBQUssRUFBRTtBQUFFMUM7QUFBRjtBQUFULEdBQVA7QUFDRDtBQUFBO0FBRWNELG1FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3F1aXovaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHVzZVVTZXIgZnJvbSAnLi4vLi4vdXRpbHMvdXNlVXNlcic7XG5cbmltcG9ydCBRdWVzdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL1F1ZXN0aW9uJztcbmltcG9ydCBSZXN1bHRzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUmVzdWx0cyc7XG5cblxuXG5jb25zdCBRdWl6ID0gKHsgcXVpeiB9KSA9PiB7XG4gIGNvbnN0IFtxdWl6UXVlc3Rpb24sIHNldFF1aXpRdWVzdGlvbl0gPSB1c2VTdGF0ZShbe1xuXG4gICAgcXVlc3Rpb246ICcnLFxuICAgIGFuc3dlcnM6IHtcbiAgICAgIGFuc3dlcl9hOiBcIlwiLFxuICAgICAgYW5zd2VyX2I6IFwiXCIsXG4gICAgICBhbnN3ZXJfYzogXCJcIixcbiAgICAgIGFuc3dlcl9kOiBcIlwiLFxuICAgICAgYW5zd2VyX2U6IFwiXCIsXG4gICAgICBhbnN3ZXJfZjogXCJcIixcbiAgICB9LFxuICAgIGNvcnJlY3RfYW5zd2Vyczoge1xuICAgICAgYW5zd2VyX2E6IFwiXCIsXG4gICAgICBhbnN3ZXJfYjogXCJcIixcbiAgICAgIGFuc3dlcl9jOiBcIlwiLFxuICAgICAgYW5zd2VyX2Q6IFwiXCIsXG4gICAgICBhbnN3ZXJfZTogXCJcIixcbiAgICAgIGFuc3dlcl9mOiBcIlwiLFxuICAgIH1cbiAgfV0pO1xuXG4gIGNvbnN0IFtjb3VudFF1ZXN0aW9uLCBzZXRDb3VudFF1ZXN0aW9uXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc2hvd1Jlc3VsdHMsIHNldFNob3dSZXN1bHRzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB7IHVzZXIgfSA9IHVzZVVTZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgaWYgKCF1c2VyLm5hbWUpIHtcblxuICAgICAgcmV0dXJuIFJvdXRlci5wdXNoKCcvaG9tZScpO1xuXG4gICAgfTtcblxuICAgIGNvbnN0IG5ld1F1aXogPSBxdWl6Lm1hcCgocXVpeiwgaW5kZXgpID0+IHtcblxuICAgICAgaWYgKGluZGV4IDwgdXNlci5kaWZpY3VsdHkpIHtcblxuICAgICAgICByZXR1cm4ge1xuXG4gICAgICAgICAgcXVlc3Rpb246IHF1aXoucXVlc3Rpb24sXG4gICAgICAgICAgYW5zd2VyczogcXVpei5hbnN3ZXJzLFxuICAgICAgICAgIGNvcnJlY3RfYW5zd2VyczogcXVpei5jb3JyZWN0X2Fuc3dlcnNcblxuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgIH0pLmZpbHRlcihxdWl6ID0+IHF1aXogIT09IHVuZGVmaW5lZCk7XG5cbiAgICByZXR1cm4gc2V0UXVpelF1ZXN0aW9uKG5ld1F1aXopO1xuXG5cbiAgfSwgW3VzZXJdKTtcblxuICBjb25zdCBoYW5kbGVOZXh0UXVlc3QgPSAoKSA9PiB7XG5cblxuICAgIGNvbnNvbGUubG9nKCdDbGlja2VkJyk7XG5cbiAgICBjb3VudFF1ZXN0aW9uIDwgcXVpelF1ZXN0aW9uLmxlbmd0aCAtIDFcblxuICAgICAgP1xuXG4gICAgICAoXG4gICAgICAgIHNldENvdW50UXVlc3Rpb24ocHJldlN0YXRlID0+IHByZXZTdGF0ZSArIDEpXG4gICAgICApXG5cbiAgICAgIDpcblxuICAgICAgKFxuICAgICAgICBzZXRTaG93UmVzdWx0cyh0cnVlKVxuICAgICAgKVxuXG5cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7Y29uc29sZS5sb2cocXVpelF1ZXN0aW9uKX1cbiAgICAgIHsvKiB7Y29uc29sZS5sb2cocXVpeil9ICovfVxuXG4gICAgICB7IXNob3dSZXN1bHRzXG4gICAgICAgID9cbiAgICAgICAgKFxuXG4gICAgICAgICAgPFF1ZXN0aW9uXG4gICAgICAgICAgICBjb3VudFF1ZXN0aW9uPXtjb3VudFF1ZXN0aW9ufVxuICAgICAgICAgICAgcXVlc3Rpb249e3F1aXpRdWVzdGlvbltjb3VudFF1ZXN0aW9uXS5xdWVzdGlvbn1cbiAgICAgICAgICAgIGFuc3dlcnM9e3F1aXpRdWVzdGlvbltjb3VudFF1ZXN0aW9uXS5hbnN3ZXJzfVxuICAgICAgICAgICAgLy8gY29ycmVjdF9hbnN3ZXJzPXtxdWl6UXVlc3Rpb25bY291bnRRdWVzdGlvbl0uY29ycmVjdF9hbnN3ZXJzfVxuICAgICAgICAgICAgbmV4dFF1ZXN0aW9uPXtoYW5kbGVOZXh0UXVlc3R9XG4gICAgICAgICAgLz5cblxuICAgICAgICApXG4gICAgICAgIDpcbiAgICAgICAgKFxuXG4gICAgICAgICAgPFJlc3VsdHMgLz5cblxuICAgICAgICApXG4gICAgICB9XG5cblxuXG5cbiAgICAgIDxkaXYgPlxuXG5cbiAgICAgICAgey8qIDxoMT57cXVpelsxXS5xdWVzdGlvbn08L2gxPlxuICAgICAgICA8cD57cXVpelsxXS5hbnN3ZXJzLmFuc3dlcl9hfTwvcD5cbiAgICAgICAgPHA+e3F1aXpbMV0uYW5zd2Vycy5hbnN3ZXJfYn08L3A+XG4gICAgICAgIDxwPntxdWl6WzFdLmFuc3dlcnMuYW5zd2VyX2N9PC9wPlxuICAgICAgICA8cD57cXVpelsxXS5hbnN3ZXJzLmFuc3dlcl9kfTwvcD5cbiAgICAgICAgPHA+e3F1aXpbMV0uYW5zd2Vycy5hbnN3ZXJfZX08L3A+XG4gICAgICAgIDxwPntxdWl6WzFdLmFuc3dlcnMuYW5zd2VyX2Z9PC9wPiAqL31cblxuXG4gICAgICA8L2Rpdj5cblxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuXG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL3F1aXphcGkuaW8vYXBpL3YxL3F1ZXN0aW9ucycsIHtcblxuXG4gICAgaGVhZGVyczogeyAnWC1BcGktS2V5JzogcHJvY2Vzcy5lbnYudG9rZW5BUEkgfSxcblxuXG5cbiAgfSk7XG5cbiAgY29uc3QgcXVpeiA9IHJlc3VsdC5kYXRhO1xuXG4gIHJldHVybiB7IHByb3BzOiB7IHF1aXogfSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUXVpejsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/quiz/index.js\n");

/***/ }),

/***/ "./src/utils/useUser.js":
/*!******************************!*\
  !*** ./src/utils/useUser.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/user */ \"./src/context/user.js\");\n\n\n\nconst useUser = () => {\n  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_context_user__WEBPACK_IMPORTED_MODULE_1__[\"UserContext\"]);\n  if (!context) throw new Error('useUser must be used whitin a UserProvider');\n  const {\n    user,\n    setUser\n  } = context;\n  return {\n    user,\n    setUser\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useUser);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXNlVXNlci5qcz9hNTRlIl0sIm5hbWVzIjpbInVzZVVzZXIiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0IiwiRXJyb3IiLCJ1c2VyIiwic2V0VXNlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBOztBQUVBLE1BQU1BLE9BQU8sR0FBRyxNQUFNO0FBRXBCLFFBQU1DLE9BQU8sR0FBR0Msd0RBQVUsQ0FBQ0MseURBQUQsQ0FBMUI7QUFFQSxNQUFJLENBQUNGLE9BQUwsRUFBYyxNQUFNLElBQUlHLEtBQUosQ0FBVSw0Q0FBVixDQUFOO0FBRWQsUUFBTTtBQUFFQyxRQUFGO0FBQVFDO0FBQVIsTUFBb0JMLE9BQTFCO0FBRUEsU0FBTztBQUFFSSxRQUFGO0FBQVFDO0FBQVIsR0FBUDtBQUNELENBVEQ7O0FBWWVOLHNFQUFmIiwiZmlsZSI6Ii4vc3JjL3V0aWxzL3VzZVVzZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvdXNlcic7XG5cbmNvbnN0IHVzZVVzZXIgPSAoKSA9PiB7XG5cbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuXG4gIGlmICghY29udGV4dCkgdGhyb3cgbmV3IEVycm9yKCd1c2VVc2VyIG11c3QgYmUgdXNlZCB3aGl0aW4gYSBVc2VyUHJvdmlkZXInKTtcblxuICBjb25zdCB7IHVzZXIsIHNldFVzZXIgfSA9IGNvbnRleHQ7XG5cbiAgcmV0dXJuIHsgdXNlciwgc2V0VXNlciB9O1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCB1c2VVc2VyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/useUser.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });