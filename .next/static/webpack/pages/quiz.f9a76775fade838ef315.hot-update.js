webpackHotUpdate_N_E("pages/quiz",{

/***/ "./src/pages/quiz/index.js":
/*!*********************************!*\
  !*** ./src/pages/quiz/index.js ***!
  \*********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_identification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/identification */ \"./src/components/identification/index.js\");\n/* harmony import */ var _utils_useUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/useUser */ \"./src/utils/useUser.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./src/pages/quiz/styles.js\");\nvar _this = undefined,\n    _jsxFileName = \"/media/matheus-oliveira/Data/Projects/ReactJs/quiz/src/pages/quiz/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Quiz = function Quiz(_ref) {\n  _s();\n\n  var quiz = _ref.quiz;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      name = _useState[0],\n      setName = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('linux'),\n      valueCategory = _useState2[0],\n      setValueCategory = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('easy'),\n      valueDificulty = _useState3[0],\n      setValueDificulty = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      showDanger = _useState4[0],\n      setShowDanger = _useState4[1];\n\n  var _useUser = Object(_utils_useUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n      user = _useUser.user,\n      setUser = _useUser.setUser;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (name) {\n      setShowDanger(false);\n    }\n\n    ;\n  }, [name]);\n\n  var handleSubmit = function handleSubmit(event) {\n    event.preventDefault();\n\n    if (!name) {\n      return setShowDanger(true);\n    }\n\n    ;\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_identification__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    name: {\n      name: user.name,\n      setUser: setUser\n    },\n    category: {\n      valueCategory: valueCategory,\n      setValueCategory: setValueCategory\n    },\n    dificulty: {\n      valueDificulty: valueDificulty,\n      setValueDificulty: setValueDificulty\n    },\n    submitForm: handleSubmit,\n    showDanger: {\n      showDanger: showDanger,\n      setShowDanger: setShowDanger\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }), console.log(quiz), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }, \"Created By:\", __jsx(\"a\", {\n    target: \"_blank\",\n    href: \"https://github.com/Matheus0liveira\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 11\n    }\n  }, \" Matheus Oliveira \\uD83D\\uDC9C\"))));\n};\n\n_s(Quiz, \"tMTh7/LAndFY6N9GLteKMypDvIo=\", false, function () {\n  return [_utils_useUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c = Quiz;\n;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quiz);\n\nvar _c;\n\n$RefreshReg$(_c, \"Quiz\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3F1aXovaW5kZXguanM/OTk1NyJdLCJuYW1lcyI6WyJRdWl6IiwicXVpeiIsInVzZVN0YXRlIiwibmFtZSIsInNldE5hbWUiLCJ2YWx1ZUNhdGVnb3J5Iiwic2V0VmFsdWVDYXRlZ29yeSIsInZhbHVlRGlmaWN1bHR5Iiwic2V0VmFsdWVEaWZpY3VsdHkiLCJzaG93RGFuZ2VyIiwic2V0U2hvd0RhbmdlciIsInVzZVVzZXIiLCJ1c2VyIiwic2V0VXNlciIsInVzZUVmZmVjdCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLGtCQUdEQyxzREFBUSxDQUFDLEVBQUQsQ0FIUDtBQUFBLE1BR2xCQyxJQUhrQjtBQUFBLE1BR1pDLE9BSFk7O0FBQUEsbUJBSWlCRixzREFBUSxDQUFDLE9BQUQsQ0FKekI7QUFBQSxNQUlsQkcsYUFKa0I7QUFBQSxNQUlIQyxnQkFKRzs7QUFBQSxtQkFLbUJKLHNEQUFRLENBQUMsTUFBRCxDQUwzQjtBQUFBLE1BS2xCSyxjQUxrQjtBQUFBLE1BS0ZDLGlCQUxFOztBQUFBLG1CQU1XTixzREFBUSxDQUFDLEtBQUQsQ0FObkI7QUFBQSxNQU1sQk8sVUFOa0I7QUFBQSxNQU1OQyxhQU5NOztBQUFBLGlCQVNDQyw4REFBTyxFQVRSO0FBQUEsTUFTakJDLElBVGlCLFlBU2pCQSxJQVRpQjtBQUFBLE1BU1hDLE9BVFcsWUFTWEEsT0FUVzs7QUFhekJDLHlEQUFTLENBQUMsWUFBTTtBQUVkLFFBQUlYLElBQUosRUFBVTtBQUNSTyxtQkFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNEOztBQUFBO0FBQ0YsR0FMUSxFQUtOLENBQUNQLElBQUQsQ0FMTSxDQUFUOztBQVlBLE1BQU1ZLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUU5QkEsU0FBSyxDQUFDQyxjQUFOOztBQUdBLFFBQUksQ0FBQ2QsSUFBTCxFQUFXO0FBRVQsYUFBT08sYUFBYSxDQUFDLElBQUQsQ0FBcEI7QUFDRDs7QUFBQTtBQUVGLEdBVkQ7O0FBWUEsU0FDRSxtRUFFRSxNQUFDLGtFQUFEO0FBQ0UsUUFBSSxFQUFFO0FBQUNQLFVBQUksRUFBRVMsSUFBSSxDQUFDVCxJQUFaO0FBQWtCVSxhQUFPLEVBQVBBO0FBQWxCLEtBRFI7QUFFRSxZQUFRLEVBQUU7QUFBRVIsbUJBQWEsRUFBYkEsYUFBRjtBQUFpQkMsc0JBQWdCLEVBQWhCQTtBQUFqQixLQUZaO0FBR0UsYUFBUyxFQUFFO0FBQUVDLG9CQUFjLEVBQWRBLGNBQUY7QUFBa0JDLHVCQUFpQixFQUFqQkE7QUFBbEIsS0FIYjtBQUlFLGNBQVUsRUFBRU8sWUFKZDtBQUtFLGNBQVUsRUFBRTtBQUFFTixnQkFBVSxFQUFWQSxVQUFGO0FBQWNDLG1CQUFhLEVBQWJBO0FBQWQsS0FMZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFXR1EsT0FBTyxDQUFDQyxHQUFSLENBQVlsQixJQUFaLENBWEgsRUFjRSxNQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUlFO0FBQUcsVUFBTSxFQUFDLFFBQVY7QUFBbUIsUUFBSSxFQUFDLG9DQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUpGLENBREYsQ0FkRixDQURGO0FBMEJELENBL0REOztHQUFNRCxJO1VBU3NCVyxzRDs7O0tBVHRCWCxJO0FBOEVMOztBQUdjQSxtRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9xdWl6L2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgSWRlbnRpZmljYXRpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pZGVudGlmaWNhdGlvbic7XG5pbXBvcnQgdXNlVXNlciBmcm9tICcuLi8uLi91dGlscy91c2VVc2VyJztcblxuaW1wb3J0IEZvb3RlciAgZnJvbSAnLi9zdHlsZXMnO1xuXG5jb25zdCBRdWl6ID0gKHsgcXVpeiB9KSA9PiB7XG5cblxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt2YWx1ZUNhdGVnb3J5LCBzZXRWYWx1ZUNhdGVnb3J5XSA9IHVzZVN0YXRlKCdsaW51eCcpO1xuICBjb25zdCBbdmFsdWVEaWZpY3VsdHksIHNldFZhbHVlRGlmaWN1bHR5XSA9IHVzZVN0YXRlKCdlYXN5Jyk7XG4gIGNvbnN0IFtzaG93RGFuZ2VyLCBzZXRTaG93RGFuZ2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXG4gIGNvbnN0IHsgdXNlciwgc2V0VXNlciB9ID0gdXNlVXNlcigpO1xuXG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHNldFNob3dEYW5nZXIoZmFsc2UpO1xuICAgIH07XG4gIH0sIFtuYW1lXSk7XG5cblxuXG5cblxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXG4gICAgaWYgKCFuYW1lKSB7XG5cbiAgICAgIHJldHVybiBzZXRTaG93RGFuZ2VyKHRydWUpO1xuICAgIH07XG5cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICBcbiAgICAgIDxJZGVudGlmaWNhdGlvblxuICAgICAgICBuYW1lPXt7bmFtZTogdXNlci5uYW1lLCBzZXRVc2VyfSB9XG4gICAgICAgIGNhdGVnb3J5PXt7IHZhbHVlQ2F0ZWdvcnksIHNldFZhbHVlQ2F0ZWdvcnkgfX1cbiAgICAgICAgZGlmaWN1bHR5PXt7IHZhbHVlRGlmaWN1bHR5LCBzZXRWYWx1ZURpZmljdWx0eSB9fVxuICAgICAgICBzdWJtaXRGb3JtPXtoYW5kbGVTdWJtaXR9XG4gICAgICAgIHNob3dEYW5nZXI9e3sgc2hvd0Rhbmdlciwgc2V0U2hvd0RhbmdlciB9fVxuICAgICAgLz5cblxuICAgICAgXG4gICAgICB7Y29uc29sZS5sb2cocXVpeil9XG5cbiAgICAgIFxuICAgICAgPEZvb3Rlcj5cbiAgICAgICAgPHA+XG5cbiAgICAgICAgICBDcmVhdGVkIEJ5OlxuICAgICAgICAgIFxuICAgICAgICAgIDxhIHRhcmdldD0nX2JsYW5rJyBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL01hdGhldXMwbGl2ZWlyYVwiPiBNYXRoZXVzIE9saXZlaXJhIPCfkpw8L2E+XG5cbiAgICAgICAgPC9wPlxuICAgICAgPC9Gb290ZXI+XG4gICAgPC8+XG4gICk7XG59O1xuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKXtcblxuICBcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL3F1aXphcGkuaW8vYXBpL3YxL3F1ZXN0aW9ucycsIHtcblxuICAgIGhlYWRlcnM6IHsgJ1gtQXBpLUtleSc6ICdsQ1lMUWdaWHB5QVJIeE9zR3Q2cWU1OURpTEphd0g4Q2JPSXdETGRsJyB9LFxuXG4gIH0pO1xuXG4gIGNvbnN0IHF1aXogPSAgcmVzdWx0LmRhdGE7XG5cbiAgcmV0dXJuIHsgcHJvcHM6IHtxdWl6fSB9O1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBRdWl6O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/quiz/index.js\n");

/***/ })

})