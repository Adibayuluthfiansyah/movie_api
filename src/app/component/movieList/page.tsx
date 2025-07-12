import React from 'react'
import Link from 'next/link';
interface MovieListProps {
    title: string;
    poster : string;
    id : any;
}

const MovieList = ({title , poster, id} : MovieListProps) => {

    const fullImageUrl = `${process.env.NEXT_PUBLIC_API_IMG_URL}${poster}`
  return (
    <div className=' gap-2 mb-4 p-4 justify-center items-center'>
      <div className='items-center justify-center text-center mt-6'>
        <Link href={`/${id}`}>
        <img src={fullImageUrl} width={350} height={350} className='cursor-pointer'/>
        <h1 className='mt-4'>{title}</h1>
        </Link>
      </div>
    </div>
  )
}

export default MovieList