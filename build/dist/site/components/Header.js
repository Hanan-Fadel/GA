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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpdGUvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsic3R5bGVzIiwicm9vdCIsInRleHRBbGlnbiIsIndyYXAiLCJwYWRkaW5nIiwidGhlbWUiLCJsaW5rcyIsIm1hcmdpblRvcCIsInJlc3BvbnNpdmUiLCJzbWFsbCIsIkhlYWRlciIsInByb3BzIiwiY2xhc3NlcyIsImNsYXNzTmFtZSIsIm9uTGluayIsImV0YyIsImNscyIsImFuaW0iLCJlbnRlcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU0sU0FBUyxTQUFULEFBQVMsY0FBQTs7O2lCQUFBLEFBQ1AsQUFDTyxBQUViO0FBSE0sQUFDSjs7ZUFHUyxDQUFDLE1BQUQsQUFBTyxTQUxMLEFBSVAsQUFDSyxBQUFnQixBQUUzQjtBQUhNLEFBQ0o7O2lCQUdXLE1BQUEsQUFBTSxVQVJOLEFBT04sQUFDc0I7QUFEdEIsQUFDTDtBQVBGLDhCQVN1QixNQUFBLEFBQU0sV0FBTixBQUFpQixRQVYzQixBQVVtQzs7aUJBQVMsQUFDakQsQUFDTyxBQUViO0FBSE0sQUFDSjs7aUJBRUssQUFDTSxBQUNYO2lCQWhCUyxBQVU0QyxBQUloRCxBQUVNO0FBRk4sQUFDTDtBQUxxRCxBQUN2RDtBQVhKOztBQXFCQSxJQUFNLFNBQVMsU0FBVCxBQUFTLGNBQVM7TUFBQSxBQUVwQixRQUZvQixBQU9sQixNQVBrQixBQUVwQjtNQUZvQixBQUdwQixVQUhvQixBQU9sQixNQVBrQixBQUdwQjtNQUhvQixBQUlwQixZQUpvQixBQU9sQixNQVBrQixBQUlwQjtNQUpvQixBQUtwQixTQUxvQixBQU9sQixNQVBrQixBQUtwQjtNQUxvQixBQU1qQiwrQkFOaUIsQUFPbEIseUNBQ0o7O01BQU0sTUFBTSwwQkFBRyxRQUFILEFBQVcsTUFBdkIsQUFBWSxBQUFpQixBQUM3Qjt5QkFDRyxxQkFBRDthQUFBLEFBRUU7ZUFGRixBQUVhO0FBRFgsS0FERixBQUdNLEFBRUgsc0JBQUE7V0FDRCxnQkFBQyxxQkFBRCxXQUFNLFdBQVcsUUFBakIsQUFBeUIsQUFDdkIsd0JBQUMscUJBQUQsT0FBSyxVQUFMLEFBQ0Usd0JBQUMscUJBQUQsT0FBSyxHQUFMLEFBQVEsSUFBSSxHQUFaLEFBQWUsQUFDYixtQ0FBQyxRQUFELFdBQU8sTUFBTSxLQUFiLEFBQWtCLFNBQVMsUUFGL0IsQUFDRSxBQUNFLEFBQW1DLEFBRXJDLDRCQUFDLHFCQUFELE9BQUssR0FBTCxBQUFRLElBQUksR0FBWixBQUFlLEdBQUcsV0FBVyxRQUE3QixBQUFxQyxBQUNuQyx1Q0FBQyxhQUFELFdBQVksTUFBTSxLQUFsQixBQUF1QixTQUFTLFFBUHJDLEFBQ0QsQUFDRSxBQUlFLEFBQ0UsQUFBd0M7QUFibEQsQUFDRSxBQW1CSCxHQW5CRztBQVZKOztrQkErQmUsdUJBQUEsQUFBVyxRQUFYLEFBQW1CLEEiLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zY2hlbi9Eb3dubG9hZHMvcm9tZWxwZXJlei5jb20tbWFzdGVyIn0=