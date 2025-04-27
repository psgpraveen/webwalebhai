"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  timeline: string;
  description: string;
  budget: string;
};

const services = [
  "Website Development",
  "Mobile App",
  "E-commerce",
  "UI/UX Design",
  "SEO & Marketing",
  "Custom Software",
];

export default function EnhancedProposalForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    timeline: "",
    description: "",
    budget: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/proposals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        toast.success("Your proposal has been submitted! 🚀");
        setForm({ name: "", email: "", phone: "", service: "", timeline: "", description: "", budget: "" });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Oops! Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-3xl shadow-lg p-6 md:p-12 max-w-4xl mx-auto mt-12 space-y-10"
    >
      <div className="text-center">
        <motion.h2
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold text-gray-900"
        >
          Let&apos;s Build Something Amazing
        </motion.h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Fill out the details below, and our team will get back to you within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
            placeholder="(123) 456-7890"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Service Type
          </label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
          >
            <option value="" disabled hidden>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Desired Timeline
          </label>
          <input
            type="text"
            name="timeline"
            value={form.timeline}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
            placeholder="e.g., 2–4 weeks"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Estimated Budget (USD)
          </label>
          <input
            type="text"
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
            placeholder="$3,000 - $5,000"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Project Details
        </label>
        <textarea
          name="description"
          rows={4}
          required
          value={form.description}
          onChange={handleChange}
          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
          placeholder="Describe your project in detail..."
        />
      </div>

      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-md hover:from-blue-700 hover:to-indigo-700 transition disabled:opacity-50"
        >
          {loading ? "Sending..." : "Submit Your Proposal"}
        </button>
      </motion.div>
    </motion.form>
  );
}
