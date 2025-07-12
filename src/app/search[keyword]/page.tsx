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
    const response = await fetch (``)
    const searchMovie = await response.json()
  return (
       <div className='justify-center items-center p-4'>
        <h1 className='p-4 justify-center text-center text-2xl font-bold'>Searching for {decodedKeyword}</h1>
    </div>
  )
}

export default Page