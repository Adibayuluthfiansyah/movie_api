'use client'

import React from 'react'
import Link from 'next/link';
interface TvListProps {
  api : any;
}

const TvShowList = ({api} : TvListProps) => {

  console.log({api})
  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 " >      
    {api.results?.map ((movie:any) => {
      return (
      <div key={movie.id} className=' gap-3 mb-3 p-3 justify-center items-center'>
      <div className='items-center justify-center text-center'>
        <Link href={`/${movie.id}`}>
        <img src={`${process.env.NEXT_PUBLIC_API_IMG_URL}${movie.poster_path}`} 
        width={350} 
        height={350} 
        className='cursor-pointer'
        />
        </Link>
        <h1 className='mt-4'>{movie.name} </h1>
      </div>
    </div>
      )
    })}
    </div>
  )
}

export default TvShowList