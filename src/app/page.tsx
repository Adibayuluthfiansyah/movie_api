import Header from "./component/movieList/Header";
import MovieList from "./component/movieList/MovieList";
import MovieMainList from "./component/movieMain/MovieMainList";
import TvShowList from "./component/tvShow/TvShowList";
import UpComingList from "./component/upComing/UpComingList";
import MovieScroll from "./component/movieScroll/MovieScroll";
import { getMovieMainResponse, getMovieResponse, getTvShowsResponse, getUpcomingResponse } from "./lib/api";

export default async function Home() {
    const upComing = await getUpcomingResponse()
    const topMovie = await getMovieResponse()
    const tvShows = await getTvShowsResponse()
    const movieMain = await getMovieMainResponse()
    
  return (
    <div>
      {/* MOST POPULAR */}
      <section className="mt-12 p-2">
      <Header title={"MOST POPULAR"} linkTitle={"See All"} linkHref={"/popular"}/>
      <MovieScroll api= {topMovie}/>
      </section>


      {/* MOVIE MAIN*/}
      <section className="mt-12 p-2">
      <Header title={"MOVIE"} linkTitle={"See All"} linkHref={"/movie-list"}/>
      <MovieMainList api={movieMain}/>
      </section>

      {/* UPCOMING */}
      <section className="mt-12 p-2">
      <Header title={"UPCOMING"} linkTitle={"See All"} linkHref={"/upcoming-list"}/>
      <UpComingList api={upComing}/>
      </section>

      {/* TV SHOWS */}
      <section className="mt-12 p-2">
      <Header title={"TV SHOWS"} linkTitle={"See All"} linkHref={"/tvshow-list"}/>
      <TvShowList api={tvShows}/>
      </section>

    </div>
    
  );
}






