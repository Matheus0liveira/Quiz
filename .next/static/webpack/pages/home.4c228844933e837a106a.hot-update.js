webpackHotUpdate_N_E("pages/home",{

/***/ "./src/pages/home/index.js":
/*!*********************************!*\
  !*** ./src/pages/home/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_identification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/identification */ \"./src/components/identification/index.js\");\n/* harmony import */ var _utils_useUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/useUser */ \"./src/utils/useUser.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ \"./src/pages/home/styles.js\");\nvar _this = undefined,\n    _jsxFileName = \"/media/matheus-oliveira/Data/Projects/ReactJs/quiz/src/pages/home/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Quiz = function Quiz() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      name = _useState[0],\n      setName = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('5'),\n      valueDificulty = _useState2[0],\n      setValueDificulty = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      showDanger = _useState3[0],\n      setShowDanger = _useState3[1];\n\n  var _useUser = Object(_utils_useUser__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(),\n      setUser = _useUser.setUser;\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (name) {\n      setShowDanger(false);\n    }\n\n    ;\n  }, [name]);\n\n  var handleSubmit = function handleSubmit(event) {\n    event.preventDefault();\n\n    if (!name) {\n      return setShowDanger(true);\n    }\n\n    ;\n    setUser({\n      name: name,\n      valueCategory: valueCategory,\n      valueDificulty: valueDificulty\n    });\n    return router.push('/quiz');\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_identification__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    name: {\n      name: name,\n      setName: setName\n    },\n    dificulty: {\n      valueDificulty: valueDificulty,\n      setValueDificulty: setValueDificulty\n    },\n    submitForm: handleSubmit,\n    showDanger: {\n      showDanger: showDanger,\n      setShowDanger: setShowDanger\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }\n  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  }, \"Created By:\", __jsx(\"a\", {\n    target: \"_blank\",\n    href: \"https://github.com/Matheus0liveira\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 11\n    }\n  }, \" Matheus Oliveira \\uD83D\\uDC9C\"))));\n};\n\n_s(Quiz, \"+3LGdJwSA9/pEHNYcxuQ0OQ8Ouk=\", false, function () {\n  return [_utils_useUser__WEBPACK_IMPORTED_MODULE_3__[\"default\"], next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = Quiz;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quiz);\n\nvar _c;\n\n$RefreshReg$(_c, \"Quiz\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hvbWUvaW5kZXguanM/ZTA0YiJdLCJuYW1lcyI6WyJRdWl6IiwidXNlU3RhdGUiLCJuYW1lIiwic2V0TmFtZSIsInZhbHVlRGlmaWN1bHR5Iiwic2V0VmFsdWVEaWZpY3VsdHkiLCJzaG93RGFuZ2VyIiwic2V0U2hvd0RhbmdlciIsInVzZVVzZXIiLCJzZXRVc2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlQ2F0ZWdvcnkiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsa0JBR09DLHNEQUFRLENBQUMsRUFBRCxDQUhmO0FBQUEsTUFHVkMsSUFIVTtBQUFBLE1BR0pDLE9BSEk7O0FBQUEsbUJBSTJCRixzREFBUSxDQUFDLEdBQUQsQ0FKbkM7QUFBQSxNQUlWRyxjQUpVO0FBQUEsTUFJTUMsaUJBSk47O0FBQUEsbUJBS21CSixzREFBUSxDQUFDLEtBQUQsQ0FMM0I7QUFBQSxNQUtWSyxVQUxVO0FBQUEsTUFLRUMsYUFMRjs7QUFBQSxpQkFRR0MsOERBQU8sRUFSVjtBQUFBLE1BUVRDLE9BUlMsWUFRVEEsT0FSUzs7QUFVakIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUlBQyx5REFBUyxDQUFDLFlBQU07QUFFZCxRQUFJVixJQUFKLEVBQVU7QUFDUkssbUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDRDs7QUFBQTtBQUNGLEdBTFEsRUFLTixDQUFDTCxJQUFELENBTE0sQ0FBVDs7QUFTQSxNQUFNVyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFFOUJBLFNBQUssQ0FBQ0MsY0FBTjs7QUFHQSxRQUFJLENBQUNiLElBQUwsRUFBVztBQUVULGFBQU9LLGFBQWEsQ0FBQyxJQUFELENBQXBCO0FBRUQ7O0FBQUE7QUFLREUsV0FBTyxDQUFDO0FBQUNQLFVBQUksRUFBSkEsSUFBRDtBQUFNYyxtQkFBYSxFQUFiQSxhQUFOO0FBQW9CWixvQkFBYyxFQUFkQTtBQUFwQixLQUFELENBQVA7QUFFQSxXQUFPTSxNQUFNLENBQUNPLElBQVAsQ0FBWSxPQUFaLENBQVA7QUFHRCxHQW5CRDs7QUFxQkEsU0FDRSxtRUFFRSxNQUFDLGtFQUFEO0FBQ0UsUUFBSSxFQUFFO0FBQUVmLFVBQUksRUFBSkEsSUFBRjtBQUFRQyxhQUFPLEVBQVBBO0FBQVIsS0FEUjtBQUVFLGFBQVMsRUFBRTtBQUFFQyxvQkFBYyxFQUFkQSxjQUFGO0FBQWtCQyx1QkFBaUIsRUFBakJBO0FBQWxCLEtBRmI7QUFHRSxjQUFVLEVBQUVRLFlBSGQ7QUFJRSxjQUFVLEVBQUU7QUFBRVAsZ0JBQVUsRUFBVkEsVUFBRjtBQUFjQyxtQkFBYSxFQUFiQTtBQUFkLEtBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBU0UsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFJRTtBQUFHLFVBQU0sRUFBQyxRQUFWO0FBQW1CLFFBQUksRUFBQyxvQ0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FKRixDQURGLENBVEYsQ0FERjtBQXFCRCxDQWpFRDs7R0FBTVAsSTtVQVFnQlEsc0QsRUFFTEcscUQ7OztLQVZYWCxJO0FBdUVTQSxtRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9ob21lL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmltcG9ydCBJZGVudGlmaWNhdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL2lkZW50aWZpY2F0aW9uJztcbmltcG9ydCB1c2VVc2VyIGZyb20gJy4uLy4uL3V0aWxzL3VzZVVzZXInO1xuXG5pbXBvcnQgRm9vdGVyICBmcm9tICcuL3N0eWxlcyc7XG5cbmNvbnN0IFF1aXogPSAoKSA9PiB7XG5cblxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt2YWx1ZURpZmljdWx0eSwgc2V0VmFsdWVEaWZpY3VsdHldID0gdXNlU3RhdGUoJzUnKTtcbiAgY29uc3QgW3Nob3dEYW5nZXIsIHNldFNob3dEYW5nZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cbiAgY29uc3QgeyBzZXRVc2VyIH0gPSB1c2VVc2VyKCk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICBpZiAobmFtZSkge1xuICAgICAgc2V0U2hvd0RhbmdlcihmYWxzZSk7XG4gICAgfTtcbiAgfSwgW25hbWVdKTtcblxuICBcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblxuICAgIGlmICghbmFtZSkge1xuXG4gICAgICByZXR1cm4gc2V0U2hvd0Rhbmdlcih0cnVlKTtcblxuICAgIH07XG5cblxuXG4gICAgXG4gICAgc2V0VXNlcih7bmFtZSx2YWx1ZUNhdGVnb3J5LHZhbHVlRGlmaWN1bHR5fSk7XG5cbiAgICByZXR1cm4gcm91dGVyLnB1c2goJy9xdWl6Jyk7XG5cblxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIFxuICAgICAgPElkZW50aWZpY2F0aW9uXG4gICAgICAgIG5hbWU9e3sgbmFtZSwgc2V0TmFtZSB9fVxuICAgICAgICBkaWZpY3VsdHk9e3sgdmFsdWVEaWZpY3VsdHksIHNldFZhbHVlRGlmaWN1bHR5IH19XG4gICAgICAgIHN1Ym1pdEZvcm09e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgc2hvd0Rhbmdlcj17eyBzaG93RGFuZ2VyLCBzZXRTaG93RGFuZ2VyIH19XG4gICAgICAvPlxuICAgICAgXG4gICAgICA8Rm9vdGVyPlxuICAgICAgICA8cD5cblxuICAgICAgICAgIENyZWF0ZWQgQnk6XG4gICAgICAgICAgXG4gICAgICAgICAgPGEgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vTWF0aGV1czBsaXZlaXJhXCI+IE1hdGhldXMgT2xpdmVpcmEg8J+SnDwvYT5cblxuICAgICAgICA8L3A+XG4gICAgICA8L0Zvb3Rlcj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgUXVpejtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/home/index.js\n");

/***/ })

})