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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19lcnJvci5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJyb290IiwicG9zaXRpb24iLCJsZWZ0IiwidG9wIiwidHJhbnNmb3JtIiwidGV4dEFsaWduIiwidGl0bGUiLCJsaW5lSGVpZ2h0IiwiRXJyb3IiLCJjbGFzc2VzIiwicHJvcHMiLCJyZXNvdXJjZXMiLCJiYWNrZ3JvdW5kIiwicGF0dGVybiIsImFuaW0iLCJlbnRlcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOztBQUVBOzs7Ozs7OztBQUVBLElBQU0sU0FBUyxTQUFULEFBQVMsU0FBQTs7O2dCQUNQLEFBQ00sQUFDVjtZQUZJLEFBRUUsQUFDTjtXQUhJLEFBR0MsQUFDTDtpQkFKSSxBQUlPLEFBQ1g7aUJBTmtCLEFBQ2QsQUFLTyxBQUViO0FBUE0sQUFDSjs7a0JBRlcsQUFBTyxBQVFiLEFBQ087QUFEUCxBQUNMO0FBVGtCLEFBQ3BCO0FBREY7O0FBYUEsSUFBTSxRQUFRLFNBQVIsQUFBUSxhQUFTO01BQUEsQUFDYixVQURhLEFBQ1UsTUFEVixBQUNiO01BRGEsQUFDSixZQURJLEFBQ1UsTUFEVixBQUNKLEFBQ2pCOzt5QkFDRyxxQkFBRDthQUFBLEFBRUU7Z0JBQVksVUFGZCxBQUV3QixBQUN0QjthQUFTLFVBSFgsQUFHcUIsQUFFbEI7QUFKRCxHQURGLGtCQUtHO1dBQ0QsZ0JBQUMscUJBQUQsV0FBUyxXQUFXLFFBQXBCLEFBQTRCLEFBQzFCLHNDQUFDLE9BQUQsUUFBTSxTQUFOLE1BQWMsTUFBTSxLQUFwQixBQUF5QixTQUFTLE9BRHBDLEFBQ0UsQUFBd0MsQUFDeEMsNkJBQUEsY0FBQSxRQUFJLFdBQVcsUUFBZixBQUF1QixBQUNyQix5QkFBQyxxQkFBRCxTQUFPLFNBQVAsTUFBZSxNQUFNLEtBQXJCLEFBQTBCLFdBSDlCLEFBRUUsQUFDRSxBQUVGLHNEQUFDLE9BQUQsUUFBTSxTQUFOLE1BQWMsTUFBTSxLQUFwQixBQUF5QixTQUFTLE9BTHBDLEFBS0UsQUFBd0MsQUFDeEMsNkJBQUEsY0FBQSxLQUFHLHNCQUFBLGNBQUEsT0FBRyxNQUFILEFBQVEsQUFDVCx1QkFBQyxxQkFBRCxTQUFPLFNBQVAsTUFBZSxNQUFNLEtBQXJCLEFBQTBCLFdBUjdCLEFBQ0QsQUFNRSxBQUFHLEFBQ0Q7QUFkUixBQUNFLEFBbUJIO0FBdEJEOztrQkF3QmUsNEJBQWEsdUJBQUEsQUFBVyxRQUF4QixBQUFhLEFBQW1CLEEiLCJmaWxlIjoiX2Vycm9yLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zY2hlbi9Eb3dubG9hZHMvcm9tZWxwZXJlei5jb20tbWFzdGVyIn0=