import { TSESTree } from '@typescript-eslint/utils';
import { createRule } from '../utils/create-rule';

export = createRule({
  name: 'no-primitive-headings',
  meta: {
    type: 'problem',
    docs: {
      description: 'Forbid primitive HTML heading elements, require using midashi <H> component',
    },
    fixable: 'code',
    schema: [],
    messages: {
      noPrimitiveHeading: 'Use <H> component from midashi instead of primitive <{{element}}> to ensure proper heading hierarchy management.',
    },
  },
  defaultOptions: [],
  create(context) {
    return {
      JSXElement(node: TSESTree.JSXElement) {
        if (node.openingElement.name.type !== 'JSXIdentifier') return;
        
        const elementName = node.openingElement.name.name;
        const headingElements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
        
        if (headingElements.includes(elementName)) {
          context.report({
            node: node.openingElement.name,
            messageId: 'noPrimitiveHeading',
            data: { element: elementName },
            fix(fixer) {
              const fixes = [
                fixer.replaceText(node.openingElement.name, 'H')
              ];
              
              // Also fix the closing tag if it exists
              if (node.closingElement?.name.type === 'JSXIdentifier') {
                fixes.push(fixer.replaceText(node.closingElement.name, 'H'));
              }
              
              return fixes;
            },
          });
        }
      },
    };
  },
});