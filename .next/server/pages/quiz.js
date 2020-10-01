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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/Question/styles.js\");\nvar _jsxFileName = \"/media/matheus-oliveira/Data/Projects/ReactJs/quiz/src/components/Question/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Question = ({\n  question,\n  answers,\n  nextQuestion,\n  countQuestion\n}) => {\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"QuestionWrapper\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    count: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, \"Question: \", countQuestion), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    quest: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, question), answers && answers.map(answer => __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    answer: true,\n    key: answer.id,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 11\n    }\n  }, answer.quest)), console.log(answers), __jsx(\"button\", {\n    onClick: nextQuestion,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, \" Next\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Question);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9RdWVzdGlvbi9pbmRleC5qcz9hMjczIl0sIm5hbWVzIjpbIlF1ZXN0aW9uIiwicXVlc3Rpb24iLCJhbnN3ZXJzIiwibmV4dFF1ZXN0aW9uIiwiY291bnRRdWVzdGlvbiIsIm1hcCIsImFuc3dlciIsImlkIiwicXVlc3QiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBOztBQUVBLE1BQU1BLFFBQVEsR0FBRyxDQUFDO0FBQUVDLFVBQUY7QUFBWUMsU0FBWjtBQUFxQkMsY0FBckI7QUFBbUNDO0FBQW5DLENBQUQsS0FBd0Q7QUFHdkUsU0FHRSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDRDQUFEO0FBQU0sU0FBSyxNQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXVCQSxhQUF2QixDQURGLEVBR0UsTUFBQyw0Q0FBRDtBQUFNLFNBQUssTUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWFILFFBQWIsQ0FIRixFQUlHQyxPQUFPLElBQ05BLE9BQU8sQ0FBQ0csR0FBUixDQUFZQyxNQUFNLElBRWhCLE1BQUMsNENBQUQ7QUFBTSxVQUFNLE1BQVo7QUFBYSxPQUFHLEVBQUVBLE1BQU0sQ0FBQ0MsRUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE4QkQsTUFBTSxDQUFDRSxLQUFyQyxDQUZGLENBTEosRUFVR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlSLE9BQVosQ0FWSCxFQWVFO0FBQVEsV0FBTyxFQUFFQyxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZkYsQ0FIRjtBQXlCRCxDQTVCRDs7QUE4QmVILHVFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUXVlc3Rpb24vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUXVlc3Rpb25XcmFwcGVyLCBUZXh0IH0gZnJvbSAnLi9zdHlsZXMnO1xuXG5jb25zdCBRdWVzdGlvbiA9ICh7IHF1ZXN0aW9uLCBhbnN3ZXJzLCBuZXh0UXVlc3Rpb24sIGNvdW50UXVlc3Rpb24gfSkgPT4ge1xuXG5cbiAgcmV0dXJuIChcblxuXG4gICAgPFF1ZXN0aW9uV3JhcHBlcj5cbiAgICAgIDxUZXh0IGNvdW50PlF1ZXN0aW9uOiB7Y291bnRRdWVzdGlvbn08L1RleHQ+XG5cbiAgICAgIDxUZXh0IHF1ZXN0PntxdWVzdGlvbn08L1RleHQ+XG4gICAgICB7YW5zd2VycyAmJlxuICAgICAgICBhbnN3ZXJzLm1hcChhbnN3ZXIgPT4gKFxuXG4gICAgICAgICAgPFRleHQgYW5zd2VyIGtleT17YW5zd2VyLmlkfT57YW5zd2VyLnF1ZXN0fTwvVGV4dD5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICAgIHtjb25zb2xlLmxvZyhhbnN3ZXJzKX1cblxuXG5cblxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtuZXh0UXVlc3Rpb259PiBOZXh0PC9idXR0b24+XG5cblxuICAgIDwvUXVlc3Rpb25XcmFwcGVyPlxuXG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Question/index.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_useUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/useUser */ \"./src/utils/useUser.js\");\n/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Question */ \"./src/components/Question/index.js\");\n/* harmony import */ var _components_Results__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Results */ \"./src/components/Results/index.js\");\nvar _jsxFileName = \"/media/matheus-oliveira/Data/Projects/ReactJs/quiz/src/pages/quiz/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nconst Quiz = ({\n  quiz\n}) => {\n  const {\n    0: quizQuestion,\n    1: setQuizQuestion\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([{\n    question: '',\n    answers: {\n      answer_a_correct: \"\",\n      answer_b: \"\",\n      answer_c: \"\",\n      answer_d: \"\",\n      answer_e: \"\",\n      answer_f: \"\"\n    },\n    correct_answers: {\n      answer_a: \"\",\n      answer_b: \"\",\n      answer_c: \"\",\n      answer_d: \"\",\n      answer_e: \"\",\n      answer_f: \"\"\n    }\n  }]);\n  const {\n    0: countQuestion,\n    1: setCountQuestion\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0);\n  const {\n    0: showResults,\n    1: setShowResults\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const {\n    user\n  } = Object(_utils_useUser__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (!user.name) {\n      return next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/home');\n    }\n\n    ;\n  }, [user]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const newQuiz = {\n      question: quiz[countQuestion].question,\n      answers: quiz[countQuestion].answers,\n      correct_answers: quiz[countQuestion].correct_answers\n    };\n    setQuizQuestion(newQuiz);\n    setCountQuestion(prevState => prevState + 1);\n  }, []);\n\n  const handleNextQuest = () => {\n    if (countQuestion < user.dificulty) {\n      const newQuiz = {\n        question: quiz[countQuestion].question,\n        answers: quiz[countQuestion].answers,\n        correct_answers: quiz[countQuestion].correct_answers\n      };\n      setCountQuestion(prevState => prevState + 1);\n      setQuizQuestion(newQuiz);\n    }\n\n    ;\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !showResults ? __jsx(_components_Question__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    countQuestion: countQuestion,\n    question: quizQuestion.question,\n    answers: quizQuestion.answers // correct_answers={quizQuestion[countQuestion].correct_answers}\n    ,\n    nextQuestion: handleNextQuest,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 11\n    }\n  }) : __jsx(_components_Results__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 11\n    }\n  }), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 7\n    }\n  }));\n};\n\nasync function getStaticProps() {\n  const {\n    data\n  } = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://quizapi.io/api/v1/questions', {\n    headers: {\n      'X-Api-Key': \"lCYLQgZXpyARHxOsGt6qe59DiLJawH8CbOIwDLdl\"\n    }\n  });\n  const newQuiz = data.map(quiz => {\n    return {\n      id: quiz.id,\n      question: quiz.question,\n      answers: [{\n        id: 1,\n        quest: quiz.answers.answer_a\n      }, {\n        id: 2,\n        quest: quiz.answers.answer_b\n      }, {\n        id: 3,\n        quest: quiz.answers.answer_c\n      }, {\n        id: 4,\n        quest: quiz.answers.answer_d\n      }, {\n        id: 5,\n        quest: quiz.answers.answer_e\n      }, {\n        id: 6,\n        quest: quiz.answers.answer_f\n      }].filter(answer => answer.quest !== null),\n      correct_answers: quiz.correct_answers,\n      multiple_correct_answers: quiz.multiple_correct_answers,\n      category: quiz.category\n    };\n  });\n  const quiz = newQuiz;\n  return {\n    props: {\n      quiz\n    }\n  };\n}\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quiz);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcXVpei9pbmRleC5qcz85OTU3Il0sIm5hbWVzIjpbIlF1aXoiLCJxdWl6IiwicXVpelF1ZXN0aW9uIiwic2V0UXVpelF1ZXN0aW9uIiwidXNlU3RhdGUiLCJxdWVzdGlvbiIsImFuc3dlcnMiLCJhbnN3ZXJfYV9jb3JyZWN0IiwiYW5zd2VyX2IiLCJhbnN3ZXJfYyIsImFuc3dlcl9kIiwiYW5zd2VyX2UiLCJhbnN3ZXJfZiIsImNvcnJlY3RfYW5zd2VycyIsImFuc3dlcl9hIiwiY291bnRRdWVzdGlvbiIsInNldENvdW50UXVlc3Rpb24iLCJzaG93UmVzdWx0cyIsInNldFNob3dSZXN1bHRzIiwidXNlciIsInVzZVVTZXIiLCJ1c2VFZmZlY3QiLCJuYW1lIiwiUm91dGVyIiwicHVzaCIsIm5ld1F1aXoiLCJwcmV2U3RhdGUiLCJoYW5kbGVOZXh0UXVlc3QiLCJkaWZpY3VsdHkiLCJnZXRTdGF0aWNQcm9wcyIsImRhdGEiLCJheGlvcyIsImdldCIsImhlYWRlcnMiLCJwcm9jZXNzIiwidG9rZW5BUEkiLCJtYXAiLCJpZCIsInF1ZXN0IiwiZmlsdGVyIiwiYW5zd2VyIiwibXVsdGlwbGVfY29ycmVjdF9hbnN3ZXJzIiwiY2F0ZWdvcnkiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTs7QUFJQSxNQUFNQSxJQUFJLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBYztBQUN6QixRQUFNO0FBQUEsT0FBQ0MsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NDLHNEQUFRLENBQUMsQ0FBQztBQUVoREMsWUFBUSxFQUFFLEVBRnNDO0FBR2hEQyxXQUFPLEVBQUU7QUFDUEMsc0JBQWdCLEVBQUUsRUFEWDtBQUVQQyxjQUFRLEVBQUUsRUFGSDtBQUdQQyxjQUFRLEVBQUUsRUFISDtBQUlQQyxjQUFRLEVBQUUsRUFKSDtBQUtQQyxjQUFRLEVBQUUsRUFMSDtB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QUksQ0FBQ0ksUUFIVjtBQUlMQyxhQUFPLEVBQUUsQ0FDUDtBQUNFK0IsVUFBRSxFQUFFLENBRE47QUFFRUMsYUFBSyxFQUFFckMsSUFBSSxDQUFDSyxPQUFMLENBQWFRO0FBRnRCLE9BRE8sRUFLUDtBQUNFdUIsVUFBRSxFQUFFLENBRE47QUFFRUMsYUFBSyxFQUFFckMsSUFBSSxDQUFDSyxPQUFMLENBQWFFO0FBRnRCLE9BTE8sRUFTUDtBQUNFNkIsVUFBRSxFQUFFLENBRE47QUFFRUMsYUFBSyxFQUFFckMsSUFBSSxDQUFDSyxPQUFMLENBQWFHO0FBRnRCLE9BVE8sRUFhUDtBQUNFNEIsVUFBRSxFQUFFLENBRE47QUFFRUMsYUFBSyxFQUFFckMsSUFBSSxDQUFDSyxPQUFMLENBQWFJO0FBRnRCLE9BYk8sRUFpQlA7QUFDRTJCLFVBQUUsRUFBRSxDQUROO0FBRUVDLGFBQUssRUFBRXJDLElBQUksQ0FBQ0ssT0FBTCxDQUFhSztBQUZ0QixPQWpCTyxFQXFCUDtBQUNFMEIsVUFBRSxFQUFFLENBRE47QUFFRUMsYUFBSyxFQUFFckMsSUFBSSxDQUFDSyxPQUFMLENBQWFNO0FBRnRCLE9BckJPLEVBeUJQMkIsTUF6Qk8sQ0F5QkFDLE1BQU0sSUFBSUEsTUFBTSxDQUFDRixLQUFQLEtBQWlCLElBekIzQixDQUpKO0FBOEJMekIscUJBQWUsRUFBRVosSUFBSSxDQUFDWSxlQTlCakI7QUErQkw0Qiw4QkFBd0IsRUFBRXhDLElBQUksQ0FBQ3dDLHdCQS9CMUI7QUFnQ0xDLGNBQVEsRUFBRXpDLElBQUksQ0FBQ3lDO0FBaENWLEtBQVA7QUFtQ0QsR0FyQ2UsQ0FBaEI7QUF5Q0EsUUFBTXpDLElBQUksR0FBR3dCLE9BQWI7QUFFQSxTQUFPO0FBQUVrQixTQUFLLEVBQUU7QUFBRTFDO0FBQUY7QUFBVCxHQUFQO0FBQ0Q7QUFBQTtBQUVjRCxtRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9xdWl6L2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB1c2VVU2VyIGZyb20gJy4uLy4uL3V0aWxzL3VzZVVzZXInO1xuXG5pbXBvcnQgUXVlc3Rpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9RdWVzdGlvbic7XG5pbXBvcnQgUmVzdWx0cyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Jlc3VsdHMnO1xuXG5cblxuY29uc3QgUXVpeiA9ICh7IHF1aXogfSkgPT4ge1xuICBjb25zdCBbcXVpelF1ZXN0aW9uLCBzZXRRdWl6UXVlc3Rpb25dID0gdXNlU3RhdGUoW3tcblxuICAgIHF1ZXN0aW9uOiAnJyxcbiAgICBhbnN3ZXJzOiB7XG4gICAgICBhbnN3ZXJfYV9jb3JyZWN0OiBcIlwiLFxuICAgICAgYW5zd2VyX2I6IFwiXCIsXG4gICAgICBhbnN3ZXJfYzogXCJcIixcbiAgICAgIGFuc3dlcl9kOiBcIlwiLFxuICAgICAgYW5zd2VyX2U6IFwiXCIsXG4gICAgICBhbnN3ZXJfZjogXCJcIixcbiAgICB9LFxuICAgIGNvcnJlY3RfYW5zd2Vyczoge1xuICAgICAgYW5zd2VyX2E6IFwiXCIsXG4gICAgICBhbnN3ZXJfYjogXCJcIixcbiAgICAgIGFuc3dlcl9jOiBcIlwiLFxuICAgICAgYW5zd2VyX2Q6IFwiXCIsXG4gICAgICBhbnN3ZXJfZTogXCJcIixcbiAgICAgIGFuc3dlcl9mOiBcIlwiLFxuICAgIH1cbiAgfV0pO1xuXG4gIGNvbnN0IFtjb3VudFF1ZXN0aW9uLCBzZXRDb3VudFF1ZXN0aW9uXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc2hvd1Jlc3VsdHMsIHNldFNob3dSZXN1bHRzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB7IHVzZXIgfSA9IHVzZVVTZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgaWYgKCF1c2VyLm5hbWUpIHtcblxuICAgICAgcmV0dXJuIFJvdXRlci5wdXNoKCcvaG9tZScpO1xuXG4gICAgfTtcblxuICB9LCBbdXNlcl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICBjb25zdCBuZXdRdWl6ID0ge1xuXG4gICAgICBxdWVzdGlvbjogcXVpeltjb3VudFF1ZXN0aW9uXS5xdWVzdGlvbixcbiAgICAgIGFuc3dlcnM6IHF1aXpbY291bnRRdWVzdGlvbl0uYW5zd2VycyxcbiAgICAgIGNvcnJlY3RfYW5zd2VyczogcXVpeltjb3VudFF1ZXN0aW9uXS5jb3JyZWN0X2Fuc3dlcnNcblxuICAgIH07XG5cbiAgICBzZXRRdWl6UXVlc3Rpb24obmV3UXVpeik7XG4gICAgc2V0Q291bnRRdWVzdGlvbihwcmV2U3RhdGUgPT4gcHJldlN0YXRlICsgMSk7XG5cblxuXG4gIH0sIFtdKTtcblxuXG5cbiAgY29uc3QgaGFuZGxlTmV4dFF1ZXN0ID0gKCkgPT4ge1xuICAgIGlmIChjb3VudFF1ZXN0aW9uIDwgdXNlci5kaWZpY3VsdHkpIHtcblxuICAgICAgY29uc3QgbmV3UXVpeiA9IHtcblxuICAgICAgICBxdWVzdGlvbjogcXVpeltjb3VudFF1ZXN0aW9uXS5xdWVzdGlvbixcbiAgICAgICAgYW5zd2VyczogcXVpeltjb3VudFF1ZXN0aW9uXS5hbnN3ZXJzLFxuICAgICAgICBjb3JyZWN0X2Fuc3dlcnM6IHF1aXpbY291bnRRdWVzdGlvbl0uY29ycmVjdF9hbnN3ZXJzXG5cbiAgICAgIH07XG5cblxuICAgICAgc2V0Q291bnRRdWVzdGlvbihwcmV2U3RhdGUgPT4gcHJldlN0YXRlICsgMSk7XG4gICAgICBzZXRRdWl6UXVlc3Rpb24obmV3UXVpeik7XG4gICAgfTtcblxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cblxuICAgICAgeyFzaG93UmVzdWx0c1xuICAgICAgICA/XG4gICAgICAgIChcblxuICAgICAgICAgIDxRdWVzdGlvblxuICAgICAgICAgICAgY291bnRRdWVzdGlvbj17Y291bnRRdWVzdGlvbn1cbiAgICAgICAgICAgIHF1ZXN0aW9uPXtxdWl6UXVlc3Rpb24ucXVlc3Rpb259XG4gICAgICAgICAgICBhbnN3ZXJzPXtxdWl6UXVlc3Rpb24uYW5zd2Vyc31cbiAgICAgICAgICAgIC8vIGNvcnJlY3RfYW5zd2Vycz17cXVpelF1ZXN0aW9uW2NvdW50UXVlc3Rpb25dLmNvcnJlY3RfYW5zd2Vyc31cbiAgICAgICAgICAgIG5leHRRdWVzdGlvbj17aGFuZGxlTmV4dFF1ZXN0fVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgKVxuICAgICAgICA6XG4gICAgICAgIChcblxuICAgICAgICAgIDxSZXN1bHRzIC8+XG5cbiAgICAgICAgKVxuICAgICAgfVxuXG5cblxuXG4gICAgICA8ZGl2ID5cblxuXG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG5cblxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9xdWl6YXBpLmlvL2FwaS92MS9xdWVzdGlvbnMnLCB7XG5cblxuICAgIGhlYWRlcnM6IHsgJ1gtQXBpLUtleSc6IHByb2Nlc3MuZW52LnRva2VuQVBJIH0sXG5cblxuICB9KTtcblxuICBjb25zdCBuZXdRdWl6ID0gZGF0YS5tYXAocXVpeiA9PiB7XG5cbiAgICByZXR1cm4ge1xuXG4gICAgICBpZDogcXVpei5pZCxcbiAgICAgIHF1ZXN0aW9uOiBxdWl6LnF1ZXN0aW9uLFxuICAgICAgYW5zd2VyczogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgcXVlc3Q6IHF1aXouYW5zd2Vycy5hbnN3ZXJfYSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgIHF1ZXN0OiBxdWl6LmFuc3dlcnMuYW5zd2VyX2IsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMyxcbiAgICAgICAgICBxdWVzdDogcXVpei5hbnN3ZXJzLmFuc3dlcl9jLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgcXVlc3Q6IHF1aXouYW5zd2Vycy5hbnN3ZXJfZCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA1LFxuICAgICAgICAgIHF1ZXN0OiBxdWl6LmFuc3dlcnMuYW5zd2VyX2UsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogNixcbiAgICAgICAgICBxdWVzdDogcXVpei5hbnN3ZXJzLmFuc3dlcl9mLFxuICAgICAgICB9LFxuICAgICAgXS5maWx0ZXIoYW5zd2VyID0+IGFuc3dlci5xdWVzdCAhPT0gbnVsbCksXG4gICAgICBjb3JyZWN0X2Fuc3dlcnM6IHF1aXouY29ycmVjdF9hbnN3ZXJzLFxuICAgICAgbXVsdGlwbGVfY29ycmVjdF9hbnN3ZXJzOiBxdWl6Lm11bHRpcGxlX2NvcnJlY3RfYW5zd2VycyxcbiAgICAgIGNhdGVnb3J5OiBxdWl6LmNhdGVnb3J5LFxuXG4gICAgfVxuICB9KTtcblxuXG5cbiAgY29uc3QgcXVpeiA9IG5ld1F1aXo7XG5cbiAgcmV0dXJuIHsgcHJvcHM6IHsgcXVpeiB9IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBRdWl6OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/quiz/index.js\n");

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