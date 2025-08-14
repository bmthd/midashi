# Midashi

## Introduction

This is a library for React that concisely manages heading levels.
Dependencies are React only, and 100% developed in TypeScript.

## Installation

```bash:npm
npm install midashi
```

```bash:yarn
yarn add midashi
```

```bash:pnpm
pnpm add midashi
```

```bash:bun
bun install midashi
```

## Concept

The h1-h6 tags used to render the heading level are simple, but they can easily create impossible situations in the document structure.
For example

```tsx
export default function App() {
  return (
    <main> {/* Missing h1 */}
      <h2>Heading 2</h2>
      <h3>Heading 3</h3> {/* Same section in the same heading level */}
    </main> 
  )
}

```

In the actual product, the code will be split and possibly commonized.
The larger the application, the more difficult it becomes to detect.
This library provides a thin wrapper around the h tag and the tags that represent the document structure so that the tag itself can determine which heading level it should provide.

```tsx:App.tsx
import { Main, Section, H } from 'midashi';

const App = () => (
  <>
   <H>Heading 1</H>
    <Main>
      <H>Heading 2</H>
      <Section>
         <H>Heading 3</H>
         <Section>
           <H>Heading 4</H>
           <Section>
             <H>Heading 5</H>
             <Section>
               <H>Heading 6</H>
             </Section>
         </Section>
      </Section>
    </Main>
  </>
);
```

Can be described in the same way as a normal h1-h6, section, and main DOM component

This is rendered as follows:

```html
<h1>Heading 1</h1>
<main>
  <h2>Heading 2</h2>
  <section>
    <h3>Heading 3</h3>
    <section>
      <h4>Heading 4</h4>
      <section>
        <h5>Heading 5</h5>
        <section>
          <h6>Heading 6</h6>
        </section>
      </section>
    </section>
  </section>
</main>
```

## API

### `<Main />`, `<Section />`, `<Header />`, `<Footer />`, `<Article />`, `<Aside />`, `<Nav />`

These are components that draw the main, section, header, footer, article, aside, and nav elements.
They are thin wrappers for their respective DOM components and can be used exactly like them.
It acts as a Context Provider and can lower the heading level to get its children.

```tsx
import { Main, Section, Header, Footer, Article, Aside, Nav, H } from 'midashi';

const Component = () => (
  <>
    <H>Heading 1</H>
    <Main>
      <H>Heading 2</H>
      <Section>
        <H>Heading 3</H>
        <Header>
          <H>Heading 4</H>
        </Header>
        <Footer>
          <H>Heading 4</H>
        </Footer>
        <Article>
          <H>Heading 4</H>
        </Article>
        <Aside>
          <H>Heading 4</H>
        </Aside>
        <Nav>
          <H>Heading 4</H>
        </Nav>
      </Section>
    </Main>
  </>
);
```

### `<NextHeadingProvider />`

This is context provider that increments the heading level used inside DOM component wrappers.
Works like them, but does not draw anything.

```tsx
import { NextHeadingProvider } from 'midashi';
import { Container } from '@chakra-ui/react';

export const MyContainer:FC<{ children:ReactNode }> = ({ children }) => (
  <NextHeadingProvider>
    <Container>
      {children}
    </Container>
  </NextHeadingProvider>
);
```

### `useCurrentLevel`, `useNextLevel`

Between h1 and h6 to get how many heading levels that hierarchy should draw.
The value is a union type between h1 and h6, which is useful when creating your own components, such as in a switch statement.
Use in combination with libraries as follows:

```tsx
import { useCurrentLevel } from 'midashi';
import { Heading } from '@chakra-ui/react';

const MyHeading = () => {
  const as = useCurrentLevel();
  return <Heading as={as}>Heading</Heading>;
};
```

You can also create your own components with a pre-designed look and feel as follows:

```tsx
import { useCurrentLevel} from 'midashi';

const MyHeading = () => {
  const level = useCurrentLevel();
  switch (level) {
    case 'h1':
      return <h1 className="site-title">Heading</h1>;
    case 'h2':
      return <h2 className="page-title">Heading</h2>;
    case 'h3':
      return <h3 className="section-title">Heading</h3>;
    case 'h4':
      return <h4 className="sub-section-title">Heading</h4>;
    case 'h5':
      return <h5 className="sub-sub-section-title">Heading</h5>;
    case 'h6':
      return <h6 className="sub-sub-sub-section-title">Heading</h6>;
  }
};
```

## Examples

Check out the [sample directory](./sample) for comprehensive examples demonstrating various Midashi usage patterns:

- **SimpleExample**: Basic usage with automatic heading hierarchy
- **WebsiteExample**: Realistic website layout with all semantic components
- **ComprehensiveExample**: Advanced patterns with custom components and hooks
- **OriginalBrokenExample**: Shows problems that Midashi solves

Each example includes detailed comments and expected HTML output.

## License

MIT
