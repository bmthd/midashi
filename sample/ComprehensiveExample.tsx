/**
 * Comprehensive example showcasing all Midashi components and patterns
 * 
 * This example demonstrates:
 * - Automatic heading hierarchy management
 * - All semantic HTML components with heading providers
 * - Proper nesting and heading levels
 * - Integration with existing React patterns
 */
import { Header, Main, Section, Article, Aside, Nav, Footer, H, NextHeadingProvider, useCurrentLevel, useNextLevel } from 'midashi';
import { type FC } from 'react';

// Custom component using Midashi hooks
const CustomHeading: FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const level = useCurrentLevel();
  const nextLevel = useNextLevel();
  
  return (
    <div className={className}>
      <H>{children}</H>
      <small className="text-gray-500">
        (Current: {level}, Next: {nextLevel})
      </small>
    </div>
  );
};

// Blog post component demonstrating proper heading hierarchy
const BlogPost: FC<{ title: string; content: string }> = ({ title, content }) => (
  <Article className="mb-6 p-4 border rounded">
    <H className="text-lg font-bold mb-2">{title}</H>
    <p className="text-gray-700">{content}</p>
    
    <Section className="mt-4">
      <H className="text-base font-semibold">Comments</H>
      <div className="space-y-2">
        <div className="p-2 bg-gray-50 rounded">
          <H className="text-sm font-medium">User Comment</H>
          <p className="text-xs text-gray-600">Great article!</p>
        </div>
      </div>
    </Section>
  </Article>
);

export default function ComprehensiveExample() {
  return (
    <>
      <Header className="bg-blue-900 text-white p-6">
        <CustomHeading className="text-3xl font-bold">
          Midashi Library Demo
        </CustomHeading>
        <p className="mt-2 text-blue-100">
          Demonstrating automatic heading hierarchy management
        </p>
      </Header>

      <div className="flex min-h-screen">
        <Nav className="bg-gray-800 text-white w-64 p-6">
          <CustomHeading className="text-xl font-semibold mb-4">
            Navigation
          </CustomHeading>
          
          <Section className="mb-4">
            <H className="text-lg font-medium mb-2">Main Pages</H>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-blue-300">Home</a></li>
              <li><a href="#" className="hover:text-blue-300">About</a></li>
              <li><a href="#" className="hover:text-blue-300">Services</a></li>
            </ul>
          </Section>
          
          <Section>
            <H className="text-lg font-medium mb-2">Resources</H>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-blue-300">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-300">Examples</a></li>
              <li><a href="#" className="hover:text-blue-300">Support</a></li>
            </ul>
          </Section>
        </Nav>

        <Main className="flex-1 p-6">
          <Section className="mb-8">
            <CustomHeading className="text-2xl font-bold mb-4">
              Welcome to Midashi
            </CustomHeading>
            <p className="text-gray-700 mb-4">
              Midashi is a React library that automatically manages heading levels 
              based on your component hierarchy, ensuring proper document structure.
            </p>
            
            <Section className="mb-6">
              <H className="text-xl font-semibold mb-3">Key Features</H>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Automatic heading level management</li>
                <li>Semantic HTML component wrappers</li>
                <li>TypeScript support</li>
                <li>Zero dependencies except React</li>
              </ul>
            </Section>
            
            <Section>
              <H className="text-xl font-semibold mb-3">How It Works</H>
              <p className="text-gray-700 mb-4">
                Each semantic component (Main, Section, Article, etc.) automatically 
                provides the next heading level to its children.
              </p>
              
              <Section className="bg-gray-50 p-4 rounded">
                <H className="text-lg font-medium mb-2">Example Structure</H>
                <pre className="text-sm text-gray-600 bg-white p-3 rounded border">
{`<H>          <!-- h1 -->
<Main>
  <H>        <!-- h2 -->
  <Section>
    <H>      <!-- h3 -->
  </Section>
</Main>`}
                </pre>
              </Section>
            </Section>
          </Section>

          <Section className="mb-8">
            <H className="text-2xl font-bold mb-4">Blog Posts</H>
            <BlogPost 
              title="Getting Started with Midashi"
              content="Learn how to integrate Midashi into your React application for better heading management."
            />
            <BlogPost 
              title="Advanced Patterns"
              content="Explore advanced usage patterns and custom components with Midashi hooks."
            />
          </Section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Article className="bg-white p-6 rounded-lg shadow">
              <H className="text-xl font-bold mb-3">Featured Article</H>
              <p className="text-gray-700 mb-4">
                Discover how proper heading hierarchy improves accessibility 
                and SEO for your web applications.
              </p>
              
              <Section>
                <H className="text-lg font-semibold mb-2">Key Benefits</H>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Better screen reader navigation</li>
                  <li>Improved SEO rankings</li>
                  <li>Consistent document structure</li>
                </ul>
              </Section>
            </Article>

            <Aside className="bg-blue-50 p-6 rounded-lg">
              <H className="text-xl font-bold mb-3">Quick Tips</H>
              
              <Section className="mb-4">
                <H className="text-lg font-semibold mb-2">Best Practices</H>
                <ul className="text-gray-700 space-y-1">
                  <li>Use semantic components consistently</li>
                  <li>Leverage the H component for all headings</li>
                  <li>Test with screen readers</li>
                </ul>
              </Section>
              
              <Section>
                <H className="text-lg font-semibold mb-2">Hooks Usage</H>
                <p className="text-gray-700 text-sm">
                  Use <code>useCurrentLevel()</code> and <code>useNextLevel()</code> 
                  to create custom components that integrate with the heading hierarchy.
                </p>
              </Section>
            </Aside>
          </div>
        </Main>
      </div>

      <Footer className="bg-gray-800 text-white p-6">
        <div className="flex justify-between items-center">
          <div>
            <H className="text-lg font-semibold">Midashi Library</H>
            <p className="text-gray-300 text-sm">
              © 2023 Midashi. Open source under MIT license.
            </p>
          </div>
          
          <Nav>
            <H className="text-base font-medium mb-2">Quick Links</H>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="text-gray-300 hover:text-white">GitHub</a>
              <a href="#" className="text-gray-300 hover:text-white">NPM</a>
              <a href="#" className="text-gray-300 hover:text-white">Docs</a>
            </div>
          </Nav>
        </div>
      </Footer>
    </>
  );
}