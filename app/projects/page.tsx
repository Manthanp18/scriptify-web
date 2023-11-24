// // pages/index.js or a specific component file
'use client';

import { useRouter } from 'next/navigation';

export default function ProjectPage() {
  const router = useRouter();
  const handleCreateVideo = () => {
    // Navigate to the /create page
    router.push('/create');
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Card */}
      <div className="text-center p-6 bg-white rounded-lg shadow-xl">
        {/* Logo Placeholder */}
        <div className="text-green-500 mb-4">
          {/* Replace this div with your actual logo */}
          <svg
            className="w-12 h-12 mx-auto"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 13l4 4L19 7"></path>
          </svg>
        </div>

        <h1 className="text-4xl font-bold mb-2">The story starts here</h1>
        <p className="text-gray-600 mb-8">
          Just smash the button below to create your first video.
        </p>

        {/* Button */}
        <button
          className="bg-green-500 text-white px-6 py-2 rounded-full inline-flex items-center"
          onClick={handleCreateVideo}
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 4v16m8-8H4"></path>
          </svg>
          Create video
        </button>

        <p className="text-gray-500 mt-4">press Enter ↵</p>
      </div>
    </div>
  );
}
