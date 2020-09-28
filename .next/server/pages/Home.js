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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/identification/styles.js\");\nvar _jsxFileName = \"/media/matheus-oliveira/Data/Projects/ReactJs/quiz/src/components/identification/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Identification = () => {\n  const handleSubmit = event => {\n    event.preventDefault();\n    alert('Clicked');\n  };\n\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    tecTitle: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, \"Technological QUIZ\"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"StyledIdentification\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], {\n    onSubmit: handleSubmit,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 11\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    label: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }, \" Name\"), __jsx(\"input\", {\n    placeholder: \"Type your name\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  })), __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    label: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }, \"Category\"), __jsx(\"select\", {\n    name: \"category\",\n    id: \"category\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, __jsx(\"option\", {\n    value: \"linux\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 15\n    }\n  }, \"Linux\"), __jsx(\"option\", {\n    value: \"devOps\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 15\n    }\n  }, \"DevOps\"), __jsx(\"option\", {\n    value: \"networking\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 15\n    }\n  }, \"Networking\"), __jsx(\"option\", {\n    value: \"programming\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 15\n    }\n  }, \"Programming\"), __jsx(\"option\", {\n    value: \"cloud\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 15\n    }\n  }, \"Cloud\"), __jsx(\"option\", {\n    value: \"docker\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 15\n    }\n  }, \"Docker\"), __jsx(\"option\", {\n    value: \"kubernetes\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 15\n    }\n  }, \"Kubernetes\"))), __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    label: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }\n  }, \"Dificulty\"), __jsx(\"select\", {\n    name: \"dificulty\",\n    id: \"dificulty\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, __jsx(\"option\", {\n    value: \"easy\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 15\n    }\n  }, \"Easy\"), __jsx(\"option\", {\n    value: \"medium\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 15\n    }\n  }, \"Medium\"), __jsx(\"option\", {\n    value: \"hard\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 15\n    }\n  }, \"Hard\"))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"ButtonSubmit\"], {\n    type: \"submit\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 11\n    }\n  }, \"START GAME\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Identification);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pZGVudGlmaWNhdGlvbi9pbmRleC5qcz83OGJkIl0sIm5hbWVzIjpbIklkZW50aWZpY2F0aW9uIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBOztBQUdBLE1BQU1BLGNBQWMsR0FBRyxNQUFNO0FBRTNCLFFBQU1DLFlBQVksR0FBSUMsS0FBRCxJQUFXO0FBRTlCQSxTQUFLLENBQUNDLGNBQU47QUFDQUMsU0FBSyxDQUFDLFNBQUQsQ0FBTDtBQUVELEdBTEQ7O0FBTUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0Q0FBRDtBQUFNLFlBQVEsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGLEVBRUUsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUUsTUFBQyw0Q0FBRDtBQUFNLFlBQVEsRUFBRUgsWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRSxNQUFDLDRDQUFEO0FBQU0sU0FBSyxNQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixFQUdFO0FBQU8sZUFBVyxFQUFDLGdCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FERixFQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRSxNQUFDLDRDQUFEO0FBQU0sU0FBSyxNQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsRUFHRTtBQUFRLFFBQUksRUFBQyxVQUFiO0FBQXdCLE1BQUUsRUFBQyxVQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxTQUFLLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFRTtBQUFRLFNBQUssRUFBQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixFQUdFO0FBQVEsU0FBSyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIRixFQUlFO0FBQVEsU0FBSyxFQUFDLGFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRixFQUtFO0FBQVEsU0FBSyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGLEVBTUU7QUFBUSxTQUFLLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkYsRUFPRTtBQUFRLFNBQUssRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEYsQ0FIRixDQVJGLEVBdUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRSxNQUFDLDRDQUFEO0FBQU0sU0FBSyxNQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsRUFHRTtBQUFRLFFBQUksRUFBQyxXQUFiO0FBQXlCLE1BQUUsRUFBQyxXQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxTQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFFRTtBQUFRLFNBQUssRUFBQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixFQUdFO0FBQVEsU0FBSyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLENBSEYsQ0F2QkYsRUFrQ0UsTUFBQyxvREFBRDtBQUFjLFFBQUksRUFBQyxRQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWxDRixDQUZGLENBRkYsQ0FERjtBQTZDRCxDQXJERDs7QUF5RGVELDZFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvaWRlbnRpZmljYXRpb24vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTdHlsZWRJZGVudGlmaWNhdGlvbiwgRGVzY3JpcHRpb24sIEZvcm0sIFRleHQsIEJ1dHRvblN1Ym1pdCB9IGZyb20gJy4vc3R5bGVzJztcblxuXG5jb25zdCBJZGVudGlmaWNhdGlvbiA9ICgpID0+IHtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgYWxlcnQoJ0NsaWNrZWQnKTtcblxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxUZXh0IHRlY1RpdGxlID5UZWNobm9sb2dpY2FsIFFVSVo8L1RleHQ+XG4gICAgICA8U3R5bGVkSWRlbnRpZmljYXRpb24+XG5cbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPHNwYW4+XG5cbiAgICAgICAgICAgIDxUZXh0IGxhYmVsPiBOYW1lPC9UZXh0PlxuICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPSdUeXBlIHlvdXIgbmFtZScgLz5cblxuICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgIDxzcGFuPlxuXG4gICAgICAgICAgICA8VGV4dCBsYWJlbD5DYXRlZ29yeTwvVGV4dD5cbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImNhdGVnb3J5XCIgaWQ9XCJjYXRlZ29yeVwiPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibGludXhcIj5MaW51eDwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGV2T3BzXCI+RGV2T3BzPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJuZXR3b3JraW5nXCI+TmV0d29ya2luZzwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHJvZ3JhbW1pbmdcIj5Qcm9ncmFtbWluZzwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY2xvdWRcIj5DbG91ZDwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZG9ja2VyXCI+RG9ja2VyPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJrdWJlcm5ldGVzXCI+S3ViZXJuZXRlczwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG5cbiAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICA8c3Bhbj5cblxuICAgICAgICAgICAgPFRleHQgbGFiZWw+RGlmaWN1bHR5PC9UZXh0PlxuICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiZGlmaWN1bHR5XCIgaWQ9XCJkaWZpY3VsdHlcIj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImVhc3lcIj5FYXN5PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZWRpdW1cIj5NZWRpdW08L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhhcmRcIj5IYXJkPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cblxuICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgIDxCdXR0b25TdWJtaXQgdHlwZT0nc3VibWl0Jz5TVEFSVCBHQU1FPC9CdXR0b25TdWJtaXQ+XG4gICAgICAgIDwvRm9ybT5cblxuICAgICAgPC9TdHlsZWRJZGVudGlmaWNhdGlvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblxuXG5leHBvcnQgZGVmYXVsdCBJZGVudGlmaWNhdGlvbjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/identification/index.js\n");

