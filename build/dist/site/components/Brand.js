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

var styles = function styles(theme) {
  return {
    root: {
      display: 'inline-block',
      textAlign: 'left',
      '& h1': {
        display: 'inline-block',
        margin: [0, 0, 0, theme.padding / 2],
        paddingTop: 4,
        lineHeight: 1,
        fontSize: 28,
        verticalAlign: 'middle'
      }
    },
    profile: {
      display: 'inline-block',
      margin: 0,
      width: 45
    }
  };
};

function Brand(props) {
  var theme = props.theme,
      classes = props.classes,
      show = props.show,
      onLink = props.onLink,
      className = props.className,
      etc = _objectWithoutProperties(props, ['theme', 'classes', 'show', 'onLink', 'className']);

  var cls = (0, _classnames2.default)(classes.root, className);
  return _react2.default.createElement(_Link2.default, _extends({ className: cls, href: '/', onLink: onLink }, etc), _react2.default.createElement(_arwes.Image, {
    className: classes.profile,
    animate: true,
    show: show,
    resources: '/static/img/profile.jpg'
  }), _react2.default.createElement('h1', null, _react2.default.createElement(_arwes.Words, { animate: true, show: show }, 'Romel P\xE9rez')));
}

Brand.propTypes = {
  onLink: _propTypes2.default.func,
  show: _propTypes2.default.bool
};

exports.default = (0, _arwes.withStyles)(styles)(Brand);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpdGUvY29tcG9uZW50cy9CcmFuZC5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJyb290IiwiZGlzcGxheSIsInRleHRBbGlnbiIsIm1hcmdpbiIsInRoZW1lIiwicGFkZGluZyIsInBhZGRpbmdUb3AiLCJsaW5lSGVpZ2h0IiwiZm9udFNpemUiLCJ2ZXJ0aWNhbEFsaWduIiwicHJvZmlsZSIsIndpZHRoIiwiQnJhbmQiLCJwcm9wcyIsImNsYXNzZXMiLCJzaG93Iiwib25MaW5rIiwiY2xhc3NOYW1lIiwiZXRjIiwiY2xzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLFNBQVMsU0FBVCxBQUFTLGNBQUE7OztlQUNQLEFBQ0ssQUFDVDtpQkFGSSxBQUVPLEFBQ1g7O2lCQUFRLEFBQ0csQUFDVDtnQkFBUSxDQUFBLEFBQUMsR0FBRCxBQUFJLEdBQUosQUFBTyxHQUFHLE1BQUEsQUFBTSxVQUZsQixBQUVFLEFBQTBCLEFBQ2xDO29CQUhNLEFBR00sQUFDWjtvQkFKTSxBQUlNLEFBQ1o7a0JBTE0sQUFLSSxBQUNWO3VCQVZtQixBQUNqQixBQUdJLEFBTVMsQUFHbkI7QUFUVSxBQUNOO0FBSkUsQUFDSjs7ZUFXTyxBQUNFLEFBQ1Q7Y0FGTyxBQUVDLEFBQ1I7YUFoQlcsQUFBVSxBQWFkLEFBR0E7QUFIQSxBQUNQO0FBZHFCLEFBQ3ZCO0FBREY7O0FBb0JBLFNBQUEsQUFBUyxNQUFULEFBQWdCLE9BQU87TUFBQSxBQUVuQixRQUZtQixBQVFqQixNQVJpQixBQUVuQjtNQUZtQixBQUduQixVQUhtQixBQVFqQixNQVJpQixBQUduQjtNQUhtQixBQUluQixPQUptQixBQVFqQixNQVJpQixBQUluQjtNQUptQixBQUtuQixTQUxtQixBQVFqQixNQVJpQixBQUtuQjtNQUxtQixBQU1uQixZQU5tQixBQVFqQixNQVJpQixBQU1uQjtNQU5tQixBQU9oQiwrQkFQZ0IsQUFRakIsOENBQ0o7O01BQU0sTUFBTSwwQkFBRyxRQUFILEFBQVcsTUFBdkIsQUFBWSxBQUFpQixBQUM3Qjt5QkFDRyxxQkFBRCxvQkFBTSxXQUFOLEFBQWlCLEtBQUssTUFBdEIsQUFBMkIsS0FBSSxRQUEvQixBQUF1QyxVQUF2QyxBQUFtRCxBQUNqRCxvQ0FBQyxPQUFEO2VBQ2EsUUFEYixBQUNxQixBQUNuQjthQUZGLEFBR0U7VUFIRixBQUdRLEFBQ047ZUFMSixBQUNFLEFBSVksQUFFWjtBQUxFLElBRkosa0JBT0UsY0FBQSxNQUFJLHNCQUFDLHFCQUFELFNBQU8sU0FBUCxNQUFlLE1BQWYsQUFBcUIsUUFSN0IsQUFDRSxBQU9FLEFBQUksQUFLVDs7O0FBRUQsTUFBQSxBQUFNO1VBQ0ksb0JBRFEsQUFDRSxBQUNsQjtRQUFNLG9CQUZSLEFBQWtCLEFBRUE7QUFGQSxBQUNoQjs7a0JBSWEsdUJBQUEsQUFBVyxRQUFYLEFBQW1CLEEiLCJmaWxlIjoiQnJhbmQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NjaGVuL01pbWlreXUifQ==