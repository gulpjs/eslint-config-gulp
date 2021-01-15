'use strict';

var config = {
  "root": true,
  "extends": ["eslint:recommended", "prettier"],
  "plugins": [
      "node"
  ],
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "env": {
    "node": true,
    "es2017": true
  },
  "rules": {
    "node/no-unsupported-features/es-syntax": [
      2,
      {
        "version": ">=0.10",
        "ignores": ["classes"]
      }
    ],
    "block-scoped-var": 2,
    "eqeqeq": [2, "smart"],
    "max-depth": [1, 3],
    "max-statements": [1, 30],
    "new-cap": 1,
    "no-extend-native": 2,
    "no-unused-vars": 1,
  },
  "ignorePatterns": [
    "coverage/**",
    "test/fixtures/**"
  ],
  "overrides": [
    {
      "files": ["test/**"],
      "env": {
        "mocha": true
      },
      "rules": {
        "max-len": 0,
        "max-statements": 0
      }
    }
  ]
};

module.exports = config;
