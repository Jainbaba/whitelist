"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"(app-client)/./node_modules/next/dist/client/components/noop-head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3modal */ \"(app-client)/./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"(app-client)/./node_modules/@ethersproject/providers/lib.esm/web3-provider.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"(app-client)/./node_modules/@ethersproject/contracts/lib.esm/index.js\");\n/* harmony import */ var _style_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style/Home.module.css */ \"(app-client)/./app/style/Home.module.css\");\n/* harmony import */ var _style_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _utils_whitelist_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/whitelist.json */ \"(app-client)/./utils/whitelist.json\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [walletConnected, setWalletConnected] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [joinedWhitelist, setJoinedWhitelist] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [numOfWhitelisted, setNumOfWhitelisted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const web3ModelRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const abi = _utils_whitelist_json__WEBPACK_IMPORTED_MODULE_4__;\n    const WHITELIST_CONTRACT_ADDRESS = \"0x53B5C3A559d2ba2f1550Bc976e7E53b47cb689a3\";\n    const getProviderOrSigner = async function() {\n        let needSigners = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;\n        const provider = await web3ModelRef.current.connect();\n        const web3Provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.Web3Provider(provider);\n        const { chainId  } = await web3Provider.getNetwork();\n        console.log(chainId);\n        if (chainId !== 80001) {\n            window.alert(\"Change the network to Ploygon Mumbai\");\n            throw new Error(\"Change network to Ploygon Mumbai\");\n        }\n        if (needSigners) {\n            const signer = web3Provider.getSigner();\n            return signer;\n        }\n        return web3Provider;\n    };\n    const addAddressToWhitelist = async ()=>{\n        try {\n            const signer = getProviderOrSigner(true);\n            const whitelistContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.Contract(WHITELIST_CONTRACT_ADDRESS, abi, signer);\n            const txn = await whitelistContract.addAddress();\n            setLoading(true);\n            await txn.wait();\n            setLoading(false);\n            await getNoOfwhitelisted();\n            setJoinedWhitelist(true);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const getNoOfwhitelisted = async ()=>{\n        try {\n            const provider = await getProviderOrSigner();\n            const whitelistContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.Contract(WHITELIST_CONTRACT_ADDRESS, abi, provider);\n            const _numberOfWhitelisted = await whitelistContract.numWhitelistedAddress();\n            console.log(\"here\");\n            setNumOfWhitelisted(_numberOfWhitelisted);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const checkWhitelistAddress = async ()=>{\n        try {\n            const signer = getProviderOrSigner(true);\n            console.log(signer);\n            const whitelistContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.Contract(WHITELIST_CONTRACT_ADDRESS, abi, signer);\n            const address = await signer.getAddress();\n            const _joinedWhitelist = await whitelistContract.isWhitelistAddress(address);\n            setJoinedWhitelist(_joinedWhitelist);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const connectWallet = async ()=>{\n        try {\n            await getProviderOrSigner();\n            setWalletConnected(true);\n            checkWhitelistAddress();\n            getNoOfwhitelisted();\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const renderButton = ()=>{\n        if (walletConnected) {\n            if (joinedWhitelist) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_style_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                    children: \"Thanks for joining the Whitelist!\"\n                }, void 0, false, {\n                    fileName: \"/Users/hrithikjain/Development/whitelist-dapp/whitelist/app/page.js\",\n                    lineNumber: 112,\n                    columnNumber: 11\n                }, this);\n            } else if (loading) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_style_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"/Users/hrithikjain/Development/whitelist-dapp/whitelist/app/page.js\",\n                    lineNumber: 117,\n                    columnNumber: 16\n                }, this);\n            } else {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: addAddressToWhitelist,\n                    className: (_style_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                    children: \"Join the Whitelist!\"\n                }, void 0, false, {\n                    fileName: \"/Users/hrithikjain/Development/whitelist-dapp/whitelist/app/page.js\",\n                    lineNumber: 120,\n                    columnNumber: 11\n                }, this);\n            }\n        } else {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: connectWallet,\n                className: (_style_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                children: \"Connect Wallet\"\n            }, void 0, false, {\n                fileName: \"/Users/hrithikjain/Development/whitelist-dapp/whitelist/app/page.js\",\n                lineNumber: 127,\n                columnNumber: 9\n            }, this);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!walletConnected) {\n            web3ModelRef.current = new (web3modal__WEBPACK_IMPORTED_MODULE_3___default())({\n                network: \"mumbai\",\n                providerOptions: {},\n                disableInjectedProvider: false\n            });\n            connectWallet();\n        }\n    }, [\n        walletConnected\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Whitelist Dapp\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hrithikjain/Development/whitelist-dapp/whitelist/app/page.js\",\n                        lineNumber: 148,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Whitelist-Dapp\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hrithikjain/Development/whitelist-dapp/whitelist/app/page.js\",\n                        lineNumber: 149,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hrithikjain/Development/whitelist-dapp/whitelist/app/page.js\",\n                        lineNumber: 150,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hrithikjain/Development/whitelist-dapp/whitelist/app/page.js\",\n                lineNumber: 147,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_style_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: (_style_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                                children: \"Welcome to Crypto Devs!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hrithikjain/Development/whitelist-dapp/whitelist/app/page.js\",\n                                lineNumber: 154,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_style_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                                children: \"It's an NFT collection for developers in Crypto.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hrithikjain/Development/whitelist-dapp/whitelist/app/page.js\",\n                                lineNumber: 155,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_style_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                                children: [\n                                    numOfWhitelisted,\n                                    \" have already joined the Whitelist\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hrithikjain/Development/whitelist-dapp/whitelist/app/page.js\",\n                                lineNumber: 159,\n                                columnNumber: 11\n                            }, this),\n                            renderButton()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hrithikjain/Development/whitelist-dapp/whitelist/app/page.js\",\n                        lineNumber: 153,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: (_style_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().image),\n                            src: \"./crypto-devs.svg\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hrithikjain/Development/whitelist-dapp/whitelist/app/page.js\",\n                            lineNumber: 165,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/hrithikjain/Development/whitelist-dapp/whitelist/app/page.js\",\n                        lineNumber: 164,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hrithikjain/Development/whitelist-dapp/whitelist/app/page.js\",\n                lineNumber: 152,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_style_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().footer),\n                children: \"Made with ❤ by Crypto Devs\"\n            }, void 0, false, {\n                fileName: \"/Users/hrithikjain/Development/whitelist-dapp/whitelist/app/page.js\",\n                lineNumber: 169,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hrithikjain/Development/whitelist-dapp/whitelist/app/page.js\",\n        lineNumber: 146,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"v2A9F/w+FYtHK26lYkZRBTphuvo=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzZCO0FBQ3VCO0FBQ2xCO0FBQ1c7QUFDQTtBQUNPO0FBRXJDLFNBQVNTLE9BQU87O0lBQzdCLE1BQU0sQ0FBQ0MsaUJBQWlCQyxtQkFBbUIsR0FBR1IsK0NBQVFBLENBQUMsS0FBSztJQUM1RCxNQUFNLENBQUNTLGlCQUFpQkMsbUJBQW1CLEdBQUdWLCtDQUFRQSxDQUFDLEtBQUs7SUFDNUQsTUFBTSxDQUFDVyxTQUFTQyxXQUFXLEdBQUdaLCtDQUFRQSxDQUFDLEtBQUs7SUFDNUMsTUFBTSxDQUFDYSxrQkFBa0JDLG9CQUFvQixHQUFHZCwrQ0FBUUEsQ0FBQztJQUN6RCxNQUFNZSxlQUFlaEIsNkNBQU1BO0lBQzNCLE1BQU1pQixNQUFNWCxrREFBYUE7SUFDekIsTUFBTVksNkJBQ0o7SUFFRixNQUFNQyxzQkFBc0IsaUJBQStCO1lBQXhCQywrRUFBYyxLQUFLO1FBQ3BELE1BQU1DLFdBQVcsTUFBTUwsYUFBYU0sT0FBTyxDQUFDQyxPQUFPO1FBQ25ELE1BQU1DLGVBQWUsSUFBSXBCLGdEQUFzQixDQUFDaUI7UUFFaEQsTUFBTSxFQUFFSyxRQUFPLEVBQUUsR0FBRyxNQUFNRixhQUFhRyxVQUFVO1FBQ2pEQyxRQUFRQyxHQUFHLENBQUNIO1FBQ1osSUFBSUEsWUFBWSxPQUFPO1lBQ3JCSSxPQUFPQyxLQUFLLENBQUM7WUFDYixNQUFNLElBQUlDLE1BQU0sb0NBQW9DO1FBQ3RELENBQUM7UUFFRCxJQUFJWixhQUFhO1lBQ2YsTUFBTWEsU0FBU1QsYUFBYVUsU0FBUztZQUNyQyxPQUFPRDtRQUNULENBQUM7UUFDRCxPQUFPVDtJQUNUO0lBRUEsTUFBTVcsd0JBQXdCLFVBQVk7UUFDeEMsSUFBSTtZQUNGLE1BQU1GLFNBQVNkLG9CQUFvQixJQUFJO1lBQ3ZDLE1BQU1pQixvQkFBb0IsSUFBSWpDLDRDQUFRQSxDQUNwQ2UsNEJBQ0FELEtBQ0FnQjtZQUdGLE1BQU1JLE1BQU0sTUFBTUQsa0JBQWtCRSxVQUFVO1lBQzlDekIsV0FBVyxJQUFJO1lBQ2YsTUFBTXdCLElBQUlFLElBQUk7WUFDZDFCLFdBQVcsS0FBSztZQUVoQixNQUFNMkI7WUFDTjdCLG1CQUFtQixJQUFJO1FBQ3pCLEVBQUUsT0FBTzhCLE9BQU87WUFDZGIsUUFBUUMsR0FBRyxDQUFDWTtRQUNkO0lBQ0Y7SUFFQSxNQUFNRCxxQkFBcUIsVUFBWTtRQUNyQyxJQUFJO1lBQ0YsTUFBTW5CLFdBQVcsTUFBTUY7WUFDdkIsTUFBTWlCLG9CQUFvQixJQUFJakMsNENBQVFBLENBQ3BDZSw0QkFDQUQsS0FDQUk7WUFHRixNQUFNcUIsdUJBQ0osTUFBTU4sa0JBQWtCTyxxQkFBcUI7WUFDL0NmLFFBQVFDLEdBQUcsQ0FBQztZQUNaZCxvQkFBb0IyQjtRQUN0QixFQUFFLE9BQU9ELE9BQU87WUFDZGIsUUFBUUMsR0FBRyxDQUFDWTtRQUNkO0lBQ0Y7SUFFQSxNQUFNRyx3QkFBd0IsVUFBWTtRQUN4QyxJQUFJO1lBQ0YsTUFBTVgsU0FBU2Qsb0JBQW9CLElBQUk7WUFDdkNTLFFBQVFDLEdBQUcsQ0FBQ0k7WUFDWixNQUFNRyxvQkFBb0IsSUFBSWpDLDRDQUFRQSxDQUNwQ2UsNEJBQ0FELEtBQ0FnQjtZQUdGLE1BQU1ZLFVBQVUsTUFBTVosT0FBT2EsVUFBVTtZQUV2QyxNQUFNQyxtQkFBbUIsTUFBTVgsa0JBQWtCWSxrQkFBa0IsQ0FDakVIO1lBRUZsQyxtQkFBbUJvQztRQUNyQixFQUFFLE9BQU9OLE9BQU87WUFDZGIsUUFBUUMsR0FBRyxDQUFDWTtRQUNkO0lBQ0Y7SUFFQSxNQUFNUSxnQkFBZ0IsVUFBWTtRQUNoQyxJQUFJO1lBQ0YsTUFBTTlCO1lBQ05WLG1CQUFtQixJQUFJO1lBQ3ZCbUM7WUFDQUo7UUFDRixFQUFFLE9BQU9DLE9BQU87WUFDZGIsUUFBUUMsR0FBRyxDQUFDWTtRQUNkO0lBQ0Y7SUFFQSxNQUFNUyxlQUFlLElBQU07UUFDekIsSUFBSTFDLGlCQUFpQjtZQUNuQixJQUFJRSxpQkFBaUI7Z0JBQ25CLHFCQUNFLDhEQUFDeUM7b0JBQUlDLFdBQVcvQywyRUFBa0I7OEJBQUU7Ozs7OztZQUl4QyxPQUFPLElBQUlPLFNBQVM7Z0JBQ2xCLHFCQUFPLDhEQUFDMEM7b0JBQU9GLFdBQVcvQyxzRUFBYTs4QkFBRTs7Ozs7O1lBQzNDLE9BQU87Z0JBQ0wscUJBQ0UsOERBQUNpRDtvQkFBT0MsU0FBU3BCO29CQUF1QmlCLFdBQVcvQyxzRUFBYTs4QkFBRTs7Ozs7O1lBSXRFLENBQUM7UUFDSCxPQUFPO1lBQ0wscUJBQ0UsOERBQUNpRDtnQkFBT0MsU0FBU047Z0JBQWVHLFdBQVcvQyxzRUFBYTswQkFBRTs7Ozs7O1FBSTlELENBQUM7SUFDSDtJQUVBTixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSSxDQUFDUyxpQkFBaUI7WUFDcEJRLGFBQWFNLE9BQU8sR0FBRyxJQUFJcEIsa0RBQVNBLENBQUM7Z0JBQ25Dc0QsU0FBUztnQkFDVEMsaUJBQWlCLENBQUM7Z0JBQ2xCQyx5QkFBeUIsS0FBSztZQUNoQztZQUNBVDtRQUNGLENBQUM7SUFDSCxHQUFHO1FBQUN6QztLQUFnQjtJQUVwQixxQkFDRSw4REFBQzJDOzswQkFDQyw4REFBQ3JELGtEQUFJQTs7a0NBQ0gsOERBQUM2RDtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFeEIsOERBQUNkO2dCQUFJQyxXQUFXL0Msb0VBQVc7O2tDQUN6Qiw4REFBQzhDOzswQ0FDQyw4REFBQ2dCO2dDQUFHZixXQUFXL0MscUVBQVk7MENBQUU7Ozs7OzswQ0FDN0IsOERBQUM4QztnQ0FBSUMsV0FBVy9DLDJFQUFrQjswQ0FDYzs7Ozs7OzBDQUdoRCw4REFBQzhDO2dDQUFJQyxXQUFXL0MsMkVBQWtCOztvQ0FDL0JTO29DQUFpQjs7Ozs7Ozs0QkFFbkJvQzs7Ozs7OztrQ0FFSCw4REFBQ0M7a0NBQ0MsNEVBQUNpQjs0QkFBSWhCLFdBQVcvQyxxRUFBWTs0QkFBRWlFLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUl0Qyw4REFBQ0M7Z0JBQU9uQixXQUFXL0Msc0VBQWE7MEJBQUU7Ozs7Ozs7Ozs7OztBQUt4QyxDQUFDO0dBckt1QkU7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFdlYjNNb2RhbCBmcm9tIFwid2ViM21vZGFsXCI7XG5pbXBvcnQgeyBDb250cmFjdCwgcHJvdmlkZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZS9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBqc29uV2hpdGVsaXN0IGZyb20gXCIuLi91dGlscy93aGl0ZWxpc3QuanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbd2FsbGV0Q29ubmVjdGVkLCBzZXRXYWxsZXRDb25uZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbam9pbmVkV2hpdGVsaXN0LCBzZXRKb2luZWRXaGl0ZWxpc3RdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtudW1PZldoaXRlbGlzdGVkLCBzZXROdW1PZldoaXRlbGlzdGVkXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCB3ZWIzTW9kZWxSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgYWJpID0ganNvbldoaXRlbGlzdDtcbiAgY29uc3QgV0hJVEVMSVNUX0NPTlRSQUNUX0FERFJFU1MgPVxuICAgIFwiMHg1M0I1QzNBNTU5ZDJiYTJmMTU1MEJjOTc2ZTdFNTNiNDdjYjY4OWEzXCI7XG5cbiAgY29uc3QgZ2V0UHJvdmlkZXJPclNpZ25lciA9IGFzeW5jIChuZWVkU2lnbmVycyA9IGZhbHNlKSA9PiB7XG4gICAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCB3ZWIzTW9kZWxSZWYuY3VycmVudC5jb25uZWN0KCk7XG4gICAgY29uc3Qgd2ViM1Byb3ZpZGVyID0gbmV3IHByb3ZpZGVycy5XZWIzUHJvdmlkZXIocHJvdmlkZXIpO1xuXG4gICAgY29uc3QgeyBjaGFpbklkIH0gPSBhd2FpdCB3ZWIzUHJvdmlkZXIuZ2V0TmV0d29yaygpO1xuICAgIGNvbnNvbGUubG9nKGNoYWluSWQpO1xuICAgIGlmIChjaGFpbklkICE9PSA4MDAwMSkge1xuICAgICAgd2luZG93LmFsZXJ0KFwiQ2hhbmdlIHRoZSBuZXR3b3JrIHRvIFBsb3lnb24gTXVtYmFpXCIpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2hhbmdlIG5ldHdvcmsgdG8gUGxveWdvbiBNdW1iYWlcIik7XG4gICAgfVxuXG4gICAgaWYgKG5lZWRTaWduZXJzKSB7XG4gICAgICBjb25zdCBzaWduZXIgPSB3ZWIzUHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICByZXR1cm4gc2lnbmVyO1xuICAgIH1cbiAgICByZXR1cm4gd2ViM1Byb3ZpZGVyO1xuICB9O1xuXG4gIGNvbnN0IGFkZEFkZHJlc3NUb1doaXRlbGlzdCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc2lnbmVyID0gZ2V0UHJvdmlkZXJPclNpZ25lcih0cnVlKTtcbiAgICAgIGNvbnN0IHdoaXRlbGlzdENvbnRyYWN0ID0gbmV3IENvbnRyYWN0KFxuICAgICAgICBXSElURUxJU1RfQ09OVFJBQ1RfQUREUkVTUyxcbiAgICAgICAgYWJpLFxuICAgICAgICBzaWduZXJcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IHR4biA9IGF3YWl0IHdoaXRlbGlzdENvbnRyYWN0LmFkZEFkZHJlc3MoKTtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBhd2FpdCB0eG4ud2FpdCgpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG5cbiAgICAgIGF3YWl0IGdldE5vT2Z3aGl0ZWxpc3RlZCgpO1xuICAgICAgc2V0Sm9pbmVkV2hpdGVsaXN0KHRydWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldE5vT2Z3aGl0ZWxpc3RlZCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCBnZXRQcm92aWRlck9yU2lnbmVyKCk7XG4gICAgICBjb25zdCB3aGl0ZWxpc3RDb250cmFjdCA9IG5ldyBDb250cmFjdChcbiAgICAgICAgV0hJVEVMSVNUX0NPTlRSQUNUX0FERFJFU1MsXG4gICAgICAgIGFiaSxcbiAgICAgICAgcHJvdmlkZXJcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IF9udW1iZXJPZldoaXRlbGlzdGVkID1cbiAgICAgICAgYXdhaXQgd2hpdGVsaXN0Q29udHJhY3QubnVtV2hpdGVsaXN0ZWRBZGRyZXNzKCk7XG4gICAgICBjb25zb2xlLmxvZyhcImhlcmVcIik7XG4gICAgICBzZXROdW1PZldoaXRlbGlzdGVkKF9udW1iZXJPZldoaXRlbGlzdGVkKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjaGVja1doaXRlbGlzdEFkZHJlc3MgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNpZ25lciA9IGdldFByb3ZpZGVyT3JTaWduZXIodHJ1ZSk7XG4gICAgICBjb25zb2xlLmxvZyhzaWduZXIpO1xuICAgICAgY29uc3Qgd2hpdGVsaXN0Q29udHJhY3QgPSBuZXcgQ29udHJhY3QoXG4gICAgICAgIFdISVRFTElTVF9DT05UUkFDVF9BRERSRVNTLFxuICAgICAgICBhYmksXG4gICAgICAgIHNpZ25lclxuICAgICAgKTtcblxuICAgICAgY29uc3QgYWRkcmVzcyA9IGF3YWl0IHNpZ25lci5nZXRBZGRyZXNzKCk7XG5cbiAgICAgIGNvbnN0IF9qb2luZWRXaGl0ZWxpc3QgPSBhd2FpdCB3aGl0ZWxpc3RDb250cmFjdC5pc1doaXRlbGlzdEFkZHJlc3MoXG4gICAgICAgIGFkZHJlc3NcbiAgICAgICk7XG4gICAgICBzZXRKb2luZWRXaGl0ZWxpc3QoX2pvaW5lZFdoaXRlbGlzdCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZ2V0UHJvdmlkZXJPclNpZ25lcigpO1xuICAgICAgc2V0V2FsbGV0Q29ubmVjdGVkKHRydWUpO1xuICAgICAgY2hlY2tXaGl0ZWxpc3RBZGRyZXNzKCk7XG4gICAgICBnZXROb09md2hpdGVsaXN0ZWQoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXJCdXR0b24gPSAoKSA9PiB7XG4gICAgaWYgKHdhbGxldENvbm5lY3RlZCkge1xuICAgICAgaWYgKGpvaW5lZFdoaXRlbGlzdCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgVGhhbmtzIGZvciBqb2luaW5nIHRoZSBXaGl0ZWxpc3QhXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKGxvYWRpbmcpIHtcbiAgICAgICAgcmV0dXJuIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5Mb2FkaW5nLi4uPC9idXR0b24+O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZEFkZHJlc3NUb1doaXRlbGlzdH0gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cbiAgICAgICAgICAgIEpvaW4gdGhlIFdoaXRlbGlzdCFcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjb25uZWN0V2FsbGV0fSBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlxuICAgICAgICAgIENvbm5lY3QgV2FsbGV0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXdhbGxldENvbm5lY3RlZCkge1xuICAgICAgd2ViM01vZGVsUmVmLmN1cnJlbnQgPSBuZXcgV2ViM01vZGFsKHtcbiAgICAgICAgbmV0d29yazogXCJtdW1iYWlcIixcbiAgICAgICAgcHJvdmlkZXJPcHRpb25zOiB7fSxcbiAgICAgICAgZGlzYWJsZUluamVjdGVkUHJvdmlkZXI6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgICBjb25uZWN0V2FsbGV0KCk7XG4gICAgfVxuICB9LCBbd2FsbGV0Q29ubmVjdGVkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5XaGl0ZWxpc3QgRGFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJXaGl0ZWxpc3QtRGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5XZWxjb21lIHRvIENyeXB0byBEZXZzITwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICB7LyogVXNpbmcgSFRNTCBFbnRpdGllcyBmb3IgdGhlIGFwb3N0cm9waGUgKi99XG4gICAgICAgICAgICBJdCYjMzk7cyBhbiBORlQgY29sbGVjdGlvbiBmb3IgZGV2ZWxvcGVycyBpbiBDcnlwdG8uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICB7bnVtT2ZXaGl0ZWxpc3RlZH0gaGF2ZSBhbHJlYWR5IGpvaW5lZCB0aGUgV2hpdGVsaXN0XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3JlbmRlckJ1dHRvbigpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfSBzcmM9XCIuL2NyeXB0by1kZXZzLnN2Z1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgTWFkZSB3aXRoICYjMTAwODQ7IGJ5IENyeXB0byBEZXZzXG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJXZWIzTW9kYWwiLCJDb250cmFjdCIsInByb3ZpZGVycyIsInN0eWxlcyIsImpzb25XaGl0ZWxpc3QiLCJIb21lIiwid2FsbGV0Q29ubmVjdGVkIiwic2V0V2FsbGV0Q29ubmVjdGVkIiwiam9pbmVkV2hpdGVsaXN0Iiwic2V0Sm9pbmVkV2hpdGVsaXN0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJudW1PZldoaXRlbGlzdGVkIiwic2V0TnVtT2ZXaGl0ZWxpc3RlZCIsIndlYjNNb2RlbFJlZiIsImFiaSIsIldISVRFTElTVF9DT05UUkFDVF9BRERSRVNTIiwiZ2V0UHJvdmlkZXJPclNpZ25lciIsIm5lZWRTaWduZXJzIiwicHJvdmlkZXIiLCJjdXJyZW50IiwiY29ubmVjdCIsIndlYjNQcm92aWRlciIsIldlYjNQcm92aWRlciIsImNoYWluSWQiLCJnZXROZXR3b3JrIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImFsZXJ0IiwiRXJyb3IiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJhZGRBZGRyZXNzVG9XaGl0ZWxpc3QiLCJ3aGl0ZWxpc3RDb250cmFjdCIsInR4biIsImFkZEFkZHJlc3MiLCJ3YWl0IiwiZ2V0Tm9PZndoaXRlbGlzdGVkIiwiZXJyb3IiLCJfbnVtYmVyT2ZXaGl0ZWxpc3RlZCIsIm51bVdoaXRlbGlzdGVkQWRkcmVzcyIsImNoZWNrV2hpdGVsaXN0QWRkcmVzcyIsImFkZHJlc3MiLCJnZXRBZGRyZXNzIiwiX2pvaW5lZFdoaXRlbGlzdCIsImlzV2hpdGVsaXN0QWRkcmVzcyIsImNvbm5lY3RXYWxsZXQiLCJyZW5kZXJCdXR0b24iLCJkaXYiLCJjbGFzc05hbWUiLCJkZXNjcmlwdGlvbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJuZXR3b3JrIiwicHJvdmlkZXJPcHRpb25zIiwiZGlzYWJsZUluamVjdGVkUHJvdmlkZXIiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImgxIiwiaW1nIiwiaW1hZ2UiLCJzcmMiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/page.js\n"));

/***/ })

});