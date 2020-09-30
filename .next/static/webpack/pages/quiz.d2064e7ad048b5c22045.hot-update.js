webpackHotUpdate_N_E("pages/quiz",{

/***/ "./src/components/Question/index.js":
/*!******************************************!*\
  !*** ./src/components/Question/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/Question/styles.js\");\nvar _this = undefined,\n    _jsxFileName = \"/media/matheus-oliveira/Data/Projects/ReactJs/quiz/src/components/Question/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Question = function Question(_ref) {\n  var question = _ref.question,\n      answers = _ref.answers,\n      nextQuestion = _ref.nextQuestion,\n      countQuestion = _ref.countQuestion;\n  var answer_a = answers.answer_a,\n      answer_b = answers.answer_b,\n      answer_c = answers.answer_c,\n      answer_d = answers.answer_d,\n      answer_e = answers.answer_e,\n      answer_f = answers.answer_f;\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"QuestionWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    count: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, \"Question: \", countQuestion + 1), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    quest: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, question), answer_a && __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    answer: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 20\n    }\n  }, answer_a), answer_b && __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    answer: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 20\n    }\n  }, answer_b), answer_c && __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    answer: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 20\n    }\n  }, answer_c), answer_d && __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    answer: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 20\n    }\n  }, answer_d), answer_e && __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    answer: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 20\n    }\n  }, answer_e), answer_f && __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    answer: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 20\n    }\n  }, answer_f), __jsx(\"button\", {\n    onClick: nextQuestion,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, \" Next\"));\n};\n\n_c = Question;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Question);\n\nvar _c;\n\n$RefreshReg$(_c, \"Question\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUXVlc3Rpb24vaW5kZXguanM/YTI3MyJdLCJuYW1lcyI6WyJRdWVzdGlvbiIsInF1ZXN0aW9uIiwiYW5zd2VycyIsIm5leHRRdWVzdGlvbiIsImNvdW50UXVlc3Rpb24iLCJhbnN3ZXJfYSIsImFuc3dlcl9iIiwiYW5zd2VyX2MiLCJhbnN3ZXJfZCIsImFuc3dlcl9lIiwiYW5zd2VyX2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUF3RDtBQUFBLE1BQXJEQyxRQUFxRCxRQUFyREEsUUFBcUQ7QUFBQSxNQUEzQ0MsT0FBMkMsUUFBM0NBLE9BQTJDO0FBQUEsTUFBbENDLFlBQWtDLFFBQWxDQSxZQUFrQztBQUFBLE1BQXBCQyxhQUFvQixRQUFwQkEsYUFBb0I7QUFBQSxNQUdyRUMsUUFIcUUsR0FTbkVILE9BVG1FLENBR3JFRyxRQUhxRTtBQUFBLE1BSXJFQyxRQUpxRSxHQVNuRUosT0FUbUUsQ0FJckVJLFFBSnFFO0FBQUEsTUFLckVDLFFBTHFFLEdBU25FTCxPQVRtRSxDQUtyRUssUUFMcUU7QUFBQSxNQU1yRUMsUUFOcUUsR0FTbkVOLE9BVG1FLENBTXJFTSxRQU5xRTtBQUFBLE1BT3JFQyxRQVBxRSxHQVNuRVAsT0FUbUUsQ0FPckVPLFFBUHFFO0FBQUEsTUFRckVDLFFBUnFFLEdBU25FUixPQVRtRSxDQVFyRVEsUUFScUU7QUFVdkUsU0FHRSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDRDQUFEO0FBQU0sU0FBSyxNQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXVCTixhQUFhLEdBQUcsQ0FBdkMsQ0FERixFQUdFLE1BQUMsNENBQUQ7QUFBTSxTQUFLLE1BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFhSCxRQUFiLENBSEYsRUFLR0ksUUFBUSxJQUFJLE1BQUMsNENBQUQ7QUFDWCxVQUFNLE1BREs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlWQSxRQUpVLENBTGYsRUFXR0MsUUFBUSxJQUFJLE1BQUMsNENBQUQ7QUFBTSxVQUFNLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFjQSxRQUFkLENBWGYsRUFZR0MsUUFBUSxJQUFJLE1BQUMsNENBQUQ7QUFBTSxVQUFNLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFjQSxRQUFkLENBWmYsRUFhR0MsUUFBUSxJQUFJLE1BQUMsNENBQUQ7QUFBTSxVQUFNLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFjQSxRQUFkLENBYmYsRUFjR0MsUUFBUSxJQUFJLE1BQUMsNENBQUQ7QUFBTSxVQUFNLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFjQSxRQUFkLENBZGYsRUFlR0MsUUFBUSxJQUFJLE1BQUMsNENBQUQ7QUFBTSxVQUFNLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFjQSxRQUFkLENBZmYsRUFrQkU7QUFBUSxXQUFPLEVBQUVQLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQkYsQ0FIRjtBQTRCRCxDQXRDRDs7S0FBTUgsUTtBQXdDU0EsdUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9RdWVzdGlvbi9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFF1ZXN0aW9uV3JhcHBlciwgVGV4dCB9IGZyb20gJy4vc3R5bGVzJztcblxuY29uc3QgUXVlc3Rpb24gPSAoeyBxdWVzdGlvbiwgYW5zd2VycywgbmV4dFF1ZXN0aW9uLCBjb3VudFF1ZXN0aW9uIH0pID0+IHtcblxuICBjb25zdCB7XG4gICAgYW5zd2VyX2EsXG4gICAgYW5zd2VyX2IsXG4gICAgYW5zd2VyX2MsXG4gICAgYW5zd2VyX2QsXG4gICAgYW5zd2VyX2UsXG4gICAgYW5zd2VyX2ZcbiAgfSA9IGFuc3dlcnM7XG4gIHJldHVybiAoXG5cblxuICAgIDxRdWVzdGlvbldyYXBwZXI+XG4gICAgICA8VGV4dCBjb3VudD5RdWVzdGlvbjoge2NvdW50UXVlc3Rpb24gKyAxfTwvVGV4dD5cblxuICAgICAgPFRleHQgcXVlc3Q+e3F1ZXN0aW9ufTwvVGV4dD5cblxuICAgICAge2Fuc3dlcl9hICYmIDxUZXh0XG4gICAgICAgIGFuc3dlclxuXG4gICAgICA+XG4gICAgICAgIHthbnN3ZXJfYX1cbiAgICAgIDwvVGV4dCA+fVxuICAgICAge2Fuc3dlcl9iICYmIDxUZXh0IGFuc3dlcj57YW5zd2VyX2J9PC9UZXh0ID59XG4gICAgICB7YW5zd2VyX2MgJiYgPFRleHQgYW5zd2VyPnthbnN3ZXJfY308L1RleHQgPn1cbiAgICAgIHthbnN3ZXJfZCAmJiA8VGV4dCBhbnN3ZXI+e2Fuc3dlcl9kfTwvVGV4dCA+fVxuICAgICAge2Fuc3dlcl9lICYmIDxUZXh0IGFuc3dlcj57YW5zd2VyX2V9PC9UZXh0ID59XG4gICAgICB7YW5zd2VyX2YgJiYgPFRleHQgYW5zd2VyPnthbnN3ZXJfZn08L1RleHQgPn1cblxuXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e25leHRRdWVzdGlvbn0+IE5leHQ8L2J1dHRvbj5cblxuXG4gICAgPC9RdWVzdGlvbldyYXBwZXI+XG5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUXVlc3Rpb247Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Question/index.js\n");

/***/ })

})