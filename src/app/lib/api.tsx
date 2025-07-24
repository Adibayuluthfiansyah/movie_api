export const getMovieResponse = async () => {
const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const response = await fetch (`${process.env.NEXT_PUBLIC_API_POPULAR_URL}?api_key=${API_KEY}`)
const movie = await response.json()
return movie
}

export const getUpcomingResponse = async () => {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY
    const response = await fetch (`${process.env.NEXT_PUBLIC_API_UPCOMING_URL}?api_key=${API_KEY}`)
    const upComing = await response.json()
    return upComing
}

export const getTvShowsResponse = async () => {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY
    const response = await fetch (`${process.env.NEXT_PUBLIC_API_TV_URL}?api_key=${API_KEY}`)
    const tvShows = await response.json()
    return tvShows
}

export const getMovieMainResponse = async () => {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY
    const response = await fetch (`${process.env.NEXT_PUBLIC_API_MOVIE_LIST_URL}?api_key=${API_KEY}`)
    const movieMain = await response.json()
    return movieMain
}

// NEW: Get movie detail by ID
export const getMovieDetailResponse = async (id:any) => {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY
    const response = await fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=credits,videos,recommendations`)
    const movieDetail = await response.json()
    return movieDetail
}

// NEW: Get TV show detail by ID
export const getTvDetailResponse = async (id:any) => {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY
    const response = await fetch (`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&append_to_response=credits,videos,recommendations`)
    const tvDetail = await response.json()
    return tvDetail
}

// NEW: Search function
export const getSearchResults = async (query:any) => {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY
    const response = await fetch (`${process.env.NEXT_PUBLIC_API_SEARCH_URL}?api_key=${API_KEY}&query=${query}`)
    const searchResults = await response.json()
    return searchResults
}