"use client";
import { useState } from "react";

export default function FeedbackForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setLoading(false);
    setMessage(res.ok ? "Thank you for your feedback!" : "Error submitting feedback.");
    if (res.ok) setForm({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-xl p-8 max-w-xl mx-auto mt-8 space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Share Your Feedback</h2>
      <div className="space-y-4">
        <input name="name" value={form.name} onChange={handleChange} required placeholder="Your Name" className="input" />
        <input name="email" value={form.email} onChange={handleChange} required placeholder="Your Email" type="email" className="input" />
        <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Your feedback" rows={4} className="input" />
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition" disabled={loading}>
        {loading ? "Submitting..." : "Submit Feedback"}
      </button>
      {message && <div className="text-center text-green-600 mt-2">{message}</div>}
    </form>
  );
}
