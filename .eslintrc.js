module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true
  },
  "parser": "@typescript-eslint/parser",
  "extends": ["eslint-config-standard", "plugin:@typescript-eslint/recommended"],
  "plugins": ["@typescript-eslint"],
  rules: {
    "no-console": "off",
    "@typescript-eslint/indent": ["error", 2],
  },
  parserOptions: {
    ecmaFeatures: {
      modules: true
    },
    ecmaVersion: 6,
    sourceType: 'module'
  },
};
