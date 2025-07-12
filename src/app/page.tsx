import MovieList from "./component/movieList/page";


export default async function Home() {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY
    const response = await fetch (`${process.env.NEXT_PUBLIC_API_POPULAR_URL}?api_key=${API_KEY}`)
    const movie = await response.json()
    console.log(movie)

  return (
    <div>
      <h1 className="text-center p-3 mt-5 text-2xl">Populer Today</h1>
        <div className="grid grid-cols-4 p-2">      
      {movie.results?.map((results:any)=> {
        return (
          <div key={results.id} className="shadow-xl">
          <MovieList
          id={results.id}  
          title={results.original_title} 
          poster= {results.poster_path}
          />
          </div>
        )
      })}
        </div>
    </div>
  );
}
