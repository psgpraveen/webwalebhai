"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg flex flex-col min-h-screen">
      <div className="px-6 py-8 text-2xl font-extrabold text-blue-700">
        Webwalebhai Admin
      </div>
      <nav className="flex-1 px-4 space-y-2">
        <Link
          href="/dashboard"
          className="block py-2 px-3 rounded hover:bg-blue-50 font-medium text-gray-700"
        >
          Dashboard Home
        </Link>
        <Link
          href="/dashboard/proposals"
          className="block py-2 px-3 rounded hover:bg-blue-50 font-medium text-gray-700"
        >
          Proposals
        </Link>
        <Link
          href="/dashboard/feedback"
          className="block py-2 px-3 rounded hover:bg-blue-50 font-medium text-gray-700"
        >
          Feedback
        </Link>
        <button
          onClick={() => signOut()}
          className="text-red-600 hover:underline px-4 py-2"
        >
          Logout
        </button>
      </nav>
      <div className="px-6 py-4 text-xs text-gray-400 mt-auto">
        © {new Date().getFullYear()} Webwalebhai
      </div>
    </aside>
  );
}
