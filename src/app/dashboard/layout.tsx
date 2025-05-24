"use client";
import Link from "next/link";
import React, { ReactNode, useState } from "react";
import { useTheme } from "../components/ThemeProvider";
import { Sun, Moon } from "lucide-react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
    const [showModel, setShowModel] = useState<boolean>(false);
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex">
            {/* Sidebar */}
            <aside
                className={`
                    fixed md:fixed z-40 top-0 left-0 h-screen w-64 bg-white dark:bg-gray-800 shadow-md p-6 flex flex-col gap-4
                    transition-transform duration-300
                    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
                    md:translate-x-0
                `}
            >
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold dark:text-white">SmartDuo</h2>
                    <button
                        className="md:hidden text-gray-500 dark:text-gray-300"
                        onClick={() => setSidebarOpen(false)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <nav className="flex flex-col gap-2">
                    <Link href="/dashboard" className="hover:bg-blue-100 dark:hover:bg-gray-700 rounded px-3 py-2 font-medium transition" onClick={() => setSidebarOpen(false)}>Home</Link>
                    <Link href="/dashboard/analytics" className="hover:bg-blue-100 dark:hover:bg-gray-700 rounded px-3 py-2 font-medium transition" onClick={() => setSidebarOpen(false)}>Analytics</Link>
                    <Link href="/dashboard/settings" className="hover:bg-blue-100 dark:hover:bg-gray-700 rounded px-3 py-2 font-medium transition" onClick={() => setSidebarOpen(false)}>Settings</Link>
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
            <div className="flex-1 flex flex-col md:ml-64">
                {/* Mobile Topbar */}
                <div className="md:hidden flex items-center justify-between bg-white dark:bg-gray-800 px-4 py-3 shadow">
                    <button
                        className="text-gray-700 dark:text-gray-200 focus:outline-none"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <span className="text-xl font-bold dark:text-white">SmartDuo</span>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-xl text-gray-700 dark:text-gray-200 shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ?<Moon/> :<Sun/>}
                        </button>
                        <button
                            className="bg-blue-600 text-white px-3 py-1 rounded shadow hover:bg-blue-700"
                            onClick={() => setShowModel(true)}
                        >
                            Profile
                        </button>
                    </div>
                </div>
                <main className="flex-1 p-4 md:p-10 mt-14 md:mt-0">
                    <header className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white">Welcome to the SmartDuo</h1>
                        {/* Only show these buttons on desktop */}
                        <div className="hidden md:flex items-center gap-2">
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-xl text-gray-700 dark:text-gray-200 shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                                aria-label="Toggle theme"
                            >
                                {theme === "dark" ? <Moon/> :<Sun/>}
                            </button>
                            <button
                                className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
                                onClick={() => setShowModel(true)}
                            >
                                Profile
                            </button>
                        </div>
                    </header>
                    <section>
                        {children}
                    </section>
                </main>
                {/* Profile Modal */}
                {showModel && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 min-w-[300px] max-w-xs w-full mx-4">
                            <h2 className="text-xl font-bold mb-4 text-center dark:text-white">Profile</h2>
                            <div className="flex flex-col items-center mb-4">
                                <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center text-2xl font-bold text-blue-700 mb-2">
                                    SD
                                </div>
                                <span className="font-semibold text-gray-800 dark:text-white">SmartDuo User</span>
                                <span className="text-gray-500 dark:text-gray-300 text-sm">user@email.com</span>
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
        </div>
    );
}