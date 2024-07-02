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
					'__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MMButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MMButton */ "./src/components/MMButton.jsx");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Navlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navlist */ "./src/components/Navlist.jsx");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Navbar(param) {\n    let { className } = param;\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    function openMenu() {\n        setIsOpen(true);\n    }\n    function closeMenu() {\n        setIsOpen(false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {\n        className: "fixed z-50 flex w-full flex-col items-center justify-between py-2 pl-[16px] pr-[32px] backdrop-blur-sm transition-all duration-[250ms] ease-in-out ".concat(isOpen ? "bg-black/90" : "bg-black/20", " ").concat(className),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                className: "relative flex w-full items-center justify-between",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        className: "w-[40vw] md:h-[48px] md:w-auto",\n                        src: "/hoppyLogo.png",\n                        width: 2048,\n                        height: 585,\n                        alt: "hoppy logo"\n                    }, void 0, false, {\n                        fileName: "/Users/ludwig/shitcoindev/hppy/src/components/Navbar.jsx",\n                        lineNumber: 22,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navlist__WEBPACK_IMPORTED_MODULE_4__["default"], {\n                                className: "hidden text-[22px] lg:flex"\n                            }, void 0, false, {\n                                fileName: "/Users/ludwig/shitcoindev/hppy/src/components/Navbar.jsx",\n                                lineNumber: 30,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {\n                                className: "absolute left-1/2 hidden -translate-x-1/2 rounded-full border border-white px-8 py-2 text-[18px] md:block",\n                                href: "#",\n                                children: "Buy Now"\n                            }, void 0, false, {\n                                fileName: "/Users/ludwig/shitcoindev/hppy/src/components/Navbar.jsx",\n                                lineNumber: 31,\n                                columnNumber: 6\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: "/Users/ludwig/shitcoindev/hppy/src/components/Navbar.jsx",\n                        lineNumber: 29,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MMButton__WEBPACK_IMPORTED_MODULE_2__["default"], {\n                        isOpen: isOpen,\n                        closeMenu: closeMenu,\n                        openMenu: openMenu,\n                        className: "h-[33px] w-[33px] lg:hidden"\n                    }, void 0, false, {\n                        fileName: "/Users/ludwig/shitcoindev/hppy/src/components/Navbar.jsx",\n                        lineNumber: 38,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: "/Users/ludwig/shitcoindev/hppy/src/components/Navbar.jsx",\n                lineNumber: 21,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                className: "flex w-full items-center justify-center overflow-hidden rounded-bl-xl rounded-br-xl duration-[250ms] ease-in-out ".concat(isOpen ? "h-[50vh]" : "h-0"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navlist__WEBPACK_IMPORTED_MODULE_4__["default"], {\n                    className: "flex-col items-center pt-8 text-[22px] transition duration-[250ms] ease-in-out ".concat(isOpen ? "opacity-100" : "opacity-0")\n                }, void 0, false, {\n                    fileName: "/Users/ludwig/shitcoindev/hppy/src/components/Navbar.jsx",\n                    lineNumber: 48,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: "/Users/ludwig/shitcoindev/hppy/src/components/Navbar.jsx",\n                lineNumber: 45,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: "/Users/ludwig/shitcoindev/hppy/src/components/Navbar.jsx",\n        lineNumber: 18,\n        columnNumber: 3\n    }, this);\n}\n_s(Navbar, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__["default"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, "Navbar");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZiYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ0M7QUFDSDtBQUNDO0FBRS9CLFNBQVNJLE9BQU8sS0FBYTtRQUFiLEVBQUVDLFNBQVMsRUFBRSxHQUFiOztJQUNmLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUVyQyxTQUFTUTtRQUNSRCxVQUFVO0lBQ1g7SUFFQSxTQUFTRTtRQUNSRixVQUFVO0lBQ1g7SUFFQSxxQkFDQyw4REFBQ0c7UUFDQUwsV0FBVyxzSkFBZ01BLE9BQTFDQyxTQUFTLGdCQUFnQixlQUFjLEtBQWEsT0FBVkQ7OzBCQUUzTSw4REFBQ007Z0JBQUlOLFdBQVU7O2tDQUNkLDhEQUFDSCxtREFBS0E7d0JBQ0xHLFdBQVU7d0JBQ1ZPLEtBQUk7d0JBQ0pDLE9BQU87d0JBQ1BDLFFBQVE7d0JBQ1JDLEtBQUk7Ozs7OztrQ0FFTCw4REFBQ0o7OzBDQUNBLDhEQUFDUixnREFBT0E7Z0NBQUNFLFdBQVk7Ozs7OzswQ0FDckIsOERBQUNXO2dDQUNBWCxXQUFVO2dDQUNWWSxNQUFLOzBDQUNMOzs7Ozs7Ozs7Ozs7a0NBSUYsOERBQUNoQixpREFBUUE7d0JBQ1JLLFFBQVFBO3dCQUNSRyxXQUFXQTt3QkFDWEQsVUFBVUE7d0JBQ1ZILFdBQVk7Ozs7Ozs7Ozs7OzswQkFHZCw4REFBQ007Z0JBQ0FOLFdBQVcsb0hBQWdKLE9BQTVCQyxTQUFTLGFBQWE7MEJBRXJKLDRFQUFDSCxnREFBT0E7b0JBQ1BFLFdBQVcsa0ZBQXVILE9BQXJDQyxTQUFTLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLM0g7R0FoRFNGO0tBQUFBO0FBa0RULCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05hdmJhci5qc3g/OTBmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1NQnV0dG9uIGZyb20gJy4vTU1CdXR0b24nXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBOYXZsaXN0IGZyb20gJy4vTmF2bGlzdCdcblxuZnVuY3Rpb24gTmF2YmFyKHsgY2xhc3NOYW1lIH0pIHtcblx0Y29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG5cdGZ1bmN0aW9uIG9wZW5NZW51KCkge1xuXHRcdHNldElzT3Blbih0cnVlKVxuXHR9XG5cblx0ZnVuY3Rpb24gY2xvc2VNZW51KCkge1xuXHRcdHNldElzT3BlbihmYWxzZSlcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PG5hdlxuXHRcdFx0Y2xhc3NOYW1lPXtgZml4ZWQgei01MCBmbGV4IHctZnVsbCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB5LTIgcGwtWzE2cHhdIHByLVszMnB4XSBiYWNrZHJvcC1ibHVyLXNtIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLVsyNTBtc10gZWFzZS1pbi1vdXQgJHtpc09wZW4gPyAnYmctYmxhY2svOTAnIDogJ2JnLWJsYWNrLzIwJ30gJHtjbGFzc05hbWV9YH1cblx0XHQ+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cblx0XHRcdFx0PEltYWdlXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1bNDB2d10gbWQ6aC1bNDhweF0gbWQ6dy1hdXRvXCJcblx0XHRcdFx0XHRzcmM9XCIvaG9wcHlMb2dvLnBuZ1wiXG5cdFx0XHRcdFx0d2lkdGg9ezIwNDh9XG5cdFx0XHRcdFx0aGVpZ2h0PXs1ODV9XG5cdFx0XHRcdFx0YWx0PVwiaG9wcHkgbG9nb1wiXG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PE5hdmxpc3QgY2xhc3NOYW1lPXtgaGlkZGVuIHRleHQtWzIycHhdIGxnOmZsZXhgfSAvPlxuXHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTEvMiBoaWRkZW4gLXRyYW5zbGF0ZS14LTEvMiByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci13aGl0ZSBweC04IHB5LTIgdGV4dC1bMThweF0gbWQ6YmxvY2tcIlxuXHRcdFx0XHRcdFx0aHJlZj1cIiNcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdEJ1eSBOb3dcblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8TU1CdXR0b25cblx0XHRcdFx0XHRpc09wZW49e2lzT3Blbn1cblx0XHRcdFx0XHRjbG9zZU1lbnU9e2Nsb3NlTWVudX1cblx0XHRcdFx0XHRvcGVuTWVudT17b3Blbk1lbnV9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtgaC1bMzNweF0gdy1bMzNweF0gbGc6aGlkZGVuYH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdlxuXHRcdFx0XHRjbGFzc05hbWU9e2BmbGV4IHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtYmwteGwgcm91bmRlZC1ici14bCBkdXJhdGlvbi1bMjUwbXNdIGVhc2UtaW4tb3V0ICR7aXNPcGVuID8gJ2gtWzUwdmhdJyA6ICdoLTAnfWB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxOYXZsaXN0XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtgZmxleC1jb2wgaXRlbXMtY2VudGVyIHB0LTggdGV4dC1bMjJweF0gdHJhbnNpdGlvbiBkdXJhdGlvbi1bMjUwbXNdIGVhc2UtaW4tb3V0ICR7aXNPcGVuID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTAnfWB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L25hdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIk1NQnV0dG9uIiwiSW1hZ2UiLCJOYXZsaXN0IiwiTmF2YmFyIiwiY2xhc3NOYW1lIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwib3Blbk1lbnUiLCJjbG9zZU1lbnUiLCJuYXYiLCJkaXYiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Navbar.jsx\n',
				),
			)

			/***/
		},
})
