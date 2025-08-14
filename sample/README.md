# Midashi Examples

This directory contains examples demonstrating how to use the Midashi library for automatic heading hierarchy management in React applications.

## Examples

### 1. SimpleExample.tsx
The most basic example showing how Midashi automatically manages heading levels in a simple document structure.

**Features demonstrated:**
- Basic `H` component usage
- `Main` and `Section` components
- Automatic heading level progression (h1 → h2 → h3 → h4)

**Use case:** Perfect for getting started with Midashi or for simple page layouts.

### 2. WebsiteExample.tsx
A realistic website layout converted from the original issue example, demonstrating proper Midashi usage.

**Features demonstrated:**
- All semantic HTML components (`Header`, `Nav`, `Main`, `Section`, `Article`, `Aside`, `Footer`)
- Fixed className attributes (originally had `classname` typos)
- Proper heading hierarchy in a complex layout
- Integration with CSS classes for styling

**Use case:** Typical business website with navigation, content sections, and footer.

### 3. ComprehensiveExample.tsx
A complete demonstration showcasing all Midashi features and advanced patterns.

**Features demonstrated:**
- Custom components using `useCurrentLevel()` and `useNextLevel()` hooks
- Complex nested structures
- Blog-style layout with multiple articles
- Integration patterns with existing React patterns
- TypeScript usage examples

**Use case:** Advanced applications requiring custom heading components or complex document structures.

### 4. OriginalBrokenExample.tsx
The original code from the issue (with fixes), showing problems that Midashi solves.

**Problems demonstrated:**
- Manual heading level management
- Inconsistent heading hierarchy
- Risk of broken document structure when components are moved or nested differently

**Use case:** Educational comparison to understand the problems Midashi solves.

## How to Use These Examples

### In a React Application

1. Install Midashi:
```bash
npm install midashi
```

2. Import and use any example:
```tsx
import { WebsiteExample } from './path/to/sample';

function App() {
  return <WebsiteExample />;
}
```

### Running Examples Locally

To see the HTML output that these examples generate:

1. Copy any example component into your React application
2. Render it in your browser
3. Inspect the DOM to see the automatic heading hierarchy

### Expected HTML Output

Each example includes comments showing the expected HTML output. For instance, `SimpleExample` renders:

```html
<h1>Page Title</h1>
<main>
  <h2>Main Content</h2>
  <p>This is the main content of the page.</p>
  
  <section>
    <h3>First Section</h3>
    <p>Content for the first section.</p>
    
    <section>
      <h4>Subsection</h4>
      <p>Content for the subsection.</p>
    </section>
  </section>
  
  <section>
    <h3>Second Section</h3>
    <p>Content for the second section.</p>
  </section>
</main>
```

## Key Benefits Demonstrated

1. **Automatic Heading Management**: No need to manually choose h1, h2, h3, etc.
2. **Consistent Document Structure**: Heading levels automatically adjust based on nesting
3. **Better Accessibility**: Proper heading hierarchy improves screen reader navigation
4. **Maintainable Code**: Components can be moved and restructured without breaking heading hierarchy
5. **TypeScript Support**: Full type safety for heading levels and component props

## Integration with Styling Libraries

These examples use CSS classes compatible with popular frameworks:

- **Tailwind CSS**: Most examples use Tailwind classes
- **CSS Modules**: className props work seamlessly
- **Styled Components**: Can be wrapped with styled() function
- **Any CSS Framework**: Standard className prop support

## Testing Your Implementation

To verify your Midashi implementation:

1. **Visual Check**: Inspect the DOM to see h1, h2, h3, etc. elements
2. **Accessibility Test**: Use screen reader tools to navigate by headings
3. **Automated Testing**: Use the patterns from `test/index.test.tsx`

## Common Patterns

### Custom Heading Component
```tsx
import { useCurrentLevel } from 'midashi';

const MyHeading = ({ children, className }) => {
  const level = useCurrentLevel();
  const Component = level; // 'h1', 'h2', etc.
  return <Component className={`heading ${className}`}>{children}</Component>;
};
```

### Conditional Heading Levels
```tsx
import { useCurrentLevel } from 'midashi';

const ResponsiveHeading = ({ children }) => {
  const level = useCurrentLevel();
  const className = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-semibold', 
    h3: 'text-2xl font-medium',
    h4: 'text-xl font-medium',
    h5: 'text-lg font-medium',
    h6: 'text-base font-medium'
  }[level];
  
  return <H className={className}>{children}</H>;
};
```

### Integration with Component Libraries
```tsx
import { useCurrentLevel } from 'midashi';
import { Heading } from '@chakra-ui/react';

const ChakraHeading = ({ children, ...props }) => {
  const as = useCurrentLevel();
  return <Heading as={as} {...props}>{children}</Heading>;
};
```

## Contributing

To add a new example:

1. Create a new `.tsx` file in this directory
2. Follow the existing pattern with comments explaining the features
3. Export it from `index.ts`
4. Add documentation to this README
5. Include expected HTML output in comments

## Questions?

See the main [README.md](../README.md) for more information about the Midashi library.