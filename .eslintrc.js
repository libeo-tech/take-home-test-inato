// @ts-check

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:jest/recommended',
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],

  rules: {
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off'
  }
};