/***/ }),

/***/ "./src/components/identification/styles.js":
/*!*************************************************!*\
  !*** ./src/components/identification/styles.js ***!
  \*************************************************/
/*! exports provided: StyledIdentification, Form, Text, ButtonSubmit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledIdentification\", function() { return StyledIdentification; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Form\", function() { return Form; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Text\", function() { return Text; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ButtonSubmit\", function() { return ButtonSubmit; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst StyledIdentification = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.main`\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  flex-direction: row;\n\n`;\nconst Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form`\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  padding: 2rem 0;\n\n  span{\n    margin: 2rem 0 0.5rem 0; \n    width: 80%;\n\n    min-width: 30rem;\n\n \n\n    input,select, option{\n        width: 100%;\n        height:  5rem;\n        padding: 1rem;\n        margin-top: 1rem ;\n        background: #F8F8F2;\n        border: 0;\n        color: #44475A;\n\n\n        ::placeholder{\n        color: #44475A;\n\n        }\n    }\n\n  }\n  \n`;\nconst Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1`\n\n  ${props => props.label && styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"]`\n  font-size: 2rem;\n  color: #F8F8F2;\n\n  `};\n\n\n  ${props => props.tecTitle && styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"]`\n\n\n  margin-bottom: 10rem;  \n  color: #F8F8F2;\n\n  font-size: min(8vw, 6rem);\n  text-align: center;\n\n  `};\n  \n`;\nconst ButtonSubmit = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button`\n\n  width: 80%;\n  min-width: 30rem;\n  height:  5rem;\n  padding: 0 2rem;\n  margin-top: 2rem;\n  background: #BD93F9;\n  color: #44475A;\n  border: 0;\n  font-weight: bold;\n\n\n  cursor: pointer;\n  transition: all .4s ease;\n\n  &:hover{\n\n    background: #44475A;\n    color: #BD93F9;\n\n  }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pZGVudGlmaWNhdGlvbi9zdHlsZXMuanM/ODhhNyJdLCJuYW1lcyI6WyJTdHlsZWRJZGVudGlmaWNhdGlvbiIsInN0eWxlZCIsIm1haW4iLCJGb3JtIiwiZm9ybSIsIlRleHQiLCJoMSIsInByb3BzIiwibGFiZWwiLCJjc3MiLCJ0ZWNUaXRsZSIsIkJ1dHRvblN1Ym1pdCIsImJ1dHRvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdPLE1BQU1BLG9CQUFvQixHQUFHQyx3REFBTSxDQUFDQyxJQUFLOzs7Ozs7O0NBQXpDO0FBWUEsTUFBTUMsSUFBSSxHQUFHRix3REFBTSxDQUFDRyxJQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUF6QjtBQXNDQSxNQUFNQyxJQUFJLEdBQUdKLHdEQUFNLENBQUNLLEVBQUc7O0lBRTFCQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixJQUFlQyxxREFBSTs7OztHQUk1Qjs7O0lBR0FGLEtBQUssSUFBSUEsS0FBSyxDQUFDRyxRQUFOLElBQWtCRCxxREFBSTs7Ozs7Ozs7O0dBUy9COztDQWxCRztBQXVCQSxNQUFNRSxZQUFZLEdBQUdWLHdEQUFNLENBQUNXLE1BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBbkMiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZGVudGlmaWNhdGlvbi9zdHlsZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuXG5leHBvcnQgY29uc3QgU3R5bGVkSWRlbnRpZmljYXRpb24gPSBzdHlsZWQubWFpbmBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG5gO1xuXG5cblxuXG5leHBvcnQgY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMnJlbSAwO1xuXG4gIHNwYW57XG4gICAgbWFyZ2luOiAycmVtIDAgMC41cmVtIDA7IFxuICAgIHdpZHRoOiA4MCU7XG5cbiAgICBtaW4td2lkdGg6IDMwcmVtO1xuXG4gXG5cbiAgICBpbnB1dCxzZWxlY3QsIG9wdGlvbntcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogIDVyZW07XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW0gO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRjhGOEYyO1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIGNvbG9yOiAjNDQ0NzVBO1xuXG5cbiAgICAgICAgOjpwbGFjZWhvbGRlcntcbiAgICAgICAgY29sb3I6ICM0NDQ3NUE7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICB9XG4gIFxuYDtcblxuXG5leHBvcnQgY29uc3QgVGV4dCA9IHN0eWxlZC5oMWBcblxuICAke3Byb3BzID0+IHByb3BzLmxhYmVsICYmIGNzc2BcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2xvcjogI0Y4RjhGMjtcblxuICBgfTtcblxuXG4gICR7cHJvcHMgPT4gcHJvcHMudGVjVGl0bGUgJiYgY3NzYFxuXG5cbiAgbWFyZ2luLWJvdHRvbTogMTByZW07ICBcbiAgY29sb3I6ICNGOEY4RjI7XG5cbiAgZm9udC1zaXplOiBtaW4oOHZ3LCA2cmVtKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIGB9O1xuICBcbmA7XG5cblxuZXhwb3J0IGNvbnN0IEJ1dHRvblN1Ym1pdCA9IHN0eWxlZC5idXR0b25gXG5cbiAgd2lkdGg6IDgwJTtcbiAgbWluLXdpZHRoOiAzMHJlbTtcbiAgaGVpZ2h0OiAgNXJlbTtcbiAgcGFkZGluZzogMCAycmVtO1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBiYWNrZ3JvdW5kOiAjQkQ5M0Y5O1xuICBjb2xvcjogIzQ0NDc1QTtcbiAgYm9yZGVyOiAwO1xuICBmb250LXdlaWdodDogYm9sZDtcblxuXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlO1xuXG4gICY6aG92ZXJ7XG5cbiAgICBiYWNrZ3JvdW5kOiAjNDQ0NzVBO1xuICAgIGNvbG9yOiAjQkQ5M0Y5O1xuXG4gIH1cbmA7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/identification/styles.js\n");

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