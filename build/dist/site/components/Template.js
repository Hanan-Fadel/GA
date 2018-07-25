'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _router = require("next/dist/lib/router/index.js");

var _router2 = _interopRequireDefault(_router);

var _reactGa = require("react-ga");

var _reactGa2 = _interopRequireDefault(_reactGa);

var _settings = require('../settings');

var _utils = require('../utils');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Template = function (_React$Component) {
  _inherits(Template, _React$Component);

  function Template() {
    _classCallCheck(this, Template);

    return _possibleConstructorReturn(this, (Template.__proto__ || Object.getPrototypeOf(Template)).apply(this, arguments));
  }

  _createClass(Template, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.removeServerStyles();
      this.setGA();
      this.setTitle();
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }, {
    key: 'removeServerStyles',
    value: function removeServerStyles() {
      var pagesStyles = document.querySelector('#pages-styles');
      if (pagesStyles) pagesStyles.remove();
    }
  }, {
    key: 'setGA',
    value: function setGA() {

      if (!location.origin.includes('romelperez')) return;

      if (!window.GA_INITIALIZED) {
        _reactGa2.default.initialize(_settings.googleAnalytics);

        var _window$location = window.location,
            pathname = _window$location.pathname,
            search = _window$location.search;

        _reactGa2.default.pageview(pathname + search);

        _router2.default.onRouteChangeStart = function (url) {
          _reactGa2.default.pageview(url);
        };

        window.GA_INITIALIZED = true;
      }
    }
  }, {
    key: 'setTitle',
    value: function setTitle() {
      document.title = (0, _utils.getTitle)(location.pathname);
    }
  }]);

  return Template;
}(_react2.default.Component);

exports.default = Template;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpdGUvY29tcG9uZW50cy9UZW1wbGF0ZS5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZSIsInJlbW92ZVNlcnZlclN0eWxlcyIsInNldEdBIiwic2V0VGl0bGUiLCJwcm9wcyIsImNoaWxkcmVuIiwicGFnZXNTdHlsZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJyZW1vdmUiLCJsb2NhdGlvbiIsIm9yaWdpbiIsImluY2x1ZGVzIiwid2luZG93IiwiR0FfSU5JVElBTElaRUQiLCJHQSIsImluaXRpYWxpemUiLCJnb29nbGVBbmFseXRpY3MiLCJwYXRobmFtZSIsInNlYXJjaCIsInBhZ2V2aWV3IiwiUm91dGVyIiwib25Sb3V0ZUNoYW5nZVN0YXJ0IiwidXJsIiwidGl0bGUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsQTs7Ozs7Ozs7Ozs7d0NBRUUsQUFDbkI7V0FBSyxBQUFMLEFBQ0E7V0FBSyxBQUFMLEFBQ0E7V0FBSyxBQUFMLEFBQ0Q7Ozs7NkJBRVMsQUFDUjthQUFPLEtBQUssQUFBTCxNQUFXLEFBQWxCLEFBQ0Q7Ozs7eUNBRXFCLEFBQ3BCO1VBQU0sY0FBYyxTQUFTLEFBQVQsY0FBdUIsQUFBdkIsQUFBcEIsQUFDQTtVQUFJLEFBQUosYUFBaUIsWUFBWSxBQUFaLEFBQ2xCOzs7OzRCQUVRLEFBRVA7O1VBQUksQ0FBQyxTQUFTLEFBQVQsT0FBZ0IsQUFBaEIsU0FBeUIsQUFBekIsQUFBTCxlQUE2QyxBQUU3Qzs7VUFBSSxDQUFDLE9BQU8sQUFBWixnQkFBNEIsQUFDMUI7MEJBQUcsQUFBSCxXQUFjLFVBQWQsQUFEMEI7OytCQUdHLE9BQU8sQUFIVjtZQUdsQixBQUhrQiw0QkFHbEIsQUFIa0I7WUFHUixBQUhRLDBCQUdSLEFBSFEsQUFJMUI7OzBCQUFHLEFBQUgsU0FBWSxXQUFXLEFBQXZCLEFBRUE7O3lCQUFPLEFBQVAscUJBQTRCLGVBQU8sQUFDakM7NEJBQUcsQUFBSCxTQUFZLEFBQVosQUFDRDtBQUZELEFBSUE7O2VBQU8sQUFBUCxpQkFBd0IsQUFBeEIsQUFDRDtBQUNGOzs7OytCQUVXLEFBQ1Y7ZUFBUyxBQUFULFFBQWlCLHFCQUFTLFNBQVMsQUFBbEIsQUFBakIsQUFDRDs7Ozs7RUFyQ21DLGdCQUFNLEE7O2tCQUF2QixBIiwiZmlsZSI6IlRlbXBsYXRlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zY2hlbi9Eb3dubG9hZHMvcm9tZWxwZXJlei5jb20tbWFzdGVyIn0=