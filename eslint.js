import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2026,
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.es2026,
      },
    },
    rules: {
      "block-scoped-var": "error",
      eqeqeq: ["error", "smart"],
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
      "max-statements": "off",
    },
  },
  {
    ignores: ["coverage/**", "test/fixtures/**"],
  },
];
