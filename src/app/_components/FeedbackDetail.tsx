"use client";
import { useState } from "react";
import { Feedback } from "@/src/_types/feedback";

export default function FeedbackDetail({ feedback, onBack }: { feedback: Feedback, onBack: () => void }) {
  const [response, setResponse] = useState(feedback.response || "");
  const [approved, setApproved] = useState(feedback.approved || false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResponse = async () => {
    setLoading(true);
    const res = await fetch(`/api/feedback/${feedback._id}/response`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ response }),
    });
    setLoading(false);
    setMessage(res.ok ? "Response saved!" : "Error saving response.");
  };

  const handleApprove = async () => {
    setLoading(true);
    const res = await fetch(`/api/feedback/${feedback._id}/approve`, { method: "POST" });
    setLoading(false);
    if (res.ok) {
      setApproved(true);
      setMessage("Feedback approved and now public!");
    } else {
      setMessage("Error approving feedback.");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-8 max-w-xl mx-auto mt-8">
      <button className="mb-4 text-blue-600 hover:underline" onClick={onBack}>← Back to Feedback</button>
      <h2 className="text-2xl font-bold mb-2">{feedback.name}</h2>
      <p className="text-gray-600 mb-2"><strong>Email:</strong> {feedback.email}</p>
      <p className="text-gray-600 mb-2"><strong>Feedback:</strong> {feedback.message}</p>
      <p className="text-gray-400 mb-4"><strong>Date:</strong> {feedback.createdAt ? new Date(feedback.createdAt).toLocaleString() : ""}</p>
      <textarea
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Write your response (optional)..."
        value={response}
        onChange={e => setResponse(e.target.value)}
      />
      <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        onClick={handleResponse} disabled={loading}>
        {loading ? "Saving..." : "Save Response"}
      </button>
      <button className={`mt-4 w-full py-3 rounded-lg font-semibold transition ${approved ? "bg-green-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-green-600 hover:text-white"}`}
        onClick={handleApprove} disabled={approved || loading}>
        {approved ? "Approved" : "Approve & Show Publicly"}
      </button>
      {message && <div className="text-center text-green-600 mt-2">{message}</div>}
    </div>
  );
}
