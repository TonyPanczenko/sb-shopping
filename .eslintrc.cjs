/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  'root': true,
  'env': {
    'es2022': true
  },
  // 'parser': '@typescript-eslint/parser',
  'parserOptions': {
    // 'project': 'tsconfig.json',
    'sourceType': 'module',
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'off',
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'max-len': ['error', {
      code: 120,
      ignoreTrailingComments: true
    }
    ],
  },
  'ignorePatterns': ['dist/*', '.eslintrc.cjs'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
      }
    }
  }
};
