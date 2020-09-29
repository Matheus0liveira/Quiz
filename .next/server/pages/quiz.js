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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserContext\", function() { return UserContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/media/matheus-oliveira/Data/Projects/ReactJs/quiz/src/context/user.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst UserContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])();\n\nconst UserProvider = ({\n  children\n}) => {\n  const {\n    0: user,\n    1: setUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    name: '',\n    dificulty: ''\n  });\n  return __jsx(UserContext.Provider, {\n    value: {\n      user,\n      setUser\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProvider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC91c2VyLmpzPzhkYmYiXSwibmFtZXMiOlsiVXNlckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiVXNlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsInVzZVN0YXRlIiwibmFtZSIsImRpZmljdWx0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFHTyxNQUFNQSxXQUFXLGdCQUFHQywyREFBYSxFQUFqQzs7QUFHUCxNQUFNQyxZQUFZLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFFckMsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQyxzREFBUSxDQUM5QjtBQUNFQyxRQUFJLEVBQUUsRUFEUjtBQUVFQyxhQUFTLEVBQUU7QUFGYixHQUQ4QixDQUFoQztBQVNBLFNBRUUsTUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUU7QUFBRUosVUFBRjtBQUFRQztBQUFSLEtBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFR0YsUUFGSCxDQUZGO0FBU0QsQ0FwQkQ7O0FBdUJlRCwyRUFBZiIsImZpbGUiOiIuL3NyYy9jb250ZXh0L3VzZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cblxuZXhwb3J0IGNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5cbmNvbnN0IFVzZXJQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcblxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShcbiAgICB7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGRpZmljdWx0eTogJydcbiAgICB9XG4gICk7XG5cblxuXG4gIHJldHVybiAoXG5cbiAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgc2V0VXNlciB9fT5cblxuICAgICAge2NoaWxkcmVufVxuXG5cbiAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvdmlkZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/user.js\n");

/***/ }),

