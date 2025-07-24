'use client'

import React, { useEffect, useState } from 'react'
import HeaderMenu from '../utilities/HeaderMenu'
import Pagination from '../utilities/Pagination'
import TvShowList from '../component/tvShow/page'

const page = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [tvShows, setTvShows] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        try {
            setLoading(true)
            const API_KEY = process.env.NEXT_PUBLIC_API_KEY
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_TV_URL}?api_key=${API_KEY}&page=${currentPage}`)
            const data = await response.json()
            
            setTvShows(data)
            setTotalPages(data.total_pages)
            
        } catch (error) {
            console.error('Error fetching data:', error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [currentPage]) 

    return (
        <div className='p-4 mt-15'>
            <div><HeaderMenu title={"TV SHOWS"}/></div>
            {loading ? (
                <div className="text-center">Loading .... </div>
            ) : (
                <div><TvShowList api ={tvShows}/></div>
            )}
            <div>
                <Pagination 
                    page={currentPage}
                    lastPage={totalPages}
                    setPage={setCurrentPage}
                />
            </div>
        </div>
    )
}

export default page