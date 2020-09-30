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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/Question/styles.js\");\nvar _jsxFileName = \"/media/matheus-oliveira/Data/Projects/ReactJs/quiz/src/components/Question/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Question = ({\n  question,\n  answers,\n  nextQuestion,\n  countQuestion\n}) => {\n  // const [answersQuestion, setAnswersQuestion] = useState(\n  //   [\n  //     {\n  //       quest: \"\"\n  //     },\n  //   ]\n  // );\n  // console.log(answersQuestion);\n  // const {\n  //   answer_a,\n  //   answer_b,\n  //   answer_c,\n  //   answer_d,\n  //   answer_e,\n  //   answer_f\n  // } = answers;\n  // useEffect(() => { \n  //   setAnswersQuestion([...quest, {}])\n  // }, [answers]);\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"QuestionWrapper\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    count: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, \"Question: \", countQuestion + 1), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    quest: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }, question), __jsx(\"button\", {\n    onClick: nextQuestion,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }\n  }, \" Next\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Question);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9RdWVzdGlvbi9pbmRleC5qcz9hMjczIl0sIm5hbWVzIjpbIlF1ZXN0aW9uIiwicXVlc3Rpb24iLCJhbnN3ZXJzIiwibmV4dFF1ZXN0aW9uIiwiY291bnRRdWVzdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsQ0FBQztBQUFFQyxVQUFGO0FBQVlDLFNBQVo7QUFBcUJDLGNBQXJCO0FBQW1DQztBQUFuQyxDQUFELEtBQXdEO0FBR3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUdBO0FBQ0EsU0FHRSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDRDQUFEO0FBQU0sU0FBSyxNQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXVCQSxhQUFhLEdBQUcsQ0FBdkMsQ0FERixFQUdFLE1BQUMsNENBQUQ7QUFBTSxTQUFLLE1BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFhSCxRQUFiLENBSEYsRUEwQkU7QUFBUSxXQUFPLEVBQUVFLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUExQkYsQ0FIRjtBQW9DRCxDQWpFRDs7QUFtRWVILHVFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUXVlc3Rpb24vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUXVlc3Rpb25XcmFwcGVyLCBUZXh0IH0gZnJvbSAnLi9zdHlsZXMnO1xuXG5jb25zdCBRdWVzdGlvbiA9ICh7IHF1ZXN0aW9uLCBhbnN3ZXJzLCBuZXh0UXVlc3Rpb24sIGNvdW50UXVlc3Rpb24gfSkgPT4ge1xuXG5cbiAgLy8gY29uc3QgW2Fuc3dlcnNRdWVzdGlvbiwgc2V0QW5zd2Vyc1F1ZXN0aW9uXSA9IHVzZVN0YXRlKFxuICAvLyAgIFtcbiAgLy8gICAgIHtcbiAgLy8gICAgICAgcXVlc3Q6IFwiXCJcbiAgLy8gICAgIH0sXG4gIC8vICAgXVxuICAvLyApO1xuXG4gIC8vIGNvbnNvbGUubG9nKGFuc3dlcnNRdWVzdGlvbik7XG4gIC8vIGNvbnN0IHtcbiAgLy8gICBhbnN3ZXJfYSxcbiAgLy8gICBhbnN3ZXJfYixcbiAgLy8gICBhbnN3ZXJfYyxcbiAgLy8gICBhbnN3ZXJfZCxcbiAgLy8gICBhbnN3ZXJfZSxcbiAgLy8gICBhbnN3ZXJfZlxuICAvLyB9ID0gYW5zd2VycztcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4geyBcblxuXG5cbiAgLy8gICBzZXRBbnN3ZXJzUXVlc3Rpb24oWy4uLnF1ZXN0LCB7fV0pXG5cblxuICAvLyB9LCBbYW5zd2Vyc10pO1xuICByZXR1cm4gKFxuXG5cbiAgICA8UXVlc3Rpb25XcmFwcGVyPlxuICAgICAgPFRleHQgY291bnQ+UXVlc3Rpb246IHtjb3VudFF1ZXN0aW9uICsgMX08L1RleHQ+XG5cbiAgICAgIDxUZXh0IHF1ZXN0PntxdWVzdGlvbn08L1RleHQ+XG4gICAgICB7Lyoge2NvbnNvbGUubG9nKGFuc3dlcnMpfSAqL31cblxuICAgICAgey8qIHtcbiAgICAgICAgYW5zd2Vycy5maWx0ZXIoYW5zd2VyID0+IGFuc3dlciAhPT0gbnVsbCkubWFwKGFuc3dlciA9PiAoXG5cbiAgICAgICAgPFRleHQ+e2Fuc3dlci5hbnNlcn08L1RleHQ+XG4gICAgICAgICkpXG4gICAgICB9ICovfVxuXG4gICAgICB7Lyoge2Fuc3dlcl9hICYmIDxUZXh0IGFuc3dlciBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZyhhbnN3ZXJfYSl9PnthbnN3ZXJfYX08L1RleHQgPn1cblxuICAgICAge2Fuc3dlcl9iICYmIDxUZXh0IGFuc3dlcj57YW5zd2VyX2J9PC9UZXh0ID59XG5cbiAgICAgIHthbnN3ZXJfYyAmJiA8VGV4dCBhbnN3ZXI+e2Fuc3dlcl9jfTwvVGV4dCA+fVxuXG4gICAgICB7YW5zd2VyX2QgJiYgPFRleHQgYW5zd2VyPnthbnN3ZXJfZH08L1RleHQgPn1cblxuICAgICAge2Fuc3dlcl9lICYmIDxUZXh0IGFuc3dlcj57YW5zd2VyX2V9PC9UZXh0ID59XG5cbiAgICAgIHthbnN3ZXJfZiAmJiA8VGV4dCBhbnN3ZXI+e2Fuc3dlcl9mfTwvVGV4dCA+fSAqL31cblxuXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e25leHRRdWVzdGlvbn0+IE5leHQ8L2J1dHRvbj5cblxuXG4gICAgPC9RdWVzdGlvbldyYXBwZXI+XG5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUXVlc3Rpb247Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Question/index.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_useUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/useUser */ \"./src/utils/useUser.js\");\n/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Question */ \"./src/components/Question/index.js\");\n/* harmony import */ var _components_Results__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Results */ \"./src/components/Results/index.js\");\nvar _jsxFileName = \"/media/matheus-oliveira/Data/Projects/ReactJs/quiz/src/pages/quiz/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nconst Quiz = ({\n  quiz\n}) => {\n  const {\n    0: quizQuestion,\n    1: setQuizQuestion\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([{\n    question: '',\n    answers: {\n      answer_a: \"\",\n      answer_b: \"\",\n      answer_c: \"\",\n      answer_d: \"\",\n      answer_e: \"\",\n      answer_f: \"\"\n    },\n    correct_answers: {\n      answer_a: \"\",\n      answer_b: \"\",\n      answer_c: \"\",\n      answer_d: \"\",\n      answer_e: \"\",\n      answer_f: \"\"\n    }\n  }]);\n  const {\n    0: countQuestion,\n    1: setCountQuestion\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0);\n  const {\n    0: showResults,\n    1: setShowResults\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const {\n    user\n  } = Object(_utils_useUser__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (!user.name) {\n      return next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/home');\n    }\n\n    ;\n    const newQuiz = quiz.map((quiz, index) => {\n      if (index < user.dificulty) {\n        const newAnsers = [{\n          id: 1,\n          quest: quiz.answers.answer_a\n        }, {\n          id: 2,\n          quest: quiz.answers.answer_b\n        }, {\n          id: 3,\n          quest: quiz.answers.answer_c\n        }, {\n          id: 4,\n          quest: quiz.answers.answer_d\n        }, {\n          id: 5,\n          quest: quiz.answers.answer_e\n        }, {\n          id: 6,\n          quest: quiz.answers.answer_f\n        }].filter(answer => answer.quest !== null);\n        return {\n          question: quiz.question,\n          answers: newAnsers,\n          correct_answers: quiz.correct_answers\n        };\n      }\n\n      ;\n    }).filter(quiz => quiz !== undefined);\n    return setQuizQuestion(newQuiz);\n  }, [user]);\n\n  const handleNextQuest = () => {\n    countQuestion < quizQuestion.length - 1 ? setCountQuestion(prevState => prevState + 1) : setShowResults(true);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, console.log(quizQuestion), !showResults ? __jsx(_components_Question__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    countQuestion: countQuestion,\n    question: quizQuestion[countQuestion].question,\n    answers: [quizQuestion[countQuestion].answers] // correct_answers={quizQuestion[countQuestion].correct_answers}\n    ,\n    nextQuestion: handleNextQuest,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 11\n    }\n  }) : __jsx(_components_Results__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 11\n    }\n  }), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 7\n    }\n  }));\n};\n\nasync function getStaticProps() {\n  const result = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://quizapi.io/api/v1/questions', {\n    headers: {\n      'X-Api-Key': \"lCYLQgZXpyARHxOsGt6qe59DiLJawH8CbOIwDLdl\"\n    }\n  });\n  const quiz = result.data;\n  return {\n    props: {\n      quiz\n    }\n  };\n}\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quiz);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcXVpei9pbmRleC5qcz85OTU3Il0sIm5hbWVzIjpbIlF1aXoiLCJxdWl6IiwicXVpelF1ZXN0aW9uIiwic2V0UXVpelF1ZXN0aW9uIiwidXNlU3RhdGUiLCJxdWVzdGlvbiIsImFuc3dlcnMiLCJhbnN3ZXJfYSIsImFuc3dlcl9iIiwiYW5zd2VyX2MiLCJhbnN3ZXJfZCIsImFuc3dlcl9lIiwiYW5zd2VyX2YiLCJjb3JyZWN0X2Fuc3dlcnMiLCJjb3VudFF1ZXN0aW9uIiwic2V0Q291bnRRdWVzdGlvbiIsInNob3dSZXN1bHRzIiwic2V0U2hvd1Jlc3VsdHMiLCJ1c2VyIiwidXNlVVNlciIsInVzZUVmZmVjdCIsIm5hbWUiLCJSb3V0ZXIiLCJwdXNoIiwibmV3UXVpeiIsIm1hcCIsImluZGV4IiwiZGlmaWN1bHR5IiwibmV3QW5zZXJzIiwiaWQiLCJxdWVzdCIsImZpbHRlciIsImFuc3dlciIsInVuZGVmaW5lZCIsImhhbmRsZU5leHRRdWVzdCIsImxlbmd0aCIsInByZXZTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRTdGF0aWNQcm9wcyIsInJlc3VsdCIsImF4aW9zIiwiZ2V0IiwiaGVhZGVycyIsInByb2Nlc3MiLCJ0b2tlbkFQSSIsImRhdGEiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTs7QUFJQSxNQUFNQSxJQUFJLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBYztBQUN6QixRQUFNO0FBQUEsT0FBQ0MsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NDLHNEQUFRLENBQUMsQ0FBQztBQUVoREMsWUFBUSxFQUFFLEVBRnNDO0FBR2hEQyxXQUFPLEVBQUU7QUFDUEMsY0FBUSxFQUFFLEVBREg7QUFFUEMsY0FBUSxFQUFFLEVBRkg7QUFHUEMsY0FBUSxFQUFFLEVBSEg7QUFJUEMsY0FBUSxFQUFFLEVBSkg7QUFLUEMsY0FBUSxFQUFF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Q0FBQ0gsWUFBWSxDQUFDWSxhQUFELENBQVosQ0FBNEJSLE9BQTdCLENBSFgsQ0FJRTtBQUpGO0FBS0UsZ0JBQVksRUFBRTRCLGVBTGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSCxHQWdCRyxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFwQk4sRUE0QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTVCRixDQURGO0FBNkNELENBcEpEOztBQXNKTyxlQUFlSyxjQUFmLEdBQWdDO0FBR3JDLFFBQU1DLE1BQU0sR0FBRyxNQUFNQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVUscUNBQVYsRUFBaUQ7QUFHcEVDLFdBQU8sRUFBRTtBQUFFLG1CQUFhQywwQ0FBb0JDO0FBQW5DO0FBSDJELEdBQWpELENBQXJCO0FBU0EsUUFBTTVDLElBQUksR0FBR3VDLE1BQU0sQ0FBQ00sSUFBcEI7QUFFQSxTQUFPO0FBQUVDLFNBQUssRUFBRTtBQUFFOUM7QUFBRjtBQUFULEdBQVA7QUFDRDtBQUFBO0FBRWNELG1FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3F1aXovaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHVzZVVTZXIgZnJvbSAnLi4vLi4vdXRpbHMvdXNlVXNlcic7XG5cbmltcG9ydCBRdWVzdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL1F1ZXN0aW9uJztcbmltcG9ydCBSZXN1bHRzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUmVzdWx0cyc7XG5cblxuXG5jb25zdCBRdWl6ID0gKHsgcXVpeiB9KSA9PiB7XG4gIGNvbnN0IFtxdWl6UXVlc3Rpb24sIHNldFF1aXpRdWVzdGlvbl0gPSB1c2VTdGF0ZShbe1xuXG4gICAgcXVlc3Rpb246ICcnLFxuICAgIGFuc3dlcnM6IHtcbiAgICAgIGFuc3dlcl9hOiBcIlwiLFxuICAgICAgYW5zd2VyX2I6IFwiXCIsXG4gICAgICBhbnN3ZXJfYzogXCJcIixcbiAgICAgIGFuc3dlcl9kOiBcIlwiLFxuICAgICAgYW5zd2VyX2U6IFwiXCIsXG4gICAgICBhbnN3ZXJfZjogXCJcIixcbiAgICB9LFxuICAgIGNvcnJlY3RfYW5zd2Vyczoge1xuICAgICAgYW5zd2VyX2E6IFwiXCIsXG4gICAgICBhbnN3ZXJfYjogXCJcIixcbiAgICAgIGFuc3dlcl9jOiBcIlwiLFxuICAgICAgYW5zd2VyX2Q6IFwiXCIsXG4gICAgICBhbnN3ZXJfZTogXCJcIixcbiAgICAgIGFuc3dlcl9mOiBcIlwiLFxuICAgIH1cbiAgfV0pO1xuXG4gIGNvbnN0IFtjb3VudFF1ZXN0aW9uLCBzZXRDb3VudFF1ZXN0aW9uXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc2hvd1Jlc3VsdHMsIHNldFNob3dSZXN1bHRzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB7IHVzZXIgfSA9IHVzZVVTZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgaWYgKCF1c2VyLm5hbWUpIHtcblxuICAgICAgcmV0dXJuIFJvdXRlci5wdXNoKCcvaG9tZScpO1xuXG4gICAgfTtcblxuICAgIGNvbnN0IG5ld1F1aXogPSBxdWl6Lm1hcCgocXVpeiwgaW5kZXgpID0+IHtcblxuICAgICAgaWYgKGluZGV4IDwgdXNlci5kaWZpY3VsdHkpIHtcblxuICAgICAgICBjb25zdCBuZXdBbnNlcnMgPSBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBxdWVzdDogcXVpei5hbnN3ZXJzLmFuc3dlcl9hXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgIHF1ZXN0OiBxdWl6LmFuc3dlcnMuYW5zd2VyX2JcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgcXVlc3Q6IHF1aXouYW5zd2Vycy5hbnN3ZXJfY1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICBxdWVzdDogcXVpei5hbnN3ZXJzLmFuc3dlcl9kXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogNSxcbiAgICAgICAgICAgIHF1ZXN0OiBxdWl6LmFuc3dlcnMuYW5zd2VyX2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA2LFxuICAgICAgICAgICAgcXVlc3Q6IHF1aXouYW5zd2Vycy5hbnN3ZXJfZlxuICAgICAgICAgIH0sXG4gICAgICAgIF0uZmlsdGVyKGFuc3dlciA9PiBhbnN3ZXIucXVlc3QgIT09IG51bGwpXG5cblxuICAgICAgICByZXR1cm4ge1xuXG4gICAgICAgICAgcXVlc3Rpb246IHF1aXoucXVlc3Rpb24sXG4gICAgICAgICAgYW5zd2VyczogbmV3QW5zZXJzLFxuICAgICAgICAgIGNvcnJlY3RfYW5zd2VyczogcXVpei5jb3JyZWN0X2Fuc3dlcnNcblxuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgIH0pLmZpbHRlcihxdWl6ID0+IHF1aXogIT09IHVuZGVmaW5lZCk7XG5cbiAgICByZXR1cm4gc2V0UXVpelF1ZXN0aW9uKG5ld1F1aXopO1xuXG5cbiAgfSwgW3VzZXJdKTtcblxuICBjb25zdCBoYW5kbGVOZXh0UXVlc3QgPSAoKSA9PiB7XG5cblxuICAgIGNvdW50UXVlc3Rpb24gPCBxdWl6UXVlc3Rpb24ubGVuZ3RoIC0gMVxuXG4gICAgICA/XG5cbiAgICAgIChcbiAgICAgICAgc2V0Q291bnRRdWVzdGlvbihwcmV2U3RhdGUgPT4gcHJldlN0YXRlICsgMSlcbiAgICAgIClcblxuICAgICAgOlxuXG4gICAgICAoXG4gICAgICAgIHNldFNob3dSZXN1bHRzKHRydWUpXG4gICAgICApXG5cblxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtjb25zb2xlLmxvZyhxdWl6UXVlc3Rpb24pfVxuICAgICAgey8qIHtjb25zb2xlLmxvZyhxdWl6KX0gKi99XG5cbiAgICAgIHshc2hvd1Jlc3VsdHNcbiAgICAgICAgP1xuICAgICAgICAoXG5cbiAgICAgICAgICA8UXVlc3Rpb25cbiAgICAgICAgICAgIGNvdW50UXVlc3Rpb249e2NvdW50UXVlc3Rpb259XG4gICAgICAgICAgICBxdWVzdGlvbj17cXVpelF1ZXN0aW9uW2NvdW50UXVlc3Rpb25dLnF1ZXN0aW9ufVxuICAgICAgICAgICAgYW5zd2Vycz17W3F1aXpRdWVzdGlvbltjb3VudFF1ZXN0aW9uXS5hbnN3ZXJzXX1cbiAgICAgICAgICAgIC8vIGNvcnJlY3RfYW5zd2Vycz17cXVpelF1ZXN0aW9uW2NvdW50UXVlc3Rpb25dLmNvcnJlY3RfYW5zd2Vyc31cbiAgICAgICAgICAgIG5leHRRdWVzdGlvbj17aGFuZGxlTmV4dFF1ZXN0fVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgKVxuICAgICAgICA6XG4gICAgICAgIChcblxuICAgICAgICAgIDxSZXN1bHRzIC8+XG5cbiAgICAgICAgKVxuICAgICAgfVxuXG5cblxuXG4gICAgICA8ZGl2ID5cblxuXG4gICAgICAgIHsvKiA8aDE+e3F1aXpbMV0ucXVlc3Rpb259PC9oMT5cbiAgICAgICAgPHA+e3F1aXpbMV0uYW5zd2Vycy5hbnN3ZXJfYX08L3A+XG4gICAgICAgIDxwPntxdWl6WzFdLmFuc3dlcnMuYW5zd2VyX2J9PC9wPlxuICAgICAgICA8cD57cXVpelsxXS5hbnN3ZXJzLmFuc3dlcl9jfTwvcD5cbiAgICAgICAgPHA+e3F1aXpbMV0uYW5zd2Vycy5hbnN3ZXJfZH08L3A+XG4gICAgICAgIDxwPntxdWl6WzFdLmFuc3dlcnMuYW5zd2VyX2V9PC9wPlxuICAgICAgICA8cD57cXVpelsxXS5hbnN3ZXJzLmFuc3dlcl9mfTwvcD4gKi99XG5cblxuICAgICAgPC9kaXY+XG5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcblxuXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9xdWl6YXBpLmlvL2FwaS92MS9xdWVzdGlvbnMnLCB7XG5cblxuICAgIGhlYWRlcnM6IHsgJ1gtQXBpLUtleSc6IHByb2Nlc3MuZW52LnRva2VuQVBJIH0sXG5cblxuXG4gIH0pO1xuXG4gIGNvbnN0IHF1aXogPSByZXN1bHQuZGF0YTtcblxuICByZXR1cm4geyBwcm9wczogeyBxdWl6IH0gfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFF1aXo7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/quiz/index.js\n");

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