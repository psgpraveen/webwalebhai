'use client';

import { motion } from 'framer-motion';
import Header from "@/app/_components/Header"; 
import ProposalForm from "@/app/_components/ProposalForm";

export default function ProposalsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 flex flex-col">
      <Header />

      <section className="flex-1 flex items-center py-16">
        <div className="max-w-4xl mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Let&apos;s Build Your Dream Project</h1>
            
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Got an idea? Tell us about it, and we&apos;ll bring it to life. Fill out the proposal form and we&apos;ll reach out to discuss how we can collaborate!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <ProposalForm />
          </motion.div>
        </div>
      </section>

      <footer className="text-center py-8 text-gray-500 text-sm">
        © {new Date().getFullYear()} WebWaleBhai. All rights reserved.
      </footer>
    </main>
  );
}
