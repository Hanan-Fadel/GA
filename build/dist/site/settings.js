'use strict';

var projects = require('./data/projects');
var talk1 = require('./data/testing-javascript');
var talk2 = require('./data/css-in-js-with-jss-and-react');
var talk3 = require('./data/como-iniciar-tu-carrera-en-programacion-con-open-source');

var baseTitle = 'Romel Pérez - Personal Website';
module.exports.titles = {
  '/projects': 'Projects | ' + baseTitle,
  '/': baseTitle
};

module.exports.googleAnalytics = 'UA-50433259-1';

module.exports.projects = projects;

module.exports.talks = [talk1, talk2, talk3];

module.exports.default = {};