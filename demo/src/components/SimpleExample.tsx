import { Main, Section, H } from 'midashi';

export default function SimpleExample() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <H className="text-3xl font-bold text-gray-800 mb-4">Simple Example</H>
      
      <Main className="space-y-6">
        <H className="text-2xl font-semibold text-gray-700">Main Content</H>
        <p className="text-gray-600">
          This demonstrates basic Midashi usage with automatic heading hierarchy.
        </p>
        
        <Section className="border-l-4 border-blue-500 pl-4">
          <H className="text-xl font-medium text-gray-700">First Section</H>
          <p className="text-gray-600 mt-2">
            Content for the first section. Notice how the heading automatically becomes an h3.
          </p>
          
          <Section className="mt-4 bg-gray-50 p-4 rounded">
            <H className="text-lg font-medium text-gray-700">Subsection</H>
            <p className="text-gray-600 mt-2">
              This is a nested section with an h4 heading, automatically determined by Midashi.
            </p>
          </Section>
        </Section>
        
        <Section className="border-l-4 border-green-500 pl-4">
          <H className="text-xl font-medium text-gray-700">Second Section</H>
          <p className="text-gray-600 mt-2">
            Another section at the same level as the first one, also with an h3 heading.
          </p>
        </Section>
      </Main>
    </div>
  );
}