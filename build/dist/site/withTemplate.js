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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpdGUvd2l0aFRlbXBsYXRlLmpzIl0sIm5hbWVzIjpbInJlc291cmNlcyIsImJhY2tncm91bmQiLCJzbWFsbCIsIm1lZGl1bSIsImxhcmdlIiwieGxhcmdlIiwicGF0dGVybiIsInNvdW5kcyIsInNoYXJlZCIsInZvbHVtZSIsInBsYXllcnMiLCJjbGljayIsInNvdW5kIiwic3JjIiwic2V0dGluZ3MiLCJvbmVBdEFUaW1lIiwidHlwaW5nIiwiZGVwbG95IiwiQXBwIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQU9BOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTTs7V0FDUSxBQUNILEFBQ1A7WUFGVSxBQUVGLEFBQ1I7V0FIVSxBQUdILEFBQ1A7WUFMYyxBQUNKLEFBSUYsQUFFVjtBQU5ZLEFBQ1Y7V0FGSixBQUFrQixBQU9QO0FBUE8sQUFDaEI7O0FBU0YsSUFBTTs7WUFBUyxBQUNMLEFBQ0UsQUFFVjtBQUhRLEFBQ047OzthQUlTLEVBQUUsS0FBSyxDQURULEFBQ0UsQUFBTyxBQUFDLEFBQ2Y7Z0JBQVUsRUFBRSxZQUhQLEFBQ0EsQUFFSyxBQUFjLEFBRTFCO0FBSk8sQUFDTDs7YUFJTyxFQUFFLEtBQUssQ0FEUixBQUNDLEFBQU8sQUFBQyxBQUNmO2dCQUFVLEVBQUUsWUFQUCxBQUtDLEFBRUksQUFBYyxBQUUxQjtBQUpRLEFBQ047O2FBSU8sRUFBRSxLQUFLLENBRFIsQUFDQyxBQUFPLEFBQUMsQUFDZjtnQkFBVSxFQUFFLFlBZmxCLEFBQWUsQUFJSixBQVNDLEFBRUksQUFBYztBQUZsQixBQUNOO0FBVkssQUFDUDtBQUxXLEFBQ2I7O2tCQW1CYSxVQUFBLEFBQUMsS0FBUSxBQUN0QjtTQUFPLFVBQUEsQUFBQyxPQUFEO1dBQ0wsZ0JBQUMscUJBQUQsaUJBQWUsT0FBTyx3QkFBWSxxQkFBbEMsQUFBc0IsQUFDcEIsK0JBQUMscUJBQUQsa0JBQWdCLFFBQVEseUJBQXhCLEFBQXdCLEFBQWEsQUFDbkMsMkJBQUMseUJBQUQsU0FDRSxvQ0FBQSxBQUFDLGdCQUFJLFdBQUwsQUFBZ0IsYUFKakIsQUFDTCxBQUNFLEFBQ0UsQUFDRSxBQUErQjtBQUp2QyxBQVNEO0EiLCJmaWxlIjoid2l0aFRlbXBsYXRlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zY2hlbi9Eb3dubG9hZHMvcm9tZWxwZXJlei5jb20tbWFzdGVyIn0=