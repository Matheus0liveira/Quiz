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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/Home/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/identification/index.js":
/*!************************************************!*\
  !*** ./src/components/identification/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/identification/styles.js\");\nvar _jsxFileName = \"/media/matheus-oliveira/Data/Projects/ReactJs/quiz/src/components/identification/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Identification = () => {\n  const handleSubmit = event => {\n    event.preventDefault();\n    alert('Clicked');\n  };\n\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    tecTitle: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, \"TEQUIZ\"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"StyledIdentification\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], {\n    onSubmit: handleSubmit,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 11\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    label: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }, \" Name\"), __jsx(\"input\", {\n    placeholder: \"Type your name\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  })), __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    label: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }, \"Category\"), __jsx(\"select\", {\n    name: \"category\",\n    id: \"category\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, __jsx(\"option\", {\n    value: \"linux\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 15\n    }\n  }, \"Linux\"), __jsx(\"option\", {\n    value: \"devOps\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 15\n    }\n  }, \"DevOps\"), __jsx(\"option\", {\n    value: \"networking\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 15\n    }\n  }, \"Networking\"), __jsx(\"option\", {\n    value: \"programming\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 15\n    }\n  }, \"Programming\"), __jsx(\"option\", {\n    value: \"cloud\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 15\n    }\n  }, \"Cloud\"), __jsx(\"option\", {\n    value: \"docker\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 15\n    }\n  }, \"Docker\"), __jsx(\"option\", {\n    value: \"kubernetes\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 15\n    }\n  }, \"Kubernetes\"))), __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    label: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }\n  }, \"Dificulty\"), __jsx(\"select\", {\n    name: \"dificulty\",\n    id: \"dificulty\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, __jsx(\"option\", {\n    value: \"easy\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 15\n    }\n  }, \"Easy\"), __jsx(\"option\", {\n    value: \"medium\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 15\n    }\n  }, \"Medium\"), __jsx(\"option\", {\n    value: \"hard\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 15\n    }\n  }, \"Hard\"))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"ButtonSubmit\"], {\n    type: \"submit\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 11\n    }\n  }, \"START GAME\"))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Footer\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }\n  }, \"Created By: \", __jsx(\"a\", {\n    target: \"_blank\",\n    href: \"https://github.com/Matheus0liveira\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 27\n    }\n  }, \" Matheus Oliveira \\uD83D\\uDC9C\"), \" \"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Identification);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pZGVudGlmaWNhdGlvbi9pbmRleC5qcz83OGJkIl0sIm5hbWVzIjpbIklkZW50aWZpY2F0aW9uIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBOztBQUdBLE1BQU1BLGNBQWMsR0FBRyxNQUFNO0FBRTNCLFFBQU1DLFlBQVksR0FBSUMsS0FBRCxJQUFXO0FBRTlCQSxTQUFLLENBQUNDLGNBQU47QUFDQUMsU0FBSyxDQUFDLFNBQUQsQ0FBTDtBQUVELEdBTEQ7O0FBTUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0Q0FBRDtBQUFNLFlBQVEsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFRSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRSxNQUFDLDRDQUFEO0FBQU0sWUFBUSxFQUFFSCxZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFLE1BQUMsNENBQUQ7QUFBTSxTQUFLLE1BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLEVBR0U7QUFBTyxlQUFXLEVBQUMsZ0JBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQURGLEVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFLE1BQUMsNENBQUQ7QUFBTSxTQUFLLE1BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixFQUdFO0FBQVEsUUFBSSxFQUFDLFVBQWI7QUFBd0IsTUFBRSxFQUFDLFVBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLFNBQUssRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVFO0FBQVEsU0FBSyxFQUFDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLEVBR0U7QUFBUSxTQUFLLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGLEVBSUU7QUFBUSxTQUFLLEVBQUMsYUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLEVBS0U7QUFBUSxTQUFLLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEYsRUFNRTtBQUFRLFNBQUssRUFBQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixFQU9FO0FBQVEsU0FBSyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRixDQUhGLENBUkYsRUF1QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFLE1BQUMsNENBQUQ7QUFBTSxTQUFLLE1BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixFQUdFO0FBQVEsUUFBSSxFQUFDLFdBQWI7QUFBeUIsTUFBRSxFQUFDLFdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLFNBQUssRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVFO0FBQVEsU0FBSyxFQUFDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLEVBR0U7QUFBUSxTQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsQ0FIRixDQXZCRixFQWtDRSxNQUFDLG9EQUFEO0FBQWMsUUFBSSxFQUFDLFFBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBbENGLENBRkYsQ0FGRixFQTJDRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQW9CO0FBQUcsVUFBTSxFQUFDLFFBQVY7QUFBbUIsUUFBSSxFQUFDLG9DQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUFwQixNQTNDRixDQURGO0FBK0NELENBdkREOztBQTJEZUQsNkVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZGVudGlmaWNhdGlvbi9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFN0eWxlZElkZW50aWZpY2F0aW9uLCBEZXNjcmlwdGlvbiwgRm9ybSwgVGV4dCwgQnV0dG9uU3VibWl0LCBGb290ZXIgfSBmcm9tICcuL3N0eWxlcyc7XG5cblxuY29uc3QgSWRlbnRpZmljYXRpb24gPSAoKSA9PiB7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGFsZXJ0KCdDbGlja2VkJyk7XG5cbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8VGV4dCB0ZWNUaXRsZSA+VEVRVUlaPC9UZXh0PlxuICAgICAgPFN0eWxlZElkZW50aWZpY2F0aW9uPlxuXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxzcGFuPlxuXG4gICAgICAgICAgICA8VGV4dCBsYWJlbD4gTmFtZTwvVGV4dD5cbiAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj0nVHlwZSB5b3VyIG5hbWUnIC8+XG5cbiAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICA8c3Bhbj5cblxuICAgICAgICAgICAgPFRleHQgbGFiZWw+Q2F0ZWdvcnk8L1RleHQ+XG4gICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJjYXRlZ29yeVwiIGlkPVwiY2F0ZWdvcnlcIj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxpbnV4XCI+TGludXg8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRldk9wc1wiPkRldk9wczwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibmV0d29ya2luZ1wiPk5ldHdvcmtpbmc8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInByb2dyYW1taW5nXCI+UHJvZ3JhbW1pbmc8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNsb3VkXCI+Q2xvdWQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRvY2tlclwiPkRvY2tlcjwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwia3ViZXJuZXRlc1wiPkt1YmVybmV0ZXM8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuXG4gICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgPHNwYW4+XG5cbiAgICAgICAgICAgIDxUZXh0IGxhYmVsPkRpZmljdWx0eTwvVGV4dD5cbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImRpZmljdWx0eVwiIGlkPVwiZGlmaWN1bHR5XCI+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJlYXN5XCI+RWFzeTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWVkaXVtXCI+TWVkaXVtPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJoYXJkXCI+SGFyZDwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG5cbiAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICA8QnV0dG9uU3VibWl0IHR5cGU9J3N1Ym1pdCc+U1RBUlQgR0FNRTwvQnV0dG9uU3VibWl0PlxuICAgICAgICA8L0Zvcm0+XG5cbiAgICAgIDwvU3R5bGVkSWRlbnRpZmljYXRpb24+XG5cbiAgICAgIDxGb290ZXI+Q3JlYXRlZCBCeTogPGEgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vTWF0aGV1czBsaXZlaXJhXCI+IE1hdGhldXMgT2xpdmVpcmEg8J+SnDwvYT4gPC9Gb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgSWRlbnRpZmljYXRpb247Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/identification/index.js\n");

/***/ }),

