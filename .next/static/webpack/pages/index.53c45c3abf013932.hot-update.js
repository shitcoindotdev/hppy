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
	/***/ './src/components/Navbar.jsx':
		/*!***********************************!*\
  !*** ./src/components/Navbar.jsx ***!
  \***********************************/
		/***/ function (module, __webpack_exports__, __webpack_require__) {
			eval(
				__webpack_require__.ts(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MMButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MMButton */ "./src/components/MMButton.jsx");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Navbar() {\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    function openMenu() {\n        setIsOpen(true);\n    }\n    function closeMenu() {\n        setIsOpen(false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {\n        className: "flex items-center justify-between pr-[32px]",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                className: "w-[40vw]",\n                src: "/hoppyLogo.png",\n                width: 2048,\n                height: 585\n            }, void 0, false, {\n                fileName: "/Users/ludwig/shitcoindev/hppy/src/components/Navbar.jsx",\n                lineNumber: 18,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MMButton__WEBPACK_IMPORTED_MODULE_2__["default"], {\n                isOpen: isOpen,\n                closeMenu: closeMenu,\n                openMenu: openMenu,\n                className: "h-[33px] w-[33px]"\n            }, void 0, false, {\n                fileName: "/Users/ludwig/shitcoindev/hppy/src/components/Navbar.jsx",\n                lineNumber: 19,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: "/Users/ludwig/shitcoindev/hppy/src/components/Navbar.jsx",\n        lineNumber: 17,\n        columnNumber: 3\n    }, this);\n}\n_s(Navbar, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__["default"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, "Navbar");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZiYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0M7QUFDQztBQUNIO0FBRTlCLFNBQVNHOztJQUNSLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUVyQyxTQUFTTTtRQUNSRCxVQUFVO0lBQ1g7SUFFQSxTQUFTRTtRQUNSRixVQUFVO0lBQ1g7SUFFQSxxQkFDQyw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ2QsOERBQUNQLG1EQUFLQTtnQkFBQ08sV0FBVTtnQkFBV0MsS0FBSTtnQkFBaUJDLE9BQU87Z0JBQU1DLFFBQVE7Ozs7OzswQkFDdEUsOERBQUNYLGlEQUFRQTtnQkFBQ0csUUFBUUE7Z0JBQVFHLFdBQVdBO2dCQUFXRCxVQUFVQTtnQkFBVUcsV0FBWTs7Ozs7Ozs7Ozs7O0FBR25GO0dBakJTTjtLQUFBQTtBQW1CVCwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXZiYXIuanN4PzkwZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBNTUJ1dHRvbiBmcm9tICcuL01NQnV0dG9uJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5cbmZ1bmN0aW9uIE5hdmJhcigpIHtcblx0Y29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG5cdGZ1bmN0aW9uIG9wZW5NZW51KCkge1xuXHRcdHNldElzT3Blbih0cnVlKVxuXHR9XG5cblx0ZnVuY3Rpb24gY2xvc2VNZW51KCkge1xuXHRcdHNldElzT3BlbihmYWxzZSlcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PG5hdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHItWzMycHhdXCI+XG5cdFx0XHQ8SW1hZ2UgY2xhc3NOYW1lPVwidy1bNDB2d11cIiBzcmM9XCIvaG9wcHlMb2dvLnBuZ1wiIHdpZHRoPXsyMDQ4fSBoZWlnaHQ9ezU4NX0gLz5cblx0XHRcdDxNTUJ1dHRvbiBpc09wZW49e2lzT3Blbn0gY2xvc2VNZW51PXtjbG9zZU1lbnV9IG9wZW5NZW51PXtvcGVuTWVudX0gY2xhc3NOYW1lPXtgaC1bMzNweF0gdy1bMzNweF1gfSAvPlxuXHRcdDwvbmF2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTU1CdXR0b24iLCJJbWFnZSIsIk5hdmJhciIsImlzT3BlbiIsInNldElzT3BlbiIsIm9wZW5NZW51IiwiY2xvc2VNZW51IiwibmF2IiwiY2xhc3NOYW1lIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Navbar.jsx\n',
				),
			)

			/***/
		},
})
