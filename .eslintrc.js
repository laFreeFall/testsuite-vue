module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'airbnb',
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    'global-require': 0,

    'semi': [
      'error',
      'never'
    ],

    'no-param-reassign': [
      'error',
      {
        'props': true,
        'ignorePropertyModificationsFor': [
          'state',
        ],
      },
    ],

    'arrow-parens': [
      'error',
      'as-needed'
    ],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
