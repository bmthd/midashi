# no-primitive-semantic-elements

Forbid primitive HTML semantic elements, require using midashi components.

## Rule Details

This rule prevents the use of primitive HTML semantic elements and enforces the use of the corresponding midashi components.

**Forbidden elements and their replacements:**
- `<main>` → `<Main>`
- `<section>` → `<Section>`
- `<header>` → `<Header>`
- `<footer>` → `<Footer>`
- `<article>` → `<Article>`
- `<aside>` → `<Aside>`
- `<nav>` → `<Nav>`

**Why this rule exists:**
- Midashi semantic components work together with the `<H>` component to maintain proper heading hierarchy
- Ensures consistent heading context management throughout your application
- Provides better integration with midashi's heading hierarchy system
- Maintains semantic HTML structure while enabling automatic heading management

## Examples

### ❌ Incorrect

```tsx
function App() {
  return (
    <main>
      <header>
        <nav>Navigation</nav>
      </header>
      <section>
        <article>
          <h1>Article Title</h1>
        </article>
        <aside>
          <h2>Sidebar</h2>
        </aside>
      </section>
      <footer>
        <p>Footer content</p>
      </footer>
    </main>
  );
}
```

### ✅ Correct

```tsx
import { H, Main, Header, Nav, Section, Article, Aside, Footer } from 'midashi';

function App() {
  return (
    <Main>
      <Header>
        <Nav>Navigation</Nav>
      </Header>
      <Section>
        <Article>
          <H>Article Title</H>
        </Article>
        <Aside>
          <H>Sidebar</H>
        </Aside>
      </Section>
      <Footer>
        <p>Footer content</p>
      </Footer>
    </Main>
  );
}
```

## Options

This rule has no options.

## When Not To Use It

- If you are not using the midashi library
- In documentation or test files where you need to demonstrate HTML examples
- In library source code that implements the midashi components themselves
- When using semantic elements that don't affect heading hierarchy (like `<p>`, `<div>`, etc.)

## Related Rules

- [`no-primitive-headings`](./no-primitive-headings.md) - Forbid primitive heading elements