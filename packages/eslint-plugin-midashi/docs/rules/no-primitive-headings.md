# no-primitive-headings

Forbid primitive HTML heading elements (`h1`, `h2`, `h3`, `h4`, `h5`, `h6`), require using midashi `<H>` component.

## Rule Details

This rule prevents the use of primitive HTML heading elements and enforces the use of the midashi `<H>` component instead.

**Why this rule exists:**
- The midashi `<H>` component automatically manages heading hierarchy based on the nesting context
- Ensures proper accessibility (correct heading levels in sequence)
- Improves SEO by maintaining semantic structure
- Prevents common accessibility issues like skipping heading levels

## Examples

### ❌ Incorrect

```tsx
function Component() {
  return (
    <div>
      <h1>Main Title</h1>
      <h2>Subtitle</h2>
      <h3>Section Title</h3>
    </div>
  );
}
```

### ✅ Correct

```tsx
import { H } from 'midashi';

function Component() {
  return (
    <div>
      <H>Main Title</H>
      <H>Subtitle</H>
      <H>Section Title</H>
    </div>
  );
}
```

## Options

This rule has no options.

## When Not To Use It

- If you are not using the midashi library
- In documentation or test files where you need to demonstrate HTML examples
- In library source code that implements the midashi components themselves

## Related Rules

- [`no-primitive-semantic-elements`](./no-primitive-semantic-elements.md) - Forbid primitive semantic elements