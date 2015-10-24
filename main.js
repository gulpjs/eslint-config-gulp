'use strict';

var join = require('path').join;

module.exports = {
  extends: join(__dirname, '_base.js'),
  rules: {
    'object-curly-spacing': [2, 'always']
  }
};
