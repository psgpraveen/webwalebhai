"use client"
import React from 'react'
import { motion } from 'framer-motion'

const services = [
  {
    title: "Website Development",
    description: "Custom, responsive, SEO-friendly websites that make your brand shine.",
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="3" y="7" width="18" height="13" rx="2" strokeWidth="2" />
        <path d="M3 7l9-4 9 4" strokeWidth="2" />
      </svg>
    )
  },
  {
    title: "App Development",
    description: "Robust, scalable mobile and web apps tailored to your business needs.",
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="7" y="3" width="10" height="18" rx="2" strokeWidth="2" />
        <circle cx="12" cy="17" r="1" fill="currentColor" />
      </svg>
    )
  },
  {
    title: "Brand Identity",
    description: "Logo design, color palette, and style guides to make your brand unforgettable.",
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <path d="M12 6v6l4 2" strokeWidth="2" />
      </svg>
    )
  },
  {
    title: "UI/UX Design",
    description: "Modern, user-friendly interfaces designed for conversion and clarity.",
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M4 6h16M4 12h8m-8 6h16" strokeWidth="2" />
      </svg>
    )
  },
  {
    title: "Digital Marketing",
    description: "Google Ads, social media, and email campaigns that drive results.",
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M3 10l9 5 9-5-9-5-9 5z" strokeWidth="2" />
        <path d="M3 14l9 5 9-5" strokeWidth="2" />
      </svg>
    )
  },
  {
    title: "SEO Optimization",
    description: "Improve visibility with on-page, technical, and local SEO strategies.",
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <path d="M12 8v4l3 2" strokeWidth="2" />
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
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut'
    }
  })
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-900 mb-14"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-blue-50 p-8 rounded-2xl shadow-md hover:shadow-xl text-center flex flex-col items-center transition duration-300"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
