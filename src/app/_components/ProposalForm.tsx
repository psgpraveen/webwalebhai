"use client";
import { useState } from "react";

export default function ProposalForm() {
  const [form, setForm] = useState({ name: "", email: "", type: "", description: "", budget: "" });
  const [message, setMessage] = useState("");
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
    setMessage(res.ok ? "Proposal sent! We’ll get back to you soon." : "Error sending proposal.");
    if (res.ok) setForm({ name: "", email: "", type: "", description: "", budget: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-xl p-8 max-w-xl mx-auto mt-8 space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Request a Project Proposal</h2>
      <div className="space-y-4">
        <input name="name" value={form.name} onChange={handleChange} required
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input name="email" value={form.email} onChange={handleChange} required
          placeholder="Your Email"
          type="email"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input name="type" value={form.type} onChange={handleChange} required
          placeholder="Project Type (Website or App)"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea name="description" value={form.description} onChange={handleChange} required
          placeholder="Briefly describe your project"
          rows={4}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input name="budget" value={form.budget} onChange={handleChange} required
          placeholder="Estimated Budget"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <button type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Proposal"}
      </button>
      {message && <div className="text-center text-green-600 mt-2">{message}</div>}
    </form>
  );
}
