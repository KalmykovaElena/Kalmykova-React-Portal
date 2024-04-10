module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  extends: [
    'plugin:react/recommended',
    'plugin:i18next/recommended',
    'prettier',
  ],

  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  settings: {
    react: {
      version: '18.2.0',
    },
  },
  rules: {
    'no-param-reassign': 'off',
    'no-unused-vars': 'warn',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/no-children-prop': 'off',
    'array-callback-return': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'no-return-assign': 'off',
    'consistent-return': 'off',
    'react/prop-types': 'off',
    'react/no-this-in-sfc': 'off',
    'no-shadow': 'off',
    'default-case': 'off',
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    quotes: ['error', 'single'],
  },
};
