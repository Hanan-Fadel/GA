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