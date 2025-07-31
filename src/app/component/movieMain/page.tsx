'use client'

import React from 'react'
import Link from 'next/link';
interface MovieMainProps {
  api : any;
}

const MovieMainList = ({api} : MovieMainProps) => {

  console.log({api})
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-4" >      
    {api.results?.map ((movie:any) => {
      return (
      <div key={movie.id} className="group">
      <div className='items-center justify-center text-center'>
        <Link href={`/${movie.id}`}>
        <div className="relative overflow-hidden rounded-lg">
        <img src={`${process.env.NEXT_PUBLIC_API_IMG_URL}${movie.poster_path}`} 
        width={350} 
        height={350} 
        className='w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300'
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
        <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          ▶ Watch
        </span>
        </div>
        </div>
        </Link>
        <h1 className='mt-4'>{movie.title} </h1>
        <p className="text-gray-400 text-xs"></p>
      </div>
    </div>
      )
    })}
    </div>
  )
}



export default MovieMainList