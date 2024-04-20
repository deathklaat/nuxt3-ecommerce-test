module.exports = {
  root: true,
  extends: ['@nuxt/eslint-config', 'plugin:prettier/recommended'],
  rules: {
    'quotes': [2, 'single', { 'avoidEscape': true }],
    'prettier/prettier': ['error', { singleQuote: true }]
  }
};
