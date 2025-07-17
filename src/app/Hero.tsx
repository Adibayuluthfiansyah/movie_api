'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, Info, Volume2, VolumeX } from 'lucide-react';

interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  overview: string;
  vote_average: number;
  release_date: string;
}

interface HeroProps {
  movie: Movie;
}

const Hero: React.FC<HeroProps> = ({ movie }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const backdropUrl = `${process.env.NEXT_PUBLIC_API_IMG_URL}${movie.backdrop_path}`;

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backdropUrl}
          alt={movie.title}
          fill
          priority
          sizes="100vw"
          className={`object-cover transition-opacity duration-700 ${
            isImageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsImageLoaded(true)}
        />
        
        {/* Loading skeleton */}
        {!isImageLoaded && (
          <div className="absolute inset-0 bg-gray-800 loading"></div>
        )}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-4 md:px-8">
        <div className="max-w-2xl">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            {movie.title}
          </h1>

          {/* Movie Info */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-green-400 font-semibold">
              {Math.round(movie.vote_average * 10)}% Match
            </span>
            <span className="text-white">
              {new Date(movie.release_date).getFullYear()}
            </span>
            <span className="border border-gray-400 px-2 py-1 text-sm text-gray-300">
              HD
            </span>
          </div>

          {/* Overview */}
          <p className="text-white text-lg mb-8 leading-relaxed max-w-xl">
            {movie.overview}
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded-md hover:bg-gray-200 transition-colors font-semibold">
              <Play className="w-5 h-5" />
              Play
            </button>
            
            <button className="flex items-center gap-2 bg-gray-700/80 text-white px-8 py-3 rounded-md hover:bg-gray-600/80 transition-colors font-semibold">
              <Info className="w-5 h-5" />
              More Info
            </button>
          </div>
        </div>
      </div>

      {/* Audio Control */}
      <div className="absolute bottom-32 right-8 z-20">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="p-3 bg-black/50 hover:bg-black/70 rounded-full border border-gray-600 transition-colors"
        >
          {isMuted ? (
            <VolumeX className="w-6 h-6 text-white" />
          ) : (
            <Volume2 className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Age Rating */}
      <div className="absolute bottom-32 left-8 z-20">
        <div className="bg-black/70 backdrop-blur-sm rounded-md px-3 py-1 border border-gray-600">
          <span className="text-white text-sm font-medium">13+</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;