(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["App"] = factory(require("react"));
	else
		root["App"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	__webpack_require__(2);

	__webpack_require__(6);

	__webpack_require__(4);

	var _React = __webpack_require__(1);

	var _React2 = _interopRequireDefault(_React);

	var _Profile = __webpack_require__(3);

	var _Profile2 = _interopRequireDefault(_Profile);

	exports['default'] = _React2['default'].createClass({
	  displayName: 'App',

	  render: function render() {
	    return _React2['default'].createElement(
	      'div',
	      { className: 'App' },
	      _React2['default'].createElement(
	        'div',
	        { className: 'App-item' },
	        _React2['default'].createElement(_Profile2['default'], { user: this.props.userData })
	      )
	    );
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(16);
	__webpack_require__(9);


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	__webpack_require__(15);

	__webpack_require__(11);

	var _React = __webpack_require__(1);

	var _React2 = _interopRequireDefault(_React);

	var _Avatar = __webpack_require__(13);

	var _Avatar2 = _interopRequireDefault(_Avatar);

	exports['default'] = _React2['default'].createClass({
	  displayName: 'Profile',

	  render: function render() {
	    return _React2['default'].createElement(
	      'div',
	      { className: 'Profile' },
	      _React2['default'].createElement(
	        'h2',
	        { className: 'Profile-header' },
	        this.props.user.fullname
	      ),
	      _React2['default'].createElement(
	        'div',
	        { className: 'Profile-wrapAvatar' },
	        _React2['default'].createElement(
	          _Avatar2['default'],
	          { src: this.props.user.avatar.src,
	            width: '100',
	            height: '100',
	            alt: this.props.user.username },
	          _React2['default'].createElement(
	            'p',
	            null,
	            this.props.user.username
	          )
	        )
	      )
	    );
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 10 */,
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 12 */,
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	__webpack_require__(18);

	var _React = __webpack_require__(1);

	var _React2 = _interopRequireDefault(_React);

	exports['default'] = _React2['default'].createClass({
	  displayName: 'Avatar',

	  render: function render() {
	    return _React2['default'].createElement(
	      'figure',
	      { className: 'Avatar' },
	      _React2['default'].createElement('img', { className: 'Avatar-img',
	        src: this.props.src,
	        width: this.props.width,
	        height: this.props.height,
	        alt: this.props.alt }),
	      _React2['default'].createElement(
	        'figcaption',
	        { className: 'Avatar-caption' },
	        this.props.children
	      )
	    );
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 14 */,
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(20);


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 17 */,
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 19 */,
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ])
});
;