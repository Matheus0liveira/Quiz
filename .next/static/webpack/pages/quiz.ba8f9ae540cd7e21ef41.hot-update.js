webpackHotUpdate_N_E("pages/quiz",{

/***/ "./src/pages/quiz/index.js":
/*!*********************************!*\
  !*** ./src/pages/quiz/index.js ***!
  \*********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_useUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/useUser */ \"./src/utils/useUser.js\");\n/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Question */ \"./src/components/Question/index.js\");\n/* harmony import */ var _components_Results__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Results */ \"./src/components/Results/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/media/matheus-oliveira/Data/Projects/ReactJs/quiz/src/pages/quiz/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Quiz = function Quiz(_ref) {\n  _s();\n\n  var quiz = _ref.quiz;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([{\n    question: '',\n    answers: {\n      answer_a_correct: \"\",\n      answer_b: \"\",\n      answer_c: \"\",\n      answer_d: \"\",\n      answer_e: \"\",\n      answer_f: \"\"\n    },\n    correct_answers: {\n      answer_a: \"\",\n      answer_b: \"\",\n      answer_c: \"\",\n      answer_d: \"\",\n      answer_e: \"\",\n      answer_f: \"\"\n    }\n  }]),\n      quizQuestion = _useState[0],\n      setQuizQuestion = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      countQuestion = _useState2[0],\n      setCountQuestion = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      showResults = _useState3[0],\n      setShowResults = _useState3[1];\n\n  var _useUSer = Object(_utils_useUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n      user = _useUSer.user;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (!user.name) {\n      return next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/home');\n    }\n\n    ;\n  }, [user]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var newQuiz = {\n      question: quiz[countQuestion].question,\n      answers: quiz[countQuestion].answers,\n      correct_answers: quiz[countQuestion].correct_answers\n    };\n    setQuizQuestion(newQuiz);\n    setCountQuestion(function (prevState) {\n      return prevState + 1;\n    });\n  }, []);\n\n  var handleNextQuest = function handleNextQuest() {\n    if (countQuestion < user.dificulty) {\n      var newQuiz = {\n        question: quiz[countQuestion].question,\n        answers: quiz[countQuestion].answers,\n        correct_answers: quiz[countQuestion].correct_answers\n      };\n      setCountQuestion(function (prevState) {\n        return prevState + 1;\n      });\n      setQuizQuestion(newQuiz);\n    }\n\n    ;\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !showResults ? __jsx(_components_Question__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    countQuestion: countQuestion,\n    question: quizQuestion.question,\n    answers: quizQuestion.answers // correct_answers={quizQuestion[countQuestion].correct_answers}\n    ,\n    nextQuestion: handleNextQuest,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 11\n    }\n  }) : __jsx(_components_Results__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 11\n    }\n  }), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Quiz, \"bhT3RFCN0oquYCvRdmg02g8vu3s=\", false, function () {\n  return [_utils_useUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c = Quiz;\n;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quiz);\n\nvar _c;\n\n$RefreshReg$(_c, \"Quiz\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3F1aXovaW5kZXguanM/OTk1NyJdLCJuYW1lcyI6WyJRdWl6IiwicXVpeiIsInVzZVN0YXRlIiwicXVlc3Rpb24iLCJhbnN3ZXJzIiwiYW5zd2VyX2FfY29ycmVjdCIsImFuc3dlcl9iIiwiYW5zd2VyX2MiLCJhbnN3ZXJfZCIsImFuc3dlcl9lIiwiYW5zd2VyX2YiLCJjb3JyZWN0X2Fuc3dlcnMiLCJhbnN3ZXJfYSIsInF1aXpRdWVzdGlvbiIsInNldFF1aXpRdWVzdGlvbiIsImNvdW50UXVlc3Rpb24iLCJzZXRDb3VudFF1ZXN0aW9uIiwic2hvd1Jlc3VsdHMiLCJzZXRTaG93UmVzdWx0cyIsInVzZVVTZXIiLCJ1c2VyIiwidXNlRWZmZWN0IiwibmFtZSIsIlJvdXRlciIsInB1c2giLCJuZXdRdWl6IiwicHJldlN0YXRlIiwiaGFuZGxlTmV4dFF1ZXN0IiwiZGlmaWN1bHR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7O0FBSUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxrQkFDZUMsc0RBQVEsQ0FBQyxDQUFDO0FBRWhEQyxZQUFRLEVBQUUsRUFGc0M7QUFHaERDLFdBQU8sRUFBRTtBQUNQQyxzQkFBZ0IsRUFBRSxFQURYO0FBRVBDLGNBQVEsRUFBRSxFQUZIO0FBR1BDLGNBQVEsRUFBRSxFQUhIO0FBSVBDLGNBQVEsRUFBRSxFQUpIO0FBS1BDLGNBQVEsRUFBRSxFQUxIO0FBTVBDLGNBQVEsRUFBRTtBQU5ILEtBSHVDO0FBV2hEQyxtQkFBZSxFQUFFO0FBQ2ZDLGNBQVEsRUFBRSxFQURLO0FBRWZOLGNBQVEsRUFBRSxFQUZLO0FBR2ZDLGNBQVEsRUFBRSxFQUhLO0FBSWZDLGNBQVEsRUFBRSxFQUpLO0FBS2ZDLGNBQVEsRUFBRSxFQUxLO0FBTWZDLGNBQVEsRUFBRTtBQU5LO0FBWCtCLEdBQUQsQ0FBRCxDQUR2QjtBQUFBLE1BQ2xCRyxZQURrQjtBQUFBLE1BQ0pDLGVBREk7O0FBQUEsbUJBc0JpQlosc0RBQVEsQ0FBQyxDQUFELENBdEJ6QjtBQUFBLE1Bc0JsQmEsYUF0QmtCO0FBQUEsTUFzQkhDLGdCQXRCRzs7QUFBQSxtQkF1QmFkLHNEQUFRLENBQUMsS0FBRCxDQXZCckI7QUFBQSxNQXVCbEJlLFdBdkJrQjtBQUFBLE1BdUJMQyxjQXZCSzs7QUFBQSxpQkF5QlJDLDhEQUFPLEVBekJDO0FBQUEsTUF5QmpCQyxJQXpCaUIsWUF5QmpCQSxJQXpCaUI7O0FBMkJ6QkMseURBQVMsQ0FBQyxZQUFNO0FBRWQsUUFBSSxDQUFDRCxJQUFJLENBQUNFLElBQVYsRUFBZ0I7QUFFZCxhQUFPQyxrREFBTSxDQUFDQyxJQUFQLENBQVksT0FBWixDQUFQO0FBRUQ7O0FBQUE7QUFFRixHQVJRLEVBUU4sQ0FBQ0osSUFBRCxDQVJNLENBQVQ7QUFVQUMseURBQVMsQ0FBQyxZQUFNO0FBRWQsUUFBTUksT0FBTyxHQUFHO0FBRWR0QixjQUFRLEVBQUVGLElBQUksQ0FBQ2MsYUFBRCxDQUFKLENBQW9CWixRQUZoQjtBQUdkQyxhQUFPLEVBQUVILElBQUksQ0FBQ2MsYUFBRCxDQUFKLENBQW9CWCxPQUhmO0FBSWRPLHFCQUFlLEVBQUVWLElBQUksQ0FBQ2MsYUFBRCxDQUFKLENBQW9CSjtBQUp2QixLQUFoQjtBQVFBRyxtQkFBZSxDQUFDVyxPQUFELENBQWY7QUFDQVQsb0JBQWdCLENBQUMsVUFBQVUsU0FBUztBQUFBLGFBQUlBLFNBQVMsR0FBRyxDQUFoQjtBQUFBLEtBQVYsQ0FBaEI7QUFJRCxHQWZRLEVBZU4sRUFmTSxDQUFUOztBQW1CQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUIsUUFBSVosYUFBYSxHQUFHSyxJQUFJLENBQUNRLFNBQXpCLEVBQW9DO0FBRWxDLFVBQU1ILE9BQU8sR0FBRztBQUVkdEIsZ0JBQVEsRUFBRUYsSUFBSSxDQUFDYyxhQUFELENBQUosQ0FBb0JaLFFBRmhCO0FBR2RDLGVBQU8sRUFBRUgsSUFBSSxDQUFDYyxhQUFELENBQUosQ0FBb0JYLE9BSGY7QUFJZE8sdUJBQWUsRUFBRVYsSUFBSSxDQUFDYyxhQUFELENBQUosQ0FBb0JKO0FBSnZCLE9BQWhCO0FBU0FLLHNCQUFnQixDQUFDLFVBQUFVLFNBQVM7QUFBQSxlQUFJQSxTQUFTLEdBQUcsQ0FBaEI7QUFBQSxPQUFWLENBQWhCO0FBQ0FaLHFCQUFlLENBQUNXLE9BQUQsQ0FBZjtBQUNEOztBQUFBO0FBRUYsR0FoQkQ7O0FBa0JBLFNBQ0UsbUVBRUcsQ0FBQ1IsV0FBRCxHQUlHLE1BQUMsNERBQUQ7QUFDRSxpQkFBYSxFQUFFRixhQURqQjtBQUVFLFlBQVEsRUFBRUYsWUFBWSxDQUFDVixRQUZ6QjtBQUdFLFdBQU8sRUFBRVUsWUFBWSxDQUFDVCxPQUh4QixDQUlFO0FBSkY7QUFLRSxnQkFBWSxFQUFFdUIsZUFMaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpILEdBZ0JHLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxCTixFQTBCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBMUJGLENBREY7QUFtQ0QsQ0E3R0Q7O0dBQU0zQixJO1VBeUJhbUIsc0Q7OztLQXpCYm5CLEk7QUFzS0w7O0FBRWNBLG1FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3F1aXovaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHVzZVVTZXIgZnJvbSAnLi4vLi4vdXRpbHMvdXNlVXNlcic7XG5cbmltcG9ydCBRdWVzdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL1F1ZXN0aW9uJztcbmltcG9ydCBSZXN1bHRzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUmVzdWx0cyc7XG5cblxuXG5jb25zdCBRdWl6ID0gKHsgcXVpeiB9KSA9PiB7XG4gIGNvbnN0IFtxdWl6UXVlc3Rpb24sIHNldFF1aXpRdWVzdGlvbl0gPSB1c2VTdGF0ZShbe1xuXG4gICAgcXVlc3Rpb246ICcnLFxuICAgIGFuc3dlcnM6IHtcbiAgICAgIGFuc3dlcl9hX2NvcnJlY3Q6IFwiXCIsXG4gICAgICBhbnN3ZXJfYjogXCJcIixcbiAgICAgIGFuc3dlcl9jOiBcIlwiLFxuICAgICAgYW5zd2VyX2Q6IFwiXCIsXG4gICAgICBhbnN3ZXJfZTogXCJcIixcbiAgICAgIGFuc3dlcl9mOiBcIlwiLFxuICAgIH0sXG4gICAgY29ycmVjdF9hbnN3ZXJzOiB7XG4gICAgICBhbnN3ZXJfYTogXCJcIixcbiAgICAgIGFuc3dlcl9iOiBcIlwiLFxuICAgICAgYW5zd2VyX2M6IFwiXCIsXG4gICAgICBhbnN3ZXJfZDogXCJcIixcbiAgICAgIGFuc3dlcl9lOiBcIlwiLFxuICAgICAgYW5zd2VyX2Y6IFwiXCIsXG4gICAgfVxuICB9XSk7XG5cbiAgY29uc3QgW2NvdW50UXVlc3Rpb24sIHNldENvdW50UXVlc3Rpb25dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzaG93UmVzdWx0cywgc2V0U2hvd1Jlc3VsdHNdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlVVNlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICBpZiAoIXVzZXIubmFtZSkge1xuXG4gICAgICByZXR1cm4gUm91dGVyLnB1c2goJy9ob21lJyk7XG5cbiAgICB9O1xuXG4gIH0sIFt1c2VyXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgIGNvbnN0IG5ld1F1aXogPSB7XG5cbiAgICAgIHF1ZXN0aW9uOiBxdWl6W2NvdW50UXVlc3Rpb25dLnF1ZXN0aW9uLFxuICAgICAgYW5zd2VyczogcXVpeltjb3VudFF1ZXN0aW9uXS5hbnN3ZXJzLFxuICAgICAgY29ycmVjdF9hbnN3ZXJzOiBxdWl6W2NvdW50UXVlc3Rpb25dLmNvcnJlY3RfYW5zd2Vyc1xuXG4gICAgfTtcblxuICAgIHNldFF1aXpRdWVzdGlvbihuZXdRdWl6KTtcbiAgICBzZXRDb3VudFF1ZXN0aW9uKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUgKyAxKTtcblxuXG5cbiAgfSwgW10pO1xuXG5cblxuICBjb25zdCBoYW5kbGVOZXh0UXVlc3QgPSAoKSA9PiB7XG4gICAgaWYgKGNvdW50UXVlc3Rpb24gPCB1c2VyLmRpZmljdWx0eSkge1xuXG4gICAgICBjb25zdCBuZXdRdWl6ID0ge1xuXG4gICAgICAgIHF1ZXN0aW9uOiBxdWl6W2NvdW50UXVlc3Rpb25dLnF1ZXN0aW9uLFxuICAgICAgICBhbnN3ZXJzOiBxdWl6W2NvdW50UXVlc3Rpb25dLmFuc3dlcnMsXG4gICAgICAgIGNvcnJlY3RfYW5zd2VyczogcXVpeltjb3VudFF1ZXN0aW9uXS5jb3JyZWN0X2Fuc3dlcnNcblxuICAgICAgfTtcblxuXG4gICAgICBzZXRDb3VudFF1ZXN0aW9uKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUgKyAxKTtcbiAgICAgIHNldFF1aXpRdWVzdGlvbihuZXdRdWl6KTtcbiAgICB9O1xuXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuXG4gICAgICB7IXNob3dSZXN1bHRzXG4gICAgICAgID9cbiAgICAgICAgKFxuXG4gICAgICAgICAgPFF1ZXN0aW9uXG4gICAgICAgICAgICBjb3VudFF1ZXN0aW9uPXtjb3VudFF1ZXN0aW9ufVxuICAgICAgICAgICAgcXVlc3Rpb249e3F1aXpRdWVzdGlvbi5xdWVzdGlvbn1cbiAgICAgICAgICAgIGFuc3dlcnM9e3F1aXpRdWVzdGlvbi5hbnN3ZXJzfVxuICAgICAgICAgICAgLy8gY29ycmVjdF9hbnN3ZXJzPXtxdWl6UXVlc3Rpb25bY291bnRRdWVzdGlvbl0uY29ycmVjdF9hbnN3ZXJzfVxuICAgICAgICAgICAgbmV4dFF1ZXN0aW9uPXtoYW5kbGVOZXh0UXVlc3R9XG4gICAgICAgICAgLz5cblxuICAgICAgICApXG4gICAgICAgIDpcbiAgICAgICAgKFxuXG4gICAgICAgICAgPFJlc3VsdHMgLz5cblxuICAgICAgICApXG4gICAgICB9XG5cblxuXG5cbiAgICAgIDxkaXYgPlxuXG5cblxuICAgICAgPC9kaXY+XG5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcblxuXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL3F1aXphcGkuaW8vYXBpL3YxL3F1ZXN0aW9ucycsIHtcblxuXG4gICAgaGVhZGVyczogeyAnWC1BcGktS2V5JzogcHJvY2Vzcy5lbnYudG9rZW5BUEkgfSxcblxuXG4gIH0pO1xuXG4gIGNvbnN0IG5ld1F1aXogPSBkYXRhLm1hcChxdWl6ID0+IHtcblxuICAgIHJldHVybiB7XG5cbiAgICAgIGlkOiBxdWl6LmlkLFxuICAgICAgcXVlc3Rpb246IHF1aXoucXVlc3Rpb24sXG4gICAgICBhbnN3ZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMSxcbiAgICAgICAgICBxdWVzdDogcXVpei5hbnN3ZXJzLmFuc3dlcl9hLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgcXVlc3Q6IHF1aXouYW5zd2Vycy5hbnN3ZXJfYixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgIHF1ZXN0OiBxdWl6LmFuc3dlcnMuYW5zd2VyX2MsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogNCxcbiAgICAgICAgICBxdWVzdDogcXVpei5hbnN3ZXJzLmFuc3dlcl9kLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDUsXG4gICAgICAgICAgcXVlc3Q6IHF1aXouYW5zd2Vycy5hbnN3ZXJfZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA2LFxuICAgICAgICAgIHF1ZXN0OiBxdWl6LmFuc3dlcnMuYW5zd2VyX2YsXG4gICAgICAgIH0sXG4gICAgICBdLmZpbHRlcihhbnN3ZXIgPT4gYW5zd2VyLnF1ZXN0ICE9PSBudWxsKSxcbiAgICAgIGNvcnJlY3RfYW5zd2VyczogcXVpei5jb3JyZWN0X2Fuc3dlcnMsXG4gICAgICBtdWx0aXBsZV9jb3JyZWN0X2Fuc3dlcnM6IHF1aXoubXVsdGlwbGVfY29ycmVjdF9hbnN3ZXJzLFxuICAgICAgY2F0ZWdvcnk6IHF1aXouY2F0ZWdvcnksXG5cbiAgICB9XG4gIH0pO1xuXG5cblxuICBjb25zdCBxdWl6ID0gbmV3UXVpejtcblxuICByZXR1cm4geyBwcm9wczogeyBxdWl6IH0gfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFF1aXo7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/quiz/index.js\n");

/***/ })

})