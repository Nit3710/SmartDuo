"use client";
import Link from "next/link";
import React, { ReactNode, useState } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [showModel, setShowModel] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Mobile Topbar */}
      <div className="md:hidden flex items-center justify-between bg-white px-4 py-3 shadow">
        <button
          className="text-gray-700 focus:outline-none"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <span className="text-xl font-bold">SmartDuo</span>
        <button
          className="bg-blue-600 text-white px-3 py-1 rounded shadow hover:bg-blue-700"
          onClick={() => setShowModel(true)}
        >
          Profile
        </button>
      </div>
      {/* Sidebar */}
      <aside
        className={`
          fixed md:static z-40 top-0 left-0 h-full w-64 bg-white shadow-md p-6 flex flex-col gap-4
          transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0
        `}
        style={{ minHeight: "100vh" }}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">SmartDuo</h2>
          <button
            className="md:hidden text-gray-500"
            onClick={() => setSidebarOpen(false)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-2">
          <Link href="/dashboard" className="hover:bg-blue-100 rounded px-3 py-2 font-medium transition">Home</Link>
          <Link href="/dashboard/analytics" className="hover:bg-blue-100 rounded px-3 py-2 font-medium transition">Analytics</Link>
          <Link href="/dashboard/settings" className="hover:bg-blue-100 rounded px-3 py-2 font-medium transition">Settings</Link>
        </nav>
      </aside>
      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      {/* Main Content */}
      <main className="flex-1 p-4 md:p-10 mt-14 md:mt-0">
        <header className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">Welcome to the SmartDuo</h1>
          <button
            className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
            onClick={() => setShowModel(true)}
          >
            Profile
          </button>
        </header>
        <section>
          {children}
        </section>
      </main>
      {/* Profile Modal */}
      {showModel && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 min-w-[300px] max-w-xs w-full mx-4">
            <h2 className="text-xl font-bold mb-4 text-center">Profile</h2>
            <div className="flex flex-col items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center text-2xl font-bold text-blue-700 mb-2">
                SD
              </div>
              <span className="font-semibold text-gray-800">SmartDuo User</span>
              <span className="text-gray-500 text-sm">user@email.com</span>
            </div>
            <button
              className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              onClick={() => setShowModel(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}