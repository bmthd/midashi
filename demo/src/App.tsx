import { useState } from 'react';
import { H } from 'midashi';
import SimpleExample from './components/SimpleExample';
import WebsiteExample from './components/WebsiteExample';
import HooksExample from './components/HooksExample';

type ExampleType = 'simple' | 'website' | 'hooks';

function App() {
  const [activeExample, setActiveExample] = useState<ExampleType>('simple');

  const examples = {
    simple: {
      title: 'Simple Example',
      description: 'Basic usage with automatic heading hierarchy',
      component: <SimpleExample />
    },
    website: {
      title: 'Website Example', 
      description: 'Complete website layout with semantic structure',
      component: <WebsiteExample />
    },
    hooks: {
      title: 'Hooks Example',
      description: 'Custom components using Midashi hooks',
      component: <HooksExample />
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <H className="sr-only">Midashi Demo</H>
      
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <H className="text-4xl font-bold text-gray-900 mb-2">Midashi Demo</H>
          <p className="text-gray-600">
            Automatic heading hierarchy management for React applications
          </p>
        </div>
      </header>

      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8">
            {Object.entries(examples).map(([key, example]) => (
              <button
                key={key}
                onClick={() => setActiveExample(key as ExampleType)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeExample === key
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {example.title}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            {examples[activeExample].title}
          </h2>
          <p className="text-gray-600">
            {examples[activeExample].description}
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border">
          {examples[activeExample].component}
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">About Midashi</h3>
          <p className="text-blue-700 mb-4">
            Midashi is a React library that automatically manages heading hierarchy in your components. 
            It ensures proper semantic structure without manual h1, h2, h3 management.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/bmthd/midashi"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
            <a
              href="https://www.npmjs.com/package/midashi"
              className="inline-flex items-center px-4 py-2 bg-white text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on npm
            </a>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 Midashi Demo. Built with React + TypeScript + Vite</p>
        </div>
      </footer>
    </div>
  );
}

export default App;