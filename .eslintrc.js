module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:vue/vue3-essential", "airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "no-console": "off",
    "no-unused-vars": "off",
    "no-else-return": "error",
    "default-param-last": "error",
    "no-var": "error",
    "no-lone-blocks": "error",
    "require-await": "error",
    "no-eq-null": "error",
    "no-param-reassign": "off",
  },
};
