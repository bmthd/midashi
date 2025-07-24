import { useCurrentLevel, useNextLevel, Main, Section } from 'midashi';
import React from 'react';

function CustomHeading({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const level = useCurrentLevel();
  const Tag = level as keyof React.JSX.IntrinsicElements;
  
  return <Tag className={`custom-heading ${className}`}>{children}</Tag>;
}

function NextLevelButton({ children }: { children: React.ReactNode }) {
  const nextLevel = useNextLevel();
  const Tag = nextLevel as keyof React.JSX.IntrinsicElements;
  
  return (
    <Tag className="text-sm text-blue-600 font-medium cursor-pointer hover:underline">
      {children}
    </Tag>
  );
}

export default function HooksExample() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <CustomHeading className="text-3xl font-bold text-gray-800 mb-4">
        Hooks Example
      </CustomHeading>
      
      <Main className="space-y-6">
        <CustomHeading className="text-2xl font-semibold text-gray-700">
          Using Custom Components
        </CustomHeading>
        <p className="text-gray-600">
          This example shows how to create custom components using Midashi hooks.
        </p>
        
        <Section className="border-l-4 border-purple-500 pl-4">
          <CustomHeading className="text-xl font-medium text-purple-700">
            Custom Heading Component
          </CustomHeading>
          <p className="text-gray-600 mt-2">
            The CustomHeading component uses <code className="bg-gray-100 px-1 rounded">useCurrentLevel()</code> to 
            determine the appropriate HTML heading tag.
          </p>
          
          <div className="mt-4 p-3 bg-gray-50 rounded">
            <NextLevelButton>
              Next Level Button (uses useNextLevel hook)
            </NextLevelButton>
          </div>
        </Section>
        
        <Section className="border-l-4 border-indigo-500 pl-4">
          <CustomHeading className="text-xl font-medium text-indigo-700">
            Automatic Level Management
          </CustomHeading>
          <p className="text-gray-600 mt-2">
            All headings automatically adjust their level based on the component nesting structure.
          </p>
          
          <Section className="mt-4 bg-indigo-50 p-4 rounded">
            <CustomHeading className="text-lg font-medium text-indigo-800">
              Nested Section
            </CustomHeading>
            <p className="text-gray-600 mt-2">
              This heading becomes an h4 automatically due to the nesting level.
            </p>
          </Section>
        </Section>
      </Main>
    </div>
  );
}