/***/ "./src/components/identification/styles.js":
/*!*************************************************!*\
  !*** ./src/components/identification/styles.js ***!
  \*************************************************/
/*! exports provided: StyledIdentification, Form, Text, ButtonSubmit, Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledIdentification\", function() { return StyledIdentification; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Form\", function() { return Form; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Text\", function() { return Text; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ButtonSubmit\", function() { return ButtonSubmit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return Footer; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst StyledIdentification = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.main`\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  flex-direction: row;\n\n`;\nconst Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form`\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100vw;\n  height: 100%;\n  padding: 2rem 0;\n\n  span{\n    margin: 2rem 0 0.5rem 0; \n    width: 30%;\n\n    min-width: 30rem;\n\n \n\n    input,select, option{\n        font-weight: bold;\n        width: 100%;\n        height:  5rem;\n        padding: 1rem;\n        margin-top: 1rem ;\n        background: #F8F8F2;\n        border: 0;\n        color: #44475A;\n\n\n        ::placeholder{\n        color: #44475A;\n\n        }\n    }\n\n  }\n  \n`;\nconst Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1`\n\n  ${props => props.label && styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"]`\n  font-size: 2rem;\n  color: #F8F8F2;\n\n  `};\n\n\n  ${props => props.tecTitle && styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"]`\n\n  font-size: min(14vw, 6rem); \n  margin-bottom: 10rem;  \n  color: #F8F8F2;\n  text-align: center;\n\n  `};\n  \n`;\nconst ButtonSubmit = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button`\n  width: 30%;\n  min-width: 30rem;\n  height:  5rem;\n  padding: 0 2rem;\n  margin-top: 2rem;\n  background: #BD93F9;\n  color: #44475A;\n  border: 0;\n  font-weight: bold;\n\n\n  cursor: pointer;\n  transition: all .4s ease;\n\n  &:hover{\n\n    background: #44475A;\n    color: #BD93F9;\n\n  }\n`;\nconst Footer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.footer`\n\n  display:flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 2rem 0;\n\n  a{\n    text-decoration: none;\n    color: #BD93F9;\n    transition: opacity .2s ease;\n\n    &:hover{\n      opacity: 0.5;\n    }\n\n  }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pZGVudGlmaWNhdGlvbi9zdHlsZXMuanM/ODhhNyJdLCJuYW1lcyI6WyJTdHlsZWRJZGVudGlmaWNhdGlvbiIsInN0eWxlZCIsIm1haW4iLCJGb3JtIiwiZm9ybSIsIlRleHQiLCJoMSIsInByb3BzIiwibGFiZWwiLCJjc3MiLCJ0ZWNUaXRsZSIsIkJ1dHRvblN1Ym1pdCIsImJ1dHRvbiIsIkZvb3RlciIsImZvb3RlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR08sTUFBTUEsb0JBQW9CLEdBQUdDLHdEQUFNLENBQUNDLElBQUs7Ozs7Ozs7Q0FBekM7QUFZQSxNQUFNQyxJQUFJLEdBQUdGLHdEQUFNLENBQUNHLElBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUF6QjtBQXVDQSxNQUFNQyxJQUFJLEdBQUdKLHdEQUFNLENBQUNLLEVBQUc7O0lBRTFCQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixJQUFlQyxxREFBSTs7OztHQUk1Qjs7O0lBR0FGLEtBQUssSUFBSUEsS0FBSyxDQUFDRyxRQUFOLElBQWtCRCxxREFBSTs7Ozs7OztHQU8vQjs7Q0FoQkc7QUFxQkEsTUFBTUUsWUFBWSxHQUFHVix3REFBTSxDQUFDVyxNQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBbkM7QUF1QkEsTUFBTUMsTUFBTSxHQUFHWix3REFBTSxDQUFDYSxNQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBN0IiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZGVudGlmaWNhdGlvbi9zdHlsZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuXG5leHBvcnQgY29uc3QgU3R5bGVkSWRlbnRpZmljYXRpb24gPSBzdHlsZWQubWFpbmBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG5gO1xuXG5cblxuXG5leHBvcnQgY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDJyZW0gMDtcblxuICBzcGFue1xuICAgIG1hcmdpbjogMnJlbSAwIDAuNXJlbSAwOyBcbiAgICB3aWR0aDogMzAlO1xuXG4gICAgbWluLXdpZHRoOiAzMHJlbTtcblxuIFxuXG4gICAgaW5wdXQsc2VsZWN0LCBvcHRpb257XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAgNXJlbTtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbSA7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGOEY4RjI7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgY29sb3I6ICM0NDQ3NUE7XG5cblxuICAgICAgICA6OnBsYWNlaG9sZGVye1xuICAgICAgICBjb2xvcjogIzQ0NDc1QTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gIH1cbiAgXG5gO1xuXG5cbmV4cG9ydCBjb25zdCBUZXh0ID0gc3R5bGVkLmgxYFxuXG4gICR7cHJvcHMgPT4gcHJvcHMubGFiZWwgJiYgY3NzYFxuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiAjRjhGOEYyO1xuXG4gIGB9O1xuXG5cbiAgJHtwcm9wcyA9PiBwcm9wcy50ZWNUaXRsZSAmJiBjc3NgXG5cbiAgZm9udC1zaXplOiBtaW4oMTR2dywgNnJlbSk7IFxuICBtYXJnaW4tYm90dG9tOiAxMHJlbTsgIFxuICBjb2xvcjogI0Y4RjhGMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIGB9O1xuICBcbmA7XG5cblxuZXhwb3J0IGNvbnN0IEJ1dHRvblN1Ym1pdCA9IHN0eWxlZC5idXR0b25gXG4gIHdpZHRoOiAzMCU7XG4gIG1pbi13aWR0aDogMzByZW07XG4gIGhlaWdodDogIDVyZW07XG4gIHBhZGRpbmc6IDAgMnJlbTtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgYmFja2dyb3VuZDogI0JEOTNGOTtcbiAgY29sb3I6ICM0NDQ3NUE7XG4gIGJvcmRlcjogMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cblxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAuNHMgZWFzZTtcblxuICAmOmhvdmVye1xuXG4gICAgYmFja2dyb3VuZDogIzQ0NDc1QTtcbiAgICBjb2xvcjogI0JEOTNGOTtcblxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRm9vdGVyID0gc3R5bGVkLmZvb3RlcmBcblxuICBkaXNwbGF5OmZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDJyZW0gMDtcblxuICBhe1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogI0JEOTNGOTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyBlYXNlO1xuXG4gICAgJjpob3ZlcntcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG5cbiAgfVxuYDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/identification/styles.js\n");

/***/ }),

