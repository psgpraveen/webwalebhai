'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function ProposalForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "",
    description: "",
    budget: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/proposals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);
    if (res.ok) {
      toast.success("🎯 Proposal submitted successfully!");
      setForm({ name: "", email: "", type: "", description: "", budget: "" });
    } else {
      toast.error("⚠️ Failed to submit. Please try again.");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-white rounded-3xl shadow-2xl p-12 max-w-3xl mx-auto mt-10 space-y-8 border border-blue-100 overflow-hidden"
    >
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-extrabold text-gray-900"
        >
          Start Your Project 🚀
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-500 max-w-lg mx-auto"
        >
          Share your vision with us. Lets transform your ideas into an impactful digital product!
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: "Full Name", name: "name", type: "text", placeholder: "John Doe" },
          { label: "Email Address", name: "email", type: "email", placeholder: "john@example.com" },
          { label: "Project Type (e.g. Website / App)", name: "type", type: "text", placeholder: "e.g., Ecommerce Website" },
          { label: "Estimated Budget (USD)", name: "budget", type: "text", placeholder: "$3000 - $5000" },
        ].map((field) => (
          <div key={field.name} className="relative">
            <input
              type={field.type}
              name={field.name}
              required
              value={form[field.name as keyof typeof form]}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full border-2 border-gray-300 rounded-xl px-4 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 placeholder-transparent transition duration-300 hover:border-blue-500 focus:border-blue-500"
            />
            <label
              htmlFor={field.name}
              className="absolute left-4 top-2 text-sm text-gray-600 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
            >
              {field.label}
            </label>
          </div>
        ))}
      </div>

      <div className="relative">
        <textarea
          name="description"
          required
          rows={5}
          value={form.description}
          onChange={handleChange}
          placeholder=" "
          className="peer w-full border-2 border-gray-300 rounded-xl px-4 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 placeholder-transparent transition duration-300 hover:border-blue-500 focus:border-blue-500"
        />
        <label
          htmlFor="description"
          className="absolute left-4 top-2 text-sm text-gray-600 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
        >
          Tell us about your project
        </label>
      </div>

      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 rounded-2xl font-semibold text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg transition transform hover:-translate-y-1 hover:shadow-2xl"
        >
          {loading ? "Sending..." : "Submit Proposal"}
        </button>
      </motion.div>
    </motion.form>
  );
}
