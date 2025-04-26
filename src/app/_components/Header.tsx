"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="w-full max-w-7xl mx-auto py-4 px-6 flex items-center justify-between">
        <Link href="/" className="text-3xl font-extrabold text-blue-700 tracking-tight">
          Webwalebhai
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          <a href="#services" className="text-gray-700 hover:text-blue-700 font-medium transition">
            Services
          </a>
          <a href="#portfolio" className="text-gray-700 hover:text-blue-700 font-medium transition">
            Portfolio
          </a>
          <Link href="/about" className="text-gray-700 hover:text-blue-700 font-medium transition">
            About
          </Link>
          <a href="#testimonials" className="text-gray-700 hover:text-blue-700 font-medium transition">
            Testimonials
          </a>
          <Link
            href="/proposals"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-semibold transition"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-700 focus:outline-none"
          >
            {menuOpen ? (
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <a href="#services" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-blue-700 font-medium transition">
            Services
          </a>
          <a href="#portfolio" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-blue-700 font-medium transition">
            Portfolio
          </a>
          <Link href="/about" className="block text-gray-700 hover:text-blue-700 font-medium transition" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <a href="#testimonials" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-blue-700 font-medium transition">
            Testimonials
          </a>
          <Link
            href="/proposals"
            className="block bg-blue-600 hover:bg-blue-700 text-white text-center px-5 py-2 rounded-full font-semibold transition"
            onClick={() => setMenuOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
