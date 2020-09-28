webpackHotUpdate_N_E("pages/quiz",{

/***/ "./src/pages/quiz/index.js":
/*!*********************************!*\
  !*** ./src/pages/quiz/index.js ***!
  \*********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_identification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/identification */ \"./src/components/identification/index.js\");\n/* harmony import */ var _utils_useUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/useUser */ \"./src/utils/useUser.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./src/pages/quiz/styles.js\");\nvar _this = undefined,\n    _jsxFileName = \"/media/matheus-oliveira/Data/Projects/ReactJs/quiz/src/pages/quiz/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Quiz = function Quiz(_ref) {\n  _s();\n\n  var quiz = _ref.quiz;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      name = _useState[0],\n      setName = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('linux'),\n      valueCategory = _useState2[0],\n      setValueCategory = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('easy'),\n      valueDificulty = _useState3[0],\n      setValueDificulty = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      showDanger = _useState4[0],\n      setShowDanger = _useState4[1];\n\n  var _useUser = Object(_utils_useUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n      user = _useUser.user,\n      setUser = _useUser.setUser;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (name) {\n      setShowDanger(false);\n    }\n\n    ;\n  }, [name]);\n\n  var handleSubmit = function handleSubmit(event) {\n    event.preventDefault();\n\n    if (!name) {\n      return setShowDanger(true);\n    }\n\n    ;\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_identification__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    name: {\n      name: name,\n      setName: setName\n    },\n    category: {\n      valueCategory: valueCategory,\n      setValueCategory: setValueCategory\n    },\n    dificulty: {\n      valueDificulty: valueDificulty,\n      setValueDificulty: setValueDificulty\n    },\n    submitForm: handleSubmit,\n    showDanger: {\n      showDanger: showDanger,\n      setShowDanger: setShowDanger\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }), console.log(quiz), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }, \"Created By:\", __jsx(\"a\", {\n    target: \"_blank\",\n    href: \"https://github.com/Matheus0liveira\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 11\n    }\n  }, \" Matheus Oliveira \\uD83D\\uDC9C\"))));\n};\n\n_s(Quiz, \"tMTh7/LAndFY6N9GLteKMypDvIo=\", false, function () {\n  return [_utils_useUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c = Quiz;\n;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quiz);\n\nvar _c;\n\n$RefreshReg$(_c, \"Quiz\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3F1aXovaW5kZXguanM/OTk1NyJdLCJuYW1lcyI6WyJRdWl6IiwicXVpeiIsInVzZVN0YXRlIiwibmFtZSIsInNldE5hbWUiLCJ2YWx1ZUNhdGVnb3J5Iiwic2V0VmFsdWVDYXRlZ29yeSIsInZhbHVlRGlmaWN1bHR5Iiwic2V0VmFsdWVEaWZpY3VsdHkiLCJzaG93RGFuZ2VyIiwic2V0U2hvd0RhbmdlciIsInVzZVVzZXIiLCJ1c2VyIiwic2V0VXNlciIsInVzZUVmZmVjdCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLGtCQUdEQyxzREFBUSxDQUFDLEVBQUQsQ0FIUDtBQUFBLE1BR2xCQyxJQUhrQjtBQUFBLE1BR1pDLE9BSFk7O0FBQUEsbUJBSWlCRixzREFBUSxDQUFDLE9BQUQsQ0FKekI7QUFBQSxNQUlsQkcsYUFKa0I7QUFBQSxNQUlIQyxnQkFKRzs7QUFBQSxtQkFLbUJKLHNEQUFRLENBQUMsTUFBRCxDQUwzQjtBQUFBLE1BS2xCSyxjQUxrQjtBQUFBLE1BS0ZDLGlCQUxFOztBQUFBLG1CQU1XTixzREFBUSxDQUFDLEtBQUQsQ0FObkI7QUFBQSxNQU1sQk8sVUFOa0I7QUFBQSxNQU1OQyxhQU5NOztBQUFBLGlCQVNDQyw4REFBTyxFQVRSO0FBQUEsTUFTakJDLElBVGlCLFlBU2pCQSxJQVRpQjtBQUFBLE1BU1hDLE9BVFcsWUFTWEEsT0FUVzs7QUFhekJDLHlEQUFTLENBQUMsWUFBTTtBQUVkLFFBQUlYLElBQUosRUFBVTtBQUNSTyxtQkFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNEOztBQUFBO0FBQ0YsR0FMUSxFQUtOLENBQUNQLElBQUQsQ0FMTSxDQUFUOztBQVlBLE1BQU1ZLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUU5QkEsU0FBSyxDQUFDQyxjQUFOOztBQUdBLFFBQUksQ0FBQ2QsSUFBTCxFQUFXO0FBRVQsYUFBT08sYUFBYSxDQUFDLElBQUQsQ0FBcEI7QUFDRDs7QUFBQTtBQUVGLEdBVkQ7O0FBWUEsU0FDRSxtRUFFRSxNQUFDLGtFQUFEO0FBQ0UsUUFBSSxFQUFFO0FBQUVQLFVBQUksRUFBSkEsSUFBRjtBQUFRQyxhQUFPLEVBQVBBO0FBQVIsS0FEUjtBQUVFLFlBQVEsRUFBRTtBQUFFQyxtQkFBYSxFQUFiQSxhQUFGO0FBQWlCQyxzQkFBZ0IsRUFBaEJBO0FBQWpCLEtBRlo7QUFHRSxhQUFTLEVBQUU7QUFBRUMsb0JBQWMsRUFBZEEsY0FBRjtBQUFrQkMsdUJBQWlCLEVBQWpCQTtBQUFsQixLQUhiO0FBSUUsY0FBVSxFQUFFTyxZQUpkO0FBS0UsY0FBVSxFQUFFO0FBQUVOLGdCQUFVLEVBQVZBLFVBQUY7QUFBY0MsbUJBQWEsRUFBYkE7QUFBZCxLQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQVdHUSxPQUFPLENBQUNDLEdBQVIsQ0FBWWxCLElBQVosQ0FYSCxFQWNFLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSUU7QUFBRyxVQUFNLEVBQUMsUUFBVjtBQUFtQixRQUFJLEVBQUMsb0NBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBSkYsQ0FERixDQWRGLENBREY7QUEwQkQsQ0EvREQ7O0dBQU1ELEk7VUFTc0JXLHNEOzs7S0FUdEJYLEk7QUE4RUw7O0FBR2NBLG1FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3F1aXovaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCBJZGVudGlmaWNhdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL2lkZW50aWZpY2F0aW9uJztcbmltcG9ydCB1c2VVc2VyIGZyb20gJy4uLy4uL3V0aWxzL3VzZVVzZXInO1xuXG5pbXBvcnQgRm9vdGVyICBmcm9tICcuL3N0eWxlcyc7XG5cbmNvbnN0IFF1aXogPSAoeyBxdWl6IH0pID0+IHtcblxuXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3ZhbHVlQ2F0ZWdvcnksIHNldFZhbHVlQ2F0ZWdvcnldID0gdXNlU3RhdGUoJ2xpbnV4Jyk7XG4gIGNvbnN0IFt2YWx1ZURpZmljdWx0eSwgc2V0VmFsdWVEaWZpY3VsdHldID0gdXNlU3RhdGUoJ2Vhc3knKTtcbiAgY29uc3QgW3Nob3dEYW5nZXIsIHNldFNob3dEYW5nZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cbiAgY29uc3QgeyB1c2VyLCBzZXRVc2VyIH0gPSB1c2VVc2VyKCk7XG5cblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICBpZiAobmFtZSkge1xuICAgICAgc2V0U2hvd0RhbmdlcihmYWxzZSk7XG4gICAgfTtcbiAgfSwgW25hbWVdKTtcblxuXG5cblxuXG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cbiAgICBpZiAoIW5hbWUpIHtcblxuICAgICAgcmV0dXJuIHNldFNob3dEYW5nZXIodHJ1ZSk7XG4gICAgfTtcblxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIFxuICAgICAgPElkZW50aWZpY2F0aW9uXG4gICAgICAgIG5hbWU9e3sgbmFtZSwgc2V0TmFtZSB9fVxuICAgICAgICBjYXRlZ29yeT17eyB2YWx1ZUNhdGVnb3J5LCBzZXRWYWx1ZUNhdGVnb3J5IH19XG4gICAgICAgIGRpZmljdWx0eT17eyB2YWx1ZURpZmljdWx0eSwgc2V0VmFsdWVEaWZpY3VsdHkgfX1cbiAgICAgICAgc3VibWl0Rm9ybT17aGFuZGxlU3VibWl0fVxuICAgICAgICBzaG93RGFuZ2VyPXt7IHNob3dEYW5nZXIsIHNldFNob3dEYW5nZXIgfX1cbiAgICAgIC8+XG5cbiAgICAgIFxuICAgICAge2NvbnNvbGUubG9nKHF1aXopfVxuXG4gICAgICBcbiAgICAgIDxGb290ZXI+XG4gICAgICAgIDxwPlxuXG4gICAgICAgICAgQ3JlYXRlZCBCeTpcbiAgICAgICAgICBcbiAgICAgICAgICA8YSB0YXJnZXQ9J19ibGFuaycgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9NYXRoZXVzMGxpdmVpcmFcIj4gTWF0aGV1cyBPbGl2ZWlyYSDwn5KcPC9hPlxuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvRm9vdGVyPlxuICAgIDwvPlxuICApO1xufTtcblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCl7XG5cbiAgXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9xdWl6YXBpLmlvL2FwaS92MS9xdWVzdGlvbnMnLCB7XG5cbiAgICBoZWFkZXJzOiB7ICdYLUFwaS1LZXknOiAnbENZTFFnWlhweUFSSHhPc0d0NnFlNTlEaUxKYXdIOENiT0l3RExkbCcgfSxcblxuICB9KTtcblxuICBjb25zdCBxdWl6ID0gIHJlc3VsdC5kYXRhO1xuXG4gIHJldHVybiB7IHByb3BzOiB7cXVpen0gfTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgUXVpejtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/quiz/index.js\n");

/***/ })

})