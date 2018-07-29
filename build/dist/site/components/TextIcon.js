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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _arwes = require('arwes');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

var styles = function styles() {
  return {
    root: {
      display: 'inline-block',
      textAlign: 'left'
    }
  };
};

var TextIcon = function TextIcon(props) {
  var theme = props.theme,
      classes = props.classes,
      show = props.show,
      icon = props.icon,
      className = props.className,
      children = props.children,
      etc = _objectWithoutProperties(props, ['theme', 'classes', 'show', 'icon', 'className', 'children']);

  var cls = (0, _classnames2.default)(classes.root, className);

  return _react2.default.createElement('div', _extends({ className: cls }, etc), _react2.default.createElement(_arwes.Appear, { animate: true, show: show }, _react2.default.createElement('i', { className: 'mdi mdi-' + icon })), ' ', _react2.default.createElement(_arwes.Words, { animate: true, show: show }, children));
};

TextIcon.propTypes = {
  show: _propTypes2.default.bool,
  icon: _propTypes2.default.string,
  children: _propTypes2.default.string.isRequired
};

exports.default = (0, _arwes.withStyles)(styles)(TextIcon);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpdGUvY29tcG9uZW50cy9UZXh0SWNvbi5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJyb290IiwiZGlzcGxheSIsInRleHRBbGlnbiIsIlRleHRJY29uIiwidGhlbWUiLCJwcm9wcyIsImNsYXNzZXMiLCJzaG93IiwiaWNvbiIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiZXRjIiwiY2xzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxTQUFTLFNBQVQsQUFBUyxTQUFBOzs7ZUFDUCxBQUNLLEFBQ1Q7aUJBSFcsQUFBTyxBQUNkLEFBRU87QUFGUCxBQUNKO0FBRmtCLEFBQ3BCO0FBREY7O0FBT0EsSUFBTSxXQUFXLFNBQVgsQUFBVyxnQkFBUztNQUFBLEFBRXRCLFFBRnNCLEFBU3BCLE1BVG9CLEFBRXRCO01BRnNCLEFBR3RCLFVBSHNCLEFBU3BCLE1BVG9CLEFBR3RCO01BSHNCLEFBSXRCLE9BSnNCLEFBU3BCLE1BVG9CLEFBSXRCO01BSnNCLEFBS3RCLE9BTHNCLEFBU3BCLE1BVG9CLEFBS3RCO01BTHNCLEFBTXRCLFlBTnNCLEFBU3BCLE1BVG9CLEFBTXRCO01BTnNCLEFBT3RCLFdBUHNCLEFBU3BCLE1BVG9CLEFBT3RCO01BUHNCLEFBUW5CLCtCQVJtQixBQVNwQix5REFDSjs7TUFBTSxNQUFNLDBCQUFHLFFBQUgsQUFBVyxNQUF2QixBQUFZLEFBQWlCLEFBRTdCOztTQUNFLGdCQUFBLGNBQUEsa0JBQUssV0FBTCxBQUFnQixPQUFoQixBQUF5QixBQUN2QixzQkFBQyxxQkFBRCxVQUFRLFNBQVIsTUFBZ0IsTUFBaEIsQUFBc0IsQUFDcEIsNkNBQUcsd0JBRlAsQUFDRSxBQUNFLEFBQXlCLEFBRTFCLFVBSkgsQUFLRSxxQkFBQyxxQkFBRCxTQUFPLFNBQVAsTUFBZSxNQUFmLEFBQXFCLEFBQU8sUUFOaEMsQUFDRSxBQUtFLEFBR0w7QUFyQkQ7O0FBdUJBLFNBQUEsQUFBUztRQUNELG9CQURhLEFBQ0gsQUFDaEI7UUFBTSxvQkFGYSxBQUVILEFBQ2hCO1lBQVUsb0JBQUEsQUFBVSxPQUh0QixBQUFxQixBQUdRO0FBSFIsQUFDbkI7O2tCQUthLHVCQUFBLEFBQVcsUUFBWCxBQUFtQixBIiwiZmlsZSI6IlRleHRJY29uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zY2hlbi9NaW1pa3l1In0=