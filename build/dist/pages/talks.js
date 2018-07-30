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

var _router = require("next/dist/lib/router/index.js");

var _router2 = _interopRequireDefault(_router);

var _arwes = require("arwes");

var arwes = _interopRequireWildcard(_arwes);

var _screen = require("spectacle/lib/themes/default/screen");

var _screen2 = _interopRequireDefault(_screen);

var _print = require("spectacle/lib/themes/default/print");

var _print2 = _interopRequireDefault(_print);

var _settings = require('../site/settings');

var _createAppTheme = require('../site/createAppTheme');

var _createAppTheme2 = _interopRequireDefault(_createAppTheme);

var _withTemplate = require('../site/withTemplate');

var _withTemplate2 = _interopRequireDefault(_withTemplate);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

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

var spectacle = void 0,
    Deck = void 0,
    Slide = void 0;

var styles = function styles() {
  return {
    '@global': {
      'div.spectacle-slide': {
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
      }
    },
    root: {
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      overflow: 'hidden'
    },
    codeBlock: {
      margin: 0,
      maxHeight: 700
    }
  };
};

var Talks = function (_React$Component) {
  _inherits(Talks, _React$Component);

  function Talks() {
    _classCallCheck(this, Talks);

    var _this = _possibleConstructorReturn(this, (Talks.__proto__ || Object.getPrototypeOf(Talks)).apply(this, arguments));

    _this.state = {
      arwesTheme: {},
      spectacleTheme: null,
      animLvl1: false
    };
    return _this;
  }

  _createClass(Talks, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.defineArwesTheme();
      this.defineSpectacleTheme();
      this.importSpectacle();

      var talkKey = this.props.url.query.talkKey;

      var project = _settings.projects.find(function (item) {
        return item.key === talkKey;
      });
      var talk = project && _settings.talks.find(function (item) {
        return item.id === project.talkId;
      });

      if (project && talk) {
        this.setState({ animLvl1: true });
      } else {
        _router2.default.push('/projects');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var talkKey = this.props.url.query.talkKey;
      var classes = this.props.classes;
      var _state = this.state,
          arwesTheme = _state.arwesTheme,
          spectacleTheme = _state.spectacleTheme,
          animLvl1 = _state.animLvl1;

      var project = _settings.projects.find(function (item) {
        return item.key === talkKey;
      });
      var talk = project && _settings.talks.find(function (item) {
        return item.id === project.talkId;
      });

      return _react2.default.createElement(_arwes.ThemeProvider, { theme: arwesTheme }, _react2.default.createElement(_arwes.Arwes, {
        animate: true,
        show: animLvl1 && !!talk,
        puffsProps: { animate: false }
      }, _react2.default.createElement('div', { className: classes.root }, animLvl1 && _react2.default.createElement(Deck, _extends({ progress: 'bar', theme: spectacleTheme }, talk.deck), (talk.slides || []).map(function (slide, index) {
        return _react2.default.createElement(Slide, _extends({ key: index }, slide.props), (slide.children || []).map(function (child, index2) {
          return _this2.createElement(child, 'S' + index + 'C' + index2);
        }));
      })))));
    }

    /**
     * Conditional importing in the client-side. due to problems in server-side.
     */

  }, {
    key: 'importSpectacle',
    value: function importSpectacle() {
      spectacle = require("spectacle");
      Deck = spectacle.Deck;
      Slide = spectacle.Slide;
    }

    /**
     * Create list of dynamic React components for the presentation.
     * @param  {Object[]} elements - Array of components definitions.
     * @param  {String} key - Identifier.
     * @return {React.Component[]}
     */

  }, {
    key: 'createElements',
    value: function createElements(elements, key) {
      var _this3 = this;

      return elements.map(function (item, index) {
        return _this3.createElement(item, '' + key + index);
      });
    }

    /**
     * Create a dynamic React component for the presentation.
     * @param  {Object|String} opts - The React component properties.
     * @param  {String} key - Identifier.
     * @return {React.Component}
     */

  }, {
    key: 'createElement',
    value: function createElement(opts, key) {
      var classes = this.props.classes;

      if (Array.isArray(opts)) {
        return this.createElements(opts, key);
      }

      if (typeof opts === 'string') {
        return _react2.default.createElement(arwes.Words, { animate: true }, opts);
      }

      var element = opts.element,
          props = opts.props,
          children = opts.children;

      switch (element) {
        case 'Image':
          return _react2.default.createElement(arwes.Image, _extends({ key: key, animate: true }, props));
        case 'ImagePlain':
          return _react2.default.createElement(arwes.Appear, { key: key, animate: true }, _react2.default.createElement(spectacle.Image, props));
        case 'Code':
          return _react2.default.createElement(arwes.Code, _extends({
            className: classes.codeBlock,
            key: key,
            animate: true
          }, props), children);

        // General content components.
        case 'Heading':
        case 'Paragraph':
        case 'Blockquote':
        case 'Link':
        case 'List':
          {
            var SelectedElement = arwes[element];
            return _react2.default.createElement(SelectedElement, _extends({ key: key }, props), this.createElement(children));
          }

        // A built-in component.
        default:
          return _react2.default.createElement(element, _extends({ key: key }, props), this.createElement(children));
      }
    }
  }, {
    key: 'defineArwesTheme',
    value: function defineArwesTheme() {
      var arwesTheme = (0, _arwes.createTheme)((0, _createAppTheme2.default)({
        typography: {
          headerSizes: {
            h1: 56,
            h2: 46,
            h3: 42,
            h4: 36,
            h5: 28,
            h6: 24
          },
          fontSize: 36
        },
        code: {
          fontSize: 26
        }
      }));

      this.setState({ arwesTheme: arwesTheme });
    }
  }, {
    key: 'defineSpectacleTheme',
    value: function defineSpectacleTheme() {
      var theme = this.props.theme;

      var fonts = {
        primary: theme.background.primary.level0,
        secondary: theme.color.primary.base,
        tertiary: theme.color.header.base,
        quarternary: theme.color.primary.dark
      };
      var colors = {
        primary: theme.typography.fontFamily,
        secondary: theme.typography.headerFontFamily,
        tertiary: theme.code.fontFamily
      };
      var spectacleTheme = {
        screen: (0, _screen2.default)(fonts, colors),
        print: (0, _print2.default)()
      };

      spectacleTheme.screen = _extends({}, spectacleTheme.screen, {
        global: {
          body: {},
          '_:-moz-tree-row(hover), .spectacle-deck': {
            perspective: '1000px'
          },
          '_:-moz-tree-row(hover), ul .appear': {
            display: 'inline'
          }
        },
        components: _extends({}, spectacleTheme.screen.components, {
          image: {
            display: 'block',
            margin: '0 auto 20px'
          }
        })
      });

      this.setState({ spectacleTheme: spectacleTheme });
    }
  }]);

  return Talks;
}(_react2.default.Component);

exports.default = (0, _withTemplate2.default)((0, _arwes.withStyles)(styles)(Talks));