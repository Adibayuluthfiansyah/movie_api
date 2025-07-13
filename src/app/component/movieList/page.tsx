'use client'

import React from 'react'
import Link from 'next/link';
interface MovieListProps {
  api : any;
}

const MovieList = ({api} : MovieListProps) => {
  console.log({api})
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 p-2">      
    {api.results?.map ((movie:any) => {
      return (
      <div key={movie.id} className=' gap-2 mb-4 p-4 justify-center items-center'>
      <div className='items-center justify-center text-center'>
        <Link href={`/${movie.id}`}>
        <img src={`${process.env.NEXT_PUBLIC_API_IMG_URL}${movie.poster_path}`} 
        width={350} 
        height={350} 
        className='cursor-pointer'
        />
        </Link>
        <h1 className='mt-4'>{movie.title} </h1>
      </div>
    </div>
      )
    })}
    </div>
  )
}

export default MovieList