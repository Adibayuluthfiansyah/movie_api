'use client'

import React from 'react'
import Link from 'next/link';

interface MovieListProps {
  api : any;
}

const MovieScroll = ({api} : MovieListProps) => {

  return (
    <div className="flex gap-4 overflow-x-auto scrollbar-hide" >      
    {api.results?.map ((movie:any) => {
      return (
      // 1. Mengubah w-48 menjadi w-32 (mobile) dan md:w-48 (desktop)
      // 2. Mengubah padding p-3 menjadi p-2 (mobile) dan md:p-3 (desktop)
      <div key={movie.id} className='flex-shrink-0 w-32 md:w-48 mb-3 p-2 md:p-3'>
        <div className='items-center justify-center text-center'>
          <Link href={`/${movie.id}`}>
            <div className="relative group cursor-pointer">
              <img 
                src={`${process.env.NEXT_PUBLIC_API_IMG_URL}${movie.poster_path}`} 
                width={200} 
                height={300} 
                className='rounded-lg group-hover:scale-105 transition-transform duration-300'
                alt={movie.title}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  ▶ Watch
                </span>
              </div>
            </div>
          </Link>
          {/* 3. Mengubah margin-top mt-4 menjadi mt-2 (mobile) dan md:mt-4 (desktop) */}
          <h1 className='mt-2 md:mt-4 text-sm font-medium truncate'>{movie.title}</h1>
          <p className="text-gray-400 text-xs mt-1">
            ⭐ {movie.vote_average?.toFixed(1)}
          </p>
        </div>
      </div>
      )
    })}
    </div>
  )
}

export default MovieScroll