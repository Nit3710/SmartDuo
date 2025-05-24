import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100">
      <div className="bg-white rounded-xl shadow-lg p-10 flex flex-col items-center gap-6 max-w-md w-full">
        <h1 className="text-center sm:text-2xl lg:text-4xl font-bold text-blue-700 mb-2 w-full">Welcome to SmartDuo</h1>
        <p className="text-gray-600 text-center">
          Discover SmartDuo’s sections by clicking the links below.
        </p>
        <div className="flex flex-col gap-4 w-full">
          <Link
            href="/dashboard"
            className="w-full text-center bg-blue-600 text-white py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
          >
          Dashboard
          </Link>
          <Link
            href="/about"
            className="w-full text-center border border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
          About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;