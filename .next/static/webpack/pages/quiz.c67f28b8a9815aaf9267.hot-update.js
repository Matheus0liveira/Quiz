webpackHotUpdate_N_E("pages/quiz",{

/***/ "./src/components/Question/index.js":
/*!******************************************!*\
  !*** ./src/components/Question/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/Question/styles.js\");\nvar _this = undefined,\n    _jsxFileName = \"/media/matheus-oliveira/Data/Projects/ReactJs/quiz/src/components/Question/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Question = function Question(_ref) {\n  var question = _ref.question,\n      answers = _ref.answers,\n      nextQuestion = _ref.nextQuestion,\n      countQuestion = _ref.countQuestion;\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"QuestionWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    count: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, \"Question: \", countQuestion + 1), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    quest: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, question), answers.answer_a && __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    answer: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 28\n    }\n  }, answers.answer_a), answers.answer_b && __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    answer: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 28\n    }\n  }, answers.answer_b), answers.answer_c && __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    answer: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 28\n    }\n  }, answers.answer_c), answers.answer_d && __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    answer: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 28\n    }\n  }, answers.answer_d), answers.answer_e && __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    answer: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 28\n    }\n  }, answers.answer_e), answers.answer_f && __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    answer: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 28\n    }\n  }, answers.answer_f), __jsx(\"button\", {\n    onClick: nextQuestion,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, \" Next\"));\n};\n\n_c = Question;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Question);\n\nvar _c;\n\n$RefreshReg$(_c, \"Question\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUXVlc3Rpb24vaW5kZXguanM/YTI3MyJdLCJuYW1lcyI6WyJRdWVzdGlvbiIsInF1ZXN0aW9uIiwiYW5zd2VycyIsIm5leHRRdWVzdGlvbiIsImNvdW50UXVlc3Rpb24iLCJhbnN3ZXJfYSIsImFuc3dlcl9iIiwiYW5zd2VyX2MiLCJhbnN3ZXJfZCIsImFuc3dlcl9lIiwiYW5zd2VyX2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUF3RDtBQUFBLE1BQXJEQyxRQUFxRCxRQUFyREEsUUFBcUQ7QUFBQSxNQUEzQ0MsT0FBMkMsUUFBM0NBLE9BQTJDO0FBQUEsTUFBbENDLFlBQWtDLFFBQWxDQSxZQUFrQztBQUFBLE1BQXBCQyxhQUFvQixRQUFwQkEsYUFBb0I7QUFHdkUsU0FHRSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDRDQUFEO0FBQU0sU0FBSyxNQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXVCQSxhQUFhLEdBQUcsQ0FBdkMsQ0FERixFQUVFLE1BQUMsNENBQUQ7QUFBTSxTQUFLLE1BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFhSCxRQUFiLENBRkYsRUFLR0MsT0FBTyxDQUFDRyxRQUFSLElBQW9CLE1BQUMsNENBQUQ7QUFBTSxVQUFNLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFjSCxPQUFPLENBQUNHLFFBQXRCLENBTHZCLEVBTUdILE9BQU8sQ0FBQ0ksUUFBUixJQUFvQixNQUFDLDRDQUFEO0FBQU0sVUFBTSxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBY0osT0FBTyxDQUFDSSxRQUF0QixDQU52QixFQU9HSixPQUFPLENBQUNLLFFBQVIsSUFBb0IsTUFBQyw0Q0FBRDtBQUFNLFVBQU0sTUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWNMLE9BQU8sQ0FBQ0ssUUFBdEIsQ0FQdkIsRUFRR0wsT0FBTyxDQUFDTSxRQUFSLElBQW9CLE1BQUMsNENBQUQ7QUFBTSxVQUFNLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFjTixPQUFPLENBQUNNLFFBQXRCLENBUnZCLEVBU0dOLE9BQU8sQ0FBQ08sUUFBUixJQUFvQixNQUFDLDRDQUFEO0FBQU0sVUFBTSxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBY1AsT0FBTyxDQUFDTyxRQUF0QixDQVR2QixFQVVHUCxPQUFPLENBQUNRLFFBQVIsSUFBb0IsTUFBQyw0Q0FBRDtBQUFNLFVBQU0sTUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWNSLE9BQU8sQ0FBQ1EsUUFBdEIsQ0FWdkIsRUFhRTtBQUFRLFdBQU8sRUFBRVAsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJGLENBSEY7QUF1QkQsQ0ExQkQ7O0tBQU1ILFE7QUE0QlNBLHVFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUXVlc3Rpb24vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBRdWVzdGlvbldyYXBwZXIsIFRleHQgfSBmcm9tICcuL3N0eWxlcyc7XG5cbmNvbnN0IFF1ZXN0aW9uID0gKHsgcXVlc3Rpb24sIGFuc3dlcnMsIG5leHRRdWVzdGlvbiwgY291bnRRdWVzdGlvbiB9KSA9PiB7XG5cblxuICByZXR1cm4gKFxuXG5cbiAgICA8UXVlc3Rpb25XcmFwcGVyPlxuICAgICAgPFRleHQgY291bnQ+UXVlc3Rpb246IHtjb3VudFF1ZXN0aW9uICsgMX08L1RleHQ+XG4gICAgICA8VGV4dCBxdWVzdD57cXVlc3Rpb259PC9UZXh0PlxuXG5cbiAgICAgIHthbnN3ZXJzLmFuc3dlcl9hICYmIDxUZXh0IGFuc3dlcj57YW5zd2Vycy5hbnN3ZXJfYX08L1RleHQgPn1cbiAgICAgIHthbnN3ZXJzLmFuc3dlcl9iICYmIDxUZXh0IGFuc3dlcj57YW5zd2Vycy5hbnN3ZXJfYn08L1RleHQgPn1cbiAgICAgIHthbnN3ZXJzLmFuc3dlcl9jICYmIDxUZXh0IGFuc3dlcj57YW5zd2Vycy5hbnN3ZXJfY308L1RleHQgPn1cbiAgICAgIHthbnN3ZXJzLmFuc3dlcl9kICYmIDxUZXh0IGFuc3dlcj57YW5zd2Vycy5hbnN3ZXJfZH08L1RleHQgPn1cbiAgICAgIHthbnN3ZXJzLmFuc3dlcl9lICYmIDxUZXh0IGFuc3dlcj57YW5zd2Vycy5hbnN3ZXJfZX08L1RleHQgPn1cbiAgICAgIHthbnN3ZXJzLmFuc3dlcl9mICYmIDxUZXh0IGFuc3dlcj57YW5zd2Vycy5hbnN3ZXJfZn08L1RleHQgPn1cblxuXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e25leHRRdWVzdGlvbn0+IE5leHQ8L2J1dHRvbj5cblxuXG4gICAgPC9RdWVzdGlvbldyYXBwZXI+XG5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUXVlc3Rpb247Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Question/index.js\n");

/***/ })

})