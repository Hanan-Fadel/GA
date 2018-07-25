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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpdGUvY29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbImxpbmtzTGlzdCIsIm5hbWUiLCJpY29uIiwiaHJlZiIsInRhcmdldCIsInN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwidGV4dEFsaWduIiwibGluayIsImxpbmVIZWlnaHQiLCJmb250U2l6ZSIsIm1hcmdpblJpZ2h0IiwidGhlbWUiLCJwYWRkaW5nIiwiYnV0dG9uIiwiTmF2aWdhdGlvbiIsInByb3BzIiwiY2xhc3NlcyIsInNob3ciLCJvbkxpbmsiLCJjbGFzc05hbWUiLCJldGMiLCJjbHMiLCJtYXAiLCJsaW5rSXRlbSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTTtRQUFhLEFBQ1gsQUFDTjtRQUZpQixBQUVYLEFBQ047UUFIZ0IsQUFBQyxBQUdYO0FBSFcsQUFDakIsQ0FEZ0I7UUFJZixBQUNLLEFBQ047UUFGQyxBQUVLLEFBQ047UUFIQyxBQUdLLEFBQ047VUFSRixBQUFrQixBQUlmLEFBSU87QUFKUCxBQUNEOztBQU1GLElBQU0sU0FBUyxTQUFULEFBQVMsY0FBQTs7O2VBQ1AsQUFDSyxBQUNUO2lCQUhxQixBQUNqQixBQUVPLEFBRWI7QUFKTSxBQUNKOztlQUdJLEFBQ0ssQUFDVDtrQkFGSSxBQUVRLEFBQ1o7Z0JBSEksQUFHTSxBQUNWOztxQkFDZSxNQUFBLEFBQU0sVUFEZCxBQUN3QixBQUM3QjtrQkFYbUIsQUFLakIsQUFJRyxBQUVLLEFBR2Q7QUFMUyxBQUNMO0FBTEUsQUFDSjs7ZUFTUyxDQUFBLEFBQUMsR0FBRyxNQUFBLEFBQU0sVUFmUixBQUFVLEFBY2YsQUFDRyxBQUFvQjtBQUR2QixBQUNOO0FBZnFCLEFBQ3ZCO0FBREY7O0FBbUJBLElBQU0sYUFBYSxTQUFiLEFBQWEsa0JBQVM7TUFBQSxBQUV4QixRQUZ3QixBQVF0QixNQVJzQixBQUV4QjtNQUZ3QixBQUd4QixVQUh3QixBQVF0QixNQVJzQixBQUd4QjtNQUh3QixBQUl4QixPQUp3QixBQVF0QixNQVJzQixBQUl4QjtNQUp3QixBQUt4QixTQUx3QixBQVF0QixNQVJzQixBQUt4QjtNQUx3QixBQU14QixZQU53QixBQVF0QixNQVJzQixBQU14QjtNQU53QixBQU9yQiwrQkFQcUIsQUFRdEIsOENBQ0o7O01BQU0sTUFBTSwwQkFBRyxRQUFILEFBQVcsTUFBdkIsQUFBWSxBQUFpQixBQUM3Qjt5QkFDRSxjQUFBLGtCQUFLLFdBQUwsQUFBZ0IsT0FBaEIsQUFBeUIsQUFDdEIsZ0JBQUEsQUFBVSxJQUFJLFVBQUEsQUFBQyxVQUFELEFBQVcsT0FBWDsyQkFDZCxxQkFBRDtXQUFBLEFBQ08sQUFDTDtpQkFBVyxRQUZiLEFBRXFCLEFBQ25CO1lBQU0sU0FIUixBQUdpQixBQUNmO2NBSkYsQUFJVSxBQUNSO2NBQVEsU0FMVixBQUttQixBQUVqQjtBQU5BLEtBREYsa0JBT0cscUJBQUQsYUFBVyxXQUFXLFFBQXRCLEFBQThCLFFBQVEsU0FBdEMsTUFBOEMsT0FBOUMsQUFBb0QsQUFDbEQsNEJBQUMseUJBQUQsV0FBVSxNQUFWLEFBQWdCLE1BQU0sTUFBTSxTQUE1QixBQUFxQyxBQUNsQyxpQkFWUSxBQUNmLEFBT0UsQUFDRSxBQUNZO0FBWnBCLEFBQ0UsQUFDRyxBQWlCTixJQWxCRztBQVhKOztrQkErQmUsdUJBQUEsQUFBVyxRQUFYLEFBQW1CLEEiLCJmaWxlIjoiTmF2aWdhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2NoZW4vRG93bmxvYWRzL3JvbWVscGVyZXouY29tLW1hc3RlciJ9