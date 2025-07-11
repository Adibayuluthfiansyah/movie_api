import React from 'react'

interface MovieListProps {
    title: string;
    poster : string;
}

const MovieList = ({title , poster} : MovieListProps) => {

    const fullImageUrl = `${process.env.NEXT_PUBLIC_API_IMG_URL}${poster}`;


  return (
    <div className='grid grid-cols-3 gap-2 mb-4 p-4 border rounded'>
        <img src={fullImageUrl}/>
        <h3>{title}</h3>
    </div>
  )
}

export default MovieList