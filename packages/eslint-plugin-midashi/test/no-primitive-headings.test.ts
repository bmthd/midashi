import { RuleTester } from '@typescript-eslint/rule-tester';
import rule from '../dist/rules/no-primitive-headings';

const ruleTester = new RuleTester({
  languageOptions: {
    parser: require('@typescript-eslint/parser'),
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
});

ruleTester.run('no-primitive-headings', rule, {
  valid: [
    {
      code: '<H>Title</H>',
    },
    {
      code: '<div><H>Subtitle</H></div>',
    },
    {
      code: '<CustomComponent><H>Content</H></CustomComponent>',
    },
  ],
  invalid: [
    {
      code: '<h1>Title</h1>',
      errors: [
        {
          messageId: 'noPrimitiveHeading',
          data: { element: 'h1' },
        },
      ],
      output: '<H>Title</H>',
    },
    {
      code: '<h2>Subtitle</h2>',
      errors: [
        {
          messageId: 'noPrimitiveHeading',
          data: { element: 'h2' },
        },
      ],
      output: '<H>Subtitle</H>',
    },
    {
      code: '<div><h3>Content</h3></div>',
      errors: [
        {
          messageId: 'noPrimitiveHeading',
          data: { element: 'h3' },
        },
      ],
      output: '<div><H>Content</H></div>',
    },
    {
      code: '<h4>Level 4</h4>',
      errors: [
        {
          messageId: 'noPrimitiveHeading',
          data: { element: 'h4' },
        },
      ],
      output: '<H>Level 4</H>',
    },
    {
      code: '<h5>Level 5</h5>',
      errors: [
        {
          messageId: 'noPrimitiveHeading',
          data: { element: 'h5' },
        },
      ],
      output: '<H>Level 5</H>',
    },
    {
      code: '<h6>Level 6</h6>',
      errors: [
        {
          messageId: 'noPrimitiveHeading',
          data: { element: 'h6' },
        },
      ],
      output: '<H>Level 6</H>',
    },
  ],
});