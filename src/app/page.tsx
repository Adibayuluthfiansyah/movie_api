import Header from "./component/movieList/Header";
import MovieList from "./component/movieList/page";
import TvShowList from "./component/tvShow/page";
import UpComingList from "./component/upComing/page";
import { getMovieResponse, getTvShowsResponse, getUpcomingResponse } from "./lib/api";

export default async function Home() {
    const upComing = await getUpcomingResponse()
    const topMovie = await getMovieResponse()
    const tvShows = await getTvShowsResponse()
    
  return (
    
    <div>
       {/* POPULAR MOVIE */}
      <section className="mt-12 p-2">
      <Header title={"Most Popular"} linkTitle={"See All"} linkHref={"/popular"}/>
      <MovieList api= {topMovie}/>
      </section>

      {/* UPCOMING */}
      <section className="mt-12 p-2">
      <Header title={"UPCOMING"} linkTitle={"See All"} linkHref={"/upcoming"}/>
      <UpComingList api={upComing}/>
      </section>

      {/* TV SHOWS */}
      <section className="mt-12 p-2">
      <Header title={"TV SHOWS"} linkTitle={"See All"} linkHref={"/tvshows"}/>
      <TvShowList api={tvShows}/>
      </section>

    </div>
    
  );
}






