webpackHotUpdate_N_E("pages/quiz",{

/***/ "./src/components/Question/index.js":
/*!******************************************!*\
  !*** ./src/components/Question/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/Question/styles.js\");\nvar _this = undefined,\n    _jsxFileName = \"/media/matheus-oliveira/Data/Projects/ReactJs/quiz/src/components/Question/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Question = function Question(_ref) {\n  _s();\n\n  var question = _ref.question,\n      answers = _ref.answers,\n      nextQuestion = _ref.nextQuestion,\n      countQuestion = _ref.countQuestion;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([{\n    quest: \"\"\n  }]),\n      answersQuestion = _useState[0],\n      setAnswersQuestion = _useState[1];\n\n  console.log(answersQuestion);\n  var answer_a = answers.answer_a,\n      answer_b = answers.answer_b,\n      answer_c = answers.answer_c,\n      answer_d = answers.answer_d,\n      answer_e = answers.answer_e,\n      answer_f = answers.answer_f;\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"QuestionWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    count: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, \"Question: \", countQuestion + 1), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    quest: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, question), answer_a && __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    answer: true,\n    onClick: function onClick() {\n      return console.log(answer_a);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 20\n    }\n  }, answer_a), answer_b && __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    answer: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 20\n    }\n  }, answer_b), answer_c && __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    answer: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 20\n    }\n  }, answer_c), answer_d && __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    answer: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 20\n    }\n  }, answer_d), answer_e && __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    answer: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 20\n    }\n  }, answer_e), answer_f && __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    answer: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 20\n    }\n  }, answer_f), __jsx(\"button\", {\n    onClick: nextQuestion,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, \" Next\"));\n};\n\n_s(Question, \"1w/dg/LRrSKWCVg7ick9g9ta2sE=\");\n\n_c = Question;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Question);\n\nvar _c;\n\n$RefreshReg$(_c, \"Question\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUXVlc3Rpb24vaW5kZXguanM/YTI3MyJdLCJuYW1lcyI6WyJRdWVzdGlvbiIsInF1ZXN0aW9uIiwiYW5zd2VycyIsIm5leHRRdWVzdGlvbiIsImNvdW50UXVlc3Rpb24iLCJ1c2VTdGF0ZSIsInF1ZXN0IiwiYW5zd2Vyc1F1ZXN0aW9uIiwic2V0QW5zd2Vyc1F1ZXN0aW9uIiwiY29uc29sZSIsImxvZyIsImFuc3dlcl9hIiwiYW5zd2VyX2IiLCJhbnN3ZXJfYyIsImFuc3dlcl9kIiwiYW5zd2VyX2UiLCJhbnN3ZXJfZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUF3RDtBQUFBOztBQUFBLE1BQXJEQyxRQUFxRCxRQUFyREEsUUFBcUQ7QUFBQSxNQUEzQ0MsT0FBMkMsUUFBM0NBLE9BQTJDO0FBQUEsTUFBbENDLFlBQWtDLFFBQWxDQSxZQUFrQztBQUFBLE1BQXBCQyxhQUFvQixRQUFwQkEsYUFBb0I7O0FBQUEsa0JBR3pCQyxzREFBUSxDQUNwRCxDQUNFO0FBQ0VDLFNBQUssRUFBRTtBQURULEdBREYsQ0FEb0QsQ0FIaUI7QUFBQSxNQUdoRUMsZUFIZ0U7QUFBQSxNQUcvQ0Msa0JBSCtDOztBQVd2RUMsU0FBTyxDQUFDQyxHQUFSLENBQVlILGVBQVo7QUFYdUUsTUFhckVJLFFBYnFFLEdBbUJuRVQsT0FuQm1FLENBYXJFUyxRQWJxRTtBQUFBLE1BY3JFQyxRQWRxRSxHQW1CbkVWLE9BbkJtRSxDQWNyRVUsUUFkcUU7QUFBQSxNQWVyRUMsUUFmcUUsR0FtQm5FWCxPQW5CbUUsQ0FlckVXLFFBZnFFO0FBQUEsTUFnQnJFQyxRQWhCcUUsR0FtQm5FWixPQW5CbUUsQ0FnQnJFWSxRQWhCcUU7QUFBQSxNQWlCckVDLFFBakJxRSxHQW1CbkViLE9BbkJtRSxDQWlCckVhLFFBakJxRTtBQUFBLE1Ba0JyRUMsUUFsQnFFLEdBbUJuRWQsT0FuQm1FLENBa0JyRWMsUUFsQnFFO0FBb0J2RSxTQUdFLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNENBQUQ7QUFBTSxTQUFLLE1BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBdUJaLGFBQWEsR0FBRyxDQUF2QyxDQURGLEVBR0UsTUFBQyw0Q0FBRDtBQUFNLFNBQUssTUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWFILFFBQWIsQ0FIRixFQUtHVSxRQUFRLElBQUksTUFBQyw0Q0FBRDtBQUFNLFVBQU0sTUFBWjtBQUFhLFdBQU8sRUFBRTtBQUFBLGFBQU1GLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaLENBQU47QUFBQSxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW9EQSxRQUFwRCxDQUxmLEVBT0dDLFFBQVEsSUFBSSxNQUFDLDRDQUFEO0FBQU0sVUFBTSxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBY0EsUUFBZCxDQVBmLEVBU0dDLFFBQVEsSUFBSSxNQUFDLDRDQUFEO0FBQU0sVUFBTSxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBY0EsUUFBZCxDQVRmLEVBV0dDLFFBQVEsSUFBSSxNQUFDLDRDQUFEO0FBQU0sVUFBTSxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBY0EsUUFBZCxDQVhmLEVBYUdDLFFBQVEsSUFBSSxNQUFDLDRDQUFEO0FBQU0sVUFBTSxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBY0EsUUFBZCxDQWJmLEVBZUdDLFFBQVEsSUFBSSxNQUFDLDRDQUFEO0FBQU0sVUFBTSxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBY0EsUUFBZCxDQWZmLEVBa0JFO0FBQVEsV0FBTyxFQUFFYixZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbEJGLENBSEY7QUE0QkQsQ0FoREQ7O0dBQU1ILFE7O0tBQUFBLFE7QUFrRFNBLHVFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUXVlc3Rpb24vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFF1ZXN0aW9uV3JhcHBlciwgVGV4dCB9IGZyb20gJy4vc3R5bGVzJztcblxuY29uc3QgUXVlc3Rpb24gPSAoeyBxdWVzdGlvbiwgYW5zd2VycywgbmV4dFF1ZXN0aW9uLCBjb3VudFF1ZXN0aW9uIH0pID0+IHtcblxuXG4gIGNvbnN0IFthbnN3ZXJzUXVlc3Rpb24sIHNldEFuc3dlcnNRdWVzdGlvbl0gPSB1c2VTdGF0ZShcbiAgICBbXG4gICAgICB7XG4gICAgICAgIHF1ZXN0OiBcIlwiXG4gICAgICB9LFxuICAgIF1cbiAgKTtcblxuICBjb25zb2xlLmxvZyhhbnN3ZXJzUXVlc3Rpb24pO1xuICBjb25zdCB7XG4gICAgYW5zd2VyX2EsXG4gICAgYW5zd2VyX2IsXG4gICAgYW5zd2VyX2MsXG4gICAgYW5zd2VyX2QsXG4gICAgYW5zd2VyX2UsXG4gICAgYW5zd2VyX2ZcbiAgfSA9IGFuc3dlcnM7XG4gIHJldHVybiAoXG5cblxuICAgIDxRdWVzdGlvbldyYXBwZXI+XG4gICAgICA8VGV4dCBjb3VudD5RdWVzdGlvbjoge2NvdW50UXVlc3Rpb24gKyAxfTwvVGV4dD5cblxuICAgICAgPFRleHQgcXVlc3Q+e3F1ZXN0aW9ufTwvVGV4dD5cblxuICAgICAge2Fuc3dlcl9hICYmIDxUZXh0IGFuc3dlciBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZyhhbnN3ZXJfYSl9PnthbnN3ZXJfYX08L1RleHQgPn1cblxuICAgICAge2Fuc3dlcl9iICYmIDxUZXh0IGFuc3dlcj57YW5zd2VyX2J9PC9UZXh0ID59XG5cbiAgICAgIHthbnN3ZXJfYyAmJiA8VGV4dCBhbnN3ZXI+e2Fuc3dlcl9jfTwvVGV4dCA+fVxuXG4gICAgICB7YW5zd2VyX2QgJiYgPFRleHQgYW5zd2VyPnthbnN3ZXJfZH08L1RleHQgPn1cblxuICAgICAge2Fuc3dlcl9lICYmIDxUZXh0IGFuc3dlcj57YW5zd2VyX2V9PC9UZXh0ID59XG5cbiAgICAgIHthbnN3ZXJfZiAmJiA8VGV4dCBhbnN3ZXI+e2Fuc3dlcl9mfTwvVGV4dCA+fVxuXG5cbiAgICAgIDxidXR0b24gb25DbGljaz17bmV4dFF1ZXN0aW9ufT4gTmV4dDwvYnV0dG9uPlxuXG5cbiAgICA8L1F1ZXN0aW9uV3JhcHBlcj5cblxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvbjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Question/index.js\n");

/***/ })

})