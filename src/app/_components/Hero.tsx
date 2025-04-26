'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Digital Solutions That <span className="text-yellow-400">Grow</span> Your Business
      </motion.h1>

      <motion.p
        className="text-lg mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Webwalebhai builds stunning websites and powerful apps for ambitious brands. Share your idea and get a custom proposal from our expert team.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Link href="/proposals">
          <button className="px-10 py-4 bg-blue-600 text-white rounded-full shadow-2xl text-lg font-semibold transition duration-300 transform hover:bg-blue-700 hover:scale-105">
            Request a Proposal
          </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
