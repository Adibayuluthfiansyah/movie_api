import Header from "./component/movieList/Header";
import MovieList from "./component/movieList/page";

export default async function Home() {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY
    const response = await fetch (`${process.env.NEXT_PUBLIC_API_POPULAR_URL}?api_key=${API_KEY}`)
    const topMovie = await response.json()
    
  return (
    
    <div>
       {/* POPULAR MOVIE */}
      <section className="mt-12 p-2">
      <Header title={"Most Popular"} linkTitle={"See All"} linkHref={"/popular"}/>
      <MovieList api= {topMovie}/>
      </section>

      {/* UPCOMING */}
      <section className="mt-12 p-2">
      <Header title={"UPCOMING"} linkTitle={"See All"} linkHref={"/popular"}/>
      <MovieList api= {topMovie}/>
      </section>

      {/* TV SHOWS */}
      <section className="mt-12 p-2">
      <Header title={"TV SHOWS"} linkTitle={"See All"} linkHref={"/popular"}/>
      <MovieList api= {topMovie}/>
      </section>

    </div>
    
  );
}






