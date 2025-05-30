'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-blue-600 text-white p-4 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold tracking-wide">HireHub</h1>
      <div className="space-x-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/jobs" className="hover:underline">
          Jobs
        </Link>
      </div>
    </nav>
  );
}
