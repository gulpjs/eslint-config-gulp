'use strict';
var eslintVersion;
try {
  eslintVersion = parseFloat(require("eslint").linter.version || require("eslint/package.json").version);
} catch (ex) {
  eslintVersion = 1;
}

var config = {
  "root": true,
  "extends": "eslint:recommended",
  "env": {
    "node": true
  },
  "rules": {
    "array-bracket-spacing": [2, "never"],
    "block-scoped-var": 2,
    "brace-style": [2, "1tbs"],
    "camelcase": 1,
    "computed-property-spacing": [2, "never"],
    "curly": 2,
    "eol-last": 2,
    "eqeqeq": [2, "smart"],
    "max-depth": [1, 3],
    "max-len": [1, 80],
    "max-statements": [1, 30],
    "new-cap": 1,
    "no-extend-native": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-trailing-spaces": 2,
    "no-unused-vars": 1,
    "no-use-before-define": [2, "nofunc"],
    "object-curly-spacing": [2, "always"],
    "quotes": [2, "single", "avoid-escape"],
    "semi": [2, "always"],
    "space-unary-ops": 2
  }
};

if (eslintVersion >= 2) {
  config.rules["keyword-spacing"] = 2;
} else {
  config.rules["space-after-keywords"] = [2, "always"];
}

module.exports = config;
