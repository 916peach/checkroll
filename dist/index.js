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

throw new Error("Module build failed: Error: Cannot find module 'babel-plugin-transform-react-display-name' (While processing preset: \"E:\\\\WWW\\\\checkroll\\\\node_modules\\\\.6.24.1@babel-preset-react\\\\lib\\\\index.js\")\n    at Function.Module._resolveFilename (module.js:440:15)\n    at Function.Module._load (module.js:388:25)\n    at Module.require (module.js:468:17)\n    at require (internal/module.js:20:19)\n    at Object.<anonymous> (E:\\WWW\\checkroll\\node_modules\\.6.24.1@babel-preset-react\\lib\\index.js:17:45)\n    at Module._compile (module.js:541:32)\n    at Object.Module._extensions..js (module.js:550:10)\n    at Module.load (module.js:458:32)\n    at tryModuleLoad (module.js:417:12)\n    at Function.Module._load (module.js:409:3)\n    at Module.require (module.js:468:17)\n    at require (internal/module.js:20:19)\n    at E:\\WWW\\checkroll\\node_modules\\.6.26.0@babel-core\\lib\\transformation\\file\\options\\option-manager.js:296:17\n    at Array.map (native)\n    at OptionManager.resolvePresets (E:\\WWW\\checkroll\\node_modules\\.6.26.0@babel-core\\lib\\transformation\\file\\options\\option-manager.js:275:20)\n    at OptionManager.mergePresets (E:\\WWW\\checkroll\\node_modules\\.6.26.0@babel-core\\lib\\transformation\\file\\options\\option-manager.js:264:10)\n    at OptionManager.mergeOptions (E:\\WWW\\checkroll\\node_modules\\.6.26.0@babel-core\\lib\\transformation\\file\\options\\option-manager.js:249:14)\n    at OptionManager.init (E:\\WWW\\checkroll\\node_modules\\.6.26.0@babel-core\\lib\\transformation\\file\\options\\option-manager.js:368:12)\n    at File.initOptions (E:\\WWW\\checkroll\\node_modules\\.6.26.0@babel-core\\lib\\transformation\\file\\index.js:212:65)\n    at new File (E:\\WWW\\checkroll\\node_modules\\.6.26.0@babel-core\\lib\\transformation\\file\\index.js:135:24)\n    at Pipeline.transform (E:\\WWW\\checkroll\\node_modules\\.6.26.0@babel-core\\lib\\transformation\\pipeline.js:46:16)\n    at transpile (E:\\WWW\\checkroll\\node_modules\\.7.1.2@babel-loader\\lib\\index.js:50:20)\n    at Object.module.exports (E:\\WWW\\checkroll\\node_modules\\.7.1.2@babel-loader\\lib\\index.js:175:20)");

/***/ })
/******/ ]);