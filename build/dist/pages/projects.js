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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2plY3RzLmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsInJvb3QiLCJwb3NpdGlvbiIsImxlZnQiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsIm92ZXJmbG93WSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luVG9wIiwidGhlbWUiLCJtYXJnaW4iLCJtYWluIiwiZmxleCIsInBhZGRpbmciLCJwcm9qZWN0IiwidGl0bGVSaWdodCIsImZsb2F0IiwiUHJvamVjdHMiLCJhcmd1bWVudHMiLCJvbkxpbmsiLCJzZXRTdGF0ZSIsImFuaW1MdmwwIiwic3RhdGUiLCJzaG93bkluZGV4IiwiYW5pbUx2bDEiLCJhbmltTHZsMiIsImVtZXJnZW5jZSIsImluaXQiLCJjb250YWluZXIiLCJyb290RWwiLCJ0aHJvdHRsZSIsImNhbGxiYWNrIiwiZWxlbWVudCIsIm5ld0luZGV4IiwiZ2V0QXR0cmlidXRlIiwic2V0VGltZW91dCIsImVuZ2FnZSIsInByb3BzIiwiY2xhc3NlcyIsInJlc291cmNlcyIsImxpc3QiLCJwcm9qZWN0cyIsImZpbHRlciIsIml0ZW0iLCJwcml2YXRlIiwic29ydCIsImEiLCJiIiwiZGF0ZSIsImZvcm1hdCIsImJhY2tncm91bmQiLCJwYXR0ZXJuIiwiZWwiLCJhbmltIiwiZW50ZXJlZCIsIm9uRW50ZXJlZCIsIm1hcCIsImluZGV4IiwiaWQiLCJsaW5rIiwibmFtZSIsImRlc2NyaXB0aW9uIiwidHlwZSIsInNjYWxlIiwibGFuZyIsImltYWdlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUVBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU0sU0FBUyxTQUFULEFBQVMsY0FBQTs7O2dCQUNQLEFBQ00sQUFDVjtZQUZJLEFBRUUsQUFDTjtXQUhJLEFBR0MsQUFDTDthQUpJ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LE9BQUssS0FBTCxNQUFTLEdBQVQsQUFBWSxBQUVWLHNCQUFBLGNBQUEsTUFDRSxvQ0FBQyxPQUFEO3FCQUFBLEFBQ1ksQUFDVjttQkFGRixBQUdFO2dCQUhGLEFBR1EsQUFDTjs7dUJBQ2EscUJBQUE7cUJBQU0sT0FBQSxBQUFLLFNBQVMsRUFBRSxVQUF0QixBQUFNLEFBQWMsQUFBWTtBQU5qRCxBQUNFLEFBSWEsQUFJWjtBQUpZLEFBQ1Q7QUFKRixZQUZKLEFBVUUscUJBQUMscUJBQUQsU0FBTyxTQUFQLE1BQWUsTUFBZixBQUFxQixZQVZ2QixBQVVFLEFBQ0EsMkNBQUMsT0FBRCxVQUFRLFdBQVcsMEJBQUcsUUFBSCxBQUFXLFlBQTlCLEFBQW1CLEFBQXVCLGdDQUFnQyxTQUExRSxNQUFrRixNQWR4RixBQUNFLEFBRUUsQUFXRSxBQUF3RixBQUk1RiwrQkFBQyxxQkFBRCxPQUFLLEtBQUwsTUFBUyxVQUFULE1BQWtCLEdBQWxCLEFBQXFCLEFBRWxCLFdBQUEsQUFBSyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVjtpQ0FDVCwwQkFBRDtpQkFDTyxRQURQLEFBQ2UsQUFDYjt1QkFBVyxRQUZiLEFBRXFCLEFBQ25CO2tCQUFNLFFBSFIsQUFHZ0IsQUFDZDtvQkFKRixBQUlTLEFBQ1A7b0JBQVEsT0FMVixBQUtlLEFBQ2I7MEJBTkYsQUFNYyxBQUNaOzhCQVBGLEFBT2lCLEFBRWY7QUFSQSxXQURGLGdDQVNHLFlBQUQ7a0JBQ1EsU0FBQSxBQUFTLGNBRGpCLEFBQytCLEFBQzdCO3dCQUZGLEFBRWEsQUFDWDtvQkFBUSxRQUhWLEFBR2tCLEFBQ2hCO3lCQUFhLFFBSmYsQUFJdUIsQUFDckI7a0JBQU0sUUFMUixBQUtnQixBQUNkO21CQUFPLFFBTlQsQUFNaUIsQUFDZjtrQkFBTSxRQVBSLEFBT2dCLEFBQ2Q7a0JBQU0sc0JBQU8sUUFBUCxBQUFlLE1BQWYsQUFBcUIsT0FSN0IsQUFRUSxBQUE0QixBQUNsQzttQkFBTyxRQW5CRCxBQUNWLEFBU0UsQUFTaUI7QUFSZjtBQTNDWixBQVdFLEFBQ0UsQUFrQkUsQUFFRyxBQTRCUCw2Q0FBQyxZQUFEO21CQUFBLEFBRUU7Z0JBQU0sS0FGUixBQUVhLEFBQ1g7a0JBQVEsT0FqRWIsQUFDRCxBQUNFLEFBNERFLEFBR2U7QUFGYixXQTlETjtBQVRKLEFBQ0UsQUFnRkg7Ozs7O0VBNUhvQixnQkFBTSxBOztrQkFtSWQsNEJBQWEsdUJBQUEsQUFBVyxRQUF4QixBQUFhLEFBQW1CLEEiLCJmaWxlIjoicHJvamVjdHMuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NjaGVuL0Rvd25sb2Fkcy9yb21lbHBlcmV6LmNvbS1tYXN0ZXIifQ==