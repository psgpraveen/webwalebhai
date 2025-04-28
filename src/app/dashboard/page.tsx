"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";

export default function DashboardHome() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkSession() {
      const session = await getSession();
      if (!session) {
        router.push("/");
      } else {
        setLoading(false);
      }
    }

    checkSession();
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        Welcome, Admin
      </h1>
      <p className="text-gray-600 mb-8">
        Here you can review proposals, respond to clients, and manage your
        company digital projects.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-700">Proposals</h2>
          <p className="text-2xl font-bold text-blue-600">View &amp; Respond</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-700">Projects</h2>
          <p className="text-2xl font-bold text-blue-600">Coming Soon</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-700">Feedback</h2>
          <p className="text-2xl font-bold text-blue-600">Coming Soon</p>
        </div>
      </div>
    </div>
  );
}
