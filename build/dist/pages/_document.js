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

var _reactJss = require("react-jss");

var _document = require("next/dist/server/document.js");

var _document2 = _interopRequireDefault(_document);

var _utils = require('../site/utils');

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

var AppDocument = function (_Document) {
  _inherits(AppDocument, _Document);

  function AppDocument() {
    _classCallCheck(this, AppDocument);

    return _possibleConstructorReturn(this, (AppDocument.__proto__ || Object.getPrototypeOf(AppDocument)).apply(this, arguments));
  }

  _createClass(AppDocument, [{
    key: 'render',
    value: function render() {
      var title = (0, _utils.getTitle)(this.props.pathname);

      return _react2.default.createElement('html', { lang: 'en' }, _react2.default.createElement(_document.Head, null, _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }), _react2.default.createElement('meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' }), _react2.default.createElement('title', null, title), _react2.default.createElement('meta', { name: 'description', content: 'Software engineering autodidact. Enthusiast, JavaScript dev, Sci-Fi and nature fan. Making the world a better place through lines of code' }), _react2.default.createElement('meta', { name: 'keywords', content: 'romel perez, romel p\xE9rez, prhone, software engineer, frontend engineer, programmer' }), _react2.default.createElement('meta', { name: 'robots', content: 'index, follow' }), _react2.default.createElement('meta', { property: 'og:title', content: title }), _react2.default.createElement('meta', { property: 'og:site_name', content: title }), _react2.default.createElement('meta', { property: 'og:description', content: 'Software engineering autodidact. Enthusiast, JavaScript dev, Sci-Fi and nature fan. Making the world a better place through lines of code' }), _react2.default.createElement('meta', { property: 'og:type', content: 'website' }), _react2.default.createElement('meta', { property: 'og:url', content: 'https://romelperez.com' }), _react2.default.createElement('meta', { property: 'og:image', content: 'https://romelperez.com/static/img/romelperez.jpg' }), _react2.default.createElement('meta', { name: 'twitter:card', content: 'summary_large_image' }), _react2.default.createElement('meta', { name: 'twitter:title', content: title }), _react2.default.createElement('meta', { name: 'twitter:description', content: 'Software engineering autodidact. Enthusiast, JavaScript dev, Sci-Fi and nature fan. Making the world a better place through lines of code' }), _react2.default.createElement('meta', { name: 'twitter:site', content: '@romelperez07' }), _react2.default.createElement('meta', { name: 'twitter:creator', content: '@romelperez07' }), _react2.default.createElement('meta', { name: 'twitter:image', content: 'https://romelperez.com/static/img/romelperez.jpg' }), _react2.default.createElement('meta', { name: 'theme-color', content: '#000000' }), _react2.default.createElement('meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }), _react2.default.createElement('meta', { name: 'apple-mobile-web-app-title', content: title }), _react2.default.createElement('meta', { name: 'apple-mobile-web-app-status-bar-style', content: '#000000' }), _react2.default.createElement('meta', { name: 'msapplication-TileColor', content: '#000000' }), _react2.default.createElement('link', { rel: 'shortcut icon', href: '/static/favicon.ico' }), _react2.default.createElement('link', { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Titillium+Web:400,600' }), _react2.default.createElement('link', { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Electrolize' }), _react2.default.createElement('style', { type: 'text/css' }, '\n            html, body {\n              background-color: #000000;\n            }\n            body {\n              box-sizing: border-box;\n              margin: 0;\n              padding: 0;\n            }\n            *, *:before, *:after {\n              box-sizing: inherit;\n            }\n          ')), _react2.default.createElement('body', null, _react2.default.createElement(_document.Main, null), _react2.default.createElement(_document.NextScript, null), _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdn.materialdesignicons.com/2.1.19/css/materialdesignicons.min.css' })));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage,
          pathname = _ref.pathname;

      var sheets = new _reactJss.SheetsRegistry();
      var decoratePage = function decoratePage(Page) {
        return function (props) {
          return _react2.default.createElement(_reactJss.JssProvider, { registry: sheets }, _react2.default.createElement(Page, props));
        };
      };

      var renderedPage = renderPage(decoratePage);

      var styles = _react2.default.createElement('style', { type: 'text/css', id: 'pages-styles' }, 'body { opacity: 0; }', sheets.toString());

      return _extends({}, renderedPage, { styles: styles, pathname: pathname });
    }
  }]);

  return AppDocument;
}(_document2.default);

