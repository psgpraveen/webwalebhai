'use client'
import React from 'react'
import { motion } from 'framer-motion'

const portfolioItems = [
  {
    title: "E-commerce Platform",
    description: "Scalable online store with checkout, inventory, and admin dashboard.",
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="3" y="7" width="18" height="13" rx="2" strokeWidth="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" strokeWidth="2" />
      </svg>
    )
  },
  {
    title: "Startup Landing Page",
    description: "Conversion-optimized landing page tailored for SaaS and digital products.",
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 3v13m0 0l4-4m-4 4l-4-4" strokeWidth="2" />
        <rect x="4" y="17" width="16" height="4" rx="2" strokeWidth="2" />
      </svg>
    )
  },
  {
    title: "Mobile App UI/UX",
    description: "Modern mobile UI design crafted for fintech usability and user trust.",
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="7" y="2" width="10" height="20" rx="2" strokeWidth="2" />
        <circle cx="12" cy="18" r="1" fill="currentColor" />
      </svg>
    )
  },
  {
    title: "Restaurant App",
    description: "Mobile-first food ordering system with table bookings and real-time tracking.",
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M3 8h18M5 8v11a1 1 0 001 1h12a1 1 0 001-1V8" strokeWidth="2" />
        <path d="M9 8V6a3 3 0 016 0v2" strokeWidth="2" />
      </svg>
    )
  },
  {
    title: "Portfolio Website",
    description: "Personal branding with blog, resume, and interactive showcase.",
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M4 4h16v16H4z" strokeWidth="2" />
        <path d="M4 9h16" strokeWidth="2" />
      </svg>
    )
  },
  {
    title: "Real Estate Dashboard",
    description: "Analytics-rich dashboard for agents and property managers.",
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M3 9l9-6 9 6v9a2 2 0 01-2 2h-4v-5h-6v5H5a2 2 0 01-2-2V9z" strokeWidth="2" />
      </svg>
    )
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center text-gray-900 mb-14"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Work
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl text-center flex flex-col items-center transition duration-300"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio
