'use strict'
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self['webpackHotUpdate_N_E']('pages/index', {
	/***/ './src/components/MMButton.jsx':
		/*!*************************************!*\
  !*** ./src/components/MMButton.jsx ***!
  \*************************************/
		/***/ function (module, __webpack_exports__, __webpack_require__) {
			eval(
				__webpack_require__.ts(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwind-merge */ "./node_modules/tailwind-merge/dist/bundle-mjs.mjs");\n/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.module.scss */ "./src/components/Button.module.scss");\n/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Button_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction MMButton(param) {\n    let { className, isOpen, openMenu, closeMenu } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {\n        onClick: isOpen ? closeMenu : openMenu,\n        className: (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_2__.twMerge)("relative flex h-[28px] w-[28px] items-center justify-center transition ease-in-out", className),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {\n            className: (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_2__.twMerge)("flex w-full flex-col items-center justify-center gap-[4px]"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {\n                    className: (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_2__.twMerge)("relative h-[2px] w-[33px] origin-center rounded-full bg-black", isOpen ? (_Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default().menuButtonTopBunOpenAnimation) : (_Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default().menuButtonTopBunCloseAnimation))\n                }, void 0, false, {\n                    fileName: "/Users/ludwig/shitcoindev/hppy/src/components/MMButton.jsx",\n                    lineNumber: 15,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {\n                    className: (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_2__.twMerge)("relative h-[3px] w-[33px] origin-center rounded-full bg-black transition delay-[125ms] duration-0", isOpen ? "opacity-0" : "opacity-1")\n                }, void 0, false, {\n                    fileName: "/Users/ludwig/shitcoindev/hppy/src/components/MMButton.jsx",\n                    lineNumber: 21,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {\n                    className: (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_2__.twMerge)("relative h-[2px] w-[33px] origin-center rounded-full bg-black", isOpen ? (_Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default().menuButtonBottomBunOpenAnimation) : (_Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default().menuButtonBottomBunCloseAnimation))\n                }, void 0, false, {\n                    fileName: "/Users/ludwig/shitcoindev/hppy/src/components/MMButton.jsx",\n                    lineNumber: 27,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: "/Users/ludwig/shitcoindev/hppy/src/components/MMButton.jsx",\n            lineNumber: 14,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: "/Users/ludwig/shitcoindev/hppy/src/components/MMButton.jsx",\n        lineNumber: 7,\n        columnNumber: 3\n    }, this);\n}\n_c = MMButton;\n/* harmony default export */ __webpack_exports__["default"] = (MMButton);\nvar _c;\n$RefreshReg$(_c, "MMButton");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NTUJ1dHRvbi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3QztBQUVDO0FBRXpDLFNBQVNFLFNBQVMsS0FBMEM7UUFBMUMsRUFBRUMsU0FBUyxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsU0FBUyxFQUFFLEdBQTFDO0lBQ2pCLHFCQUNDLDhEQUFDQztRQUNBQyxTQUFTSixTQUFTRSxZQUFZRDtRQUM5QkYsV0FBV0gsdURBQU9BLENBQ2pCLHNGQUNBRztrQkFHRCw0RUFBQ007WUFBS04sV0FBV0gsdURBQU9BLENBQUM7OzhCQUN4Qiw4REFBQ1M7b0JBQ0FOLFdBQVdILHVEQUFPQSxDQUNqQixpRUFDQUksU0FBU0gsMEZBQW9DLEdBQUdBLDJGQUFxQzs7Ozs7OzhCQUd2Riw4REFBQ1E7b0JBQ0FOLFdBQVdILHVEQUFPQSxDQUNqQixxR0FDQUksU0FBUyxjQUFjOzs7Ozs7OEJBR3pCLDhEQUFDSztvQkFDQU4sV0FBV0gsdURBQU9BLENBQ2pCLGlFQUNBSSxTQUFTSCw2RkFBdUMsR0FBR0EsOEZBQXdDOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1qRztLQS9CU0M7QUFpQ1QsK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTU1CdXR0b24uanN4PzE3ZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHdNZXJnZSB9IGZyb20gJ3RhaWx3aW5kLW1lcmdlJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQnV0dG9uLm1vZHVsZS5zY3NzJ1xuXG5mdW5jdGlvbiBNTUJ1dHRvbih7IGNsYXNzTmFtZSwgaXNPcGVuLCBvcGVuTWVudSwgY2xvc2VNZW51IH0pIHtcblx0cmV0dXJuIChcblx0XHQ8YnV0dG9uXG5cdFx0XHRvbkNsaWNrPXtpc09wZW4gPyBjbG9zZU1lbnUgOiBvcGVuTWVudX1cblx0XHRcdGNsYXNzTmFtZT17dHdNZXJnZShcblx0XHRcdFx0J3JlbGF0aXZlIGZsZXggaC1bMjhweF0gdy1bMjhweF0gaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRyYW5zaXRpb24gZWFzZS1pbi1vdXQnLFxuXHRcdFx0XHRjbGFzc05hbWUsXG5cdFx0XHQpfVxuXHRcdD5cblx0XHRcdDxzcGFuIGNsYXNzTmFtZT17dHdNZXJnZSgnZmxleCB3LWZ1bGwgZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC1bNHB4XScpfT5cblx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRjbGFzc05hbWU9e3R3TWVyZ2UoXG5cdFx0XHRcdFx0XHQncmVsYXRpdmUgaC1bMnB4XSB3LVszM3B4XSBvcmlnaW4tY2VudGVyIHJvdW5kZWQtZnVsbCBiZy1ibGFjaycsXG5cdFx0XHRcdFx0XHRpc09wZW4gPyBzdHlsZXMubWVudUJ1dHRvblRvcEJ1bk9wZW5BbmltYXRpb24gOiBzdHlsZXMubWVudUJ1dHRvblRvcEJ1bkNsb3NlQW5pbWF0aW9uLFxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdD48L3NwYW4+XG5cdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXt0d01lcmdlKFxuXHRcdFx0XHRcdFx0J3JlbGF0aXZlIGgtWzNweF0gdy1bMzNweF0gb3JpZ2luLWNlbnRlciByb3VuZGVkLWZ1bGwgYmctYmxhY2sgdHJhbnNpdGlvbiBkZWxheS1bMTI1bXNdIGR1cmF0aW9uLTAnLFxuXHRcdFx0XHRcdFx0aXNPcGVuID8gJ29wYWNpdHktMCcgOiAnb3BhY2l0eS0xJyxcblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ+PC9zcGFuPlxuXHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRcdGNsYXNzTmFtZT17dHdNZXJnZShcblx0XHRcdFx0XHRcdCdyZWxhdGl2ZSBoLVsycHhdIHctWzMzcHhdIG9yaWdpbi1jZW50ZXIgcm91bmRlZC1mdWxsIGJnLWJsYWNrJyxcblx0XHRcdFx0XHRcdGlzT3BlbiA/IHN0eWxlcy5tZW51QnV0dG9uQm90dG9tQnVuT3BlbkFuaW1hdGlvbiA6IHN0eWxlcy5tZW51QnV0dG9uQm90dG9tQnVuQ2xvc2VBbmltYXRpb24sXG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0Pjwvc3Bhbj5cblx0XHRcdDwvc3Bhbj5cblx0XHQ8L2J1dHRvbj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBNTUJ1dHRvblxuIl0sIm5hbWVzIjpbInR3TWVyZ2UiLCJzdHlsZXMiLCJNTUJ1dHRvbiIsImNsYXNzTmFtZSIsImlzT3BlbiIsIm9wZW5NZW51IiwiY2xvc2VNZW51IiwiYnV0dG9uIiwib25DbGljayIsInNwYW4iLCJtZW51QnV0dG9uVG9wQnVuT3BlbkFuaW1hdGlvbiIsIm1lbnVCdXR0b25Ub3BCdW5DbG9zZUFuaW1hdGlvbiIsIm1lbnVCdXR0b25Cb3R0b21CdW5PcGVuQW5pbWF0aW9uIiwibWVudUJ1dHRvbkJvdHRvbUJ1bkNsb3NlQW5pbWF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/MMButton.jsx\n',
				),
			)

			/***/
		},
})
