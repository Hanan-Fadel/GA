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

var _polished = require('polished');

var generateColor = function generateColor(color) {
  return {
    base: color,
    light: (0, _polished.lighten)(0.2, color),
    dark: (0, _polished.darken)(0.2, color)
  };
};

var generateBackground = function generateBackground(color) {
  return {
    level0: color,
    level1: (0, _polished.lighten)(0.015, color),
    level2: (0, _polished.lighten)(0.030, color),
    level3: (0, _polished.lighten)(0.045, color)
  };
};

exports.default = function () {
  var theme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _extends({}, theme, {
    color: _extends({
      primary: generateColor('#30fffe')
    }, theme.color),
    background: _extends({
      primary: generateBackground('#031212')
    }, theme.background)
  });
};