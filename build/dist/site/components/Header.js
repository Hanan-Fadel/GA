'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _arwes = require('arwes');

var _Wrap = require('./Wrap');

var _Wrap2 = _interopRequireDefault(_Wrap);

var _Brand = require('./Brand');

var _Brand2 = _interopRequireDefault(_Brand);

var _Navigation = require('./Navigation');

var _Navigation2 = _interopRequireDefault(_Navigation);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

var styles = function styles(theme) {
  return _defineProperty({
    root: {
      textAlign: 'center'
    },
    wrap: {
      padding: [theme.padding, 0]
    },
    links: {
      marginTop: theme.padding / 2
    }
  }, '@media (min-width: ' + (theme.responsive.small + 1) + 'px)', {
    root: {
      textAlign: 'left'
    },
    links: {
      marginTop: 0,
      textAlign: 'right'
    }
  });
};

var Header = function Header(props) {
  var theme = props.theme,
      classes = props.classes,
      className = props.className,
      onLink = props.onLink,
      etc = _objectWithoutProperties(props, ['theme', 'classes', 'className', 'onLink']);

  var cls = (0, _classnames2.default)(classes.root, className);
  return _react2.default.createElement(_arwes.Header, _extends({
    animate: true,
    className: cls
  }, etc), function (anim) {
    return _react2.default.createElement(_Wrap2.default, { className: classes.wrap }, _react2.default.createElement(_arwes.Row, { noMargin: true }, _react2.default.createElement(_arwes.Col, { s: 12, m: 6 }, _react2.default.createElement(_Brand2.default, { show: anim.entered, onLink: onLink })), _react2.default.createElement(_arwes.Col, { s: 12, m: 6, className: classes.links }, _react2.default.createElement(_Navigation2.default, { show: anim.entered, onLink: onLink }))));
  });
};

exports.default = (0, _arwes.withStyles)(styles)(Header);