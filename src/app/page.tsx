import Link from "next/link";
import Header from "./_components/Header";
import Service from "@/app/_components/Services";
import Portfolio from "./_components/Portfolio";
import Whatsapp from './_components/whatsapp';
import Hero from "./_components/Hero";
import About from "./about/page";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col">
     <Header/>

      {/* HERO */}
      <Hero/>

      {/* SERVICES */}
      <Service/>
<About habhaiha={true}/>
      {/* PORTFOLIO */}
     <Portfolio/>
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
        <Whatsapp/>

      <footer className="w-full max-w-7xl mx-auto py-8 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Webwalebhai. All rights reserved.
      </footer>
    </main>
  );
}
