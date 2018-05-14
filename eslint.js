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
    "computed-property-spacing": [2, "never"],
    "eol-last": 2,
    "eqeqeq": [2, "smart"],
    "max-depth": [1, 3],
    "max-len": [1, 80],
    "max-statements": [1, 30],
    "new-cap": 1,
    "no-extend-native": 2,
    "no-unused-vars": 1,
    "no-use-before-define": [2, "nofunc"],
    "object-curly-spacing": [2, "always"],
    "semi": [2, "always"],
    // Converted .jscsrc using polyjuice
    "no-with": 2,
    "brace-style": [ 2, "1tbs", { "allowSingleLine": true } ],
    "no-mixed-spaces-and-tabs": 2,
    "one-var": [ 2, { "uninitialized": "always", "initialized": "never" } ],
    "quote-props": [ 2, "as-needed" ],
    "key-spacing": [ 2, { "beforeColon": false, "afterColon": true } ],
    "space-unary-ops": [ 2, { "nonwords": false } ],
    "space-before-function-paren": [ 2, "never" ],
    "space-in-parens": [ 2, "never" ],
    "no-trailing-spaces": 2,
    "camelcase": [ 2, { "properties": "never" } ],
    "curly": [ 2, "all" ],
    "spaced-comment": [ 2, "always" ],
    "space-infix-ops": 2,
    "space-before-blocks": [ 2, "always" ],
    "comma-dangle": [ 2, "always-multiline" ],
    "no-else-return": 2,
    "indent": [ 2, 2, { "SwitchCase": 1 } ],
    "linebreak-style": [ 2, "unix" ],
    "quotes": [ 2, "single",  "avoid-escape" ]
  }
};

if (eslintVersion >= 2) {
  config.rules["keyword-spacing"] = [ 2, {} ];
} else {
  config.rules["space-after-keywords"] = [2, "always"];
}

module.exports = config;
