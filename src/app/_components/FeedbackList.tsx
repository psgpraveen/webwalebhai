"use client";

import { useState } from "react";
import { Feedback } from "@/app/_types/feedback";
import FeedbackDetail from "./FeedbackDetail";

interface Props {
  initialData: Feedback[];
}

export default function FeedbackList({ initialData }: Props) {
  const [list] = useState<Feedback[]>(initialData);
  const [selected, setSelected] = useState<Feedback | null>(null);

  if (selected) {
    return <FeedbackDetail feedback={selected} onBack={() => setSelected(null)} />;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Feedback</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {list.map((fb) => (
          <div
            key={fb._id}
            className="bg-white rounded-lg shadow p-6 flex flex-col gap-2"
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-800">{fb.name}</span>
              <span
                className={`text-xs ${fb.approved ? "text-green-600" : "text-gray-400"}`}
              >
                {fb.approved ? "Approved" : "Pending"}
              </span>
            </div>
            <div className="text-sm text-gray-500 truncate">{fb.message}</div>
            <button
              onClick={() => setSelected(fb)}
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              View &amp; Respond
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
