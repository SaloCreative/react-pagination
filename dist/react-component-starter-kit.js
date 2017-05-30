(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["ReactComponentStarterKit"] = factory(require("React"));
	else
		root["ReactComponentStarterKit"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
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

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _Pagination = __webpack_require__(1);

	var _Pagination2 = _interopRequireDefault(_Pagination);

	exports['default'] = _Pagination2['default'];
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var PaginationNext = (function (_Component) {
	  _inherits(PaginationNext, _Component);

	  function PaginationNext() {
	    _classCallCheck(this, PaginationNext);

	    _get(Object.getPrototypeOf(PaginationNext.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(PaginationNext, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var page = _props.page;
	      var pages = _props.pages;

	      if (pages > 1) {
	        if (page < pages) {
	          return _react2['default'].createElement(
	            'li',
	            { className: 'pagination__next' },
	            _react2['default'].createElement(
	              'a',
	              { 'data-page': page + 1, onClick: this.props.itemClicked() },
	              'Next'
	            )
	          );
	        }
	        return _react2['default'].createElement(
	          'li',
	          { className: 'pagination__next disabled' },
	          _react2['default'].createElement(
	            'a',
	            null,
	            'Next'
	          )
	        );
	      }
	      return null;
	    }
	  }]);

	  return PaginationNext;
	})(_react.Component);

	PaginationNext.propTypes = {
	  page: _react.PropTypes.number,
	  pages: _react.PropTypes.number,
	  itemClicked: _react.PropTypes.func.isRequired
	};

	var PaginationPrevious = (function (_Component2) {
	  _inherits(PaginationPrevious, _Component2);

	  function PaginationPrevious() {
	    _classCallCheck(this, PaginationPrevious);

	    _get(Object.getPrototypeOf(PaginationPrevious.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(PaginationPrevious, [{
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var page = _props2.page;
	      var pages = _props2.pages;

	      if (pages > 1) {
	        if (page > 1) {
	          return _react2['default'].createElement(
	            'li',
	            { className: 'pagination__previous' },
	            _react2['default'].createElement(
	              'a',
	              { 'data-page': page - 1, onClick: this.props.itemClicked() },
	              'Previous'
	            )
	          );
	        }
	        return _react2['default'].createElement(
	          'li',
	          { className: 'pagination__previous disabled' },
	          _react2['default'].createElement(
	            'a',
	            null,
	            'Previous'
	          )
	        );
	      }
	      return null;
	    }
	  }]);

	  return PaginationPrevious;
	})(_react.Component);

	PaginationPrevious.propTypes = {
	  page: _react.PropTypes.number,
	  pages: _react.PropTypes.number,
	  itemClicked: _react.PropTypes.func.isRequired
	};

	var Pagination = (function (_Component3) {
	  _inherits(Pagination, _Component3);

	  function Pagination() {
	    _classCallCheck(this, Pagination);

	    _get(Object.getPrototypeOf(Pagination.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Pagination, [{
	    key: 'render',
	    value: function render() {
	      var _this = this;

	      var _props3 = this.props;
	      var perPage = _props3.perPage;
	      var total = _props3.total;
	      var page = _props3.page;

	      var pages = Math.ceil(total / perPage);
	      var pageItems = [];
	      if (pages > 1) {
	        for (var i = 1; i <= pages; i++) {
	          pageItems.push(_react2['default'].createElement(
	            'li',
	            { className: 'active' },
	            _react2['default'].createElement(
	              'a',
	              { 'data-page': i, onClick: this.props.changePage() },
	              i
	            )
	          ));
	        }
	      }
	      return _react2['default'].createElement(
	        'ul',
	        { className: 'pagination' },
	        _react2['default'].createElement(PaginationPrevious, {
	          page: page,
	          pages: pages,
	          itemClicked: function (e) {
	            return _this.props.changePage(e);
	          } }),
	        pageItems,
	        _react2['default'].createElement(PaginationNext, {
	          page: page,
	          pages: pages,
	          itemClicked: function (e) {
	            return _this.props.changePage(e);
	          } })
	      );
	    }
	  }]);

	  return Pagination;
	})(_react.Component);

	exports['default'] = Pagination;

	Pagination.defaultProps = {
	  perPage: 25,
	  page: 1
	};

	Pagination.propTypes = {
	  perPage: _react.PropTypes.number,
	  total: _react.PropTypes.number.isRequired,
	  page: _react.PropTypes.number,
	  changePage: _react.PropTypes.func.isRequired
	};
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
;