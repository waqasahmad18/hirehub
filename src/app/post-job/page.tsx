'use client';

import Navbar from '../components/Navbar';
import { useState } from 'react';

export default function PostJobPage() {
  const [form, setForm] = useState({
    title: '',
    company: '',
    location: '',
    type: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert('Job posted successfully!');
        setForm({
          title: '',
          company: '',
          location: '',
          type: '',
        });
      } else {
        alert('Failed to post job: ' + (data.message || data.error));
      }
    } catch (error) {
      console.error('Error posting job:', error);
      alert('Something went wrong!');
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Post a New Job</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="title"
              placeholder="Job Title"
              value={form.title}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={form.company}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={form.location}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              required
            />
            <input
              type="text"
              name="type"
              placeholder="Job Type (Full-time, Part-time)"
              value={form.type}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Submit Job
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
