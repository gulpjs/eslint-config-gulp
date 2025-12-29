var js = require("@eslint/js");
var globals = require("globals");

module.exports = [
	js.configs.recommended,
	{
    languageOptions: {
			ecmaVersion: 2018,
			sourceType: "commonjs",
			globals: {
        ...globals.node,
				...globals.es2017,
			},
		},
		rules: {
      "block-scoped-var": "error",
      "eqeqeq": ["error", "smart"],
      "max-depth": ["warn", { max: 3 }],
      "max-statements": ["warn", { max: 30 }],
      "new-cap": "warn",
      "no-extend-native": "error",
      "no-unused-vars": "warn",
		},
	},
  {
    files: ["test/**"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2017,
        ...globals.mocha,
      },
    },
    rules: {
      "max-len": "off",
      "max-statements": "off"
    }
  },
  {
    ignores: [
      "coverage/**",
      "test/fixtures/**"
    ]
  }
];
