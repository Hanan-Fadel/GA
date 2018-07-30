'use strict';

var projects = require('./data/projects');
var talk1 = require('./data/testing-javascript');
var talk2 = require('./data/css-in-js-with-jss-and-react');
var talk3 = require('./data/como-iniciar-tu-carrera-en-programacion-con-open-source');

var baseTitle = 'Eliana AI @ WCU';
module.exports.titles = {
  '/projects': 'Projects | ' + baseTitle,
  '/': baseTitle
};

module.exports.googleAnalytics = 'UA-123072737-1';

module.exports.projects = projects;

module.exports.talks = [talk1, talk2, talk3];

module.exports.default = {};