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

/***/ "./src/context/user.js":
/*!*****************************!*\
  !*** ./src/context/user.js ***!
  \*****************************/
/*! exports provided: UserContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserContext\", function() { return UserContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/media/matheus-oliveira/Data/Projects/ReactJs/quiz/src/context/user.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst UserContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])();\n\nconst UserProvider = ({\n  children\n}) => {\n  const {\n    0: user,\n    1: setUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    name: '',\n    category: '',\n    dificulty: ''\n  });\n  return __jsx(UserContext.Provider, {\n    value: {\n      user,\n      setUser\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProvider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC91c2VyLmpzPzhkYmYiXSwibmFtZXMiOlsiVXNlckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiVXNlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsInVzZVN0YXRlIiwibmFtZSIsImNhdGVnb3J5IiwiZGlmaWN1bHR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUdPLE1BQU1BLFdBQVcsZ0JBQUdDLDJEQUFhLEVBQWpDOztBQUdQLE1BQU1DLFlBQVksR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUVyQyxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLHNEQUFRLENBQzlCO0FBQ0VDLFFBQUksRUFBRSxFQURSO0FBRUVDLFlBQVEsRUFBRSxFQUZaO0FBR0VDLGFBQVMsRUFBRTtBQUhiLEdBRDhCLENBQWhDO0FBVUEsU0FFRSxNQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRTtBQUFFTCxVQUFGO0FBQVFDO0FBQVIsS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVHRixRQUZILENBRkY7QUFTRCxDQXJCRDs7QUF3QmVELDJFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbnRleHQvdXNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuXG5leHBvcnQgY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cblxuY29uc3QgVXNlclByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKFxuICAgIHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgY2F0ZWdvcnk6ICcnLFxuICAgICAgZGlmaWN1bHR5OiAnJ1xuICAgIH1cbiAgKTtcblxuXG5cbiAgcmV0dXJuIChcblxuICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBzZXRVc2VyIH19PlxuXG4gICAgICB7Y2hpbGRyZW59XG5cblxuICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm92aWRlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/user.js\n");

/***/ }),

