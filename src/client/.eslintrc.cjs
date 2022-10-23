/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  'env': {
    'browser': true,
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'project': 'src/client/tsconfig.json'
  },
  'extends': [
    'plugin:vue/vue3-strongly-recommended',
    '@vue/eslint-config-typescript/recommended'
  ],
  'rules': {
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
};
