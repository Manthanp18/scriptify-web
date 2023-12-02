'use client';

import BeatBeat from '@/utils/beat';
import React, { useEffect, useState } from 'react';

function Editor() {
  const [currentText, setCurrentText] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const audioContext = new AudioContext();
      const text = localStorage.getItem('videoText') as string;
      const audioUrl = localStorage.getItem('selectedAudio') as string;

      const beatBeat = new BeatBeat(audioContext, audioUrl, text);
      beatBeat.load().then(() => {
        beatBeat.play((segment: React.SetStateAction<string>, time: any) => {
          setCurrentText(segment); // Update the current text segment
          setCurrentTime(time);
          // Optionally, you can use 'time' for timing animations or effects
        });
      });
    }
  }, []);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <p className="text-5xl">{currentText}</p>
        <p className="">{currentTime}</p>
      </div>
    </div>
  );
}

export default Editor;
