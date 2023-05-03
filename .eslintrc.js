module.exports = {
  extends: ['airbnb-base'],
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  rules: {
    'import/extensions': [
      'error', 'ignorePackages',
    ],
  },
};
