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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

var styles = function styles() {
  return {
    root: {
      margin: '0 auto',
      maxWidth: 800
    }
  };
};

var Wrap = function Wrap(props) {
  var theme = props.theme,
      classes = props.classes,
      className = props.className,
      children = props.children,
      etc = _objectWithoutProperties(props, ['theme', 'classes', 'className', 'children']);

  var cls = (0, _classnames2.default)(classes.root, className);
  return _react2.default.createElement('div', _extends({ className: cls }, etc), children);
};

exports.default = (0, _arwes.withStyles)(styles)(Wrap);