/***/ "./src/pages/quiz/index.js":
/*!*********************************!*\
  !*** ./src/pages/quiz/index.js ***!
  \*********************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_useUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/useUser */ \"./src/utils/useUser.js\");\nvar _jsxFileName = \"/media/matheus-oliveira/Data/Projects/ReactJs/quiz/src/pages/quiz/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst Quiz = ({\n  quiz\n}) => {\n  const {\n    user\n  } = Object(_utils_useUser__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (!user.name) {\n      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/home');\n    }\n\n    ;\n  }, [user.name]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, \"Quiz\"), console.log(user), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, quiz.map((quiz, index) => {\n    if (index < user.dificulty) {\n      return __jsx(\"div\", {\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 15\n        }\n      }, __jsx(\"h1\", {\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 17\n        }\n      }, quiz.question), __jsx(\"p\", {\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 17\n        }\n      }, quiz.answers.answer_a), __jsx(\"p\", {\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 17\n        }\n      }, quiz.answers.answer_b), __jsx(\"p\", {\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 17\n        }\n      }, quiz.answers.answer_c), __jsx(\"p\", {\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 17\n        }\n      }, quiz.answers.answer_d), __jsx(\"p\", {\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 17\n        }\n      }, quiz.answers.answer_e), __jsx(\"p\", {\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 17\n        }\n      }, quiz.answers.answer_f), __jsx(\"hr\", {\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 17\n        }\n      }));\n    }\n  }), __jsx(\"hr\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  })));\n};\n\nasync function getStaticProps() {\n  const result = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://quizapi.io/api/v1/questions', {\n    headers: {\n      'X-Api-Key': \"lCYLQgZXpyARHxOsGt6qe59DiLJawH8CbOIwDLdl\"\n    }\n  });\n  const quiz = result.data;\n  return {\n    props: {\n      quiz\n    }\n  };\n}\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quiz);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcXVpei9pbmRleC5qcz85OTU3Il0sIm5hbWVzIjpbIlF1aXoiLCJxdWl6IiwidXNlciIsInVzZVVTZXIiLCJ1c2VFZmZlY3QiLCJuYW1lIiwiUm91dGVyIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJpbmRleCIsImRpZmljdWx0eSIsInF1ZXN0aW9uIiwiYW5zd2VycyIsImFuc3dlcl9hIiwiYW5zd2VyX2IiLCJhbnN3ZXJfYyIsImFuc3dlcl9kIiwiYW5zd2VyX2UiLCJhbnN3ZXJfZiIsImdldFN0YXRpY1Byb3BzIiwicmVzdWx0IiwiYXhpb3MiLCJnZXQiLCJoZWFkZXJzIiwicHJvY2VzcyIsInRva2VuQVBJIiwiZGF0YSIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBOztBQUdBLE1BQU1BLElBQUksR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFjO0FBRXpCLFFBQU07QUFBRUM7QUFBRixNQUFXQyw4REFBTyxFQUF4QjtBQUVBQyx5REFBUyxDQUFDLE1BQU07QUFFZCxRQUFJLENBQUNGLElBQUksQ0FBQ0csSUFBVixFQUFnQjtBQUVkQyx3REFBTSxDQUFDQyxJQUFQLENBQVksT0FBWjtBQUVEOztBQUFBO0FBR0YsR0FUUSxFQVNOLENBQUNMLElBQUksQ0FBQ0csSUFBTixDQVRNLENBQVQ7QUFXQSxTQUNFLG1FQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVHRyxPQUFPLENBQUNDLEdBQVIsQ0FBWVAsSUFBWixDQUZILEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVHRCxJQUFJLENBQUNTLEdBQUwsQ0FBUyxDQUFDVCxJQUFELEVBQU9VLEtBQVAsS0FBaUI7QUFFekIsUUFBSUEsS0FBSyxHQUFHVCxJQUFJLENBQUNVLFNBQWpCLEVBQTRCO0FBQzFCLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBS1gsSUFBSSxDQUFDWSxRQUFWLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUlaLElBQUksQ0FBQ2EsT0FBTCxDQUFhQyxRQUFqQixDQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFJZCxJQUFJLENBQUNhLE9BQUwsQ0FBYUUsUUFBakIsQ0FIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSWYsSUFBSSxDQUFDYSxPQUFMLENBQWFHLFFBQWpCLENBSkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUloQixJQUFJLENBQUNhLE9BQUwsQ0FBYUksUUFBakIsQ0FMRixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSWpCLElBQUksQ0FBQ2EsT0FBTCxDQUFhSyxRQUFqQixDQU5GLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFJbEIsSUFBSSxDQUFDYSxPQUFMLENBQWFNLFFBQWpCLENBUEYsRUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBUkYsQ0FERjtBQVlEO0FBQ0YsR0FoQkEsQ0FWSCxFQTJCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0JGLENBTkYsQ0FERjtBQXVDRCxDQXRERDs7QUF3RE8sZUFBZUMsY0FBZixHQUFnQztBQUdyQyxRQUFNQyxNQUFNLEdBQUcsTUFBTUMsNENBQUssQ0FBQ0MsR0FBTixDQUFVLHFDQUFWLEVBQWlEO0FBR3BFQyxXQUFPLEVBQUU7QUFBRSxtQkFBYUMsMENBQW9CQztBQUFuQztBQUgyRCxHQUFqRCxDQUFyQjtBQVNBLFFBQU0xQixJQUFJLEdBQUdxQixNQUFNLENBQUNNLElBQXBCO0FBRUEsU0FBTztBQUFFQyxTQUFLLEVBQUU7QUFBRTVCO0FBQUY7QUFBVCxHQUFQO0FBQ0Q7QUFBQTtBQUVjRCxtRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9xdWl6L2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgdXNlVVNlciBmcm9tICcuLi8uLi91dGlscy91c2VVc2VyJztcblxuXG5jb25zdCBRdWl6ID0gKHsgcXVpeiB9KSA9PiB7XG5cbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VVU2VyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgIGlmICghdXNlci5uYW1lKSB7XG5cbiAgICAgIFJvdXRlci5wdXNoKCcvaG9tZScpO1xuXG4gICAgfTtcblxuXG4gIH0sIFt1c2VyLm5hbWVdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDE+UXVpejwvaDE+XG4gICAgICB7Y29uc29sZS5sb2codXNlcil9XG5cblxuXG4gICAgICA8ZGl2ID5cblxuICAgICAgICB7LyogPGgxPntxdWl6WzFdLnF1ZXN0aW9ufTwvaDE+XG4gICAgICAgIDxwPntxdWl6WzFdLmFuc3dlcnMuYW5zd2VyX2F9PC9wPlxuICAgICAgICA8cD57cXVpelsxXS5hbnN3ZXJzLmFuc3dlcl9ifTwvcD5cbiAgICAgICAgPHA+e3F1aXpbMV0uYW5zd2Vycy5hbnN3ZXJfY308L3A+XG4gICAgICAgIDxwPntxdWl6WzFdLmFuc3dlcnMuYW5zd2VyX2R9PC9wPlxuICAgICAgICA8cD57cXVpelsxXS5hbnN3ZXJzLmFuc3dlcl9lfTwvcD5cbiAgICAgICAgPHA+e3F1aXpbMV0uYW5zd2Vycy5hbnN3ZXJfZn08L3A+ICovfVxuXG4gICAgICAgIHtxdWl6Lm1hcCgocXVpeiwgaW5kZXgpID0+IHtcblxuICAgICAgICAgIGlmIChpbmRleCA8IHVzZXIuZGlmaWN1bHR5KSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT57cXVpei5xdWVzdGlvbn08L2gxPlxuICAgICAgICAgICAgICAgIDxwPntxdWl6LmFuc3dlcnMuYW5zd2VyX2F9PC9wPlxuICAgICAgICAgICAgICAgIDxwPntxdWl6LmFuc3dlcnMuYW5zd2VyX2J9PC9wPlxuICAgICAgICAgICAgICAgIDxwPntxdWl6LmFuc3dlcnMuYW5zd2VyX2N9PC9wPlxuICAgICAgICAgICAgICAgIDxwPntxdWl6LmFuc3dlcnMuYW5zd2VyX2R9PC9wPlxuICAgICAgICAgICAgICAgIDxwPntxdWl6LmFuc3dlcnMuYW5zd2VyX2V9PC9wPlxuICAgICAgICAgICAgICAgIDxwPntxdWl6LmFuc3dlcnMuYW5zd2VyX2Z9PC9wPlxuICAgICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0pfVxuICAgICAgICA8aHIgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG5cblxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vcXVpemFwaS5pby9hcGkvdjEvcXVlc3Rpb25zJywge1xuXG5cbiAgICBoZWFkZXJzOiB7ICdYLUFwaS1LZXknOiBwcm9jZXNzLmVudi50b2tlbkFQSSB9LFxuXG5cblxuICB9KTtcblxuICBjb25zdCBxdWl6ID0gcmVzdWx0LmRhdGE7XG5cbiAgcmV0dXJuIHsgcHJvcHM6IHsgcXVpeiB9IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBRdWl6OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/quiz/index.js\n");

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

/***/ })

/******/ });