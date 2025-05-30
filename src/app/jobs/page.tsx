import { connectToDatabase } from '../../../lib/mongodb';
import Navbar from './../components/Navbar';
import { ObjectId } from 'mongodb';

export const dynamic = 'force-dynamic'; // ✅ Important: Disable caching for Vercel

type Job = {
  _id: ObjectId;
  title: string;
  company: string;
  location: string;
  type: string;
};

export default async function JobsPage() {
  let jobs: Job[] = [];

  try {
    const db = await connectToDatabase();
    jobs = await db
      .collection<Job>('jobs')
      .find()
      .sort({ createdAt: -1 })
      .toArray();
  } catch (error) {
    console.error('❌ Failed to load jobs:', error);
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Available Jobs</h1>

          <div className="grid gap-4">
            {jobs.length > 0 ? (
              jobs.map((job) => (
                <div
                  key={job._id.toString()}
                  className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
                >
                  <h2 className="text-xl font-semibold text-blue-700">{job.title}</h2>
                  <p className="text-gray-700">
                    {job.company} - {job.location}
                  </p>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded mt-2 inline-block">
                    {job.type}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No jobs posted yet.</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
