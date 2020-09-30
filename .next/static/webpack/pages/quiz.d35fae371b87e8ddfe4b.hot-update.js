webpackHotUpdate_N_E("pages/quiz",{

/***/ "./src/pages/quiz/index.js":
/*!*********************************!*\
  !*** ./src/pages/quiz/index.js ***!
  \*********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_useUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/useUser */ \"./src/utils/useUser.js\");\n/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Question */ \"./src/components/Question/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/media/matheus-oliveira/Data/Projects/ReactJs/quiz/src/pages/quiz/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Quiz = function Quiz(_ref) {\n  _s();\n\n  var quiz = _ref.quiz;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([{\n    question: '',\n    answers: {\n      answer_a: \"\",\n      answer_b: \"\",\n      answer_c: \"\",\n      answer_d: \"\",\n      answer_e: \"\",\n      answer_f: \"\"\n    },\n    correct_answers: {\n      answer_a: \"\",\n      answer_b: \"\",\n      answer_c: \"\",\n      answer_d: \"\",\n      answer_e: \"\",\n      answer_f: \"\"\n    }\n  }]),\n      quizQuestion = _useState[0],\n      setQuizQuestion = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      countQuestion = _useState2[0],\n      setCountQuestion = _useState2[1];\n\n  var _useUSer = Object(_utils_useUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n      user = _useUSer.user;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (!user.name) {\n      return next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/home');\n    }\n\n    ;\n    var newQuiz = quiz.map(function (quiz, index) {\n      if (index < user.dificulty) {\n        return {\n          question: quiz.question,\n          answers: quiz.answers,\n          correct_answers: quiz.correct_answers\n        };\n      }\n\n      ;\n    }).filter(function (quiz) {\n      return quiz !== undefined;\n    });\n    return setQuizQuestion(newQuiz);\n  }, [user]);\n\n  var handleNextQuest = function handleNextQuest() {\n    console.log('Clicked');\n    var maxQuestions = quizQuestion.length; // if (countQuestion <= maxQuestions) {\n    //   console.log(maxQuestions);\n    //   console.log(countQuestion);\n    //   return setCountQuestion(prevState => prevState + 1)\n    // };\n\n    if (countQuestion <= 4) {\n      return setCountQuestion(function (prevState) {\n        return prevState + 1;\n      });\n    }\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Question__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    question: quizQuestion[countQuestion].question,\n    answers: quizQuestion[countQuestion].answers,\n    correct_answers: quizQuestion[countQuestion].correct_answers,\n    nextQuestion: handleNextQuest,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Quiz, \"WzE7MxtljJKcx3U9eqqRABGoLfc=\", false, function () {\n  return [_utils_useUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c = Quiz;\n;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quiz);\n\nvar _c;\n\n$RefreshReg$(_c, \"Quiz\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3F1aXovaW5kZXguanM/OTk1NyJdLCJuYW1lcyI6WyJRdWl6IiwicXVpeiIsInVzZVN0YXRlIiwicXVlc3Rpb24iLCJhbnN3ZXJzIiwiYW5zd2VyX2EiLCJhbnN3ZXJfYiIsImFuc3dlcl9jIiwiYW5zd2VyX2QiLCJhbnN3ZXJfZSIsImFuc3dlcl9mIiwiY29ycmVjdF9hbnN3ZXJzIiwicXVpelF1ZXN0aW9uIiwic2V0UXVpelF1ZXN0aW9uIiwiY291bnRRdWVzdGlvbiIsInNldENvdW50UXVlc3Rpb24iLCJ1c2VVU2VyIiwidXNlciIsInVzZUVmZmVjdCIsIm5hbWUiLCJSb3V0ZXIiLCJwdXNoIiwibmV3UXVpeiIsIm1hcCIsImluZGV4IiwiZGlmaWN1bHR5IiwiZmlsdGVyIiwidW5kZWZpbmVkIiwiaGFuZGxlTmV4dFF1ZXN0IiwiY29uc29sZSIsImxvZyIsIm1heFF1ZXN0aW9ucyIsImxlbmd0aCIsInByZXZTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUVBOztBQUlBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsa0JBQ2VDLHNEQUFRLENBQUMsQ0FBQztBQUVoREMsWUFBUSxFQUFFLEVBRnNDO0FBR2hEQyxXQUFPLEVBQUU7QUFDUEMsY0FBUSxFQUFFLEVBREg7QUFFUEMsY0FBUSxFQUFFLEVBRkg7QUFHUEMsY0FBUSxFQUFFLEVBSEg7QUFJUEMsY0FBUSxFQUFFLEVBSkg7QUFLUEMsY0FBUSxFQUFFLEVBTEg7QUFNUEMsY0FBUSxFQUFFO0FBTkgsS0FIdUM7QUFXaERDLG1CQUFlLEVBQUU7QUFDZk4sY0FBUSxFQUFFLEVBREs7QUFFZkMsY0FBUSxFQUFFLEVBRks7QUFHZkMsY0FBUSxFQUFFLEVBSEs7QUFJZkMsY0FBUSxFQUFFLEVBSks7QUFLZkMsY0FBUSxFQUFFLEVBTEs7QUFNZkMsY0FBUSxFQUFFO0FBTks7QUFYK0IsR0FBRCxDQUFELENBRHZCO0FBQUEsTUFDbEJFLFlBRGtCO0FBQUEsTUFDSkMsZUFESTs7QUFBQSxtQkFzQmlCWCxzREFBUSxDQUFDLENBQUQsQ0F0QnpCO0FBQUEsTUFzQmxCWSxhQXRCa0I7QUFBQSxNQXNCSEMsZ0JBdEJHOztBQUFBLGlCQXdCUkMsOERBQU8sRUF4QkM7QUFBQSxNQXdCakJDLElBeEJpQixZQXdCakJBLElBeEJpQjs7QUEwQnpCQyx5REFBUyxDQUFDLFlBQU07QUFFZCxRQUFJLENBQUNELElBQUksQ0FBQ0UsSUFBVixFQUFnQjtBQUVkLGFBQU9DLGtEQUFNLENBQUNDLElBQVAsQ0FBWSxPQUFaLENBQVA7QUFFRDs7QUFBQTtBQUVELFFBQU1DLE9BQU8sR0FBR3JCLElBQUksQ0FBQ3NCLEdBQUwsQ0FBUyxVQUFDdEIsSUFBRCxFQUFPdUIsS0FBUCxFQUFpQjtBQUV4QyxVQUFJQSxLQUFLLEdBQUdQLElBQUksQ0FBQ1EsU0FBakIsRUFBNEI7QUFFMUIsZUFBTztBQUVMdEIsa0JBQVEsRUFBRUYsSUFBSSxDQUFDRSxRQUZWO0FBR0xDLGlCQUFPLEVBQUVILElBQUksQ0FBQ0csT0FIVDtBQUlMTyx5QkFBZSxFQUFFVixJQUFJLENBQUNVO0FBSmpCLFNBQVA7QUFPRDs7QUFBQTtBQUVGLEtBYmUsRUFhYmUsTUFiYSxDQWFOLFVBQUF6QixJQUFJO0FBQUEsYUFBSUEsSUFBSSxLQUFLMEIsU0FBYjtBQUFBLEtBYkUsQ0FBaEI7QUFlQSxXQUFPZCxlQUFlLENBQUNTLE9BQUQsQ0FBdEI7QUFHRCxHQTFCUSxFQTBCTixDQUFDTCxJQUFELENBMUJNLENBQVQ7O0FBNEJBLE1BQU1XLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUc1QkMsV0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUVBLFFBQU1DLFlBQVksR0FBR25CLFlBQVksQ0FBQ29CLE1BQWxDLENBTDRCLENBUTVCO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBSWxCLGFBQWEsSUFBSSxDQUFyQixFQUF3QjtBQUN0QixhQUFPQyxnQkFBZ0IsQ0FBQyxVQUFBa0IsU0FBUztBQUFBLGVBQUlBLFNBQVMsR0FBRyxDQUFoQjtBQUFBLE9BQVYsQ0FBdkI7QUFDRDtBQUVGLEdBbkJEOztBQXFCQSxTQUNFLG1FQUlFLE1BQUMsNERBQUQ7QUFFRSxZQUFRLEVBQUVyQixZQUFZLENBQUNFLGFBQUQsQ0FBWixDQUE0QlgsUUFGeEM7QUFHRSxXQUFPLEVBQUVTLFlBQVksQ0FBQ0UsYUFBRCxDQUFaLENBQTRCVixPQUh2QztBQUlFLG1CQUFlLEVBQUVRLFlBQVksQ0FBQ0UsYUFBRCxDQUFaLENBQTRCSCxlQUovQztBQUtFLGdCQUFZLEVBQUVpQixlQUxoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFjRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEYsQ0FERjtBQStCRCxDQTFHRDs7R0FBTTVCLEk7VUF3QmFnQixzRDs7O0tBeEJiaEIsSTtBQTJITDs7QUFFY0EsbUVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvcXVpei9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgdXNlVVNlciBmcm9tICcuLi8uLi91dGlscy91c2VVc2VyJztcblxuaW1wb3J0IFF1ZXN0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUXVlc3Rpb24nO1xuXG5cblxuY29uc3QgUXVpeiA9ICh7IHF1aXogfSkgPT4ge1xuICBjb25zdCBbcXVpelF1ZXN0aW9uLCBzZXRRdWl6UXVlc3Rpb25dID0gdXNlU3RhdGUoW3tcblxuICAgIHF1ZXN0aW9uOiAnJyxcbiAgICBhbnN3ZXJzOiB7XG4gICAgICBhbnN3ZXJfYTogXCJcIixcbiAgICAgIGFuc3dlcl9iOiBcIlwiLFxuICAgICAgYW5zd2VyX2M6IFwiXCIsXG4gICAgICBhbnN3ZXJfZDogXCJcIixcbiAgICAgIGFuc3dlcl9lOiBcIlwiLFxuICAgICAgYW5zd2VyX2Y6IFwiXCIsXG4gICAgfSxcbiAgICBjb3JyZWN0X2Fuc3dlcnM6IHtcbiAgICAgIGFuc3dlcl9hOiBcIlwiLFxuICAgICAgYW5zd2VyX2I6IFwiXCIsXG4gICAgICBhbnN3ZXJfYzogXCJcIixcbiAgICAgIGFuc3dlcl9kOiBcIlwiLFxuICAgICAgYW5zd2VyX2U6IFwiXCIsXG4gICAgICBhbnN3ZXJfZjogXCJcIixcbiAgICB9XG4gIH1dKTtcblxuICBjb25zdCBbY291bnRRdWVzdGlvbiwgc2V0Q291bnRRdWVzdGlvbl0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCB7IHVzZXIgfSA9IHVzZVVTZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgaWYgKCF1c2VyLm5hbWUpIHtcblxuICAgICAgcmV0dXJuIFJvdXRlci5wdXNoKCcvaG9tZScpO1xuXG4gICAgfTtcblxuICAgIGNvbnN0IG5ld1F1aXogPSBxdWl6Lm1hcCgocXVpeiwgaW5kZXgpID0+IHtcblxuICAgICAgaWYgKGluZGV4IDwgdXNlci5kaWZpY3VsdHkpIHtcblxuICAgICAgICByZXR1cm4ge1xuXG4gICAgICAgICAgcXVlc3Rpb246IHF1aXoucXVlc3Rpb24sXG4gICAgICAgICAgYW5zd2VyczogcXVpei5hbnN3ZXJzLFxuICAgICAgICAgIGNvcnJlY3RfYW5zd2VyczogcXVpei5jb3JyZWN0X2Fuc3dlcnNcblxuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgIH0pLmZpbHRlcihxdWl6ID0+IHF1aXogIT09IHVuZGVmaW5lZCk7XG5cbiAgICByZXR1cm4gc2V0UXVpelF1ZXN0aW9uKG5ld1F1aXopO1xuXG5cbiAgfSwgW3VzZXJdKTtcblxuICBjb25zdCBoYW5kbGVOZXh0UXVlc3QgPSAoKSA9PiB7XG5cblxuICAgIGNvbnNvbGUubG9nKCdDbGlja2VkJyk7XG5cbiAgICBjb25zdCBtYXhRdWVzdGlvbnMgPSBxdWl6UXVlc3Rpb24ubGVuZ3RoO1xuXG5cbiAgICAvLyBpZiAoY291bnRRdWVzdGlvbiA8PSBtYXhRdWVzdGlvbnMpIHtcblxuICAgIC8vICAgY29uc29sZS5sb2cobWF4UXVlc3Rpb25zKTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKGNvdW50UXVlc3Rpb24pO1xuICAgIC8vICAgcmV0dXJuIHNldENvdW50UXVlc3Rpb24ocHJldlN0YXRlID0+IHByZXZTdGF0ZSArIDEpXG4gICAgLy8gfTtcblxuICAgIGlmIChjb3VudFF1ZXN0aW9uIDw9IDQpIHtcbiAgICAgIHJldHVybiBzZXRDb3VudFF1ZXN0aW9uKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUgKyAxKTtcbiAgICB9XG5cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7Lyoge2NvbnNvbGUubG9nKHF1aXpRdWVzdGlvbil9ICovfVxuICAgICAgey8qIHtjb25zb2xlLmxvZyhxdWl6KX0gKi99XG5cbiAgICAgIDxRdWVzdGlvblxuXG4gICAgICAgIHF1ZXN0aW9uPXtxdWl6UXVlc3Rpb25bY291bnRRdWVzdGlvbl0ucXVlc3Rpb259XG4gICAgICAgIGFuc3dlcnM9e3F1aXpRdWVzdGlvbltjb3VudFF1ZXN0aW9uXS5hbnN3ZXJzfVxuICAgICAgICBjb3JyZWN0X2Fuc3dlcnM9e3F1aXpRdWVzdGlvbltjb3VudFF1ZXN0aW9uXS5jb3JyZWN0X2Fuc3dlcnN9XG4gICAgICAgIG5leHRRdWVzdGlvbj17aGFuZGxlTmV4dFF1ZXN0fVxuICAgICAgLz5cblxuXG5cbiAgICAgIDxkaXYgPlxuXG5cbiAgICAgICAgey8qIDxoMT57cXVpelsxXS5xdWVzdGlvbn08L2gxPlxuICAgICAgICA8cD57cXVpelsxXS5hbnN3ZXJzLmFuc3dlcl9hfTwvcD5cbiAgICAgICAgPHA+e3F1aXpbMV0uYW5zd2Vycy5hbnN3ZXJfYn08L3A+XG4gICAgICAgIDxwPntxdWl6WzFdLmFuc3dlcnMuYW5zd2VyX2N9PC9wPlxuICAgICAgICA8cD57cXVpelsxXS5hbnN3ZXJzLmFuc3dlcl9kfTwvcD5cbiAgICAgICAgPHA+e3F1aXpbMV0uYW5zd2Vycy5hbnN3ZXJfZX08L3A+XG4gICAgICAgIDxwPntxdWl6WzFdLmFuc3dlcnMuYW5zd2VyX2Z9PC9wPiAqL31cblxuXG4gICAgICA8L2Rpdj5cblxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuXG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL3F1aXphcGkuaW8vYXBpL3YxL3F1ZXN0aW9ucycsIHtcblxuXG4gICAgaGVhZGVyczogeyAnWC1BcGktS2V5JzogcHJvY2Vzcy5lbnYudG9rZW5BUEkgfSxcblxuXG5cbiAgfSk7XG5cbiAgY29uc3QgcXVpeiA9IHJlc3VsdC5kYXRhO1xuXG4gIHJldHVybiB7IHByb3BzOiB7IHF1aXogfSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUXVpejsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/quiz/index.js\n");

/***/ })

})