webpackHotUpdate_N_E("pages/quiz",{

/***/ "./src/pages/quiz/index.js":
/*!*********************************!*\
  !*** ./src/pages/quiz/index.js ***!
  \*********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_useUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/useUser */ \"./src/utils/useUser.js\");\n/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Question */ \"./src/components/Question/index.js\");\n/* harmony import */ var _components_Results__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Results */ \"./src/components/Results/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/media/matheus-oliveira/Data/Projects/ReactJs/quiz/src/pages/quiz/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Quiz = function Quiz(_ref) {\n  _s();\n\n  var quiz = _ref.quiz;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([{\n    question: '',\n    answers: {\n      answer_a_correct: \"\",\n      answer_b: \"\",\n      answer_c: \"\",\n      answer_d: \"\",\n      answer_e: \"\",\n      answer_f: \"\"\n    },\n    correct_answers: {\n      answer_a: \"\",\n      answer_b: \"\",\n      answer_c: \"\",\n      answer_d: \"\",\n      answer_e: \"\",\n      answer_f: \"\"\n    }\n  }]),\n      quizQuestion = _useState[0],\n      setQuizQuestion = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      countQuestion = _useState2[0],\n      setCountQuestion = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      showResults = _useState3[0],\n      setShowResults = _useState3[1];\n\n  var _useUSer = Object(_utils_useUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n      user = _useUSer.user;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (!user.name) {\n      return next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/home');\n    }\n\n    ;\n  }, [user]);\n\n  var handleNextQuest = function handleNextQuest() {\n    // if (countQuestion < user.dificulty) {\n    var newQuiz = {\n      question: quiz[countQuestion].question,\n      answers: quiz[countQuestion].answers,\n      correct_answers: quiz[countQuestion].correct_answers\n    };\n    console.log('*** Quiz: ' + quiz[countQuestion].question);\n    console.log('*** newQuiz: ' + [newQuiz]);\n    console.log([quizQuestion]); // setCountQuestion(prevState => prevState + 1);\n\n    setQuizQuestion(newQuiz); // };\n    // countQuestion < quizQuestion.length - 1\n    //   ?\n    //   (\n    //   )\n    //   :\n    //   (\n    //     setShowResults(true)\n    //   )\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !showResults ? __jsx(_components_Question__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    countQuestion: countQuestion,\n    question: quizQuestion.question,\n    answers: quizQuestion.answers // correct_answers={quizQuestion[countQuestion].correct_answers}\n    ,\n    nextQuestion: handleNextQuest,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 11\n    }\n  }) : __jsx(_components_Results__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 11\n    }\n  }), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Quiz, \"v/QtxBl7yczYOjDkueU9vTRRQv0=\", false, function () {\n  return [_utils_useUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c = Quiz;\n;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quiz);\n\nvar _c;\n\n$RefreshReg$(_c, \"Quiz\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3F1aXovaW5kZXguanM/OTk1NyJdLCJuYW1lcyI6WyJRdWl6IiwicXVpeiIsInVzZVN0YXRlIiwicXVlc3Rpb24iLCJhbnN3ZXJzIiwiYW5zd2VyX2FfY29ycmVjdCIsImFuc3dlcl9iIiwiYW5zd2VyX2MiLCJhbnN3ZXJfZCIsImFuc3dlcl9lIiwiYW5zd2VyX2YiLCJjb3JyZWN0X2Fuc3dlcnMiLCJhbnN3ZXJfYSIsInF1aXpRdWVzdGlvbiIsInNldFF1aXpRdWVzdGlvbiIsImNvdW50UXVlc3Rpb24iLCJzZXRDb3VudFF1ZXN0aW9uIiwic2hvd1Jlc3VsdHMiLCJzZXRTaG93UmVzdWx0cyIsInVzZVVTZXIiLCJ1c2VyIiwidXNlRWZmZWN0IiwibmFtZSIsIlJvdXRlciIsInB1c2giLCJoYW5kbGVOZXh0UXVlc3QiLCJuZXdRdWl6IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFFQTtBQUNBOztBQUlBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsa0JBQ2VDLHNEQUFRLENBQUMsQ0FBQztBQUVoREMsWUFBUSxFQUFFLEVBRnNDO0FBR2hEQyxXQUFPLEVBQUU7QUFDUEMsc0JBQWdCLEVBQUUsRUFEWDtBQUVQQyxjQUFRLEVBQUUsRUFGSDtBQUdQQyxjQUFRLEVBQUUsRUFISDtBQUlQQyxjQUFRLEVBQUUsRUFKSDtBQUtQQyxjQUFRLEVBQUUsRUFMSDtBQU1QQyxjQUFRLEVBQUU7QUFOSCxLQUh1QztBQVdoREMsbUJBQWUsRUFBRTtBQUNmQyxjQUFRLEVBQUUsRUFESztBQUVmTixjQUFRLEVBQUUsRUFGSztBQUdmQyxjQUFRLEVBQUUsRUFISztBQUlmQyxjQUFRLEVBQUUsRUFKSztBQUtmQyxjQUFRLEVBQUUsRUFMSztBQU1mQyxjQUFRLEVBQUU7QUFOSztBQVgrQixHQUFELENBQUQsQ0FEdkI7QUFBQSxNQUNsQkcsWUFEa0I7QUFBQSxNQUNKQyxlQURJOztBQUFBLG1CQXNCaUJaLHNEQUFRLENBQUMsQ0FBRCxDQXRCekI7QUFBQSxNQXNCbEJhLGFBdEJrQjtBQUFBLE1Bc0JIQyxnQkF0Qkc7O0FBQUEsbUJBdUJhZCxzREFBUSxDQUFDLEtBQUQsQ0F2QnJCO0FBQUEsTUF1QmxCZSxXQXZCa0I7QUFBQSxNQXVCTEMsY0F2Qks7O0FBQUEsaUJBeUJSQyw4REFBTyxFQXpCQztBQUFBLE1BeUJqQkMsSUF6QmlCLFlBeUJqQkEsSUF6QmlCOztBQTJCekJDLHlEQUFTLENBQUMsWUFBTTtBQUVkLFFBQUksQ0FBQ0QsSUFBSSxDQUFDRSxJQUFWLEVBQWdCO0FBRWQsYUFBT0Msa0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLE9BQVosQ0FBUDtBQUVEOztBQUFBO0FBRUYsR0FSUSxFQVFOLENBQUNKLElBQUQsQ0FSTSxDQUFUOztBQVVBLE1BQU1LLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QjtBQUVBLFFBQU1DLE9BQU8sR0FBRztBQUVkdkIsY0FBUSxFQUFFRixJQUFJLENBQUNjLGFBQUQsQ0FBSixDQUFvQlosUUFGaEI7QUFHZEMsYUFBTyxFQUFFSCxJQUFJLENBQUNjLGFBQUQsQ0FBSixDQUFvQlgsT0FIZjtBQUlkTyxxQkFBZSxFQUFFVixJQUFJLENBQUNjLGFBQUQsQ0FBSixDQUFvQko7QUFKdkIsS0FBaEI7QUFRQWdCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQWUzQixJQUFJLENBQUNjLGFBQUQsQ0FBSixDQUFvQlosUUFBL0M7QUFDQXdCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFrQixDQUFDRixPQUFELENBQTlCO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLENBQUNmLFlBQUQsQ0FBWixFQWI0QixDQWdCNUI7O0FBQ0FDLG1CQUFlLENBQUNZLE9BQUQsQ0FBZixDQWpCNEIsQ0FrQjVCO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUdELEdBbkNEOztBQXFDQSxTQUNFLG1FQUtHLENBQUNULFdBQUQsR0FJRyxNQUFDLDREQUFEO0FBQ0UsaUJBQWEsRUFBRUYsYUFEakI7QUFFRSxZQUFRLEVBQUVGLFlBQVksQ0FBQ1YsUUFGekI7QUFHRSxXQUFPLEVBQUVVLFlBQVksQ0FBQ1QsT0FIeEIsQ0FJRTtBQUpGO0FBS0UsZ0JBQVksRUFBRXFCLGVBTGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSCxHQWdCRyxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyQk4sRUE2QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTdCRixDQURGO0FBc0NELENBaEhEOztHQUFNekIsSTtVQXlCYW1CLHNEOzs7S0F6QmJuQixJO0FBeUtMOztBQUVjQSxtRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9xdWl6L2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB1c2VVU2VyIGZyb20gJy4uLy4uL3V0aWxzL3VzZVVzZXInO1xuXG5pbXBvcnQgUXVlc3Rpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9RdWVzdGlvbic7XG5pbXBvcnQgUmVzdWx0cyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Jlc3VsdHMnO1xuXG5cblxuY29uc3QgUXVpeiA9ICh7IHF1aXogfSkgPT4ge1xuICBjb25zdCBbcXVpelF1ZXN0aW9uLCBzZXRRdWl6UXVlc3Rpb25dID0gdXNlU3RhdGUoW3tcblxuICAgIHF1ZXN0aW9uOiAnJyxcbiAgICBhbnN3ZXJzOiB7XG4gICAgICBhbnN3ZXJfYV9jb3JyZWN0OiBcIlwiLFxuICAgICAgYW5zd2VyX2I6IFwiXCIsXG4gICAgICBhbnN3ZXJfYzogXCJcIixcbiAgICAgIGFuc3dlcl9kOiBcIlwiLFxuICAgICAgYW5zd2VyX2U6IFwiXCIsXG4gICAgICBhbnN3ZXJfZjogXCJcIixcbiAgICB9LFxuICAgIGNvcnJlY3RfYW5zd2Vyczoge1xuICAgICAgYW5zd2VyX2E6IFwiXCIsXG4gICAgICBhbnN3ZXJfYjogXCJcIixcbiAgICAgIGFuc3dlcl9jOiBcIlwiLFxuICAgICAgYW5zd2VyX2Q6IFwiXCIsXG4gICAgICBhbnN3ZXJfZTogXCJcIixcbiAgICAgIGFuc3dlcl9mOiBcIlwiLFxuICAgIH1cbiAgfV0pO1xuXG4gIGNvbnN0IFtjb3VudFF1ZXN0aW9uLCBzZXRDb3VudFF1ZXN0aW9uXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc2hvd1Jlc3VsdHMsIHNldFNob3dSZXN1bHRzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB7IHVzZXIgfSA9IHVzZVVTZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgaWYgKCF1c2VyLm5hbWUpIHtcblxuICAgICAgcmV0dXJuIFJvdXRlci5wdXNoKCcvaG9tZScpO1xuXG4gICAgfTtcblxuICB9LCBbdXNlcl0pO1xuXG4gIGNvbnN0IGhhbmRsZU5leHRRdWVzdCA9ICgpID0+IHtcbiAgICAvLyBpZiAoY291bnRRdWVzdGlvbiA8IHVzZXIuZGlmaWN1bHR5KSB7XG5cbiAgICBjb25zdCBuZXdRdWl6ID0ge1xuXG4gICAgICBxdWVzdGlvbjogcXVpeltjb3VudFF1ZXN0aW9uXS5xdWVzdGlvbixcbiAgICAgIGFuc3dlcnM6IHF1aXpbY291bnRRdWVzdGlvbl0uYW5zd2VycyxcbiAgICAgIGNvcnJlY3RfYW5zd2VyczogcXVpeltjb3VudFF1ZXN0aW9uXS5jb3JyZWN0X2Fuc3dlcnNcblxuICAgIH07XG5cbiAgICBjb25zb2xlLmxvZygnKioqIFF1aXo6ICcgKyBxdWl6W2NvdW50UXVlc3Rpb25dLnF1ZXN0aW9uKTtcbiAgICBjb25zb2xlLmxvZygnKioqIG5ld1F1aXo6ICcgKyBbbmV3UXVpel0pO1xuICAgIGNvbnNvbGUubG9nKFtxdWl6UXVlc3Rpb25dKTtcblxuXG4gICAgLy8gc2V0Q291bnRRdWVzdGlvbihwcmV2U3RhdGUgPT4gcHJldlN0YXRlICsgMSk7XG4gICAgc2V0UXVpelF1ZXN0aW9uKG5ld1F1aXopO1xuICAgIC8vIH07XG5cbiAgICAvLyBjb3VudFF1ZXN0aW9uIDwgcXVpelF1ZXN0aW9uLmxlbmd0aCAtIDFcblxuICAgIC8vICAgP1xuXG4gICAgLy8gICAoXG5cbiAgICAvLyAgIClcblxuICAgIC8vICAgOlxuXG4gICAgLy8gICAoXG4gICAgLy8gICAgIHNldFNob3dSZXN1bHRzKHRydWUpXG4gICAgLy8gICApXG5cblxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiB7Y29uc29sZS5sb2cocXVpeil9XG4gICAgICBcbiAgICAgIHtjb25zb2xlLmxvZyhxdWl6UXVlc3Rpb24pfSAqL31cblxuICAgICAgeyFzaG93UmVzdWx0c1xuICAgICAgICA/XG4gICAgICAgIChcblxuICAgICAgICAgIDxRdWVzdGlvblxuICAgICAgICAgICAgY291bnRRdWVzdGlvbj17Y291bnRRdWVzdGlvbn1cbiAgICAgICAgICAgIHF1ZXN0aW9uPXtxdWl6UXVlc3Rpb24ucXVlc3Rpb259XG4gICAgICAgICAgICBhbnN3ZXJzPXtxdWl6UXVlc3Rpb24uYW5zd2Vyc31cbiAgICAgICAgICAgIC8vIGNvcnJlY3RfYW5zd2Vycz17cXVpelF1ZXN0aW9uW2NvdW50UXVlc3Rpb25dLmNvcnJlY3RfYW5zd2Vyc31cbiAgICAgICAgICAgIG5leHRRdWVzdGlvbj17aGFuZGxlTmV4dFF1ZXN0fVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgKVxuICAgICAgICA6XG4gICAgICAgIChcblxuICAgICAgICAgIDxSZXN1bHRzIC8+XG5cbiAgICAgICAgKVxuICAgICAgfVxuXG5cblxuXG4gICAgICA8ZGl2ID5cblxuXG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG5cblxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9xdWl6YXBpLmlvL2FwaS92MS9xdWVzdGlvbnMnLCB7XG5cblxuICAgIGhlYWRlcnM6IHsgJ1gtQXBpLUtleSc6IHByb2Nlc3MuZW52LnRva2VuQVBJIH0sXG5cblxuICB9KTtcblxuICBjb25zdCBuZXdRdWl6ID0gZGF0YS5tYXAocXVpeiA9PiB7XG5cbiAgICByZXR1cm4ge1xuXG4gICAgICBpZDogcXVpei5pZCxcbiAgICAgIHF1ZXN0aW9uOiBxdWl6LnF1ZXN0aW9uLFxuICAgICAgYW5zd2VyczogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgcXVlc3Q6IHF1aXouYW5zd2Vycy5hbnN3ZXJfYSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgIHF1ZXN0OiBxdWl6LmFuc3dlcnMuYW5zd2VyX2IsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMyxcbiAgICAgICAgICBxdWVzdDogcXVpei5hbnN3ZXJzLmFuc3dlcl9jLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgcXVlc3Q6IHF1aXouYW5zd2Vycy5hbnN3ZXJfZCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA1LFxuICAgICAgICAgIHF1ZXN0OiBxdWl6LmFuc3dlcnMuYW5zd2VyX2UsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogNixcbiAgICAgICAgICBxdWVzdDogcXVpei5hbnN3ZXJzLmFuc3dlcl9mLFxuICAgICAgICB9LFxuICAgICAgXS5maWx0ZXIoYW5zd2VyID0+IGFuc3dlci5xdWVzdCAhPT0gbnVsbCksXG4gICAgICBjb3JyZWN0X2Fuc3dlcnM6IHF1aXouY29ycmVjdF9hbnN3ZXJzLFxuICAgICAgbXVsdGlwbGVfY29ycmVjdF9hbnN3ZXJzOiBxdWl6Lm11bHRpcGxlX2NvcnJlY3RfYW5zd2VycyxcbiAgICAgIGNhdGVnb3J5OiBxdWl6LmNhdGVnb3J5LFxuXG4gICAgfVxuICB9KTtcblxuXG5cbiAgY29uc3QgcXVpeiA9IG5ld1F1aXo7XG5cbiAgcmV0dXJuIHsgcHJvcHM6IHsgcXVpeiB9IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBRdWl6OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/quiz/index.js\n");

/***/ })

})