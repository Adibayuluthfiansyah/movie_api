import Header from "./component/movieList/Header";
import MovieList from "./component/movieList/page";


export default async function Home() {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY
    const response = await fetch (`${process.env.NEXT_PUBLIC_API_POPULAR_URL}?api_key=${API_KEY}`)
    const topMovie = await response.json()

  return (
    // popular movie
    <div>
      <section>
      <Header title={"Paling Populer"} linkTitle={"See All"} linkHref={"/populer"}/>
      <MovieList api= {topMovie}/>
      </section>
    </div>

    
  );
}






