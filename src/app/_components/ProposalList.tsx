"use client";
import { useEffect, useState } from "react";
import { Proposal } from "@/app/_types/proposal";
import ProposalDetail from "./ProposalDetail";

export default function ProposalList() {
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [selected, setSelected] = useState<Proposal | null>(null);

  useEffect(() => {
    fetch("/api/proposals")
      .then(res => res.json())
      .then(setProposals);
  }, []);

  if (selected) return <ProposalDetail proposal={selected} onBack={() => setSelected(null)} />;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Proposals</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {proposals.map(p => (
          <div key={p._id} className="bg-white rounded-lg shadow p-6 flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-800">{p.name}</span>
              <span className="text-xs text-gray-400">{p.createdAt ? new Date(p.createdAt).toLocaleDateString() : ""}</span>
            </div>
            <div className="text-gray-600">{p.type}</div>
            <div className="text-sm text-gray-500 truncate">{p.description}</div>
            <div className="text-blue-700 font-bold">Budget: {p.budget}</div>
            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              onClick={() => setSelected(p)}>
              View & Respond
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
