/**
 * Sample website component demonstrating Midashi library usage
 * 
 * This example shows how to use Midashi components to automatically
 * manage heading hierarchy in a typical website layout.
 * 
 * Original code from v0 by Vercel (fixed className attributes and
 * converted to use Midashi components for proper heading management)
 * @see https://v0.dev/t/Q0CWZYdqZPc
 */
import { Header, Main, Section, Article, Aside, Nav, Footer, H } from 'midashi';

export default function WebsiteExample() {
  return (
    <>
      {/* Page title - starts at h1 level */}
      <H className="sr-only">Welcome to Our Website</H>
      
      <Header className="bg-gray-900 text-white py-4 px-6">
        <H className="text-2xl font-bold">Welcome to Our Website</H>
      </Header>
      
      <div className="flex flex-1">
        <Nav className="bg-gray-900 text-white w-64 p-6">
          <H className="text-xl font-bold mb-4">Navigation</H>
          <nav className="space-y-2">
            <a className="block hover:underline" href="#">
              Home
            </a>
            <a className="block hover:underline" href="#">
              About
            </a>
            <a className="block hover:underline" href="#">
              Services
            </a>
            <a className="block hover:underline" href="#">
              Contact
            </a>
          </nav>
        </Nav>
        
        <Main className="flex-1 py-8 px-6">
          <Section className="mb-8">
            <H className="text-xl font-bold mb-4">About Us</H>
            <p>
              We are a team of dedicated professionals committed to providing high-quality services to our clients. Our
              mission is to help businesses succeed and grow.
            </p>
          </Section>
          
          <Section className="mb-8">
            <H className="text-xl font-bold mb-4">Our Services</H>
            <ul className="space-y-2">
              <li>Web Development</li>
              <li>Digital Marketing</li>
              <li>Graphic Design</li>
              <li>Consulting</li>
            </ul>
          </Section>
          
          <Article className="mb-8">
            <H className="text-xl font-bold mb-4">Featured Project</H>
            <img alt="Featured Project" className="mb-4 w-full" src="/placeholder.svg" />
            <p>Check out our latest project, a beautifully designed website for a leading company in the industry.</p>
          </Article>
          
          <Aside className="mb-8">
            <H className="text-lg font-bold mb-4">Testimonials</H>
            <blockquote className="bg-gray-100 p-4 rounded">
              <p className="mb-2">
                "The team at this company is amazing! They delivered a fantastic website that has really helped our
                business grow."
              </p>
              <cite className="text-gray-500">- John Doe, CEO of ABC Company</cite>
            </blockquote>
          </Aside>
        </Main>
      </div>
      
      <Footer className="bg-gray-900 text-white py-4 px-6">
        <p>© 2023 Our Website. All rights reserved.</p>
      </Footer>
    </>
  )
}