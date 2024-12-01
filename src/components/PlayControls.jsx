'use client';

import { useState, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle } from 'lucide-react';
import { cn } from "../lib/utils";

export function PlayerControls({
  song,
  onPlayPause,
  onNext,
  onPrevious,
  isPlaying,
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;

    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 1, 100)); // Ensure progress doesn't exceed 100
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isPlaying]);

  // Reset progress when song changes
  useEffect(() => {
    setProgress(0);
  }, [song]);

  if (!song) return null;

  return (
    <div className="fixed bottom-0 right-0 w-80 p-6 bg-[#6B0000] shadow-lg rounded-lg border-l border-gray-700">
      <div className="space-y-4">
        {/* Album Cover */}
        <p className="text-center font-medium text-white">
          Now Playing
        </p>
        <img
          src={song.coverUrl}
          alt={song.title}
          className="w-full h-36 rounded-lg object-cover border border-gray-600"
        />

        {/* Song Details */}
        <div className="space-y-1 text-center">
          <h3 className="font-semibold text-white">{song.title}</h3>
          <p className="text-sm text-gray-400">{song.artist}</p>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="relative w-full h-1 bg-gray-600 rounded-full">
            <div
              className="absolute top-0 left-0 h-1 bg-white rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-400">
            <span>{Math.floor(progress * 0.6)}:00</span>
            <span>{song.duration}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-4">
          <button className="p-2 text-gray-400 hover:text-white">
            <Shuffle className="h-5 w-5" />
          </button>
          <button className="p-2 text-gray-400 hover:text-white" onClick={onPrevious}>
            <SkipBack className="h-5 w-5" />
          </button>
          <button
            className={cn(
              "p-3 rounded-full bg-[#480000] text-white",
              "hover:scale-105 transition-transform"
            )}
            onClick={() => {
              onPlayPause();
            }}
          >
            {isPlaying ? (
              <Pause className="h-6 w-6" />
            ) : (
              <Play className="h-6 w-6" />
            )}
          </button>
          <button className="p-2 text-gray-400 hover:text-white" onClick={onNext}>
            <SkipForward className="h-5 w-5" />
          </button>
          <button className="p-2 text-gray-400 hover:text-white">
            <Repeat className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
