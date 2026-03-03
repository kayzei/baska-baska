import * as React from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Music as MusicIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface Track {
  id: number;
  title: string;
  artist: string;
  cover: string;
  audioUrl: string;
}

interface MusicPlayerProps {
  tracks: Track[];
}

export default function MusicPlayer({ tracks }: MusicPlayerProps) {
  const [currentTrackIndex, setCurrentTrackIndex] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const currentTrack = tracks[currentTrackIndex];

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentProgress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const handleEnded = () => {
    handleNext();
  };

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
    setIsPlaying(true);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const newTime = (parseFloat(e.target.value) / 100) * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
      setProgress(parseFloat(e.target.value));
    }
  };

  React.useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    }
  }, [currentTrackIndex]);

  return (
    <div className="glass-card rounded-3xl p-6 md:p-8 space-y-6">
      <audio
        ref={audioRef}
        src={currentTrack.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />

      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Album Art */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentTrack.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={currentTrack.cover}
              alt={currentTrack.title}
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
          {isPlaying && (
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gold rounded-full flex items-center justify-center text-primary shadow-lg animate-pulse">
              <MusicIcon size={20} />
            </div>
          )}
        </div>

        {/* Controls & Info */}
        <div className="flex-grow w-full space-y-6">
          <div className="text-center md:text-left space-y-1">
            <h3 className="text-2xl md:text-3xl font-display font-bold">{currentTrack.title}</h3>
            <p className="text-gold font-medium">{currentTrack.artist}</p>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <input
              type="range"
              min="0"
              max="100"
              value={progress || 0}
              onChange={handleSeek}
              className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-gold"
            />
            <div className="flex justify-between text-[10px] text-text-secondary uppercase tracking-widest font-bold">
              <span>{audioRef.current ? formatTime(audioRef.current.currentTime) : '0:00'}</span>
              <span>{audioRef.current ? formatTime(audioRef.current.duration) : '0:00'}</span>
            </div>
          </div>

          {/* Main Controls */}
          <div className="flex items-center justify-center md:justify-start gap-8">
            <button
              onClick={handlePrev}
              className="text-text-secondary hover:text-gold transition-colors"
            >
              <SkipBack size={24} fill="currentColor" />
            </button>
            
            <button
              onClick={togglePlay}
              className="w-16 h-16 rounded-full bg-gold text-primary flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-xl"
            >
              {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
            </button>

            <button
              onClick={handleNext}
              className="text-text-secondary hover:text-gold transition-colors"
            >
              <SkipForward size={24} fill="currentColor" />
            </button>
          </div>

          {/* Volume (Desktop) */}
          <div className="hidden md:flex items-center gap-4 text-text-secondary">
            <Volume2 size={18} />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              defaultValue="0.8"
              onChange={(e) => {
                if (audioRef.current) audioRef.current.volume = parseFloat(e.target.value);
              }}
              className="w-24 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-gold"
            />
          </div>
        </div>
      </div>

      {/* Track List */}
      <div className="pt-6 border-t border-white/5 space-y-2">
        <p className="text-[10px] text-text-secondary uppercase tracking-widest font-bold mb-4">Up Next</p>
        <div className="space-y-1">
          {tracks.map((track, index) => (
            <button
              key={track.id}
              onClick={() => {
                setCurrentTrackIndex(index);
                setIsPlaying(true);
              }}
              className={cn(
                "w-full flex items-center gap-4 p-3 rounded-xl transition-all text-left group",
                currentTrackIndex === index ? "bg-gold/10 text-gold" : "hover:bg-white/5 text-text-secondary hover:text-white"
              )}
            >
              <span className="text-xs font-mono opacity-50 w-4">{index + 1}</span>
              <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0">
                <img src={track.cover} alt={track.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-grow min-w-0">
                <p className="font-bold truncate text-sm">{track.title}</p>
                <p className="text-xs opacity-60 truncate">{track.artist}</p>
              </div>
              {currentTrackIndex === index && isPlaying && (
                <div className="flex gap-0.5 items-end h-3">
                  <div className="w-0.5 h-full bg-gold animate-music-bar-1" />
                  <div className="w-0.5 h-full bg-gold animate-music-bar-2" />
                  <div className="w-0.5 h-full bg-gold animate-music-bar-3" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function formatTime(seconds: number) {
  if (isNaN(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}
