import noPrimitiveHeadings from './rules/no-primitive-headings';
import noPrimitiveSemanticElements from './rules/no-primitive-semantic-elements';

const plugin = {
  meta: {
    name: 'eslint-plugin-midashi',
    version: '1.0.0',
  },
  rules: {
    'no-primitive-headings': noPrimitiveHeadings,
    'no-primitive-semantic-elements': noPrimitiveSemanticElements,
  },
  configs: {
    recommended: {
      plugins: ['midashi'],
      rules: {
        'midashi/no-primitive-headings': 'error',
        'midashi/no-primitive-semantic-elements': 'error',
      },
    },
    strict: {
      plugins: ['midashi'],
      rules: {
        'midashi/no-primitive-headings': 'error',
        'midashi/no-primitive-semantic-elements': 'error',
      },
    },
  },
};

export = plugin;