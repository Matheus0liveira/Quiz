webpackHotUpdate_N_E("pages/quiz",{

/***/ "./src/pages/quiz/index.js":
/*!*********************************!*\
  !*** ./src/pages/quiz/index.js ***!
  \*********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_useUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/useUser */ \"./src/utils/useUser.js\");\n/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Question */ \"./src/components/Question/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/media/matheus-oliveira/Data/Projects/ReactJs/quiz/src/pages/quiz/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Quiz = function Quiz(_ref) {\n  _s();\n\n  var quiz = _ref.quiz;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([{\n    question: '',\n    answers: {\n      answer_a: \"\",\n      answer_b: \"\",\n      answer_c: \"\",\n      answer_d: \"\",\n      answer_e: \"\",\n      answer_f: \"\"\n    },\n    correct_answers: {\n      answer_a: \"\",\n      answer_b: \"\",\n      answer_c: \"\",\n      answer_d: \"\",\n      answer_e: \"\",\n      answer_f: \"\"\n    }\n  }]),\n      quizQuestion = _useState[0],\n      setQuizQuestion = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      countQuestion = _useState2[0],\n      setCountQuestion = _useState2[1];\n\n  var _useUSer = Object(_utils_useUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n      user = _useUSer.user;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (!user.name) {\n      return next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/home');\n    }\n\n    ;\n    var newQuiz = quiz.map(function (quiz, index) {\n      if (index < user.dificulty) {\n        return {\n          question: quiz.question,\n          answers: quiz.answers,\n          correct_answers: quiz.correct_answers\n        };\n      }\n\n      ;\n    }).filter(function (quiz) {\n      return quiz !== undefined;\n    });\n    return setQuizQuestion(newQuiz);\n  }, [user]);\n\n  var handleNextQuest = function handleNextQuest() {\n    console.log('Clicked');\n    countQuestion < quizQuestion.length - 1 && setCountQuestion(function (prevState) {\n      return prevState + 1;\n    });\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, console.log(quizQuestion), __jsx(_components_Question__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    question: quizQuestion[countQuestion].question,\n    answers: quizQuestion[countQuestion].answers,\n    correct_answers: quizQuestion[countQuestion].correct_answers,\n    nextQuestion: handleNextQuest,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Quiz, \"WzE7MxtljJKcx3U9eqqRABGoLfc=\", false, function () {\n  return [_utils_useUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c = Quiz;\n;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quiz);\n\nvar _c;\n\n$RefreshReg$(_c, \"Quiz\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3F1aXovaW5kZXguanM/OTk1NyJdLCJuYW1lcyI6WyJRdWl6IiwicXVpeiIsInVzZVN0YXRlIiwicXVlc3Rpb24iLCJhbnN3ZXJzIiwiYW5zd2VyX2EiLCJhbnN3ZXJfYiIsImFuc3dlcl9jIiwiYW5zd2VyX2QiLCJhbnN3ZXJfZSIsImFuc3dlcl9mIiwiY29ycmVjdF9hbnN3ZXJzIiwicXVpelF1ZXN0aW9uIiwic2V0UXVpelF1ZXN0aW9uIiwiY291bnRRdWVzdGlvbiIsInNldENvdW50UXVlc3Rpb24iLCJ1c2VVU2VyIiwidXNlciIsInVzZUVmZmVjdCIsIm5hbWUiLCJSb3V0ZXIiLCJwdXNoIiwibmV3UXVpeiIsIm1hcCIsImluZGV4IiwiZGlmaWN1bHR5IiwiZmlsdGVyIiwidW5kZWZpbmVkIiwiaGFuZGxlTmV4dFF1ZXN0IiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsInByZXZTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUVBOztBQUlBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsa0JBQ2VDLHNEQUFRLENBQUMsQ0FBQztBQUVoREMsWUFBUSxFQUFFLEVBRnNDO0FBR2hEQyxXQUFPLEVBQUU7QUFDUEMsY0FBUSxFQUFFLEVBREg7QUFFUEMsY0FBUSxFQUFFLEVBRkg7QUFHUEMsY0FBUSxFQUFFLEVBSEg7QUFJUEMsY0FBUSxFQUFFLEVBSkg7QUFLUEMsY0FBUSxFQUFFLEVBTEg7QUFNUEMsY0FBUSxFQUFFO0FBTkgsS0FIdUM7QUFXaERDLG1CQUFlLEVBQUU7QUFDZk4sY0FBUSxFQUFFLEVBREs7QUFFZkMsY0FBUSxFQUFFLEVBRks7QUFHZkMsY0FBUSxFQUFFLEVBSEs7QUFJZkMsY0FBUSxFQUFFLEVBSks7QUFLZkMsY0FBUSxFQUFFLEVBTEs7QUFNZkMsY0FBUSxFQUFFO0FBTks7QUFYK0IsR0FBRCxDQUFELENBRHZCO0FBQUEsTUFDbEJFLFlBRGtCO0FBQUEsTUFDSkMsZUFESTs7QUFBQSxtQkFzQmlCWCxzREFBUSxDQUFDLENBQUQsQ0F0QnpCO0FBQUEsTUFzQmxCWSxhQXRCa0I7QUFBQSxNQXNCSEMsZ0JBdEJHOztBQUFBLGlCQXdCUkMsOERBQU8sRUF4QkM7QUFBQSxNQXdCakJDLElBeEJpQixZQXdCakJBLElBeEJpQjs7QUEwQnpCQyx5REFBUyxDQUFDLFlBQU07QUFFZCxRQUFJLENBQUNELElBQUksQ0FBQ0UsSUFBVixFQUFnQjtBQUVkLGFBQU9DLGtEQUFNLENBQUNDLElBQVAsQ0FBWSxPQUFaLENBQVA7QUFFRDs7QUFBQTtBQUVELFFBQU1DLE9BQU8sR0FBR3JCLElBQUksQ0FBQ3NCLEdBQUwsQ0FBUyxVQUFDdEIsSUFBRCxFQUFPdUIsS0FBUCxFQUFpQjtBQUV4QyxVQUFJQSxLQUFLLEdBQUdQLElBQUksQ0FBQ1EsU0FBakIsRUFBNEI7QUFFMUIsZUFBTztBQUVMdEIsa0JBQVEsRUFBRUYsSUFBSSxDQUFDRSxRQUZWO0FBR0xDLGlCQUFPLEVBQUVILElBQUksQ0FBQ0csT0FIVDtBQUlMTyx5QkFBZSxFQUFFVixJQUFJLENBQUNVO0FBSmpCLFNBQVA7QUFPRDs7QUFBQTtBQUVGLEtBYmUsRUFhYmUsTUFiYSxDQWFOLFVBQUF6QixJQUFJO0FBQUEsYUFBSUEsSUFBSSxLQUFLMEIsU0FBYjtBQUFBLEtBYkUsQ0FBaEI7QUFlQSxXQUFPZCxlQUFlLENBQUNTLE9BQUQsQ0FBdEI7QUFHRCxHQTFCUSxFQTBCTixDQUFDTCxJQUFELENBMUJNLENBQVQ7O0FBNEJBLE1BQU1XLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUc1QkMsV0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUtBaEIsaUJBQWEsR0FBR0YsWUFBWSxDQUFDbUIsTUFBYixHQUFzQixDQUF0QyxJQUVJaEIsZ0JBQWdCLENBQUMsVUFBQWlCLFNBQVM7QUFBQSxhQUFJQSxTQUFTLEdBQUcsQ0FBaEI7QUFBQSxLQUFWLENBRnBCO0FBSUQsR0FaRDs7QUFjQSxTQUNFLG1FQUNHSCxPQUFPLENBQUNDLEdBQVIsQ0FBWWxCLFlBQVosQ0FESCxFQUlFLE1BQUMsNERBQUQ7QUFFRSxZQUFRLEVBQUVBLFlBQVksQ0FBQ0UsYUFBRCxDQUFaLENBQTRCWCxRQUZ4QztBQUdFLFdBQU8sRUFBRVMsWUFBWSxDQUFDRSxhQUFELENBQVosQ0FBNEJWLE9BSHZDO0FBSUUsbUJBQWUsRUFBRVEsWUFBWSxDQUFDRSxhQUFELENBQVosQ0FBNEJILGVBSi9DO0FBS0UsZ0JBQVksRUFBRWlCLGVBTGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQWNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkRixDQURGO0FBK0JELENBbkdEOztHQUFNNUIsSTtVQXdCYWdCLHNEOzs7S0F4QmJoQixJO0FBb0hMOztBQUVjQSxtRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9xdWl6L2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB1c2VVU2VyIGZyb20gJy4uLy4uL3V0aWxzL3VzZVVzZXInO1xuXG5pbXBvcnQgUXVlc3Rpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9RdWVzdGlvbic7XG5cblxuXG5jb25zdCBRdWl6ID0gKHsgcXVpeiB9KSA9PiB7XG4gIGNvbnN0IFtxdWl6UXVlc3Rpb24sIHNldFF1aXpRdWVzdGlvbl0gPSB1c2VTdGF0ZShbe1xuXG4gICAgcXVlc3Rpb246ICcnLFxuICAgIGFuc3dlcnM6IHtcbiAgICAgIGFuc3dlcl9hOiBcIlwiLFxuICAgICAgYW5zd2VyX2I6IFwiXCIsXG4gICAgICBhbnN3ZXJfYzogXCJcIixcbiAgICAgIGFuc3dlcl9kOiBcIlwiLFxuICAgICAgYW5zd2VyX2U6IFwiXCIsXG4gICAgICBhbnN3ZXJfZjogXCJcIixcbiAgICB9LFxuICAgIGNvcnJlY3RfYW5zd2Vyczoge1xuICAgICAgYW5zd2VyX2E6IFwiXCIsXG4gICAgICBhbnN3ZXJfYjogXCJcIixcbiAgICAgIGFuc3dlcl9jOiBcIlwiLFxuICAgICAgYW5zd2VyX2Q6IFwiXCIsXG4gICAgICBhbnN3ZXJfZTogXCJcIixcbiAgICAgIGFuc3dlcl9mOiBcIlwiLFxuICAgIH1cbiAgfV0pO1xuXG4gIGNvbnN0IFtjb3VudFF1ZXN0aW9uLCBzZXRDb3VudFF1ZXN0aW9uXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlVVNlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICBpZiAoIXVzZXIubmFtZSkge1xuXG4gICAgICByZXR1cm4gUm91dGVyLnB1c2goJy9ob21lJyk7XG5cbiAgICB9O1xuXG4gICAgY29uc3QgbmV3UXVpeiA9IHF1aXoubWFwKChxdWl6LCBpbmRleCkgPT4ge1xuXG4gICAgICBpZiAoaW5kZXggPCB1c2VyLmRpZmljdWx0eSkge1xuXG4gICAgICAgIHJldHVybiB7XG5cbiAgICAgICAgICBxdWVzdGlvbjogcXVpei5xdWVzdGlvbixcbiAgICAgICAgICBhbnN3ZXJzOiBxdWl6LmFuc3dlcnMsXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXJzOiBxdWl6LmNvcnJlY3RfYW5zd2Vyc1xuXG4gICAgICAgIH07XG4gICAgICB9O1xuXG4gICAgfSkuZmlsdGVyKHF1aXogPT4gcXVpeiAhPT0gdW5kZWZpbmVkKTtcblxuICAgIHJldHVybiBzZXRRdWl6UXVlc3Rpb24obmV3UXVpeik7XG5cblxuICB9LCBbdXNlcl0pO1xuXG4gIGNvbnN0IGhhbmRsZU5leHRRdWVzdCA9ICgpID0+IHtcblxuXG4gICAgY29uc29sZS5sb2coJ0NsaWNrZWQnKTtcblxuXG5cblxuICAgIGNvdW50UXVlc3Rpb24gPCBxdWl6UXVlc3Rpb24ubGVuZ3RoIC0gMSAmJlxuICAgICAgKFxuICAgICAgICBzZXRDb3VudFF1ZXN0aW9uKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUgKyAxKVxuICAgICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7Y29uc29sZS5sb2cocXVpelF1ZXN0aW9uKX1cbiAgICAgIHsvKiB7Y29uc29sZS5sb2cocXVpeil9ICovfVxuXG4gICAgICA8UXVlc3Rpb25cblxuICAgICAgICBxdWVzdGlvbj17cXVpelF1ZXN0aW9uW2NvdW50UXVlc3Rpb25dLnF1ZXN0aW9ufVxuICAgICAgICBhbnN3ZXJzPXtxdWl6UXVlc3Rpb25bY291bnRRdWVzdGlvbl0uYW5zd2Vyc31cbiAgICAgICAgY29ycmVjdF9hbnN3ZXJzPXtxdWl6UXVlc3Rpb25bY291bnRRdWVzdGlvbl0uY29ycmVjdF9hbnN3ZXJzfVxuICAgICAgICBuZXh0UXVlc3Rpb249e2hhbmRsZU5leHRRdWVzdH1cbiAgICAgIC8+XG5cblxuXG4gICAgICA8ZGl2ID5cblxuXG4gICAgICAgIHsvKiA8aDE+e3F1aXpbMV0ucXVlc3Rpb259PC9oMT5cbiAgICAgICAgPHA+e3F1aXpbMV0uYW5zd2Vycy5hbnN3ZXJfYX08L3A+XG4gICAgICAgIDxwPntxdWl6WzFdLmFuc3dlcnMuYW5zd2VyX2J9PC9wPlxuICAgICAgICA8cD57cXVpelsxXS5hbnN3ZXJzLmFuc3dlcl9jfTwvcD5cbiAgICAgICAgPHA+e3F1aXpbMV0uYW5zd2Vycy5hbnN3ZXJfZH08L3A+XG4gICAgICAgIDxwPntxdWl6WzFdLmFuc3dlcnMuYW5zd2VyX2V9PC9wPlxuICAgICAgICA8cD57cXVpelsxXS5hbnN3ZXJzLmFuc3dlcl9mfTwvcD4gKi99XG5cblxuICAgICAgPC9kaXY+XG5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcblxuXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9xdWl6YXBpLmlvL2FwaS92MS9xdWVzdGlvbnMnLCB7XG5cblxuICAgIGhlYWRlcnM6IHsgJ1gtQXBpLUtleSc6IHByb2Nlc3MuZW52LnRva2VuQVBJIH0sXG5cblxuXG4gIH0pO1xuXG4gIGNvbnN0IHF1aXogPSByZXN1bHQuZGF0YTtcblxuICByZXR1cm4geyBwcm9wczogeyBxdWl6IH0gfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFF1aXo7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/quiz/index.js\n");

/***/ })

})