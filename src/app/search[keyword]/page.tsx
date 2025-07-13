import React from 'react'
import MovieList from '../component/movieList/page'
interface SearchPageProps {
    params : {
        keyword : string
    }
}

const Page =  async ({params}:SearchPageProps) => {
    const {keyword} = await params
    const decodedKeyword = decodeURI(keyword)
    const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SEARCH_URL}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${decodedKeyword}&page=1`
  )
    const searchMovie = await response.json()
  return (
       <div className='justify-center items-center p-4'>
        <h1 className='p-4 justify-center text-center text-2xl font-bold'>Searching for {decodedKeyword}</h1>
        <MovieList api={searchMovie}/>
    </div>
  )
}

export default Page