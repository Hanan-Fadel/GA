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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpdGUvY29tcG9uZW50cy9MaW5rLmpzIl0sIm5hbWVzIjpbImlzRXh0ZXJuIiwiTGluayIsInRoZW1lIiwicHJvcHMiLCJjbGFzc2VzIiwiY29udGV4dCIsInNvdW5kcyIsImhyZWYiLCJ0YXJnZXQiLCJjaGlsZHJlbiIsIm9uTGluayIsIm9uQ2xpY2siLCJldGMiLCJsaW5rVHJpZ2dlciIsImV2IiwicHJldmVudERlZmF1bHQiLCJjbGljayIsInBsYXkiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic2VhcmNoIiwic2V0VGltZW91dCIsIm9wZW4iLCJ0ZXN0IiwiUm91dGVyIiwicHVzaCIsImFuaW1UaW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLFdBQU4sQUFBaUI7O0FBRWpCLElBQU0sT0FBTyxTQUFQLEFBQU8sWUFBUztNQUFBLEFBRWxCLFFBRmtCLEFBWWhCLE1BWmdCLEFBRWxCO01BRmtCLEFBR2xCLFVBSGtCLEFBWWhCLE1BWmdCLEFBR2xCO01BSGtCLEFBSWxCLFVBSmtCLEFBWWhCLE1BWmdCLEFBSWxCO01BSmtCLEFBS2xCLFNBTGtCLEFBWWhCLE1BWmdCLEFBS2xCO01BTGtCLEFBTWxCLE9BTmtCLEFBWWhCLE1BWmdCLEFBTWxCO01BTmtCLEFBT2xCLFNBUGtCLEFBWWhCLE1BWmdCLEFBT2xCO01BUGtCLEFBUWxCLFdBUmtCLEFBWWhCLE1BWmdCLEFBUWxCO01BUmtCLEFBU2xCLFNBVGtCLEFBWWhCLE1BWmdCLEFBU2xCO01BVGtCLEFBVWxCLFVBVmtCLEFBWWhCLE1BWmdCLEFBVWxCO01BVmtCLEFBV2YsK0JBWGUsQUFZaEIseUZBRUo7O01BQU0sY0FBYyxTQUFkLEFBQWMsWUFBQSxBQUFDLElBQU8sQUFDMUI7T0FBQSxBQUFHLEFBQ0g7V0FBQSxBQUFPLFNBQVMsT0FBQSxBQUFPLE1BQXZCLEFBQWdCLEFBQWEsQUFDN0I7ZUFBVyxRQUhlLEFBRzFCLEFBQVcsQUFBUTs7MkJBRVUsT0FMSCxBQUtVO1FBTFYsQUFLbEIsNEJBTGtCLEFBS2xCO1FBTGtCLEFBS1IsMEJBTFEsQUFLUixBQUNsQjs7UUFBSSxXQUFBLEFBQVcsV0FBZixBQUEwQixNQUFNLEFBQzlCO0FBQ0Q7QUFFRDs7UUFBSSxDQUFKLEFBQUssUUFBUSxBQUNYO2dCQUFVLE9BQVYsQUFBVSxBQUFPLEFBQ2xCO0FBRUQ7O2VBQVcsWUFBTSxBQUNmO1VBQUEsQUFBSSxRQUFRLEFBQ1Y7ZUFBQSxBQUFPLEtBQVAsQUFBWSxBQUNiO0FBRkQsaUJBR1MsU0FBQSxBQUFTLEtBQWIsQUFBSSxBQUFjLE9BQU8sQUFDNUI7ZUFBQSxBQUFPLFNBQVAsQUFBZ0IsT0FBaEIsQUFBdUIsQUFDeEI7QUFGSSxPQUFBLE1BR0EsQUFDSDt5QkFBQSxBQUFPLEtBQVAsQUFBWSxBQUNiO0FBQ0Y7QUFWRCxPQVVHLE1BVkgsQUFVUyxBQUNWO0FBekJELEFBMkJBOztTQUNFLGdCQUFBLGNBQUEsa0JBQUEsQUFBTyxPQUFLLE1BQVosQUFBa0IsTUFBTSxRQUF4QixBQUFnQyxRQUFRLFNBQXhDLEFBQWlELEFBQzlDLGdCQUZMLEFBQ0UsQUFJSDtBQTlDRDs7a0JBZ0RlLHVCQUFXLFlBQU0sQUFBRSxDQUFuQixHQUNiLHlCQURhLEFBQ2IsQUFBYSxBIiwiZmlsZSI6IkxpbmsuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NjaGVuL0Rvd25sb2Fkcy9yb21lbHBlcmV6LmNvbS1tYXN0ZXIifQ==