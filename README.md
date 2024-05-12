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

## Usage

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

## Other API

### `<NextHeadingLevelProvider />`

This is context provider that increments the heading level used inside `Main` and `Section`.
Works like them, but does not draw anything.
This is useful, for example, when used in combination with libraries.

```tsx
import { NextHeadingLevelProvider } from 'midashi';

const Component = () => (
    <>
      <H>Heading 1</H>
      <NextHeadingLevelProvider>
        <H>Heading 2</H>
        <NextHeadingLevelProvider>
          <H>Heading 3</H>
          <NextHeadingLevelProvider>
            <H>Heading 4</H>
            <NextHeadingLevelProvider>
              <H>Heading 5</H>
              <NextHeadingLevelProvider>
                <H>Heading 6</H>
              </NextHeadingLevelProvider>
            </NextHeadingLevelProvider>
          </NextHeadingLevelProvider>
        </NextHeadingLevelProvider>
    </NextHeadingLevelProvider>
    </>
)
```

### `useCurrentLevel`

Between 1 and 6 to get how many heading levels that hierarchy should draw.

```tsx
import { useCurrentLevel } from 'midashi';

const Component = () => {
  const currentLevel = useCurrentLevel();
  return <>{currentLevel}</>;
};
```

### `useNextLevel`

Get the incremented heading level of up to 6 that should be passed to NextHeadingLevelProvider.

```tsx
import { useNextLevel } from 'midashi';

const Component = () => {
  const nextLevel = useNextLevel();
  return <>{nextLevel}</>;
};
```

## License

MIT
