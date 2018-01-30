/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: 'default' is not exported by src/red_guy.png\n    at error (/Users/derek.miranda/Projects/img-import-test/node_modules/rollup/dist/rollup.js:170:15)\n    at Module.error (/Users/derek.miranda/Projects/img-import-test/node_modules/rollup/dist/rollup.js:17194:9)\n    at handleMissingExport (/Users/derek.miranda/Projects/img-import-test/node_modules/rollup/dist/rollup.js:17455:12)\n    at /Users/derek.miranda/Projects/img-import-test/node_modules/rollup/dist/rollup.js:19028:56\n    at Array.reduce (<anonymous>)\n    at Graph.handleMissingExport (/Users/derek.miranda/Projects/img-import-test/node_modules/rollup/dist/rollup.js:19027:27)\n    at Module.trace (/Users/derek.miranda/Projects/img-import-test/node_modules/rollup/dist/rollup.js:17291:28)\n    at ModuleScope.findVariable (/Users/derek.miranda/Projects/img-import-test/node_modules/rollup/dist/rollup.js:14430:28)\n    at Node.Identifier.bindNode (/Users/derek.miranda/Projects/img-import-test/node_modules/rollup/dist/rollup.js:12114:40)\n    at NodeBase.bind (/Users/derek.miranda/Projects/img-import-test/node_modules/rollup/dist/rollup.js:11071:14)\n    at /Users/derek.miranda/Projects/img-import-test/node_modules/rollup/dist/rollup.js:11077:56\n    at /Users/derek.miranda/Projects/img-import-test/node_modules/rollup/dist/rollup.js:11091:66\n    at Array.forEach (<anonymous>)\n    at /Users/derek.miranda/Projects/img-import-test/node_modules/rollup/dist/rollup.js:11091:23\n    at Array.forEach (<anonymous>)\n    at NodeBase.eachChild (/Users/derek.miranda/Projects/img-import-test/node_modules/rollup/dist/rollup.js:11086:19)\n    at NodeBase.bindChildren (/Users/derek.miranda/Projects/img-import-test/node_modules/rollup/dist/rollup.js:11077:14)\n    at NodeBase.bind (/Users/derek.miranda/Projects/img-import-test/node_modules/rollup/dist/rollup.js:11070:14)\n    at /Users/derek.miranda/Projects/img-import-test/node_modules/rollup/dist/rollup.js:11077:56\n    at /Users/derek.miranda/Projects/img-import-test/node_modules/rollup/dist/rollup.js:11094:17\n    at Array.forEach (<anonymous>)\n    at NodeBase.eachChild (/Users/derek.miranda/Projects/img-import-test/node_modules/rollup/dist/rollup.js:11086:19)\n    at NodeBase.bindChildren (/Users/derek.miranda/Projects/img-import-test/node_modules/rollup/dist/rollup.js:11077:14)\n    at NodeBase.bind (/Users/derek.miranda/Projects/img-import-test/node_modules/rollup/dist/rollup.js:11070:14)\n    at /Users/derek.miranda/Projects/img-import-test/node_modules/rollup/dist/rollup.js:17138:61\n    at Array.forEach (<anonymous>)\n    at Module.bindReferences (/Users/derek.miranda/Projects/img-import-test/node_modules/rollup/dist/rollup.js:17138:23)\n    at /Users/derek.miranda/Projects/img-import-test/node_modules/rollup/dist/rollup.js:19179:64\n    at Array.forEach (<anonymous>)\n    at Graph.link (/Users/derek.miranda/Projects/img-import-test/node_modules/rollup/dist/rollup.js:19179:22)");

/***/ })
/******/ ]);