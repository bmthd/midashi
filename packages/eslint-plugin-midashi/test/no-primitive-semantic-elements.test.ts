import { RuleTester } from '@typescript-eslint/rule-tester';
import rule from '../dist/rules/no-primitive-semantic-elements';

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

ruleTester.run('no-primitive-semantic-elements', rule, {
  valid: [
    {
      code: '<Main><H>Title</H></Main>',
    },
    {
      code: '<Section><H>Subtitle</H></Section>',
    },
    {
      code: '<Header><Nav><H>Navigation</H></Nav></Header>',
    },
    {
      code: '<Article><H>Article Title</H></Article>',
    },
    {
      code: '<Footer><p>Copyright</p></Footer>',
    },
  ],
  invalid: [
    {
      code: '<main><h1>Title</h1></main>',
      errors: [
        {
          messageId: 'noPrimitiveSemanticElement',
          data: { element: 'main', midashiComponent: 'Main' },
        },
      ],
      output: '<Main><h1>Title</h1></Main>',
    },
    {
      code: '<section><h2>Subtitle</h2></section>',
      errors: [
        {
          messageId: 'noPrimitiveSemanticElement',
          data: { element: 'section', midashiComponent: 'Section' },
        },
      ],
      output: '<Section><h2>Subtitle</h2></Section>',
    },
    {
      code: '<header><nav>Navigation</nav></header>',
      errors: [
        {
          messageId: 'noPrimitiveSemanticElement',
          data: { element: 'header', midashiComponent: 'Header' },
        },
        {
          messageId: 'noPrimitiveSemanticElement',
          data: { element: 'nav', midashiComponent: 'Nav' },
        },
      ],
      output: [
        '<Header><nav>Navigation</nav></Header>',
        '<Header><Nav>Navigation</Nav></Header>',
      ],
    },
    {
      code: '<article><h3>Article</h3></article>',
      errors: [
        {
          messageId: 'noPrimitiveSemanticElement',
          data: { element: 'article', midashiComponent: 'Article' },
        },
      ],
      output: '<Article><h3>Article</h3></Article>',
    },
    {
      code: '<footer><p>Footer content</p></footer>',
      errors: [
        {
          messageId: 'noPrimitiveSemanticElement',
          data: { element: 'footer', midashiComponent: 'Footer' },
        },
      ],
      output: '<Footer><p>Footer content</p></Footer>',
    },
    {
      code: '<aside><h4>Sidebar</h4></aside>',
      errors: [
        {
          messageId: 'noPrimitiveSemanticElement',
          data: { element: 'aside', midashiComponent: 'Aside' },
        },
      ],
      output: '<Aside><h4>Sidebar</h4></Aside>',
    },
  ],
});