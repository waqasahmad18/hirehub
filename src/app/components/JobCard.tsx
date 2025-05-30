'use client';

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  type: string;
}

export default function JobCard({ title, company, location, type }: JobCardProps) {
  return (
    <div className="bg-white border border-gray-200 p-5 rounded-xl shadow hover:shadow-md transition cursor-pointer">
      <h3 className="text-xl font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-sm text-gray-600 mb-1">{company}</p>
      <div className="flex justify-between text-sm text-gray-500">
        <span>{location}</span>
        <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded text-xs font-medium">{type}</span>
      </div>
    </div>
  );
}
