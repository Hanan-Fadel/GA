'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTitle = undefined;

var _settings = require('./settings');

var getTitle = exports.getTitle = function getTitle(currentPath) {
  var pagePath = Object.keys(_settings.titles).find(function (path) {
    return currentPath.indexOf(path) === 0;
  });

  return _settings.titles[pagePath || '/'];
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpdGUvdXRpbHMuanMiXSwibmFtZXMiOlsiZ2V0VGl0bGUiLCJwYWdlUGF0aCIsIk9iamVjdCIsImtleXMiLCJ0aXRsZXMiLCJmaW5kIiwiY3VycmVudFBhdGgiLCJpbmRleE9mIiwicGF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVPLElBQU0sOEJBQVcsU0FBWCxBQUFXLHNCQUFlLEFBQ3JDO01BQU0sa0JBQVcsQUFDZixLQUFLLFVBRFUsUUFBQSxBQUVmLEtBQUssZ0JBQUE7V0FBUSxZQUFBLEFBQVksUUFBWixBQUFvQixVQUE1QixBQUFzQztBQUY3QyxBQUFpQixBQUlqQixHQUppQjs7U0FJVixpQkFBTyxZQUFkLEFBQU8sQUFBbUIsQUFDM0I7QUFOTSIsImZpbGUiOiJ1dGlscy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2NoZW4vRG93bmxvYWRzL3JvbWVscGVyZXouY29tLW1hc3RlciJ9