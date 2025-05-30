'use client';

export default function Navbar() {
  return (
    <nav className="w-full bg-blue-600 text-white p-4 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold tracking-wide">HireHub</h1>
      <div className="space-x-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/jobs" className="hover:underline">Jobs</a>
      </div>
    </nav>
  );
}
