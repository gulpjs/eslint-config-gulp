'use strict';

module.exports = {
  "rules": {
    "semi": [2, "always"],
    "indent": [2, 2, { "SwitchCase": 1 }],
    "quotes": [2, "single"],
    "strict": [2, "global"],
    "no-console": [1],
    "linebreak-style": [2, "unix"]
  },
  "env": {
    "node": true
  },
  "extends": "eslint:recommended"
};
