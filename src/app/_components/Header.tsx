import React from 'react'
import Link from "next/link";

const Header = () => {
  return (
     <header className="w-full max-w-7xl mx-auto py-6 flex items-center justify-between px-4">
            <Link href='/' className="text-3xl font-extrabold text-blue-700 tracking-tight">Webwalebhai</Link>
            <nav className="space-x-8">
              <a href="#services" className="text-blue-700 hover:underline font-medium">Services</a>
              <a href="#portfolio" className="text-blue-700 hover:underline font-medium">Portfolio</a>
              <Link href="/about" className="text-blue-700 hover:underline font-medium">About</Link>
              <a href="#testimonials" className="text-blue-700 hover:underline font-medium">Testimonials</a>
              <Link href="/proposals" className="text-white bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg font-semibold transition">Get a Quote</Link>
            </nav>
          </header>
  )
}

export default Header