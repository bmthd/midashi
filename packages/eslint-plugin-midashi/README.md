# eslint-plugin-midashi

ESLint plugin to enforce usage of [midashi](https://github.com/bmthd/midashi) components instead of primitive HTML elements for proper heading hierarchy management.

## Installation

```bash
npm install --save-dev eslint-plugin-midashi
```

## Usage

Add `midashi` to the plugins section of your `.eslintrc` configuration file:

```json
{
  "plugins": ["midashi"]
}
```

Then configure the rules you want to use under the rules section:

```json
{
  "rules": {
    "midashi/no-primitive-headings": "error",
    "midashi/no-primitive-semantic-elements": "error"
  }
}
```

### Recommended Configuration

You can also use the recommended configuration which includes all rules:

```json
{
  "extends": ["plugin:midashi/recommended"]
}
```

## Rules

| Rule | Description | Fixable |
|------|-------------|---------|
| [`no-primitive-headings`](./docs/rules/no-primitive-headings.md) | Forbid primitive HTML heading elements (`h1`, `h2`, etc.), require using midashi `<H>` component | ✅ |
| [`no-primitive-semantic-elements`](./docs/rules/no-primitive-semantic-elements.md) | Forbid primitive HTML semantic elements (`main`, `section`, etc.), require using midashi components | ✅ |

## Examples

### ❌ Incorrect

```tsx
function App() {
  return (
    <main>
      <h1>Title</h1>
      <section>
        <h2>Subtitle</h2>
        <article>
          <h3>Article Title</h3>
        </article>
      </section>
    </main>
  );
}
```

### ✅ Correct

```tsx
import { H, Main, Section, Article } from 'midashi';

function App() {
  return (
    <Main>
      <H>Title</H>
      <Section>
        <H>Subtitle</H>
        <Article>
          <H>Article Title</H>
        </Article>
      </Section>
    </Main>
  );
}
```

## Rule Details

### `midashi/no-primitive-headings`

This rule forbids the use of primitive HTML heading elements (`h1`, `h2`, `h3`, `h4`, `h5`, `h6`) and requires using the midashi `<H>` component instead.

**Why?** The midashi `<H>` component automatically manages heading hierarchy based on the nesting context, ensuring proper accessibility and SEO.

### `midashi/no-primitive-semantic-elements`

This rule forbids the use of primitive HTML semantic elements and requires using the corresponding midashi components:

- `<main>` → `<Main>`
- `<section>` → `<Section>`
- `<header>` → `<Header>`
- `<footer>` → `<Footer>`
- `<article>` → `<Article>`
- `<aside>` → `<Aside>`
- `<nav>` → `<Nav>`

**Why?** The midashi semantic components work together with the `<H>` component to maintain proper heading hierarchy throughout your application.

## Auto-fixing

Both rules support ESLint's `--fix` option to automatically replace primitive elements with their midashi equivalents:

```bash
eslint --fix src/
```

## License

MIT