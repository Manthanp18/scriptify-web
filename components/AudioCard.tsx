'use client';

import { useLoadSong } from '@/utils/songs-services';
import { Song } from '@/utils/types';

interface Props {
  songs: Song;
}

const AudioCard: React.FC<Props> = async ({ songs }) => {
  const songUrl = await useLoadSong(songs);
  console.log(songUrl);
  return (
    <div
      key={songs.id}
      className="border rounded-lg p-4 flex flex-col items-stretch"
    >
      <input
        type="radio"
        name="audioTrack"
        id={`track-${songs.id}`}
        className="hidden"
      />
      <label htmlFor={`track-${songs.id}`} className="cursor-pointer">
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium text-gray-500">{songs.title}</span>
          <span className="text-xs text-gray-500">0:25</span>
        </div>
        <div className="relative">
          <audio controls className="w-full">
            {/* Source should be the URL to the audio file */}
            <source src={songUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </label>
    </div>
  );
};

export default AudioCard;
