module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    'jest': true,
    'node': true
  },
  extends: [
    'plugin:jest/recommended',
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  settings: {
    "import/resolver": {
      typescript: {} // this loads <rootdir>/tsconfig.json to eslint
    },
  },
  rules: {
    'no-lonely-if': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
  }
};
