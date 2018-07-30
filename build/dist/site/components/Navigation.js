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

var _TextIcon = require('./TextIcon');

var _TextIcon2 = _interopRequireDefault(_TextIcon);

var _Link = require('./Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

var linksList = [{
  name: 'Projects',
  icon: 'apps',
  href: '/projects'
}, {
  name: 'Curriculum',
  icon: 'chip',
  href: 'https://www.linkedin.com/in/romelperez',
  target: '_blank'
}];

var styles = function styles(theme) {
  return {
    root: {
      display: 'inline-block',
      textAlign: 'left'
    },
    link: {
      display: 'inline-block',
      lineHeight: '45px',
      fontSize: 21,
      '& i': {
        marginRight: theme.padding / 2,
        fontSize: 24
      }
    },
    button: {
      padding: [0, theme.padding / 2]
    }
  };
};

var Navigation = function Navigation(props) {
  var theme = props.theme,
      classes = props.classes,
      show = props.show,
      onLink = props.onLink,
      className = props.className,
      etc = _objectWithoutProperties(props, ['theme', 'classes', 'show', 'onLink', 'className']);

  var cls = (0, _classnames2.default)(classes.root, className);
  return _react2.default.createElement('nav', _extends({ className: cls }, etc), linksList.map(function (linkItem, index) {
    return _react2.default.createElement(_Link2.default, {
      key: index,
      className: classes.link,
      href: linkItem.href,
      onLink: onLink,
      target: linkItem.target
    }, _react2.default.createElement(_arwes.Highlight, { className: classes.button, animate: true, layer: 'header' }, _react2.default.createElement(_TextIcon2.default, { show: show, icon: linkItem.icon }, linkItem.name)));
  }));
};

exports.default = (0, _arwes.withStyles)(styles)(Navigation);