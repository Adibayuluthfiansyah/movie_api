import React from 'react'

const Pagination = ({ page, lastPage, setPage }:any) => {
    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleNextPage = () => {
        if (page < lastPage) {
            setPage(page + 1)
            scrollTop()
        }
    }

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1)
            scrollTop()
        }
    }

    return (
        <div className="flex justify-center items-center py-4 px-2 gap-3 text-white text-xl font-bold">
            {page > 1 && (
                <button 
                    onClick={handlePrevPage}
                    className="transition-all hover:text-red-600 cursor-pointer"
                >
                    Prev
                </button>
            )}
            
            <p>{page} of {lastPage}</p>
            
            {page < lastPage && (
                <button 
                    onClick={handleNextPage}
                    className="transition-all hover:text-red-600 cursor-pointer"
                >
                    Next
                </button>
            )}
        </div>
    )
}

export default Pagination