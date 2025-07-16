import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // Restrict primitive HTML heading elements - developers should use <H> component
      'react/forbid-elements': [
        'error',
        {
          forbid: [
            {
              element: 'h1',
              message: 'Use <H> component from midashi instead of primitive <h1> to ensure proper heading hierarchy management.',
            },
            {
              element: 'h2',
              message: 'Use <H> component from midashi instead of primitive <h2> to ensure proper heading hierarchy management.',
            },
            {
              element: 'h3',
              message: 'Use <H> component from midashi instead of primitive <h3> to ensure proper heading hierarchy management.',
            },
            {
              element: 'h4',
              message: 'Use <H> component from midashi instead of primitive <h4> to ensure proper heading hierarchy management.',
            },
            {
              element: 'h5',
              message: 'Use <H> component from midashi instead of primitive <h5> to ensure proper heading hierarchy management.',
            },
            {
              element: 'h6',
              message: 'Use <H> component from midashi instead of primitive <h6> to ensure proper heading hierarchy management.',
            },
            {
              element: 'main',
              message: 'Use <Main> component from midashi instead of primitive <main> to ensure proper heading hierarchy management.',
            },
            {
              element: 'section',
              message: 'Use <Section> component from midashi instead of primitive <section> to ensure proper heading hierarchy management.',
            },
            {
              element: 'header',
              message: 'Use <Header> component from midashi instead of primitive <header> to ensure proper heading hierarchy management.',
            },
            {
              element: 'footer',
              message: 'Use <Footer> component from midashi instead of primitive <footer> to ensure proper heading hierarchy management.',
            },
            {
              element: 'article',
              message: 'Use <Article> component from midashi instead of primitive <article> to ensure proper heading hierarchy management.',
            },
            {
              element: 'aside',
              message: 'Use <Aside> component from midashi instead of primitive <aside> to ensure proper heading hierarchy management.',
            },
            {
              element: 'nav',
              message: 'Use <Nav> component from midashi instead of primitive <nav> to ensure proper heading hierarchy management.',
            },
          ],
        },
      ],
      // React specific rules
      'react/react-in-jsx-scope': 'off', // Not needed with React 17+ JSX transform
      'react/prop-types': 'off', // Using TypeScript for prop validation
    },
  },
  {
    // Override for library source files - allow primitive elements in the library itself
    files: ['lib/**/*.{js,jsx,ts,tsx}'],
    rules: {
      'react/forbid-elements': 'off',
    },
  },
  {
    // Override for test files - allow primitive elements for testing comparison
    files: ['test/**/*.{js,jsx,ts,tsx}', '**/*.test.{js,jsx,ts,tsx}', '**/*.spec.{js,jsx,ts,tsx}'],
    rules: {
      'react/forbid-elements': 'off',
    },
  }
);