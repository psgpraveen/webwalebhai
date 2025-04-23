import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col">
      <header className="w-full max-w-7xl mx-auto py-6 flex items-center justify-between px-4">
        <span className="text-3xl font-extrabold text-blue-700 tracking-tight">Webwalebhai</span>
        <nav className="space-x-8">
          <a href="#services" className="text-blue-700 hover:underline font-medium">Services</a>
          <a href="#portfolio" className="text-blue-700 hover:underline font-medium">Portfolio</a>
          <a href="#testimonials" className="text-blue-700 hover:underline font-medium">Testimonials</a>
          <Link href="/proposals" className="text-white bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg font-semibold transition">Get a Quote</Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-4 leading-tight">
          Digital Solutions That <span className="text-blue-600">Grow</span> Your Business
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl">
          Webwalebhai builds stunning websites and powerful apps for ambitious brands. Share your idea and get a custom proposal from our expert team.
        </p>
        <Link href="/proposals">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg text-lg font-semibold hover:bg-blue-700 transition">
            Request a Proposal
          </button>
        </Link>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col items-center">
              {/* SVG: Website */}
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mb-4 text-blue-600" aria-hidden="true">
                <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M3 7l9-4 9 4" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
              <h3 className="text-xl font-semibold mb-2">Website Development</h3>
              <p className="text-gray-600 text-center">Custom, responsive, SEO-friendly websites that make your brand shine.</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col items-center">
              {/* SVG: App */}
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mb-4 text-blue-600" aria-hidden="true">
                <rect x="7" y="3" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="12" cy="17" r="1" fill="currentColor"/>
              </svg>
              <h3 className="text-xl font-semibold mb-2">App Development</h3>
              <p className="text-gray-600 text-center">Robust, scalable mobile and web apps tailored to your business needs.</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col items-center">
              {/* SVG: Branding */}
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mb-4 text-blue-600" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
              <h3 className="text-xl font-semibold mb-2">Brand Identity</h3>
              <p className="text-gray-600 text-center">Logo, branding, and digital strategy to help you stand out.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              {/* SVG: Portfolio/Briefcase */}
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mb-4 text-blue-600" aria-hidden="true">
                <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
              <h3 className="text-lg font-semibold">E-commerce Platform</h3>
              <p className="text-gray-600 text-center">A scalable online store with seamless checkout and modern UI.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              {/* SVG: Startup/Landing */}
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mb-4 text-blue-600" aria-hidden="true">
                <path d="M12 3v13m0 0l4-4m-4 4l-4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                <rect x="4" y="17" width="16" height="4" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
              <h3 className="text-lg font-semibold">Startup Landing Page</h3>
              <p className="text-gray-600 text-center">High-converting, responsive landing page for a SaaS startup.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              {/* SVG: Mobile App */}
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mb-4 text-blue-600" aria-hidden="true">
                <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="12" cy="18" r="1" fill="currentColor"/>
              </svg>
              <h3 className="text-lg font-semibold">Mobile App UI/UX</h3>
              <p className="text-gray-600 text-center">Intuitive mobile app design for a fintech client.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-xl p-6 shadow">
              <p className="text-gray-700 italic mb-2">“Webwalebhai delivered our website ahead of schedule and exceeded expectations. Highly recommended!”</p>
              <div className="text-blue-700 font-bold">— Priya S., Startup Founder</div>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 shadow">
              <p className="text-gray-700 italic mb-2">“Fantastic app development team. Communication was clear and the process was smooth.”</p>
              <div className="text-blue-700 font-bold">— Rahul M., Business Owner</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to start your project?</h2>
        <p className="mb-8">Let’s build something great together. Get your custom proposal today.</p>
        <Link href="/proposals">
          <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition">
            Get Started
          </button>
        </Link>
      </section>

      <footer className="w-full max-w-7xl mx-auto py-8 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Webwalebhai. All rights reserved.
      </footer>
    </main>
  );
}
