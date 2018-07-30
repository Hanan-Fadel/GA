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

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _emergence = require("emergence.js");

var _emergence2 = _interopRequireDefault(_emergence);

var _arwes = require("arwes");

var _settings = require('../site/settings');

var _withTemplate = require('../site/withTemplate');

var _withTemplate2 = _interopRequireDefault(_withTemplate);

var _components = require('../site/components');

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

var styles = function styles(theme) {
  return {
    root: {
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      '& $project + $project': {
        marginTop: theme.margin
      }
    },
    main: {
      flex: 1,
      padding: [theme.padding, 0],
      '& h2': {
        margin: 0
      }
    },
    project: {
      display: 'block'
    },
    titleRight: {
      float: 'right'
    }
  };
};

var Projects = function (_React$Component) {
  _inherits(Projects, _React$Component);

  function Projects() {
    _classCallCheck(this, Projects);

    var _this = _possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).apply(this, arguments));

    _this.onLink = function () {
      _this.setState({ animLvl0: false });
    };

    _this.state = {
      shownIndex: 0,
      // Animations enabled by levels.
      animLvl0: false,
      animLvl1: false,
      animLvl2: false
    };
    return _this;
  }

  // Reference to main element.


  _createClass(Projects, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _emergence2.default.init({
        container: this.rootEl,
        throttle: 200,
        callback: function callback(element, state) {
          if (state === 'visible') {
            var newIndex = +element.getAttribute('data-index');
            if (newIndex > _this2.state.shownIndex) {
              _this2.setState({ shownIndex: newIndex });
            }
          }
        }
      });

      this.setState({ animLvl0: true });

      setTimeout(function () {
        return _emergence2.default.engage();
      }, 0);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          shownIndex = _state.shownIndex,
          animLvl0 = _state.animLvl0,
          animLvl1 = _state.animLvl1,
          animLvl2 = _state.animLvl2;
      var _props = this.props,
          classes = _props.classes,
          resources = _props.resources;

      var list = _settings.projects.filter(function (item) {
        return !item.private;
      }).sort(function (a, b) {
        return (0, _moment2.default)(b.date).format('x') - (0, _moment2.default)(a.date).format('x');
      });

      return _react2.default.createElement(_arwes.Arwes, {
        animate: true,
        show: animLvl0,
        showResources: animLvl0,
        background: resources.background,
        pattern: resources.pattern
      }, function (anim) {
        return _react2.default.createElement('div', { className: classes.root, ref: function ref(el) {
            return _this3.rootEl = el;
          } }, _react2.default.createElement(_arwes.Content, null, _react2.default.createElement(_components.Header, {
          animate: true,
          show: anim.entered,
          animation: {
            onEntered: function onEntered() {
              return _this3.setState({ animLvl1: true });
            }
          },
          onLink: _this3.onLink
        }), _react2.default.createElement('div', { className: classes.main }, _react2.default.createElement(_components.Wrap, null, _react2.default.createElement(_arwes.Row, { col: true, s: 12 }, _react2.default.createElement('h2', null, _react2.default.createElement(_arwes.Appear, {
          className: 'mdi mdi-chevron-double-right',
          animate: true,
          show: animLvl1,
          animation: {
            onEntered: function onEntered() {
              return _this3.setState({ animLvl2: true });
            }
          }
        }), ' ', _react2.default.createElement(_arwes.Words, { animate: true, show: animLvl1 }, 'Projects'), _react2.default.createElement(_arwes.Appear, { className: (0, _classnames2.default)(classes.titleRight, 'mdi mdi-chevron-double-left'), animate: true, show: animLvl1 }))), _react2.default.createElement(_arwes.Row, { col: true, noMargin: true, s: 12 }, list.map(function (project, index) {
          return _react2.default.createElement(_components.Link, {
            key: project.id,
            className: classes.project,
            href: project.link,
            target: '_target',
            onLink: _this3.onLink,
            'data-index': index,
            'data-emergence': 'hidden'
          }, _react2.default.createElement(_components.Project, {
            show: index <= shownIndex && animLvl2,
            headerSize: 'h3',
            header: project.name,
            description: project.description,
            type: project.type,
            scale: project.scale,
            lang: project.lang,
            date: (0, _moment2.default)(project.date).format('YYYY-MM'),
            image: project.image
          }));
        })))), _react2.default.createElement(_components.Footer, {
          animate: true,
          show: anim.entered,
          onLink: _this3.onLink
        })));
      });
    }
  }]);

  return Projects;
}(_react2.default.Component);

exports.default = (0, _withTemplate2.default)((0, _arwes.withStyles)(styles)(Projects));