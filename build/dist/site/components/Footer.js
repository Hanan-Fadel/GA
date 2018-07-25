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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _arwes = require('arwes');

var _TextIcon = require('./TextIcon');

var _TextIcon2 = _interopRequireDefault(_TextIcon);

var _Wrap = require('./Wrap');

var _Wrap2 = _interopRequireDefault(_Wrap);

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
    content: {},
    left: {
      marginBottom: theme.margin / 2
    },
    right: {}
  }, '@media screen and (min-width: ' + (theme.responsive.small + 1) + 'px)', {
    root: {
      textAlign: 'left'
    },
    content: {
      display: 'flex'
    },
    left: {
      margin: 0,
      flex: '1 1 auto'
    },
    right: {
      flex: '1 1 auto',
      textAlign: 'right'
    }
  });
};

var Footer = function Footer(props) {
  var theme = props.theme,
      classes = props.classes,
      className = props.className,
      onLink = props.onLink,
      etc = _objectWithoutProperties(props, ['theme', 'classes', 'className', 'onLink']);

  var cls = (0, _classnames2.default)(classes.root, className);

  return _react2.default.createElement(_arwes.Footer, _extends({ className: cls }, etc), function (anim) {
    return _react2.default.createElement(_Wrap2.default, { className: classes.wrap }, _react2.default.createElement(_arwes.Row, { noMargin: true, col: true, s: 12 }, _react2.default.createElement('div', { className: classes.content }, _react2.default.createElement('div', { className: classes.left }, _react2.default.createElement(_Link2.default, { href: 'https://github.com/romelperez/romelperez.com/blob/master/LICENSE', target: 'license', onLink: onLink }, _react2.default.createElement(_TextIcon2.default, { show: anim.entered, icon: 'copyright' }, '2018 Romel P\xE9rez'))), _react2.default.createElement('div', { className: classes.right }, _react2.default.createElement(_Link2.default, { href: 'https://arwes.romelperez.com', target: 'arwes', onLink: onLink }, _react2.default.createElement(_TextIcon2.default, { show: anim.entered, icon: 'chemical-weapon' }, 'Made with Arwes'))))));
  });
};

Footer.propTypes = {
  onLink: _propTypes2.default.func
};

exports.default = (0, _arwes.withStyles)(styles)(Footer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpdGUvY29tcG9uZW50cy9Gb290ZXIuanMiXSwibmFtZXMiOlsic3R5bGVzIiwicm9vdCIsInRleHRBbGlnbiIsIndyYXAiLCJwYWRkaW5nIiwidGhlbWUiLCJjb250ZW50IiwibGVmdCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbiIsInJpZ2h0IiwicmVzcG9uc2l2ZSIsInNtYWxsIiwiZGlzcGxheSIsImZsZXgiLCJGb290ZXIiLCJwcm9wcyIsImNsYXNzZXMiLCJjbGFzc05hbWUiLCJvbkxpbmsiLCJldGMiLCJjbHMiLCJhbmltIiwiZW50ZXJlZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLFNBQVMsU0FBVCxBQUFTLGNBQUE7OztpQkFBQSxBQUNQLEFBQ08sQUFFYjtBQUhNLEFBQ0o7O2VBR1MsQ0FBQyxNQUFELEFBQU8sU0FMTCxBQUlQLEFBQ0ssQUFBZ0IsQUFFM0I7QUFITSxBQUNKO2FBTFcsQUFPSixBQUNUOztvQkFDZ0IsTUFBQSxBQUFNLFNBVFQsQUFRUCxBQUN5QixBQUUvQjtBQUhNLEFBQ0o7V0FUVyxBQVdOO0FBVlAseUNBWWtDLE1BQUEsQUFBTSxXQUFOLEFBQWlCLFFBYnRDLEFBYThDOztpQkFBUyxBQUM1RCxBQUNPLEFBRWI7QUFITSxBQUNKOztlQUZnRSxBQUl6RCxBQUNFLEFBRVg7QUFIUyxBQUNQOztjQUVJLEFBQ0ksQUFDUjtZQVRnRSxBQU81RCxBQUVFLEFBRVI7QUFKTSxBQUNKOztZQUdLLEFBQ0MsQUFDTjtpQkExQlMsQUFhdUQsQUFXM0QsQUFFTTtBQUZOLEFBQ0w7QUFaZ0UsQUFDbEU7QUFkSjs7QUErQkEsSUFBTSxTQUFTLFNBQVQsQUFBUyxjQUFTO01BQUEsQUFFcEIsUUFGb0IsQUFPbEIsTUFQa0IsQUFFcEI7TUFGb0IsQUFHcEIsVUFIb0IsQUFPbEIsTUFQa0IsQUFHcEI7TUFIb0IsQUFJcEIsWUFKb0IsQUFPbEIsTUFQa0IsQUFJcEI7TUFKb0IsQUFLcEIsU0FMb0IsQUFPbEIsTUFQa0IsQUFLcEI7TUFMb0IsQUFNakIsK0JBTmlCLEFBT2xCLHlDQUNKOztNQUFNLE1BQU0sMEJBQUcsUUFBSCxBQUFXLE1BQXZCLEFBQVksQUFBaUIsQUFFN0I7O3lCQUNHLHFCQUFELG1CQUFhLFdBQWIsQUFBd0IsT0FBeEIsQUFBaUMsQUFDOUIsc0JBQUE7V0FDRCxnQkFBQyxxQkFBRCxXQUFNLFdBQVcsUUFBakIsQUFBeUIsQUFDdkIsd0JBQUMscUJBQUQsT0FBSyxVQUFMLE1BQWMsS0FBZCxNQUFrQixHQUFsQixBQUFxQixBQUNuQixzQkFBQSxjQUFBLFNBQUssV0FBVyxRQUFoQixBQUF3QixBQUN0QiwyQkFBQSxjQUFBLFNBQUssV0FBVyxRQUFoQixBQUF3QixBQUN0Qix3QkFBQyxxQkFBRCxXQUFNLE1BQU4sQUFBVyxvRUFBbUUsUUFBOUUsQUFBcUYsV0FBVSxRQUEvRixBQUF1RyxBQUNyRywwQkFBQyx5QkFBRCxXQUFVLE1BQU0sS0FBaEIsQUFBcUIsU0FBUyxNQUE5QixBQUFtQyxlQUh6QyxBQUNFLEFBQ0UsQUFDRSxBQUdKLDBDQUFBLGNBQUEsU0FBSyxXQUFXLFFBQWhCLEFBQXdCLEFBQ3RCLHlCQUFDLHFCQUFELFdBQU0sTUFBTixBQUFXLGdDQUErQixRQUExQyxBQUFpRCxTQUFRLFFBQXpELEFBQWlFLEFBQy9ELDBCQUFDLHlCQUFELFdBQVUsTUFBTSxLQUFoQixBQUFxQixTQUFTLE1BQTlCLEFBQW1DLHFCQVg1QyxBQUNELEFBQ0UsQUFDRSxBQU1FLEFBQ0UsQUFDRTtBQWJkLEFBQ0UsQUFxQkgsR0FyQkc7QUFYSjs7QUFrQ0EsT0FBQSxBQUFPO1VBQ0csb0JBRFYsQUFBbUIsQUFDQztBQURELEFBQ2pCOztrQkFHYSx1QkFBQSxBQUFXLFFBQVgsQUFBbUIsQSIsImZpbGUiOiJGb290ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NjaGVuL0Rvd25sb2Fkcy9yb21lbHBlcmV6LmNvbS1tYXN0ZXIifQ==