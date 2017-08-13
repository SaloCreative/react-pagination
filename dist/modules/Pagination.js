'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var styles = {
  pagination: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    padding: '0',
    listStyle: 'none',
    justifyContent: 'center'
  },
  pagination__item: {
    height: '40px',
    width: '40px',
    margin: '0 5px',
    transition: 'all 0.3s ease-in-out',
    background: function background(props) {
      return props.styles.background;
    },
    '&:hover': {
      background: function background(props) {
        return props.styles.highlightBackground;
      },
      color: function color(props) {
        return props.styles.activeColour;
      }
    },
    '&.disabled': {
      background: function background(props) {
        return props.styles.background;
      },
      opacity: '0.4'
    },
    '&.active': {
      background: function background(props) {
        return props.styles.activeBackground;
      },
      color: function color(props) {
        return props.styles.activeColour;
      }
    }
  },
  a: {
    alignItems: 'center',
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    cursor: 'pointer',
    '.disabled &': {
      cursor: 'default',
      color: '#000'
    }
  }
};

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
    var classes = _props.classes;

    if (pages > 1) {
      if (page < pages) {
        return _react2['default'].createElement(
          'li',
          { className: 'pagination__next ' + classes.pagination__item },
          _react2['default'].createElement(
            'a',
            { className: classes.a, 'data-page': page + 1, onClick: this.props.itemClicked() },
            this.props.next
          )
        );
      }
      return _react2['default'].createElement(
        'li',
        { className: 'pagination__next ' + classes.pagination__item + ' disabled' },
        _react2['default'].createElement(
          'a',
          { className: classes.a },
          this.props.next
        )
      );
    }
    return null;
  };

  return PaginationNext;
})(_react.Component);

PaginationNext.propTypes = {
  page: _propTypes2['default'].number,
  pages: _propTypes2['default'].number,
  itemClicked: _propTypes2['default'].func.isRequired,
  classes: _propTypes2['default'].object.isRequired
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
    var classes = _props2.classes;

    if (pages > 1) {
      if (page > 1) {
        return _react2['default'].createElement(
          'li',
          { className: 'pagination__previous ' + classes.pagination__item },
          _react2['default'].createElement(
            'a',
            { className: classes.a, 'data-page': page - 1, onClick: this.props.itemClicked() },
            this.props.previous
          )
        );
      }
      return _react2['default'].createElement(
        'li',
        { className: 'pagination__previous ' + classes.pagination__item + ' disabled' },
        _react2['default'].createElement(
          'a',
          { className: classes.a },
          this.props.previous
        )
      );
    }
    return null;
  };

  return PaginationPrevious;
})(_react.Component);

PaginationPrevious.propTypes = {
  page: _propTypes2['default'].number,
  pages: _propTypes2['default'].number,
  itemClicked: _propTypes2['default'].func.isRequired,
  classes: _propTypes2['default'].object.isRequired
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
    var classes = _props3.classes;

    var pages = Math.ceil(total / perPage);
    var pageItems = [];
    if (pages > 1) {
      for (var i = 1; i <= pages; i++) {
        pageItems.push(_react2['default'].createElement(
          'li',
          { key: i, className: 'pagination__item ' + classes.pagination__item + ' ' + (i == page ? 'active' : '') },
          _react2['default'].createElement(
            'a',
            { className: classes.a, 'data-page': i, onClick: this.props.changePage() },
            i
          )
        ));
      }
    }
    return _react2['default'].createElement(
      'ul',
      { className: 'pagination ' + classes.pagination },
      _react2['default'].createElement(PaginationPrevious, {
        page: page,
        pages: pages,
        itemClicked: function (e) {
          return _this.props.changePage(e);
        },
        classes: classes,
        previous: this.props.previous }),
      pageItems,
      _react2['default'].createElement(PaginationNext, {
        page: page,
        pages: pages,
        itemClicked: function (e) {
          return _this.props.changePage(e);
        },
        classes: classes,
        next: this.props.next })
    );
  };

  return Pagination;
})(_react.Component);

Pagination.defaultProps = {
  perPage: 25,
  page: 1,
  styles: {
    colour: '#000',
    activeColour: '#FFF',
    background: '#FFF',
    highlightBackground: '#CECECE',
    activeBackground: '#000'
  },
  previous: '<<',
  next: '>>'
};

Pagination.propTypes = {
  perPage: _propTypes2['default'].number,
  total: _propTypes2['default'].number.isRequired,
  page: _propTypes2['default'].number,
  changePage: _propTypes2['default'].func.isRequired,
  classes: _propTypes2['default'].object.isRequired,
  styles: _propTypes2['default'].object,
  previous: _propTypes2['default'].string,
  next: _propTypes2['default'].string
};

exports['default'] = _reactJss2['default'](styles)(Pagination);
module.exports = exports['default'];