exports.default = AppDocument;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJBcHBEb2N1bWVudCIsInRpdGxlIiwicHJvcHMiLCJwYXRobmFtZSIsInJlbmRlclBhZ2UiLCJzaGVldHMiLCJTaGVldHNSZWdpc3RyeSIsImRlY29yYXRlUGFnZSIsInJlbmRlcmVkUGFnZSIsInN0eWxlcyIsInRvU3RyaW5nIiwiRG9jdW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsQTs7Ozs7Ozs7Ozs7NkJBdUJULEFBQ1I7VUFBTSxRQUFRLHFCQUFTLEtBQUssQUFBTCxNQUFXLEFBQXBCLEFBQWQsQUFFQTs7YUFDRSxnQkFBQSxjQUFBLFVBQU0sTUFBSyxBQUFYLEFBQ0Usd0JBQUMsd0JBQUQsTUFDRSw4Q0FBTSxNQUFLLEFBQVgsWUFBc0IsU0FBUSxBQUE5QixBQURGLEFBRUUsa0ZBQU0sY0FBVyxBQUFqQixtQkFBbUMsU0FBUSxBQUEzQyxBQUZGLEFBR0UsdUNBQUEsY0FBQSxTQUFRLE1BQVIsQUFIRixBQUtFLGdEQUFNLE1BQUssQUFBWCxlQUF5QixTQUFRLEFBQWpDLEFBTEYsQUFNRSx3TEFBTSxNQUFLLEFBQVgsWUFBc0IsU0FBUSxBQUE5QixBQU5GLEFBT0Usb0lBQU0sTUFBSyxBQUFYLFVBQW9CLFNBQVEsQUFBNUIsQUFQRixBQVNFLDREQUFNLFVBQVMsQUFBZixZQUEwQixTQUFTLEFBQW5DLEFBVEYsQUFVRSxrREFBTSxVQUFTLEFBQWYsZ0JBQThCLFNBQVMsQUFBdkMsQUFWRixBQVdFLGtEQUFNLFVBQVMsQUFBZixrQkFBZ0MsU0FBUSxBQUF4QyxBQVhGLEFBWUUsd0xBQU0sVUFBUyxBQUFmLFdBQXlCLFNBQVEsQUFBakMsQUFaRixBQWFFLHNEQUFNLFVBQVMsQUFBZixVQUF3QixTQUFRLEFBQWhDLEFBYkYsQUFjRSxxRUFBTSxVQUFTLEFBQWYsWUFBMEIsU0FBUSxBQUFsQyxBQWRGLEFBZ0JFLCtGQUFNLE1BQUssQUFBWCxnQkFBMEIsU0FBUSxBQUFsQyxBQWhCRixBQWlCRSxrRUFBTSxNQUFLLEFBQVgsaUJBQTJCLFNBQVMsQUFBcEMsQUFqQkYsQUFrQkUsa0RBQU0sTUFBSyxBQUFYLHVCQUFpQyxTQUFRLEFBQXpDLEFBbEJGLEFBbUJFLHdMQUFNLE1BQUssQUFBWCxnQkFBMEIsU0FBUSxBQUFsQyxBQW5CRixBQW9CRSw0REFBTSxNQUFLLEFBQVgsbUJBQTZCLFNBQVEsQUFBckMsQUFwQkYsQUFxQkUsNERBQU0sTUFBSyxBQUFYLGlCQUEyQixTQUFRLEFBQW5DLEFBckJGLEFBdUJFLCtGQUFNLE1BQUssQUFBWCxlQUF5QixTQUFRLEFBQWpDLEFBdkJGLEFBd0JFLHNEQUFNLE1BQUssQUFBWCxnQ0FBMEMsU0FBUSxBQUFsRCxBQXhCRixBQXlCRSxrREFBTSxNQUFLLEFBQVgsOEJBQXdDLFNBQVMsQUFBakQsQUF6QkYsQUEwQkUsa0RBQU0sTUFBSyxBQUFYLHlDQUFtRCxTQUFRLEFBQTNELEFBMUJGLEFBMkJFLHNEQUFNLE1BQUssQUFBWCwyQkFBcUMsU0FBUSxBQUE3QyxBQTNCRixBQTZCRSxzREFBTSxLQUFJLEFBQVYsaUJBQTBCLE1BQUssQUFBL0IsQUE3QkYsQUE4QkUsa0VBQU0sS0FBSSxBQUFWLGNBQXVCLE1BQUssQUFBNUIsQUE5QkYsQUErQkUsc0dBQU0sS0FBSSxBQUFWLGNBQXVCLE1BQUssQUFBNUIsQUEvQkYsQUFpQ0Usb0VBQUEsY0FBQSxXQUFPLE1BQUssQUFBWixjQUFBLEFBakNGLEFBREYsQUFrREUsMlVBQUEsY0FBQSxRQUNFLG9DQUFDLFVBQUQsTUFERixBQUVFLHFDQUFDLFVBQUQsWUFGRixBQUdFLCtDQUFNLEtBQUksQUFBVixjQUF1QixNQUFLLEFBQTVCLEFBSEYsQUFsREYsQUFERixBQTBERDs7OzswQ0FsRmlEO1VBQXhCLEFBQXdCLGtCQUF4QixBQUF3QjtVQUFaLEFBQVksZ0JBQVosQUFBWSxBQUVoRDs7VUFBTSxTQUFTLElBQUksVUFBSixBQUFmLEFBQ0E7VUFBTSxlQUFlLFNBQWYsQUFBZSxtQkFBQTtlQUFRLGlCQUFBO2lCQUMzQixnQkFBQyx3QkFBRCxlQUFhLFVBQVUsQUFBdkIsQUFDRSx3Q0FBQyxBQUFELE1BQVUsQUFBVixBQURGLEFBRDJCO0FBQVI7QUFBckIsQUFNQTs7VUFBTSxlQUFlLFdBQVcsQUFBWCxBQUFyQixBQUVBOztVQUFNLFNBQ0osZ0JBQUEsY0FBQSxXQUFPLE1BQUssQUFBWixZQUF1QixJQUFHLEFBQTFCLEFBQ0csa0JBREgsQUFFRywrQkFBTyxBQUFQLEFBRkgsQUFERixBQU9BOzswQkFBWSxBQUFaLGdCQUEwQixRQUExQixRQUFrQyxVQUFsQyxBQUNEOzs7OztFQXJCc0MsVzs7a0JBQXBCLEEiLCJmaWxlIjoiX2RvY3VtZW50LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zY2hlbi9NaW1pa3l1In0=