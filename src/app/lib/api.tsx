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


