'use strict';

var config = {
  "root": true,
  "extends": ["eslint:recommended", "prettier"],
  "env": {
    "node": true
  },
  "rules": {
    "block-scoped-var": 2,
    "eqeqeq": [2, "smart"],
    "max-depth": [1, 3],
    "max-statements": [1, 30],
    "new-cap": 1,
    "no-extend-native": 2,
    "no-unused-vars": 1,
  }
};

module.exports = config;
