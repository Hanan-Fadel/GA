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

var _router = require('next/dist/lib/router/index.js');

var _router2 = _interopRequireDefault(_router);

var _arwes = require('arwes');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

var isExtern = /^https?\:\/\//;

var Link = function Link(props) {
  var theme = props.theme,
      classes = props.classes,
      context = props.context,
      sounds = props.sounds,
      href = props.href,
      target = props.target,
      children = props.children,
      onLink = props.onLink,
      onClick = props.onClick,
      etc = _objectWithoutProperties(props, ['theme', 'classes', 'context', 'sounds', 'href', 'target', 'children', 'onLink', 'onClick']);

  var linkTrigger = function linkTrigger(ev) {
    ev.preventDefault();
    sounds.click && sounds.click.play();
    onClick && onClick(ev);

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search;

    if (pathname + search === href) {
      return;
    }

    if (!target) {
      onLink && onLink(ev);
    }

    setTimeout(function () {
      if (target) {
        window.open(href);
      } else if (isExtern.test(href)) {
        window.location.href = href;
      } else {
        _router2.default.push(href);
      }
    }, theme.animTime);
  };

  return _react2.default.createElement('a', _extends({}, etc, { href: href, target: target, onClick: linkTrigger }), children);
};

exports.default = (0, _arwes.withStyles)(function () {})((0, _arwes.withSounds)()(Link));