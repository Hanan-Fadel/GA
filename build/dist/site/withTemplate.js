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

var _arwes = require('arwes');

var _createAppTheme = require('./createAppTheme');

var _createAppTheme2 = _interopRequireDefault(_createAppTheme);

var _Template = require('./components/Template');

var _Template2 = _interopRequireDefault(_Template);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var resources = {
  background: {
    small: '/static/img/background-small.jpg',
    medium: '/static/img/background-medium.jpg',
    large: '/static/img/background-large.jpg',
    xlarge: '/static/img/background-xlarge.jpg'
  },
  pattern: '/static/img/glow.png'
};

var sounds = {
  shared: {
    volume: 0.6
  },
  players: {
    click: {
      sound: { src: ['/static/sound/click.mp3'] },
      settings: { oneAtATime: true }
    },
    typing: {
      sound: { src: ['/static/sound/typing.mp3'] },
      settings: { oneAtATime: true }
    },
    deploy: {
      sound: { src: ['/static/sound/deploy.mp3'] },
      settings: { oneAtATime: true }
    }
  }
};

exports.default = function (App) {
  return function (props) {
    return _react2.default.createElement(_arwes.ThemeProvider, { theme: (0, _arwes.createTheme)((0, _createAppTheme2.default)()) }, _react2.default.createElement(_arwes.SoundsProvider, { sounds: (0, _arwes.createSounds)(sounds) }, _react2.default.createElement(_Template2.default, null, _react2.default.createElement(App, _extends({ resources: resources }, props)))));
  };
};