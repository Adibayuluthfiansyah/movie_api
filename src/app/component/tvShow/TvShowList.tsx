'use client'

import React from 'react'
import Link from 'next/link';
import { Star } from 'lucide-react';

interface TvListProps {
  api : any;
}

const TvShowList = ({api} :TvListProps) => {

  const getYear = (dateString: string) => {
    if (!dateString) return '';
    return new Date(dateString).getFullYear();
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-4" >      
    {api.results?.map ((movie:any) => {
      
      // *** Perbedaan TV Show ***
      const year = getYear(movie.first_air_date); // Pakai first_air_date
      const title = movie.name || movie.title; // Pakai name untuk TV

      return (
      <Link 
        href={`/${movie.id}`} 
        key={movie.id} 
        className="group flex gap-3 rounded-lg overflow-hidden md:flex-col md:gap-0"
      >
        {/* Poster */}
        <div className="relative w-28 flex-shrink-0 md:w-full">
          <img 
            src={`${process.env.NEXT_PUBLIC_API_IMG_URL}${movie.poster_path}`} 
            width={112} 
            height={168} 
            className='w-full h-full object-cover md:h-80 group-hover:scale-105 transition-transform duration-300 rounded-lg'
            alt={title}
          />
          {/* Overlay "Watch" (Desktop) */}
          <div className="hidden md:flex absolute inset-0 bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 items-center justify-center rounded-lg">
            <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              ▶ Watch
            </span>
          </div>
        </div>

        {/* Konten Teks */}
        <div className="flex flex-col justify-center py-2 pr-2 md:py-0 md:items-center md:text-center overflow-hidden">
          <h1 className='text-white font-semibold group-hover:text-red-500 transition-colors truncate md:mt-4'>
            {title}
          </h1>
          
          {/* Detail (Mobile) */}
          <div className="flex items-center flex-wrap gap-2 mt-2 text-xs text-gray-400 md:hidden">
            {year && (
              <span className="border border-gray-600 px-2 py-0.5 rounded-sm">
                {year}
              </span>
            )}
            {movie.vote_average > 0 && (
              <div className="flex items-center gap-1">
                <Star size={14} className="text-yellow-500" fill="currentColor" />
                <span>{movie.vote_average?.toFixed(1)}</span>
              </div>
            )}
          </div>
          <p className="text-gray-400 text-xs mt-3 line-clamp-2 md:hidden">
            {movie.overview}
          </p>

          {/* Paragraf kosong (Desktop) */}
          <p className="text-gray-400 text-xs hidden md:block"></p>
        </div>
      </Link>
      )
    })}
    </div>
  )
}

export default TvShowList