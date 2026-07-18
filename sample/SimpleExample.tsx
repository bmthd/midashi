/**
 * Simple example demonstrating basic Midashi usage
 * 
 * This is the most basic example showing how Midashi
 * automatically manages heading levels in a simple document structure.
 */
import { Main, Section, H } from 'midashi';

export default function SimpleExample() {
  return (
    <>
      <H>Page Title</H>
      
      <Main>
        <H>Main Content</H>
        <p>This is the main content of the page.</p>
        
        <Section>
          <H>First Section</H>
          <p>Content for the first section.</p>
          
          <Section>
            <H>Subsection</H>
            <p>Content for the subsection.</p>
          </Section>
        </Section>
        
        <Section>
          <H>Second Section</H>
          <p>Content for the second section.</p>
        </Section>
      </Main>
    </>
  );
}

// This renders as:
// <h1>Page Title</h1>
// <main>
//   <h2>Main Content</h2>
//   <p>This is the main content of the page.</p>
//   
//   <section>
//     <h3>First Section</h3>
//     <p>Content for the first section.</p>
//     
//     <section>
//       <h4>Subsection</h4>
//       <p>Content for the subsection.</p>
//     </section>
//   </section>
//   
//   <section>
//     <h3>Second Section</h3>
//     <p>Content for the second section.</p>
//   </section>
// </main>