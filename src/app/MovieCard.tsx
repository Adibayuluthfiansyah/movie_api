'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play, Plus, ThumbsUp, ChevronDown, Star } from 'lucide-react';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path?: string;
  vote_average: number;
  release_date: string;
  overview: string;
  genre_ids?: number[];
}

interface MovieCardProps {
  movie: Movie;
  isLarge?: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, isLarge = false }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const imageUrl = movie.poster_path 
    ? `${process.env.NEXT_PUBLIC_API_IMG_URL}${movie.poster_path}`
    : '/placeholder-movie.jpg';

  const backdropUrl = movie.backdrop_path
    ? `${process.env.NEXT_PUBLIC_API_IMG_URL}${movie.backdrop_path}`
    : imageUrl;

  const rating = movie.vote_average.toFixed(1);
  const year = new Date(movie.release_date).getFullYear();

  return (
    <div className={`movie-card relative group cursor-pointer ${
      isLarge ? 'w-80 h-96' : 'w-60 h-80'
    }`}>
      <Link href={`/movie/${movie.id}`}>
        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
          {/* Movie Poster */}
          <Image
            src={imageUrl}
            alt={movie.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover transition-opacity duration-300 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setImageError(true);
              setIsLoading(false);
            }}
          />

          {/* Loading Skeleton */}
          {isLoading && (
            <div className="absolute inset-0 bg-gray-800 loading"></div>
          )}

          {/* Error State */}
          {imageError && (
            <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mb-2">
                  <Play className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-400 text-sm">No Image</p>
              </div>
            </div>
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Movie Info Overlay */}
          <div className="movie-overlay absolute inset-0 bg-black/50 flex flex-col justify-end p-4">
            <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              {/* Title */}
              <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">
                {movie.title}
              </h3>

              {/* Movie Meta */}
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-yellow-400 text-sm font-medium">{rating}</span>
                </div>
                <span className="text-gray-300 text-sm">{year}</span>
              </div>

              {/* Overview */}
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                {movie.overview}
              </p>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-colors">
                  <Play className="w-4 h-4" />
                  <span className="text-sm font-medium">Play</span>
                </button>
                <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
                <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                </button>
                <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors">
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Rating Badge */}
          <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
            <Star className="w-3 h-3 text-yellow-400 fill-current" />
            <span className="text-white text-xs font-medium">{rating}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
