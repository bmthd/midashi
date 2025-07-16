import { TSESTree } from '@typescript-eslint/utils';
import { createRule } from '../utils/create-rule';

export = createRule({
  name: 'no-primitive-semantic-elements',
  meta: {
    type: 'problem',
    docs: {
      description: 'Forbid primitive HTML semantic elements, require using midashi components',
    },
    fixable: 'code',
    schema: [],
    messages: {
      noPrimitiveSemanticElement: 'Use <{{midashiComponent}}> component from midashi instead of primitive <{{element}}> to ensure proper heading hierarchy management.',
    },
  },
  defaultOptions: [],
  create(context) {
    return {
      JSXElement(node: TSESTree.JSXElement) {
        if (node.openingElement.name.type !== 'JSXIdentifier') return;
        
        const elementName = node.openingElement.name.name;
        const elementMapping: Record<string, string> = {
          main: 'Main',
          section: 'Section',
          header: 'Header',
          footer: 'Footer',
          article: 'Article',
          aside: 'Aside',
          nav: 'Nav',
        };
        
        if (elementName in elementMapping) {
          const midashiComponent = elementMapping[elementName];
          context.report({
            node: node.openingElement.name,
            messageId: 'noPrimitiveSemanticElement',
            data: { 
              element: elementName,
              midashiComponent: midashiComponent,
            },
            fix(fixer) {
              const fixes = [
                fixer.replaceText(node.openingElement.name, midashiComponent)
              ];
              
              // Also fix the closing tag if it exists
              if (node.closingElement?.name.type === 'JSXIdentifier') {
                fixes.push(fixer.replaceText(node.closingElement.name, midashiComponent));
              }
              
              return fixes;
            },
          });
        }
      },
    };
  },
});