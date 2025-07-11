import MovieList from "./component/movieList/page";


export default async function Home() {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY
    const response = await fetch (`${process.env.NEXT_PUBLIC_API_POPULAR_URL}?api_key=${API_KEY}`)
    const movie = await response.json()
    console.log(movie)

  return (
    <div>
      
      {movie.results?.map((results:any)=> {
        return <MovieList 
        key={results.id}
        title={results.original_title} 
        poster= {results.poster_path}/>
      })}
    </div>
  );
}
