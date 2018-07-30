const projects = require('./data/projects');
const talk1 = require('./data/testing-javascript');
const talk2 = require('./data/css-in-js-with-jss-and-react');
const talk3 = require('./data/como-iniciar-tu-carrera-en-programacion-con-open-source');

const baseTitle = 'Eliana AI @ WCU';
module.exports.titles = {
  '/projects': `Projects | ${baseTitle}`,
  '/': baseTitle,
};

module.exports.googleAnalytics = 'UA-123072737-1';

module.exports.projects = projects;

module.exports.talks = [talk1, talk2, talk3];

module.exports.default = {};
