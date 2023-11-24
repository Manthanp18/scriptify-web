import AudioCard from '@/components/AudioCard';
import { getSongs } from '@/utils/songs-services';

// pages/create.js
export default async function Create() {
  const songs = await getSongs();
  console.log({ songs });
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="container mx-auto bg-white rounded-lg shadow px-8 py-12">
        {/* Heading */}
        <h1 className="text-3xl text-gray-600 font-bold text-center mb-4">
          Create a stunning promo video, in seconds
        </h1>
        <p className="text-gray-600 text-center mb-12">
          Fill the form to adjust the video to your brand. Then you will get a
          first pre-edited draft. This should take no more than 2 minutes.
        </p>

        {/* Form steps */}
        <div className="max-w-4xl mx-auto">
          {/* Step 1: Input Text */}
          <div className="mb-10">
            <div className="mb-2 border-b-2 border-gray-200 pb-3">
              <span className="text-sm font-semibold bg-white px-2 text-blue-600">
                1
              </span>
              <span className="text-lg font-semibold"> Your video text</span>
            </div>
            <textarea
              className="w-full p-4 text-gray-700 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Type your video script here..."
            ></textarea>
            <p className="text-gray-600 text-xs mt-2">
              Tip: use short, punctuated sentences.
            </p>
          </div>

          {/* Step 2: Select Audio */}
          <div className="mb-10">
            <div className="mb-2 border-b-2 border-gray-200 pb-3">
              <span className="text-sm font-semibold bg-white px-2 text-blue-600">
                2
              </span>
              <span className="text-lg font-semibold"> Select audio</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Audio selection cards */}
              {songs.map((song) => (
                <AudioCard songs={song} key={song.id} />
              ))}
            </div>
          </div>

          {/* Step 3: Generate Video Button */}
          <div className="flex justify-between items-center mt-6">
            <button className="text-blue-600">More sounds</button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold">
              Generate video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
