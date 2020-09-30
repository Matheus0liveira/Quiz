webpackHotUpdate_N_E("pages/quiz",{

/***/ "./src/pages/quiz/index.js":
/*!*********************************!*\
  !*** ./src/pages/quiz/index.js ***!
  \*********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_useUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/useUser */ \"./src/utils/useUser.js\");\n/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Question */ \"./src/components/Question/index.js\");\n/* harmony import */ var _components_Results__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Results */ \"./src/components/Results/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/media/matheus-oliveira/Data/Projects/ReactJs/quiz/src/pages/quiz/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Quiz = function Quiz(_ref) {\n  _s();\n\n  var quiz = _ref.quiz;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([{\n    question: '',\n    answers: {\n      answer_a: \"\",\n      answer_b: \"\",\n      answer_c: \"\",\n      answer_d: \"\",\n      answer_e: \"\",\n      answer_f: \"\"\n    },\n    correct_answers: {\n      answer_a: \"\",\n      answer_b: \"\",\n      answer_c: \"\",\n      answer_d: \"\",\n      answer_e: \"\",\n      answer_f: \"\"\n    }\n  }]),\n      quizQuestion = _useState[0],\n      setQuizQuestion = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      countQuestion = _useState2[0],\n      setCountQuestion = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      showResults = _useState3[0],\n      setShowResults = _useState3[1];\n\n  var _useUSer = Object(_utils_useUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n      user = _useUSer.user;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (!user.name) {\n      return next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/home');\n    }\n\n    ;\n    var newQuiz = quiz.map(function (quiz, index) {\n      if (index < user.dificulty) {\n        return {\n          question: quiz.question,\n          answers: quiz.answers,\n          correct_answers: quiz.correct_answers\n        };\n      }\n\n      ;\n    }).filter(function (quiz) {\n      return quiz !== undefined;\n    });\n    return setQuizQuestion(newQuiz);\n  }, [user]);\n\n  var handleNextQuest = function handleNextQuest() {\n    console.log('Clicked');\n    countQuestion < quizQuestion.length - 1 ? setCountQuestion(function (prevState) {\n      return prevState + 1;\n    }) : setShowResults(true);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, console.log(quizQuestion), !showResults ? __jsx(_components_Question__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    countQuestion: countQuestion,\n    question: quizQuestion[countQuestion].question,\n    answers: quizQuestion[countQuestion].answers // correct_answers={quizQuestion[countQuestion].correct_answers}\n    ,\n    nextQuestion: handleNextQuest,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 11\n    }\n  }) : __jsx(_components_Results__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 11\n    }\n  }), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Quiz, \"GWjesf6KpiCxpWii/4dnymKzlLM=\", false, function () {\n  return [_utils_useUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c = Quiz;\n;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quiz);\n\nvar _c;\n\n$RefreshReg$(_c, \"Quiz\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3F1aXovaW5kZXguanM/OTk1NyJdLCJuYW1lcyI6WyJRdWl6IiwicXVpeiIsInVzZVN0YXRlIiwicXVlc3Rpb24iLCJhbnN3ZXJzIiwiYW5zd2VyX2EiLCJhbnN3ZXJfYiIsImFuc3dlcl9jIiwiYW5zd2VyX2QiLCJhbnN3ZXJfZSIsImFuc3dlcl9mIiwiY29ycmVjdF9hbnN3ZXJzIiwicXVpelF1ZXN0aW9uIiwic2V0UXVpelF1ZXN0aW9uIiwiY291bnRRdWVzdGlvbiIsInNldENvdW50UXVlc3Rpb24iLCJzaG93UmVzdWx0cyIsInNldFNob3dSZXN1bHRzIiwidXNlVVNlciIsInVzZXIiLCJ1c2VFZmZlY3QiLCJuYW1lIiwiUm91dGVyIiwicHVzaCIsIm5ld1F1aXoiLCJtYXAiLCJpbmRleCIsImRpZmljdWx0eSIsImZpbHRlciIsInVuZGVmaW5lZCIsImhhbmRsZU5leHRRdWVzdCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJwcmV2U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBRUE7QUFDQTs7QUFJQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLGtCQUNlQyxzREFBUSxDQUFDLENBQUM7QUFFaERDLFlBQVEsRUFBRSxFQUZzQztBQUdoREMsV0FBTyxFQUFFO0FBQ1BDLGNBQVEsRUFBRSxFQURIO0FBRVBDLGNBQVEsRUFBRSxFQUZIO0FBR1BDLGNBQVEsRUFBRSxFQUhIO0FBSVBDLGNBQVEsRUFBRSxFQUpIO0FBS1BDLGNBQVEsRUFBRSxFQUxIO0FBTVBDLGNBQVEsRUFBRTtBQU5ILEtBSHVDO0FBV2hEQyxtQkFBZSxFQUFFO0FBQ2ZOLGNBQVEsRUFBRSxFQURLO0FBRWZDLGNBQVEsRUFBRSxFQUZLO0FBR2ZDLGNBQVEsRUFBRSxFQUhLO0FBSWZDLGNBQVEsRUFBRSxFQUpLO0FBS2ZDLGNBQVEsRUFBRSxFQUxLO0FBTWZDLGNBQVEsRUFBRTtBQU5LO0FBWCtCLEdBQUQsQ0FBRCxDQUR2QjtBQUFBLE1BQ2xCRSxZQURrQjtBQUFBLE1BQ0pDLGVBREk7O0FBQUEsbUJBc0JpQlgsc0RBQVEsQ0FBQyxDQUFELENBdEJ6QjtBQUFBLE1Bc0JsQlksYUF0QmtCO0FBQUEsTUFzQkhDLGdCQXRCRzs7QUFBQSxtQkF1QmFiLHNEQUFRLENBQUMsS0FBRCxDQXZCckI7QUFBQSxNQXVCbEJjLFdBdkJrQjtBQUFBLE1BdUJMQyxjQXZCSzs7QUFBQSxpQkF5QlJDLDhEQUFPLEVBekJDO0FBQUEsTUF5QmpCQyxJQXpCaUIsWUF5QmpCQSxJQXpCaUI7O0FBMkJ6QkMseURBQVMsQ0FBQyxZQUFNO0FBRWQsUUFBSSxDQUFDRCxJQUFJLENBQUNFLElBQVYsRUFBZ0I7QUFFZCxhQUFPQyxrREFBTSxDQUFDQyxJQUFQLENBQVksT0FBWixDQUFQO0FBRUQ7O0FBQUE7QUFFRCxRQUFNQyxPQUFPLEdBQUd2QixJQUFJLENBQUN3QixHQUFMLENBQVMsVUFBQ3hCLElBQUQsRUFBT3lCLEtBQVAsRUFBaUI7QUFFeEMsVUFBSUEsS0FBSyxHQUFHUCxJQUFJLENBQUNRLFNBQWpCLEVBQTRCO0FBRTFCLGVBQU87QUFFTHhCLGtCQUFRLEVBQUVGLElBQUksQ0FBQ0UsUUFGVjtBQUdMQyxpQkFBTyxFQUFFSCxJQUFJLENBQUNHLE9BSFQ7QUFJTE8seUJBQWUsRUFBRVYsSUFBSSxDQUFDVTtBQUpqQixTQUFQO0FBT0Q7O0FBQUE7QUFFRixLQWJlLEVBYWJpQixNQWJhLENBYU4sVUFBQTNCLElBQUk7QUFBQSxhQUFJQSxJQUFJLEtBQUs0QixTQUFiO0FBQUEsS0FiRSxDQUFoQjtBQWVBLFdBQU9oQixlQUFlLENBQUNXLE9BQUQsQ0FBdEI7QUFHRCxHQTFCUSxFQTBCTixDQUFDTCxJQUFELENBMUJNLENBQVQ7O0FBNEJBLE1BQU1XLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUc1QkMsV0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUVBbEIsaUJBQWEsR0FBR0YsWUFBWSxDQUFDcUIsTUFBYixHQUFzQixDQUF0QyxHQUtJbEIsZ0JBQWdCLENBQUMsVUFBQW1CLFNBQVM7QUFBQSxhQUFJQSxTQUFTLEdBQUcsQ0FBaEI7QUFBQSxLQUFWLENBTHBCLEdBV0lqQixjQUFjLENBQUMsSUFBRCxDQVhsQjtBQWVELEdBcEJEOztBQXNCQSxTQUNFLG1FQUNHYyxPQUFPLENBQUNDLEdBQVIsQ0FBWXBCLFlBQVosQ0FESCxFQUlHLENBQUNJLFdBQUQsR0FJRyxNQUFDLDREQUFEO0FBQ0UsaUJBQWEsRUFBRUYsYUFEakI7QUFFRSxZQUFRLEVBQUVGLFlBQVksQ0FBQ0UsYUFBRCxDQUFaLENBQTRCWCxRQUZ4QztBQUdFLFdBQU8sRUFBRVMsWUFBWSxDQUFDRSxhQUFELENBQVosQ0FBNEJWLE9BSHZDLENBSUU7QUFKRjtBQUtFLGdCQUFZLEVBQUUwQixlQUxoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkgsR0FnQkcsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcEJOLEVBNEJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE1QkYsQ0FERjtBQTZDRCxDQTFIRDs7R0FBTTlCLEk7VUF5QmFrQixzRDs7O0tBekJibEIsSTtBQTJJTDs7QUFFY0EsbUVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvcXVpei9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgdXNlVVNlciBmcm9tICcuLi8uLi91dGlscy91c2VVc2VyJztcblxuaW1wb3J0IFF1ZXN0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUXVlc3Rpb24nO1xuaW1wb3J0IFJlc3VsdHMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9SZXN1bHRzJztcblxuXG5cbmNvbnN0IFF1aXogPSAoeyBxdWl6IH0pID0+IHtcbiAgY29uc3QgW3F1aXpRdWVzdGlvbiwgc2V0UXVpelF1ZXN0aW9uXSA9IHVzZVN0YXRlKFt7XG5cbiAgICBxdWVzdGlvbjogJycsXG4gICAgYW5zd2Vyczoge1xuICAgICAgYW5zd2VyX2E6IFwiXCIsXG4gICAgICBhbnN3ZXJfYjogXCJcIixcbiAgICAgIGFuc3dlcl9jOiBcIlwiLFxuICAgICAgYW5zd2VyX2Q6IFwiXCIsXG4gICAgICBhbnN3ZXJfZTogXCJcIixcbiAgICAgIGFuc3dlcl9mOiBcIlwiLFxuICAgIH0sXG4gICAgY29ycmVjdF9hbnN3ZXJzOiB7XG4gICAgICBhbnN3ZXJfYTogXCJcIixcbiAgICAgIGFuc3dlcl9iOiBcIlwiLFxuICAgICAgYW5zd2VyX2M6IFwiXCIsXG4gICAgICBhbnN3ZXJfZDogXCJcIixcbiAgICAgIGFuc3dlcl9lOiBcIlwiLFxuICAgICAgYW5zd2VyX2Y6IFwiXCIsXG4gICAgfVxuICB9XSk7XG5cbiAgY29uc3QgW2NvdW50UXVlc3Rpb24sIHNldENvdW50UXVlc3Rpb25dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzaG93UmVzdWx0cywgc2V0U2hvd1Jlc3VsdHNdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlVVNlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICBpZiAoIXVzZXIubmFtZSkge1xuXG4gICAgICByZXR1cm4gUm91dGVyLnB1c2goJy9ob21lJyk7XG5cbiAgICB9O1xuXG4gICAgY29uc3QgbmV3UXVpeiA9IHF1aXoubWFwKChxdWl6LCBpbmRleCkgPT4ge1xuXG4gICAgICBpZiAoaW5kZXggPCB1c2VyLmRpZmljdWx0eSkge1xuXG4gICAgICAgIHJldHVybiB7XG5cbiAgICAgICAgICBxdWVzdGlvbjogcXVpei5xdWVzdGlvbixcbiAgICAgICAgICBhbnN3ZXJzOiBxdWl6LmFuc3dlcnMsXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXJzOiBxdWl6LmNvcnJlY3RfYW5zd2Vyc1xuXG4gICAgICAgIH07XG4gICAgICB9O1xuXG4gICAgfSkuZmlsdGVyKHF1aXogPT4gcXVpeiAhPT0gdW5kZWZpbmVkKTtcblxuICAgIHJldHVybiBzZXRRdWl6UXVlc3Rpb24obmV3UXVpeik7XG5cblxuICB9LCBbdXNlcl0pO1xuXG4gIGNvbnN0IGhhbmRsZU5leHRRdWVzdCA9ICgpID0+IHtcblxuXG4gICAgY29uc29sZS5sb2coJ0NsaWNrZWQnKTtcblxuICAgIGNvdW50UXVlc3Rpb24gPCBxdWl6UXVlc3Rpb24ubGVuZ3RoIC0gMVxuXG4gICAgICA/XG5cbiAgICAgIChcbiAgICAgICAgc2V0Q291bnRRdWVzdGlvbihwcmV2U3RhdGUgPT4gcHJldlN0YXRlICsgMSlcbiAgICAgIClcblxuICAgICAgOlxuXG4gICAgICAoXG4gICAgICAgIHNldFNob3dSZXN1bHRzKHRydWUpXG4gICAgICApXG5cblxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtjb25zb2xlLmxvZyhxdWl6UXVlc3Rpb24pfVxuICAgICAgey8qIHtjb25zb2xlLmxvZyhxdWl6KX0gKi99XG5cbiAgICAgIHshc2hvd1Jlc3VsdHNcbiAgICAgICAgP1xuICAgICAgICAoXG5cbiAgICAgICAgICA8UXVlc3Rpb25cbiAgICAgICAgICAgIGNvdW50UXVlc3Rpb249e2NvdW50UXVlc3Rpb259XG4gICAgICAgICAgICBxdWVzdGlvbj17cXVpelF1ZXN0aW9uW2NvdW50UXVlc3Rpb25dLnF1ZXN0aW9ufVxuICAgICAgICAgICAgYW5zd2Vycz17cXVpelF1ZXN0aW9uW2NvdW50UXVlc3Rpb25dLmFuc3dlcnN9XG4gICAgICAgICAgICAvLyBjb3JyZWN0X2Fuc3dlcnM9e3F1aXpRdWVzdGlvbltjb3VudFF1ZXN0aW9uXS5jb3JyZWN0X2Fuc3dlcnN9XG4gICAgICAgICAgICBuZXh0UXVlc3Rpb249e2hhbmRsZU5leHRRdWVzdH1cbiAgICAgICAgICAvPlxuXG4gICAgICAgIClcbiAgICAgICAgOlxuICAgICAgICAoXG5cbiAgICAgICAgICA8UmVzdWx0cyAvPlxuXG4gICAgICAgIClcbiAgICAgIH1cblxuXG5cblxuICAgICAgPGRpdiA+XG5cblxuICAgICAgICB7LyogPGgxPntxdWl6WzFdLnF1ZXN0aW9ufTwvaDE+XG4gICAgICAgIDxwPntxdWl6WzFdLmFuc3dlcnMuYW5zd2VyX2F9PC9wPlxuICAgICAgICA8cD57cXVpelsxXS5hbnN3ZXJzLmFuc3dlcl9ifTwvcD5cbiAgICAgICAgPHA+e3F1aXpbMV0uYW5zd2Vycy5hbnN3ZXJfY308L3A+XG4gICAgICAgIDxwPntxdWl6WzFdLmFuc3dlcnMuYW5zd2VyX2R9PC9wPlxuICAgICAgICA8cD57cXVpelsxXS5hbnN3ZXJzLmFuc3dlcl9lfTwvcD5cbiAgICAgICAgPHA+e3F1aXpbMV0uYW5zd2Vycy5hbnN3ZXJfZn08L3A+ICovfVxuXG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG5cblxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vcXVpemFwaS5pby9hcGkvdjEvcXVlc3Rpb25zJywge1xuXG5cbiAgICBoZWFkZXJzOiB7ICdYLUFwaS1LZXknOiBwcm9jZXNzLmVudi50b2tlbkFQSSB9LFxuXG5cblxuICB9KTtcblxuICBjb25zdCBxdWl6ID0gcmVzdWx0LmRhdGE7XG5cbiAgcmV0dXJuIHsgcHJvcHM6IHsgcXVpeiB9IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBRdWl6OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/quiz/index.js\n");

/***/ })

})