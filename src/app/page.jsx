import React from 'react';
import Link from 'next/link';

function page(props) {
  // This is the main page component


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-white to-pink-200">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full border border-pink-300 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-pink-600 mb-6">Main</h1>
        <Link
          href="/about"
          className="px-6 py-2 bg-pink-500 text-white rounded-lg font-semibold shadow hover:bg-pink-600 transition"
        >
          Go to About Page
        </Link>
        <Link
          href="/test"
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold shadow hover:bg-blue-600 transition"
        >
          Go to Test Page
        </Link>

        <Link
          href="/login"
          className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg font-semibold shadow hover:bg-green-600 transition"
        >
          Go to Login Page
        </Link>
      </div>
    </div>
  );
}

export default page;