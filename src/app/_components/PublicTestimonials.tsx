"use client";
import { useEffect, useState } from "react";
import { Feedback } from "@/app/_types/feedback";

export default function PublicTestimonials() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    fetch("/api/feedback")
      .then(res => res.json())
      .then(setFeedbacks);
  }, []);

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {feedbacks.map(fb => (
            <div key={fb._id} className="bg-blue-50 rounded-xl p-6 shadow">
              <p className="text-gray-700 italic mb-2">{fb.message}</p>
              <div className="text-blue-700 font-bold">— {fb.name}</div>
              {fb.response && <div className="text-sm text-gray-500 mt-2">Admin: {fb.response}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
