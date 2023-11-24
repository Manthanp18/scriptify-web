// // pages/index.js or a specific component file
'use client';

// import { useState } from 'react';

// export default function ProjectPage() {
//   const [activeTab, setActiveTab] = useState('recent'); // 'recent' or 'exports'
//   const [showPopup, setShowPopup] = useState(false); // To toggle the popup

//   return (
//     <div className="bg-gray-100 min-h-screen p-8">
//       <div className="max-w-4xl mx-auto">
//         {/* Tabs */}
//         <div className="flex justify-between items-center mb-6">
//           {/* Tab navigation */}
//           <div className="flex space-x-4 border-b-2">
//             <button
//               onClick={() => setActiveTab('recent')}
//               className={`pb-2 ${
//                 activeTab === 'recent'
//                   ? 'border-green-500 text-green-600'
//                   : 'border-transparent text-gray-500'
//               } focus:outline-none`}
//             >
//               Recent
//             </button>
//             <button
//               onClick={() => setActiveTab('exports')}
//               className={`pb-2 ${
//                 activeTab === 'exports'
//                   ? 'border-green-500 text-green-600'
//                   : 'border-transparent text-gray-500'
//               } focus:outline-none`}
//             >
//               Video Exports
//             </button>
//           </div>

//           {/* New button */}
//           <button className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center space-x-2 focus:outline-none">
//             <span>+</span>
//             <span>New</span>
//           </button>
//         </div>

//         {/* Content */}
//         <div className="relative bg-white p-6 rounded-lg shadow-md">
//           <div className="flex items-center justify-between">
//             {/* Content Left Side */}
//             <div className="flex items-center space-x-4">
//               <div className="flex-none w-12 h-12 bg-green-500 rounded-full"></div>
//               <div>
//                 <div className="font-semibold text-lg">Untitled</div>
//                 <div className="text-gray-500 text-sm">
//                   Edited 16 minutes ago
//                 </div>
//               </div>
//             </div>
//             {/* Content Right Side - Dropdown Trigger */}
//             <div>
//               <button
//                 onClick={() => setShowPopup(!showPopup)}
//                 className="text-gray-600 focus:outline-none"
//               >
//                 <svg
//                   className="w-6 h-6" /* Insert SVG path for "..." icon here */
//                 ></svg>
//                 ...
//               </button>

//               {/* Dropdown/Popup */}
//               {showPopup && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10">
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Open in editor
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Duplicate project
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Delete
//                   </a>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// pages/index.js or a specific component file
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
