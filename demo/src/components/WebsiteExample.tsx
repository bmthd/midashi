import { Header, Main, Section, Article, Aside, Nav, Footer, H } from 'midashi';

export default function WebsiteExample() {
  return (
    <div className="min-h-screen bg-gray-100">
      <H className="sr-only">Sample Website</H>
      
      <Header className="bg-blue-600 text-white py-4 px-6">
        <H className="text-2xl font-bold">Sample Website</H>
      </Header>
      
      <div className="flex">
        <Nav className="bg-blue-700 text-white w-64 p-6 min-h-screen">
          <H className="text-xl font-bold mb-4">Navigation</H>
          <nav className="space-y-2">
            <a className="block hover:underline" href="#home">Home</a>
            <a className="block hover:underline" href="#about">About</a>
            <a className="block hover:underline" href="#services">Services</a>
            <a className="block hover:underline" href="#contact">Contact</a>
          </nav>
        </Nav>
        
        <Main className="flex-1 py-8 px-6">
          <Section className="mb-8">
            <H className="text-2xl font-bold mb-4 text-gray-800">About Us</H>
            <p className="text-gray-600">
              We are a team of dedicated professionals committed to providing high-quality services to our clients. 
              Our mission is to help businesses succeed and grow.
            </p>
          </Section>
          
          <Section className="mb-8">
            <H className="text-2xl font-bold mb-4 text-gray-800">Our Services</H>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded shadow">
                <h4 className="font-semibold text-gray-800">Web Development</h4>
                <p className="text-gray-600 text-sm mt-2">Modern, responsive websites</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h4 className="font-semibold text-gray-800">Digital Marketing</h4>
                <p className="text-gray-600 text-sm mt-2">Grow your online presence</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h4 className="font-semibold text-gray-800">Graphic Design</h4>
                <p className="text-gray-600 text-sm mt-2">Beautiful visual solutions</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h4 className="font-semibold text-gray-800">Consulting</h4>
                <p className="text-gray-600 text-sm mt-2">Strategic business guidance</p>
              </div>
            </div>
          </Section>
          
          <Article className="mb-8 bg-white p-6 rounded shadow">
            <H className="text-2xl font-bold mb-4 text-gray-800">Featured Project</H>
            <div className="bg-gray-200 h-48 rounded mb-4 flex items-center justify-center text-gray-500">
              [Project Image Placeholder]
            </div>
            <p className="text-gray-600">
              Check out our latest project, a beautifully designed website for a leading company in the industry.
            </p>
          </Article>
          
          <Aside className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
            <H className="text-xl font-bold mb-4 text-gray-800">Testimonials</H>
            <blockquote className="bg-white p-4 rounded shadow">
              <p className="text-gray-600 mb-2">
                "The team at this company is amazing! They delivered a fantastic website that has really helped our
                business grow."
              </p>
              <cite className="text-gray-500 text-sm">- John Doe, CEO of ABC Company</cite>
            </blockquote>
          </Aside>
        </Main>
      </div>
      
      <Footer className="bg-gray-800 text-white py-4 px-6 text-center">
        <p>© 2024 Sample Website. All rights reserved.</p>
      </Footer>
    </div>
  );
}