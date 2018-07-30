'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _arwes = require('arwes');

var _withTemplate = require('../site/withTemplate');

var _withTemplate2 = _interopRequireDefault(_withTemplate);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var styles = function styles() {
  return {
    root: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center'
    },
    title: {
      lineHeight: '1'
    }
  };
};

var Error = function Error(props) {
  var classes = props.classes,
      resources = props.resources;

  return _react2.default.createElement(_arwes.Arwes, {
    animate: true,
    background: resources.background,
    pattern: resources.pattern
  }, function (anim) {
    return _react2.default.createElement(_arwes.Content, { className: classes.root }, _react2.default.createElement(_arwes.Line, { animate: true, show: anim.entered, layer: 'header' }), _react2.default.createElement('h1', { className: classes.title }, _react2.default.createElement(_arwes.Words, { animate: true, show: anim.entered }, 'Transmission error')), _react2.default.createElement(_arwes.Line, { animate: true, show: anim.entered, layer: 'header' }), _react2.default.createElement('p', null, _react2.default.createElement('a', { href: '/' }, _react2.default.createElement(_arwes.Words, { animate: true, show: anim.entered }, 'Go to Start'))));
  });
};

exports.default = (0, _withTemplate2.default)((0, _arwes.withStyles)(styles)(Error));