import { getMovieDetailResponse } from "../lib/api";
import Link from "next/link";
import { notFound } from "next/navigation";

interface MovieDetailProps {
  params: {
    id: string;
  };
}

export default async function MovieDetail({ params }: MovieDetailProps) {
  const { id } =  await params;
  
  try {
    const movieDetail = await getMovieDetailResponse(id);
    

    if (!movieDetail || movieDetail.success === false) {
      notFound();
    }

    const trailer = movieDetail.videos?.results?.find(
      (video: any) => video.type === "Trailer" && video.site === "YouTube"
    );

    const mainCast = movieDetail.credits?.cast?.slice(0, 6) || [];

    const director = movieDetail.credits?.crew?.find(
      (person: any) => person.job === "Director"
    );

    const recommendations = movieDetail.recommendations?.results?.slice(0, 6) || [];

    return (
      <div className="min-h-screen bg-black text-white">
        {/* Background Image */}
        <div 
          className="relative w-full h-96 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url(https://image.tmdb.org/t/p/original${movieDetail.backdrop_path})`
          }}
        >
          <div className="absolute inset-0 flex items-end p-8">
            <div className="flex gap-9">
              {/* Poster */}
              <div className="flex-shrink-0">
                <img
                  src={`${process.env.NEXT_PUBLIC_API_IMG_URL}${movieDetail.poster_path}`}
                  alt={movieDetail.title}
                  className="w-64 h-95 object-cover rounded-lg shadow-2xl"
                />
              </div>
              
              {/* Movie Info */}
              <div className="flex-2">
                <h1 className="text-5xl font-bold mb-4">{movieDetail.title}</h1>
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-yellow-500 text-black px-2 py-1 rounded text-sm font-bold">
                    ⭐ {movieDetail.vote_average?.toFixed(1)}
                  </span>
                  <span className="text-gray-300">{new Date(movieDetail.release_date).getFullYear()}</span>
                  <span className="text-gray-300">{movieDetail.runtime} min</span>
                  {movieDetail.adult && <span className="bg-red-600 px-2 py-1 rounded text-xs">18+</span>}
                </div>
                
                {/* Genres */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {movieDetail.genres?.map((genre: any) => (
                    <span key={genre.id} className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                      {genre.name}
                    </span>
                  ))}
                </div>

                {/* Overview */}
                <p className="text-lg text-gray-300 mb-6 max-w-3xl leading-relaxed">
                  {movieDetail.overview}
                </p>

                {/* Director */}
                {director && (
                  <p className="text-gray-400 mb-4">
                    <span className="text-white font-semibold">Director:</span> {director.name}
                  </p>
                )}

                {/* Play Button */}
                <div className="flex gap-4">
                  <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                    ▶ Watch Now
                  </button>
                  <Link href="/" className="bg-gray-700 hover:bg-gray-600 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                    ← Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-8 py-12">
          {/* Trailer Section */}
          {trailer && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Trailer</h2>
              <div className="aspect-video max-w-4xl">
                <iframe
                  src={`https://www.youtube.com/embed/${trailer.key}`}
                  title="Movie Trailer"
                  className="w-full h-full rounded-lg"
                  allowFullScreen
                ></iframe>
              </div>
            </section>
          )}

          {/* Cast Section */}
          {mainCast.length > 0 && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Cast</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {mainCast.map((actor: any) => (
                  <div key={actor.id} className="text-center">
                    <img
                      src={
                        actor.profile_path
                          ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                          : '/placeholder-person.jpg'
                      }
                      alt={actor.name}
                      className="w-full h-48 object-cover rounded-lg mb-2 cursor-pointer"
                    />
                    <h3 className="font-semibold text-sm">{actor.name}</h3>
                    <p className="text-gray-400 text-xs">{actor.character}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Movie Details */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Details</h2>
            <div className="grid md:grid-cols-2 gap-7">
              <div>
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-400">Original Title:</span>
                    <span className="ml-2">{movieDetail.original_title}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Release Date:</span>
                    <span className="ml-2">{new Date(movieDetail.release_date).toLocaleDateString()}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Runtime:</span>
                    <span className="ml-2">{movieDetail.runtime} minutes</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Budget:</span>
                    <span className="ml-2">${movieDetail.budget?.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-400">Revenue:</span>
                    <span className="ml-2">${movieDetail.revenue?.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Language:</span>
                    <span className="ml-2">{movieDetail.original_language?.toUpperCase()}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Vote Count:</span>
                    <span className="ml-2">{movieDetail.vote_count?.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Popularity:</span>
                    <span className="ml-2">{movieDetail.popularity?.toFixed(1)}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Recommendations */}
          {recommendations.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold mb-6">You Might Also Like</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {recommendations.map((movie: any) => (
                  <Link key={movie.id} href={`/${movie.id}`} className="group">
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={`${process.env.NEXT_PUBLIC_API_IMG_URL}${movie.poster_path}`}
                        alt={movie.title}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                        <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          ▶ Watch
                        </span>
                      </div>
                    </div>
                    <h3 className="mt-2 text-sm font-semibold truncate">{movie.title}</h3>
                    <p className="text-gray-400 text-xs font-bold">
                      ⭐ {movie.vote_average?.toFixed(1)}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    );
  } catch (error: any) {
  console.error('Error fetching movie details:', error?.message || error);
  notFound();
  }
}