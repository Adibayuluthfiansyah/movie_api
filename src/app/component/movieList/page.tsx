import React from 'react'
import Link from 'next/link';
interface MovieListProps {
  api : any;
}

const MovieList = ({api} : MovieListProps) => {
  return (
    <div className="grid grid-cols-4 p-2">      
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
        <h1 className='mt-4'>{movie.title}</h1>
        </Link>
      </div>
    </div>
      )
    })}


    </div>
  )
}

export default MovieList