/***/ "./src/pages/Home/index.js":
/*!*********************************!*\
  !*** ./src/pages/Home/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_identification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/identification */ \"./src/components/identification/index.js\");\nvar _jsxFileName = \"/media/matheus-oliveira/Data/Projects/ReactJs/quiz/src/pages/Home/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst Hello = ({\n  quiz\n}) => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_identification__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }));\n};\n\nHello.getInitialProps = async () => {\n  const result = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://quizapi.io/api/v1/questions', {\n    headers: {\n      'X-Api-Key': 'lCYLQgZXpyARHxOsGt6qe59DiLJawH8CbOIwDLdl'\n    }\n  });\n  return {\n    quiz: result.data\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hello);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvSG9tZS9pbmRleC5qcz80OTMwIl0sIm5hbWVzIjpbIkhlbGxvIiwicXVpeiIsImdldEluaXRpYWxQcm9wcyIsInJlc3VsdCIsImF4aW9zIiwiZ2V0IiwiaGVhZGVycyIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFjO0FBQzFCLFNBQ0UsbUVBaUJFLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpCRixDQURGO0FBcUJELENBdEJEOztBQXdCQUQsS0FBSyxDQUFDRSxlQUFOLEdBQXdCLFlBQVk7QUFDbEMsUUFBTUMsTUFBTSxHQUFHLE1BQU1DLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSxxQ0FBVixFQUFpRDtBQUVwRUMsV0FBTyxFQUFFO0FBQUUsbUJBQWE7QUFBZjtBQUYyRCxHQUFqRCxDQUFyQjtBQU1BLFNBQU87QUFBRUwsUUFBSSxFQUFFRSxNQUFNLENBQUNJO0FBQWYsR0FBUDtBQUNELENBUkQ7O0FBVWVQLG9FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL0hvbWUvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IElkZW50aWZpY2F0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaWRlbnRpZmljYXRpb24nXG5cbmNvbnN0IEhlbGxvID0gKHsgcXVpeiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiB7cXVpei5tYXAocXVpeiA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtxdWl6LmlkfT5cbiAgICAgICAgICA8cCA+e3F1aXoucXVlc3Rpb259PC9wPlxuICAgICAgICAgIDxociAvPlxuICAgICAgICAgIDxoMT57cXVpei5hbnN3ZXJzLmFuc3dlcl9hfTwvaDE+XG4gICAgICAgICAgPGgxPntxdWl6LmFuc3dlcnMuYW5zd2VyX2J9PC9oMT5cbiAgICAgICAgICA8aDE+e3F1aXouYW5zd2Vycy5hbnN3ZXJfY308L2gxPlxuICAgICAgICAgIDxoMT57cXVpei5hbnN3ZXJzLmFuc3dlcl9kfTwvaDE+XG4gICAgICAgICAgPGgxPntxdWl6LmFuc3dlcnMuYW5zd2VyX2V9PC9oMT5cbiAgICAgICAgICA8aDE+e3F1aXouYW5zd2Vycy5hbnN3ZXJfZn08L2gxPlxuICAgICAgICAgIDxociAvPlxuICAgICAgICAgIDxociAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgICAge2NvbnNvbGUubG9nKHF1aXopfSAqL31cblxuICAgICAgPElkZW50aWZpY2F0aW9uIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5IZWxsby5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9xdWl6YXBpLmlvL2FwaS92MS9xdWVzdGlvbnMnLCB7XG5cbiAgICBoZWFkZXJzOiB7ICdYLUFwaS1LZXknOiAnbENZTFFnWlhweUFSSHhPc0d0NnFlNTlEaUxKYXdIOENiT0l3RExkbCcgfSxcblxuICB9KTtcblxuICByZXR1cm4geyBxdWl6OiByZXN1bHQuZGF0YSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVsbG87XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/Home/index.js\n");

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