/***/ "./src/pages/quiz/index.js":
/*!*********************************!*\
  !*** ./src/pages/quiz/index.js ***!
  \*********************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_useUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/useUser */ \"./src/utils/useUser.js\");\nvar _jsxFileName = \"/media/matheus-oliveira/Data/Projects/ReactJs/quiz/src/pages/quiz/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst Quiz = ({\n  quiz\n}) => {\n  const {\n    user\n  } = Object(_utils_useUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, \"Quiz\"), console.log(quiz), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, quiz[1].question), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, quiz[1].answers.answer_a), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, quiz[1].answers.answer_b), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, quiz[1].answers.answer_c), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, quiz[1].answers.answer_d), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, quiz[1].answers.answer_e), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, quiz[1].answers.answer_f), __jsx(\"hr\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  })));\n};\n\nasync function getStaticProps() {\n  const result = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://quizapi.io/api/v1/questions', {\n    headers: {\n      'X-Api-Key': \"lCYLQgZXpyARHxOsGt6qe59DiLJawH8CbOIwDLdl\"\n    }\n  });\n  const quiz = result.data;\n  return {\n    props: {\n      quiz\n    }\n  };\n}\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quiz);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcXVpei9pbmRleC5qcz85OTU3Il0sIm5hbWVzIjpbIlF1aXoiLCJxdWl6IiwidXNlciIsInVzZVVTZXIiLCJjb25zb2xlIiwibG9nIiwicXVlc3Rpb24iLCJhbnN3ZXJzIiwiYW5zd2VyX2EiLCJhbnN3ZXJfYiIsImFuc3dlcl9jIiwiYW5zd2VyX2QiLCJhbnN3ZXJfZSIsImFuc3dlcl9mIiwiZ2V0U3RhdGljUHJvcHMiLCJyZXN1bHQiLCJheGlvcyIsImdldCIsImhlYWRlcnMiLCJwcm9jZXNzIiwidG9rZW5BUEkiLCJkYXRhIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTs7QUFHQSxNQUFNQSxJQUFJLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBYztBQUV6QixRQUFNO0FBQUVDO0FBQUYsTUFBV0MsOERBQU8sRUFBeEI7QUFDQSxTQUNFLG1FQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUosSUFBWixDQUZILEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0EsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRSyxRQUFiLENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlMLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUU0sT0FBUixDQUFnQkMsUUFBcEIsQ0FIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSVAsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRTSxPQUFSLENBQWdCRSxRQUFwQixDQUpGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJUixJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFNLE9BQVIsQ0FBZ0JHLFFBQXBCLENBTEYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlULElBQUksQ0FBQyxDQUFELENBQUosQ0FBUU0sT0FBUixDQUFnQkksUUFBcEIsQ0FORixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSVYsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRTSxPQUFSLENBQWdCSyxRQUFwQixDQVBGLEVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJWCxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFNLE9BQVIsQ0FBZ0JNLFFBQXBCLENBUkYsRUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsQ0FORixDQURGO0FBcUJELENBeEJEOztBQTBCTyxlQUFlQyxjQUFmLEdBQWdDO0FBR3JDLFFBQU1DLE1BQU0sR0FBRyxNQUFNQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVUscUNBQVYsRUFBaUQ7QUFFcEVDLFdBQU8sRUFBRTtBQUFFLG1CQUFhQywwQ0FBb0JDO0FBQW5DO0FBRjJELEdBQWpELENBQXJCO0FBTUEsUUFBTW5CLElBQUksR0FBR2MsTUFBTSxDQUFDTSxJQUFwQjtBQUVBLFNBQU87QUFBRUMsU0FBSyxFQUFFO0FBQUVyQjtBQUFGO0FBQVQsR0FBUDtBQUNEO0FBQUE7QUFFY0QsbUVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvcXVpei9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB1c2VVU2VyIGZyb20gJy4uLy4uL3V0aWxzL3VzZVVzZXInO1xuXG5cbmNvbnN0IFF1aXogPSAoeyBxdWl6IH0pID0+IHtcblxuICBjb25zdCB7IHVzZXIgfSA9IHVzZVVTZXIoKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxPlF1aXo8L2gxPlxuICAgICAge2NvbnNvbGUubG9nKHF1aXopfVxuXG5cblxuICAgICAgPGRpdiA+XG5cbiAgICAgICAgPGgxPntxdWl6WzFdLnF1ZXN0aW9ufTwvaDE+XG4gICAgICAgIDxwPntxdWl6WzFdLmFuc3dlcnMuYW5zd2VyX2F9PC9wPlxuICAgICAgICA8cD57cXVpelsxXS5hbnN3ZXJzLmFuc3dlcl9ifTwvcD5cbiAgICAgICAgPHA+e3F1aXpbMV0uYW5zd2Vycy5hbnN3ZXJfY308L3A+XG4gICAgICAgIDxwPntxdWl6WzFdLmFuc3dlcnMuYW5zd2VyX2R9PC9wPlxuICAgICAgICA8cD57cXVpelsxXS5hbnN3ZXJzLmFuc3dlcl9lfTwvcD5cbiAgICAgICAgPHA+e3F1aXpbMV0uYW5zd2Vycy5hbnN3ZXJfZn08L3A+XG4gICAgICAgIDxociAvPlxuICAgICAgPC9kaXY+XG5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcblxuXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9xdWl6YXBpLmlvL2FwaS92MS9xdWVzdGlvbnMnLCB7XG5cbiAgICBoZWFkZXJzOiB7ICdYLUFwaS1LZXknOiBwcm9jZXNzLmVudi50b2tlbkFQSSB9LFxuXG4gIH0pO1xuXG4gIGNvbnN0IHF1aXogPSByZXN1bHQuZGF0YTtcblxuICByZXR1cm4geyBwcm9wczogeyBxdWl6IH0gfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFF1aXo7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/quiz/index.js\n");

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });