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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/home/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Identification/index.js":
/*!************************************************!*\
  !*** ./src/components/Identification/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/Identification/styles.js\");\nvar _jsxFileName = \"/media/matheus-oliveira/Data/Projects/ReactJs/quiz/src/components/Identification/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Identification = ({\n  name,\n  dificulty,\n  showDanger,\n  submitForm\n}) => {\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    tecTitle: \"true\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, \"TEC.QUIZ\"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    description: \"true\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, \"Your technology quiz \", __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 53\n    }\n  }, \" \", ':)')), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"StyledIdentification\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], {\n    onSubmit: submitForm,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    label: \"true\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }, \" Name\"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"DangerText\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, showDanger.showDanger && 'Name is required!'), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"StyledInput\"], {\n    placeholder: \"Type your name\",\n    danger: showDanger.showDanger,\n    onChange: event => name.setName(event.target.value),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  })), __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    label: \"true\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }\n  }, \"Dificulty\"), __jsx(\"select\", {\n    name: \"dificulty\",\n    id: \"dificulty\",\n    onChange: event => dificulty.setValueDificulty(event.target.value),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  }, __jsx(\"option\", {\n    value: \"5\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 15\n    }\n  }, \"Easy\"), __jsx(\"option\", {\n    value: \"10\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 15\n    }\n  }, \"Medium\"), __jsx(\"option\", {\n    value: \"20\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 15\n    }\n  }, \"Hard\"))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"ButtonSubmit\"], {\n    danger: showDanger,\n    type: \"submit\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }\n  }, \"START GAME\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Identification);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JZGVudGlmaWNhdGlvbi9pbmRleC5qcz9jMWVhIl0sIm5hbWVzIjpbIklkZW50aWZpY2F0aW9uIiwibmFtZSIsImRpZmljdWx0eSIsInNob3dEYW5nZXIiLCJzdWJtaXRGb3JtIiwiZXZlbnQiLCJzZXROYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRWYWx1ZURpZmljdWx0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQTs7QUFVQSxNQUFNQSxjQUFjLEdBQUcsQ0FBQztBQUFFQyxNQUFGO0FBQVFDLFdBQVI7QUFBbUJDLFlBQW5CO0FBQStCQztBQUEvQixDQUFELEtBQWlEO0FBSXRFLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNENBQUQ7QUFBTSxZQUFRLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUUsTUFBQyw0Q0FBRDtBQUFNLGVBQVcsRUFBQyxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUE4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVEsSUFBUixDQUE5QyxDQUZGLEVBS0UsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUUsTUFBQyw0Q0FBRDtBQUFNLFlBQVEsRUFBRUEsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDRDQUFEO0FBQU0sU0FBSyxFQUFDLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBR0UsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWFELFVBQVUsQ0FBQ0EsVUFBWCxJQUF5QixtQkFBdEMsQ0FIRixFQUlFLE1BQUMsbURBQUQ7QUFDRSxlQUFXLEVBQUMsZ0JBRGQ7QUFFRSxVQUFNLEVBQUVBLFVBQVUsQ0FBQ0EsVUFGckI7QUFHRSxZQUFRLEVBQUdFLEtBQUQsSUFBV0osSUFBSSxDQUFDSyxPQUFMLENBQWFELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxLQUExQixDQUh2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FGRixFQWVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRSxNQUFDLDRDQUFEO0FBQU0sU0FBSyxFQUFDLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixFQUdFO0FBQ0UsUUFBSSxFQUFDLFdBRFA7QUFFRSxNQUFFLEVBQUMsV0FGTDtBQUdFLFlBQVEsRUFBR0gsS0FBRCxJQUFXSCxTQUFTLENBQUNPLGlCQUFWLENBQTRCSixLQUFLLENBQUNFLE1BQU4sQ0FBYUMsS0FBekMsQ0FIdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FO0FBQVEsU0FBSyxFQUFDLEdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLEVBT0U7QUFBUSxTQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEYsRUFRRTtBQUFRLFNBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRixDQUhGLENBZkYsRUErQkUsTUFBQyxvREFBRDtBQUFjLFVBQU0sRUFBRUwsVUFBdEI7QUFBa0MsUUFBSSxFQUFDLFFBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBL0JGLENBRkYsQ0FMRixDQURGO0FBK0NELENBbkREOztBQXVEZUgsNkVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9JZGVudGlmaWNhdGlvbi9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge1xuICBTdHlsZWRJZGVudGlmaWNhdGlvbixcbiAgRm9ybSxcbiAgU3R5bGVkSW5wdXQsXG4gIFRleHQsXG4gIERhbmdlclRleHQsXG4gIEJ1dHRvblN1Ym1pdFxufSBmcm9tICcuL3N0eWxlcyc7XG5cblxuY29uc3QgSWRlbnRpZmljYXRpb24gPSAoeyBuYW1lLCBkaWZpY3VsdHksIHNob3dEYW5nZXIsIHN1Ym1pdEZvcm0gfSkgPT4ge1xuXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8VGV4dCB0ZWNUaXRsZT0ndHJ1ZScgPlRFQy5RVUlaPC9UZXh0PlxuICAgICAgPFRleHQgZGVzY3JpcHRpb249J3RydWUnPllvdXIgdGVjaG5vbG9neSBxdWl6IDxzcGFuPiB7JzopJ308L3NwYW4+PC9UZXh0PlxuXG5cbiAgICAgIDxTdHlsZWRJZGVudGlmaWNhdGlvbj5cblxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17c3VibWl0Rm9ybX0+XG5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxUZXh0IGxhYmVsPSd0cnVlJz4gTmFtZTwvVGV4dD5cblxuICAgICAgICAgICAgPERhbmdlclRleHQ+e3Nob3dEYW5nZXIuc2hvd0RhbmdlciAmJiAnTmFtZSBpcyByZXF1aXJlZCEnfTwvRGFuZ2VyVGV4dD5cbiAgICAgICAgICAgIDxTdHlsZWRJbnB1dFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nVHlwZSB5b3VyIG5hbWUnXG4gICAgICAgICAgICAgIGRhbmdlcj17c2hvd0Rhbmdlci5zaG93RGFuZ2VyfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBuYW1lLnNldE5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8L3NwYW4+XG5cblxuICAgICAgICAgIDxzcGFuPlxuXG4gICAgICAgICAgICA8VGV4dCBsYWJlbD0ndHJ1ZSc+RGlmaWN1bHR5PC9UZXh0PlxuICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICBuYW1lPVwiZGlmaWN1bHR5XCJcbiAgICAgICAgICAgICAgaWQ9XCJkaWZpY3VsdHlcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBkaWZpY3VsdHkuc2V0VmFsdWVEaWZpY3VsdHkoZXZlbnQudGFyZ2V0LnZhbHVlKX1cblxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNVwiPkVhc3k8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEwXCI+TWVkaXVtPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMFwiPkhhcmQ8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuXG4gICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgPEJ1dHRvblN1Ym1pdCBkYW5nZXI9e3Nob3dEYW5nZXJ9IHR5cGU9J3N1Ym1pdCc+U1RBUlQgR0FNRTwvQnV0dG9uU3VibWl0PlxuICAgICAgICA8L0Zvcm0+XG5cbiAgICAgIDwvU3R5bGVkSWRlbnRpZmljYXRpb24+XG5cblxuICAgIDwvZGl2PlxuICApO1xufTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IElkZW50aWZpY2F0aW9uOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Identification/index.js\n");

/***/ }),

/***/ "./src/components/Identification/styles.js":
/*!*************************************************!*\
  !*** ./src/components/Identification/styles.js ***!
  \*************************************************/
/*! exports provided: StyledIdentification, Form, StyledInput, Text, ButtonSubmit, DangerText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledIdentification\", function() { return StyledIdentification; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Form\", function() { return Form; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledInput\", function() { return StyledInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Text\", function() { return Text; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ButtonSubmit\", function() { return ButtonSubmit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DangerText\", function() { return DangerText; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst StyledIdentification = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.main.withConfig({\n  displayName: \"styles__StyledIdentification\",\n  componentId: \"bvxhks-0\"\n})([\"width:100%;display:flex;align-items:center;justify-content:space-around;flex-direction:row;\"]);\nconst Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({\n  displayName: \"styles__Form\",\n  componentId: \"bvxhks-1\"\n})([\"display:flex;align-items:center;justify-content:center;flex-direction:column;width:100vw;height:100%;padding:2rem 0;span{margin:2rem 0 0.5rem 0;width:30%;min-width:30rem;select,option{font-weight:bold;width:100%;height:5rem;padding:1rem;margin-top:1rem;background:#F8F8F2;border:0;color:#44475A;}}\"]);\nconst StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({\n  displayName: \"styles__StyledInput\",\n  componentId: \"bvxhks-2\"\n})([\"font-weight:bold;width:100%;height:5rem;padding:1rem;margin-top:1rem;background:#F8F8F2;border:0;color:#44475A;::placeholder{color:#44475A;};\", \";\"], props => props.danger && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"  border:0.3rem solid #FF5555;::placeholder{color:#FF5555;};\"]));\nconst Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({\n  displayName: \"styles__Text\",\n  componentId: \"bvxhks-3\"\n})([\"\", \";\", \";\", \";\"], props => props.label && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"font-size:2rem;color:#F8F8F2;font-family:'Open Sans',sans-serif;font-weight:normal;\"]), props => props.tecTitle && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"font-size:min(14vw,6rem);margin-bottom:2rem;color:#F8F8F2;text-align:center;font-weight:bold;\"]), props => props.description && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"text-align:center;font-size:min(4vw,1.9rem);color:#BD93F9;font-weight:lighter;letter-spacing:0.1rem;\"]));\nconst ButtonSubmit = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({\n  displayName: \"styles__ButtonSubmit\",\n  componentId: \"bvxhks-4\"\n})([\"width:30%;min-width:30rem;height:5rem;padding:0 2rem;margin-top:4rem;background:#BD93F9;color:#44475A;border:0;font-weight:bold;cursor:pointer;transition:all .4s ease;&:hover{background:#44475A;color:#BD93F9;};\"]);\nconst DangerText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({\n  displayName: \"styles__DangerText\",\n  componentId: \"bvxhks-5\"\n})([\"margin:1rem 0 -1rem 0;color:#FF5555;font-weight:bold;letter-spacing:0.1rem;\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JZGVudGlmaWNhdGlvbi9zdHlsZXMuanM/YWRkZiJdLCJuYW1lcyI6WyJTdHlsZWRJZGVudGlmaWNhdGlvbiIsInN0eWxlZCIsIm1haW4iLCJGb3JtIiwiZm9ybSIsIlN0eWxlZElucHV0IiwiaW5wdXQiLCJwcm9wcyIsImRhbmdlciIsImNzcyIsIlRleHQiLCJoMSIsImxhYmVsIiwidGVjVGl0bGUiLCJkZXNjcmlwdGlvbiIsIkJ1dHRvblN1Ym1pdCIsImJ1dHRvbiIsIkRhbmdlclRleHQiLCJwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdPLE1BQU1BLG9CQUFvQixHQUFHQyx3REFBTSxDQUFDQyxJQUFWO0FBQUE7QUFBQTtBQUFBLG1HQUExQjtBQVlBLE1BQU1DLElBQUksR0FBR0Ysd0RBQU0sQ0FBQ0csSUFBVjtBQUFBO0FBQUE7QUFBQSxpVEFBVjtBQWdDQSxNQUFNQyxXQUFXLEdBQUdKLHdEQUFNLENBQUNLLEtBQVY7QUFBQTtBQUFBO0FBQUEsMkpBY3JCQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsTUFBTixJQUFnQkMsNkRBQWhCLGtFQWRZLENBQWpCO0FBNEJBLE1BQU1DLElBQUksR0FBR1Qsd0RBQU0sQ0FBQ1UsRUFBVjtBQUFBO0FBQUE7QUFBQSx3QkFFZkosS0FBSyxJQUFJQSxLQUFLLENBQUNLLEtBQU4sSUFBZUgsNkRBQWYseUZBRk0sRUFZZkYsS0FBSyxJQUFJQSxLQUFLLENBQUNNLFFBQU4sSUFBa0JKLDZEQUFsQixtR0FaTSxFQXFCZkYsS0FBSyxJQUFJQSxLQUFLLENBQUNPLFdBQU4sSUFBcUJMLDZEQUFyQiwwR0FyQk0sQ0FBVjtBQXNDQSxNQUFNTSxZQUFZLEdBQUdkLHdEQUFNLENBQUNlLE1BQVY7QUFBQTtBQUFBO0FBQUEsME5BQWxCO0FBd0JBLE1BQU1DLFVBQVUsR0FBR2hCLHdEQUFNLENBQUNpQixDQUFWO0FBQUE7QUFBQTtBQUFBLG1GQUFoQiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0lkZW50aWZpY2F0aW9uL3N0eWxlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRJZGVudGlmaWNhdGlvbiA9IHN0eWxlZC5tYWluYFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbmA7XG5cblxuXG5cbmV4cG9ydCBjb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMnJlbSAwO1xuXG4gIHNwYW57XG4gICAgbWFyZ2luOiAycmVtIDAgMC41cmVtIDA7IFxuICAgIHdpZHRoOiAzMCU7XG5cbiAgICBtaW4td2lkdGg6IDMwcmVtO1xuXG4gICAgXG5cbiAgICBzZWxlY3QsIG9wdGlvbntcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6ICA1cmVtO1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtIDtcbiAgICAgICAgYmFja2dyb3VuZDogI0Y4RjhGMjtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBjb2xvcjogIzQ0NDc1QTtcbiAgICB9XG5cbiAgfVxuICBcbmA7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRJbnB1dCA9IHN0eWxlZC5pbnB1dGBcblxuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogIDVyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbi10b3A6IDFyZW0gO1xuICBiYWNrZ3JvdW5kOiAjRjhGOEYyO1xuICBib3JkZXI6IDA7XG4gIGNvbG9yOiAjNDQ0NzVBO1xuICA6OnBsYWNlaG9sZGVye1xuICAgIGNvbG9yOiAgIzQ0NDc1QTtcblxuICAgIH07XG4gJHtwcm9wcyA9PiBwcm9wcy5kYW5nZXIgJiYgY3NzYCBcblxuICBib3JkZXI6IDAuM3JlbSBzb2xpZCAjRkY1NTU1O1xuXG4gIDo6cGxhY2Vob2xkZXJ7XG4gICAgICBjb2xvcjogICNGRjU1NTU7XG5cbiAgICAgIH07XG4gICBgXG4gIH07IFxuXG5gO1xuXG5cbmV4cG9ydCBjb25zdCBUZXh0ID0gc3R5bGVkLmgxYFxuXG4ke3Byb3BzID0+IHByb3BzLmxhYmVsICYmIGNzc2BcblxuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBjb2xvcjogI0Y4RjhGMjtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcblxuICBgfTtcblxuXG4ke3Byb3BzID0+IHByb3BzLnRlY1RpdGxlICYmIGNzc2BcblxuICAgIGZvbnQtc2l6ZTogbWluKDE0dncsIDZyZW0pOyBcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtOyAgXG4gICAgY29sb3I6ICNGOEY4RjI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gIGB9O1xuJHtwcm9wcyA9PiBwcm9wcy5kZXNjcmlwdGlvbiAmJiBjc3NgXG5cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiBtaW4oNHZ3LCAxLjlyZW0pOyBcbiAgICBjb2xvcjogI0JEOTNGOTtcblxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG4gICAgXG5cblxuXG4gIGB9O1xuXG5gO1xuXG5cbmV4cG9ydCBjb25zdCBCdXR0b25TdWJtaXQgPSBzdHlsZWQuYnV0dG9uYFxud2lkdGg6IDMwJTtcbm1pbi13aWR0aDogMzByZW07XG5oZWlnaHQ6IDVyZW07XG5wYWRkaW5nOiAwIDJyZW07XG5tYXJnaW4tdG9wOiA0cmVtO1xuYmFja2dyb3VuZDogI0JEOTNGOTtcbmNvbG9yOiAjNDQ0NzVBO1xuYm9yZGVyOiAwO1xuZm9udC13ZWlnaHQ6IGJvbGQ7XG5jdXJzb3I6IHBvaW50ZXI7XG50cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2U7XG5cblxuJjpob3ZlcntcblxuICBiYWNrZ3JvdW5kOiAjNDQ0NzVBO1xuICBjb2xvcjogI0JEOTNGOTtcblxufTtcblxuYDtcblxuXG5leHBvcnQgY29uc3QgRGFuZ2VyVGV4dCA9IHN0eWxlZC5wYFxuXG4gIG1hcmdpbjogMXJlbSAwIC0xcmVtIDA7XG4gIGNvbG9yOiAjRkY1NTU1O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcbmA7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Identification/styles.js\n");

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

/***/ "./src/pages/home/index.js":
/*!*********************************!*\
  !*** ./src/pages/home/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Identification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Identification */ \"./src/components/Identification/index.js\");\n/* harmony import */ var _utils_useUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/useUser */ \"./src/utils/useUser.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ \"./src/pages/home/styles.js\");\nvar _jsxFileName = \"/media/matheus-oliveira/Data/Projects/ReactJs/quiz/src/pages/home/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nconst Quiz = () => {\n  const {\n    0: name,\n    1: setName\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    0: valueDificulty,\n    1: setValueDificulty\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('5');\n  const {\n    0: showDanger,\n    1: setShowDanger\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const {\n    setUser\n  } = Object(_utils_useUser__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (name) {\n      setShowDanger(false);\n    }\n\n    ;\n  }, [name]);\n\n  const handleSubmit = event => {\n    event.preventDefault();\n\n    if (!name) {\n      return setShowDanger(true);\n    }\n\n    ;\n    setUser({\n      name,\n      dificulty: valueDificulty\n    });\n    return router.push('/quiz');\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Identification__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    name: {\n      name,\n      setName\n    },\n    dificulty: {\n      valueDificulty,\n      setValueDificulty\n    },\n    submitForm: handleSubmit,\n    showDanger: {\n      showDanger,\n      setShowDanger\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }\n  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }, \"Created By:\", __jsx(\"a\", {\n    target: \"_blank\",\n    href: \"https://github.com/Matheus0liveira\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 11\n    }\n  }, \" Matheus Oliveira \\uD83D\\uDC9C\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quiz);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaG9tZS9pbmRleC5qcz9lMDRiIl0sIm5hbWVzIjpbIlF1aXoiLCJuYW1lIiwic2V0TmFtZSIsInVzZVN0YXRlIiwidmFsdWVEaWZpY3VsdHkiLCJzZXRWYWx1ZURpZmljdWx0eSIsInNob3dEYW5nZXIiLCJzZXRTaG93RGFuZ2VyIiwic2V0VXNlciIsInVzZVVzZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGlmaWN1bHR5IiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLE1BQU07QUFHakIsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQyxzREFBUSxDQUFDLEVBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsY0FBRDtBQUFBLE9BQWlCQztBQUFqQixNQUFzQ0Ysc0RBQVEsQ0FBQyxHQUFELENBQXBEO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCSixzREFBUSxDQUFDLEtBQUQsQ0FBNUM7QUFHQSxRQUFNO0FBQUVLO0FBQUYsTUFBY0MsOERBQU8sRUFBM0I7QUFFQSxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBSUFDLHlEQUFTLENBQUMsTUFBTTtBQUVkLFFBQUlYLElBQUosRUFBVTtBQUNSTSxtQkFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNEOztBQUFBO0FBQ0YsR0FMUSxFQUtOLENBQUNOLElBQUQsQ0FMTSxDQUFUOztBQVNBLFFBQU1ZLFlBQVksR0FBSUMsS0FBRCxJQUFXO0FBRTlCQSxTQUFLLENBQUNDLGNBQU47O0FBR0EsUUFBSSxDQUFDZCxJQUFMLEVBQVc7QUFFVCxhQUFPTSxhQUFhLENBQUMsSUFBRCxDQUFwQjtBQUVEOztBQUFBO0FBRURDLFdBQU8sQ0FBQztBQUFDUCxVQUFEO0FBQU1lLGVBQVMsRUFBRVo7QUFBakIsS0FBRCxDQUFQO0FBRUEsV0FBT00sTUFBTSxDQUFDTyxJQUFQLENBQVksT0FBWixDQUFQO0FBQ0QsR0FkRDs7QUFrQkEsU0FDRSxtRUFFRSxNQUFDLGtFQUFEO0FBQ0UsUUFBSSxFQUFFO0FBQUVoQixVQUFGO0FBQVFDO0FBQVIsS0FEUjtBQUVFLGFBQVMsRUFBRTtBQUFFRSxvQkFBRjtBQUFrQkM7QUFBbEIsS0FGYjtBQUdFLGNBQVUsRUFBRVEsWUFIZDtBQUlFLGNBQVUsRUFBRTtBQUFFUCxnQkFBRjtBQUFjQztBQUFkLEtBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBU0UsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFJRTtBQUFHLFVBQU0sRUFBQyxRQUFWO0FBQW1CLFFBQUksRUFBQyxvQ0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FKRixDQURGLENBVEYsQ0FERjtBQXFCRCxDQTlERDs7QUFvRWVQLG1FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2hvbWUvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IElkZW50aWZpY2F0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSWRlbnRpZmljYXRpb24nO1xuaW1wb3J0IHVzZVVzZXIgZnJvbSAnLi4vLi4vdXRpbHMvdXNlVXNlcic7XG5cbmltcG9ydCBGb290ZXIgIGZyb20gJy4vc3R5bGVzJztcblxuY29uc3QgUXVpeiA9ICgpID0+IHtcblxuXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3ZhbHVlRGlmaWN1bHR5LCBzZXRWYWx1ZURpZmljdWx0eV0gPSB1c2VTdGF0ZSgnNScpO1xuICBjb25zdCBbc2hvd0Rhbmdlciwgc2V0U2hvd0Rhbmdlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblxuICBjb25zdCB7IHNldFVzZXIgfSA9IHVzZVVzZXIoKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgIGlmIChuYW1lKSB7XG4gICAgICBzZXRTaG93RGFuZ2VyKGZhbHNlKTtcbiAgICB9O1xuICB9LCBbbmFtZV0pO1xuXG4gIFxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXG4gICAgaWYgKCFuYW1lKSB7XG5cbiAgICAgIHJldHVybiBzZXRTaG93RGFuZ2VyKHRydWUpO1xuXG4gICAgfTtcbiAgICBcbiAgICBzZXRVc2VyKHtuYW1lLGRpZmljdWx0eTogdmFsdWVEaWZpY3VsdHl9KTtcblxuICAgIHJldHVybiByb3V0ZXIucHVzaCgnL3F1aXonKTtcbiAgfTtcblxuXG4gIFxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICBcbiAgICAgIDxJZGVudGlmaWNhdGlvblxuICAgICAgICBuYW1lPXt7IG5hbWUsIHNldE5hbWUgfX1cbiAgICAgICAgZGlmaWN1bHR5PXt7IHZhbHVlRGlmaWN1bHR5LCBzZXRWYWx1ZURpZmljdWx0eSB9fVxuICAgICAgICBzdWJtaXRGb3JtPXtoYW5kbGVTdWJtaXR9XG4gICAgICAgIHNob3dEYW5nZXI9e3sgc2hvd0Rhbmdlciwgc2V0U2hvd0RhbmdlciB9fVxuICAgICAgLz5cbiAgICAgIFxuICAgICAgPEZvb3Rlcj5cbiAgICAgICAgPHA+XG5cbiAgICAgICAgICBDcmVhdGVkIEJ5OlxuICAgICAgICAgIFxuICAgICAgICAgIDxhIHRhcmdldD0nX2JsYW5rJyBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL01hdGhldXMwbGl2ZWlyYVwiPiBNYXRoZXVzIE9saXZlaXJhIPCfkpw8L2E+XG5cbiAgICAgICAgPC9wPlxuICAgICAgPC9Gb290ZXI+XG4gICAgPC8+XG4gICk7XG59O1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IFF1aXo7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/home/index.js\n");

/***/ }),

/***/ "./src/pages/home/styles.js":
/*!**********************************!*\
  !*** ./src/pages/home/styles.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Footer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.footer.withConfig({\n  displayName: \"styles__Footer\",\n  componentId: \"sc-1vrc8z8-0\"\n})([\"display:flex;align-items:center;justify-content:center;background:#282A36;position:fixed;bottom:0;left:0;right:0;padding:1rem 0;p,a{font-size:1.4rem;}a{text-decoration:none;color:#BD93F9;transition:opacity .2s ease;&:hover{opacity:0.5;}}\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaG9tZS9zdHlsZXMuanM/NGYyZiJdLCJuYW1lcyI6WyJGb290ZXIiLCJzdHlsZWQiLCJmb290ZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsTUFBTSxHQUFHQyx3REFBTSxDQUFDQyxNQUFWO0FBQUE7QUFBQTtBQUFBLHFQQUFaO0FBMkJlRixxRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9ob21lL3N0eWxlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBGb290ZXIgPSBzdHlsZWQuZm9vdGVyYFxuXG5kaXNwbGF5OiBmbGV4O1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xuYmFja2dyb3VuZDogIzI4MkEzNjtcbnBvc2l0aW9uOiBmaXhlZDtcbmJvdHRvbTogMDtcbmxlZnQ6IDA7XG5yaWdodDogMDtcbnBhZGRpbmc6IDFyZW0gMDtcbnAsIGF7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG5he1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjQkQ5M0Y5O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyBlYXNlO1xuXG4gICAgJjpob3ZlcntcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cblxufVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/home/styles.js\n");

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