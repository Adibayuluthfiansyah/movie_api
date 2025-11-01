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
      <div key={movie.id} className='flex-shrink-0 w-48 mb-3 p-3'>
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
          <h1 className='mt-4 text-sm font-medium truncate'>{movie.title}</h1>
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