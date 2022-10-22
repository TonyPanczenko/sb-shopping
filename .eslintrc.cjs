/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  'root': true,
  'env': {
    'browser': true,
    'es2022': true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  'parserOptions': {
    'sourceType': 'module'
  },
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
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 3
      },
      'multiline': {
        'max': 1
      }
    }],
    'vue/html-indent': ['error', 'tab', {
      'attribute': 1,
      'baseIndent': 1,
      'closeBracket': {
        startTag: 0,
        endTag: 0,
        selfClosingTag: 0,
      },
      'alignAttributesVertically': true,
      'ignores': []
    }]
  },
  'ignorePatterns': ['dist/*'],
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
