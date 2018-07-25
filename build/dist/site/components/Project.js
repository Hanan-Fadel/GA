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

var _styles = require('arwes/lib/Project/styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

var ArwesProjectImproved = (0, _arwes.withStyles)(function (theme) {
  var styles = (0, _styles2.default)(theme);
  return _extends({}, styles, {
    header: _extends({}, styles.header, {
      paddingRight: 110
    }),
    children: _extends({}, styles.children, {
      padding: 0
    })
  });
})(_arwes.Project);

var styles = function styles(theme) {
  return {
    root: {
      margin: 0,
      textShadow: 'none',
      color: theme.color.primary.base,
      '& p': {
        margin: theme.padding
      }
    },
    stats: {
      margin: [0, theme.margin, theme.margin]
    },
    stat: {
      display: 'inline-block',
      marginLeft: theme.margin / 2,
      '&:first-of-type': {
        marginLeft: 0
      }
    },
    image: {
      width: '100%',
      height: 300,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      verticalAlign: 'middle'
    }
  };
};

function Project(props) {
  var theme = props.theme,
      classes = props.classes,
      show = props.show,
      type = props.type,
      scale = props.scale,
      date = props.date,
      lang = props.lang,
      header = props.header,
      description = props.description,
      image = props.image,
      className = props.className,
      etc = _objectWithoutProperties(props, ['theme', 'classes', 'show', 'type', 'scale', 'date', 'lang', 'header', 'description', 'image', 'className']);

  var cls = (0, _classnames2.default)(classes.root, className);
  var icon = type === 'talk' ? 'account-multiple-outline' : type === 'guide' ? 'book' : 'code-brackets';
  return _react2.default.createElement(ArwesProjectImproved, _extends({
    animate: true,
    show: show,
    header: header,
    className: cls,
    icon: _react2.default.createElement('span', null, _react2.default.createElement('i', { className: 'mdi mdi-' + icon }), ' ' + type.charAt(0).toUpperCase() + type.substring(1))
  }, etc), function (anim) {
    return _react2.default.createElement('div', null, _react2.default.createElement('p', null, _react2.default.createElement(_arwes.Words, { animate: true, show: anim.entered }, description)), _react2.default.createElement(_arwes.Appear, { animate: true, show: anim.entered, className: classes.stats }, _react2.default.createElement('div', { className: classes.stat }, _react2.default.createElement('i', { className: 'mdi mdi-circle' + (scale > 0 ? '' : '-outline') }), _react2.default.createElement('i', { className: 'mdi mdi-circle' + (scale > 1 ? '' : '-outline') }), _react2.default.createElement('i', { className: 'mdi mdi-circle' + (scale > 2 ? '' : '-outline') })), _react2.default.createElement('div', { className: classes.stat }, _react2.default.createElement('i', { className: 'mdi mdi-calendar' }), ' ', date), _react2.default.createElement('div', { className: classes.stat }, _react2.default.createElement('i', { className: 'mdi mdi-file-document-box' }), ' ', lang.toUpperCase())), !!image && _react2.default.createElement(_arwes.Appear, {
      style: { backgroundImage: 'url(' + image + ')' },
      className: classes.image,
      animate: true,
      show: anim.entered
    }));
  });
}

Project.propTypes = {
  show: _propTypes2.default.bool,
  header: _propTypes2.default.string.isRequired,
  description: _propTypes2.default.string.isRequired,
  type: _propTypes2.default.oneOf(['code', 'talk', 'guide']).isRequired,
  date: _propTypes2.default.string.isRequired,
  image: _propTypes2.default.string,
  scale: _propTypes2.default.number,
  lang: _propTypes2.default.string
};

Project.defaultProps = {
  scale: 0,
  lang: 'en'
};

exports.default = (0, _arwes.withStyles)(styles)(Project);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpdGUvY29tcG9uZW50cy9Qcm9qZWN0LmpzIl0sIm5hbWVzIjpbIkFyd2VzUHJvamVjdEltcHJvdmVkIiwic3R5bGVzIiwidGhlbWUiLCJoZWFkZXIiLCJwYWRkaW5nUmlnaHQiLCJjaGlsZHJlbiIsInBhZGRpbmciLCJBcndlc1Byb2plY3QiLCJyb290IiwibWFyZ2luIiwidGV4dFNoYWRvdyIsImNvbG9yIiwicHJpbWFyeSIsImJhc2UiLCJzdGF0cyIsInN0YXQiLCJkaXNwbGF5IiwibWFyZ2luTGVmdCIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsInZlcnRpY2FsQWxpZ24iLCJQcm9qZWN0IiwicHJvcHMiLCJjbGFzc2VzIiwic2hvdyIsInR5cGUiLCJzY2FsZSIsImRhdGUiLCJsYW5nIiwiZGVzY3JpcHRpb24iLCJjbGFzc05hbWUiLCJldGMiLCJjbHMiLCJpY29uIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJhbmltIiwiZW50ZXJlZCIsImJhY2tncm91bmRJbWFnZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwib25lT2YiLCJudW1iZXIiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLDhDQUFrQyxpQkFBUyxBQUMvQztNQUFNLFNBQVMsc0JBQWYsQUFBZSxBQUFtQixBQUNsQztzQkFBQSxBQUNLO3lCQUVFLE9BREwsQUFDWTtvQkFIZCxBQUVFLEFBRWdCLEFBRWhCO0FBRkU7MkJBR0csT0FETCxBQUNZO2VBUGQsQUFNRSxBQUVXLEFBR2Q7QUFISztBQU5GO0FBSnlCLENBQUEsRUFhMUIsT0FiSCxBQUE2Qjs7QUFlN0IsSUFBTSxTQUFTLFNBQVQsQUFBUyxjQUFBOzs7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LEFBR0csVUFsQlAsQUFJRSxBQVdFLEFBR0csQUFBSyxBQUdULGtCQUFDLENBQUQsQUFBRSx1Q0FDRixPQUFEO2FBQ1MsRUFBRSwwQkFBQSxBQUF3QixRQURuQyxBQUNTLEFBQ1A7aUJBQVcsUUFGYixBQUVxQixBQUNuQjtlQUhGLEFBSUU7WUFBTSxLQTNCVCxBQUNELEFBc0JFLEFBSWE7QUFIWCxLQURGLENBdEJGO0FBZkosQUFDRSxBQStDSCxHQS9DRzs7O0FBaURKLFFBQUEsQUFBUTtRQUNBLG9CQURZLEFBQ0YsQUFDaEI7VUFBUSxvQkFBQSxBQUFVLE9BRkEsQUFFTyxBQUN6QjtlQUFhLG9CQUFBLEFBQVUsT0FITCxBQUdZLEFBQzlCO1FBQU0sb0JBQUEsQUFBVSxNQUFNLENBQUEsQUFBQyxRQUFELEFBQVMsUUFBekIsQUFBZ0IsQUFBaUIsVUFKckIsQUFJK0IsQUFDakQ7UUFBTSxvQkFBQSxBQUFVLE9BTEUsQUFLSyxBQUN2QjtTQUFPLG9CQU5XLEFBTUQsQUFDakI7U0FBTyxvQkFQVyxBQU9ELEFBQ2pCO1FBQU0sb0JBUlIsQUFBb0IsQUFRRjtBQVJFLEFBQ2xCOztBQVVGLFFBQUEsQUFBUTtTQUFlLEFBQ2QsQUFDUDtRQUZGLEFBQXVCLEFBRWY7QUFGZSxBQUNyQjs7a0JBSWEsdUJBQUEsQUFBVyxRQUFYLEFBQW1CLEEiLCJmaWxlIjoiUHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2NoZW4vRG93bmxvYWRzL3JvbWVscGVyZXouY29tLW1hc3RlciJ9