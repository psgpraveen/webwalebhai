"use client";
import { useState } from "react";
import { Proposal } from "@/app/_types/proposal";

export default function ProposalDetail({ proposal, onBack }: { proposal: Proposal, onBack: () => void }) {
  const [response, setResponse] = useState(proposal.response || "");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResponse = async () => {
    setLoading(true);
    const res = await fetch(`/api/proposals/${proposal._id}/response`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ response }),
    });
    setLoading(false);
    setMessage(res.ok ? "Response saved!" : "Error saving response.");
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-8 max-w-xl mx-auto mt-8">
      <button className="mb-4 text-blue-600 hover:underline" onClick={onBack}>← Back to Proposals</button>
      <h2 className="text-2xl font-bold mb-2">{proposal.name}</h2>
      <p className="text-gray-600 mb-2"><strong>Email:</strong> {proposal.email}</p>
      <p className="text-gray-600 mb-2"><strong>Type:</strong> {proposal.type}</p>
      <p className="text-gray-600 mb-2"><strong>Description:</strong> {proposal.description}</p>
      <p className="text-gray-600 mb-2"><strong>Budget:</strong> {proposal.budget}</p>
      <p className="text-gray-400 mb-4"><strong>Date:</strong> {proposal.createdAt ? new Date(proposal.createdAt).toLocaleString() : ""}</p>
      <textarea className="input" placeholder="Write your response to the client..." value={response} onChange={e => setResponse(e.target.value)} />
      <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        onClick={handleResponse} disabled={loading}>
        {loading ? "Saving..." : "Save Response"}
      </button>
      {message && <div className="text-center text-green-600 mt-2">{message}</div>}
    </div>
  );
}
