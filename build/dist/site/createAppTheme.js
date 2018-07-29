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

var _polished = require('polished');

var generateColor = function generateColor(color) {
  return {
    base: color,
    light: (0, _polished.lighten)(0.2, color),
    dark: (0, _polished.darken)(0.2, color)
  };
};

var generateBackground = function generateBackground(color) {
  return {
    level0: color,
    level1: (0, _polished.lighten)(0.015, color),
    level2: (0, _polished.lighten)(0.030, color),
    level3: (0, _polished.lighten)(0.045, color)
  };
};

exports.default = function () {
  var theme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _extends({}, theme, {
    color: _extends({
      primary: generateColor('#30fffe')
    }, theme.color),
    background: _extends({
      primary: generateBackground('#031212')
    }, theme.background)
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpdGUvY3JlYXRlQXBwVGhlbWUuanMiXSwibmFtZXMiOlsiZ2VuZXJhdGVDb2xvciIsImJhc2UiLCJjb2xvciIsImxpZ2h0IiwiZGFyayIsImdlbmVyYXRlQmFja2dyb3VuZCIsImxldmVsMCIsImxldmVsMSIsImxldmVsMiIsImxldmVsMyIsInRoZW1lIiwicHJpbWFyeSIsImJhY2tncm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNLGdCQUFnQixTQUFoQixBQUFnQixxQkFBQTs7VUFBVSxBQUN4QixBQUNOO1dBQU8sdUJBQUEsQUFBUSxLQUZlLEFBRXZCLEFBQWEsQUFDcEI7VUFBTSxzQkFBQSxBQUFPLEtBSE8sQUFBVSxBQUd4QixBQUFZO0FBSFksQUFDOUI7QUFERjs7QUFNQSxJQUFNLHFCQUFxQixTQUFyQixBQUFxQiwwQkFBQTs7WUFBVSxBQUMzQixBQUNSO1lBQVEsdUJBQUEsQUFBUSxPQUZtQixBQUUzQixBQUFlLEFBQ3ZCO1lBQVEsdUJBQUEsQUFBUSxPQUhtQixBQUczQixBQUFlLEFBQ3ZCO1lBQVEsdUJBQUEsQUFBUSxPQUpTLEFBQVUsQUFJM0IsQUFBZTtBQUpZLEFBQ25DO0FBREY7O2tCQU9lLFlBQUE7TUFBQSxBQUFDLDRFQUFELEFBQVM7c0JBQVQsQUFDVjs7ZUFFUSxjQURYLEFBQ1csQUFBYztBQUF2QixPQUNHLE1BSlEsQUFFYixBQUVXLEFBRVg7O2VBQ1csbUJBRFgsQUFDVyxBQUFtQjtBQUE1QixPQUNHLE1BUlEsQUFNYixBQUVXO0FBTlg7QSIsImZpbGUiOiJjcmVhdGVBcHBUaGVtZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2NoZW4vTWltaWt5dSJ9