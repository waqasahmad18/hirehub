'use client';

import Navbar from './components/Navbar';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 px-4 py-10 flex flex-col items-center text-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
            Welcome to <span className="text-blue-600">HireHub</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover jobs that match your passion. Fast. Simple. Powerful.
          </p>
          <div className="space-x-4">
            <Link href="/jobs">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                Browse Jobs
              </button>
            </Link>
            <Link href="/post-job">
              <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition font-semibold">
                Post a Job
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-16 w-full max-w-4xl">
          <h2 className="text-2xl font-semibold text-left mb-4">Why HireHub?</h2>
          <ul className="grid sm:grid-cols-2 gap-6 text-left text-gray-700">
            <li className="bg-white p-4 rounded-lg shadow-sm">
              ✅ Fast job discovery with advanced filters
            </li>
            <li className="bg-white p-4 rounded-lg shadow-sm">
              ✅ Post and manage jobs with ease
            </li>
            <li className="bg-white p-4 rounded-lg shadow-sm">
              ✅ Built with modern technologies like Next.js & MongoDB
            </li>
            <li className="bg-white p-4 rounded-lg shadow-sm">
              ✅ 100% responsive & SEO optimized
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
