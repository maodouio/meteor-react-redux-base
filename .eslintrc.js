module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    meteor: true
  },
  extends: [
    'eslint:recommended',
    'plugin:meteor/recommended',
    'plugin:react/recommended'
  ],
  installedESLint: true,
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: [
    'react',
    'meteor'
  ],
  rules: {
    indent: [2, 2, { SwitchCase: 1 }],
    quotes: [2, 'single'],
    semi: [2, 'always'],
    'no-unused-vars': 1,
    'no-console': 0,
    'react/prop-types': 0, // disabled for dev
    'react/no-danger': 0
  }
};
