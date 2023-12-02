'use client';

import { useLoadSong } from '@/utils/songs-services';
import { Song } from '@/utils/types';
import react from 'react';
import { useEffect, useState } from 'react';

interface Props {
  songs: Song;
  isSelected: boolean;
  handleAudioSelect: any;
}

const AudioCard: React.FC<Props> = ({
  songs,
  isSelected,
  handleAudioSelect
}) => {
  console.log(isSelected);
  const cardStyle = isSelected
    ? 'border-green-500 border-2' // Green border if selected
    : 'border'; // Default border otherwise
  return (
    <div
      key={songs.id}
      className={`rounded-lg p-4 flex flex-col items-stretch ${cardStyle}`}
    >
      <input
        type="radio"
        name="audioTrack"
        onChange={() => {
          handleAudioSelect(songs.songURL);
        }}
        id={`track-${songs.id}`}
        className="hidden"
      />
      <label htmlFor={`track-${songs.id}`} className="cursor-pointer">
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium text-gray-500">{songs.title}</span>
          <span className="text-xs text-gray-500">0:25</span>
        </div>
        <div className="relative">
          <audio id="song1" controls className="w-full">
            {/* Source should be the URL to the audio file */}
            <source src={songs.songURL} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </label>
    </div>
  );
};

export default AudioCard;
