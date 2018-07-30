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