/**
 * Original example from the issue - demonstrates problems with manual heading management
 * 
 * Problems in this code:
 * 1. Uses `classname` instead of `className` (React JSX attribute)
 * 2. Manual heading hierarchy that can easily become inconsistent
 * 3. Missing semantic structure with proper heading levels
 * 4. No automatic heading level management
 * 
 * v0 by Vercel.
 * @see https://v0.dev/t/Q0CWZYdqZPc
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function OriginalComponent() {
  return (
    <>
      <header className="bg-gray-900 text-white py-4 px-6">
        <h1 className="text-2xl font-bold">Welcome to Our Website</h1>
      </header>
      <div className="flex flex-1">
        <div className="bg-gray-900 text-white w-64 p-6">
          <h2 className="text-xl font-bold mb-4">Navigation</h2>
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
        </div>
        <main className="flex-1 py-8 px-6">
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p>
              We are a team of dedicated professionals committed to providing high-quality services to our clients. Our
              mission is to help businesses succeed and grow.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Our Services</h2>
            <ul className="space-y-2">
              <li>Web Development</li>
              <li>Digital Marketing</li>
              <li>Graphic Design</li>
              <li>Consulting</li>
            </ul>
          </section>
          <article className="mb-8">
            <h2 className="text-xl font-bold mb-4">Featured Project</h2>
            <img alt="Featured Project" className="mb-4 w-full" src="/placeholder.svg" />
            <p>Check out our latest project, a beautifully designed website for a leading company in the industry.</p>
          </article>
          <aside className="mb-8">
            <h3 className="text-lg font-bold mb-4">Testimonials</h3>
            <blockquote className="bg-gray-100 p-4 rounded">
              <p className="mb-2">
                "The team at this company is amazing! They delivered a fantastic website that has really helped our
                business grow."
              </p>
              <cite className="text-gray-500">- John Doe, CEO of ABC Company</cite>
            </blockquote>
          </aside>
        </main>
      </div>
      <footer className="bg-gray-900 text-white py-4 px-6">
        <p>© 2023 Our Website. All rights reserved.</p>
      </footer>
    </>
  )
}