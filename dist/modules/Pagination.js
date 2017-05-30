'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var PaginationNext = (function (_Component) {
  _inherits(PaginationNext, _Component);

  function PaginationNext() {
    _classCallCheck(this, PaginationNext);

    _Component.apply(this, arguments);
  }

  PaginationNext.prototype.render = function render() {
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
  };

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

    _Component2.apply(this, arguments);
  }

  PaginationPrevious.prototype.render = function render() {
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
  };

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

    _Component3.apply(this, arguments);
  }

  Pagination.prototype.render = function render() {
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
  };

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