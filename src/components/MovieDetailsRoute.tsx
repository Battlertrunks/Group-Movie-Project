import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import MovieContext from "../context/MovieContext";
import MovieDetailsResponse from "../models/MovieDetailsResponse";
import { getMovieById } from "../services/MovieTMDBService";
import MovieCard from "../models/MovieCard";
import "./MovieDetailsRoute.css";
import dataNotFound from "../Resources/dataNotFound.webp";

// interface Props {
//   singleMovieCard: MovieCard;
// }

const MovieDetailsRoute = () => {
  const { addWatched, removeWatched, isWatched } = useContext(MovieContext);
  // Creating useState to set the movie details information and giving it a guide line of what it needs.
  const [movie, setMovie] = useState<MovieDetailsResponse>();
  let movieToAdd: MovieCard | undefined;
  console.log(movie);
  if (movie) {
    movieToAdd = {
      ...(movie.genres.length
        ? { genre: movie?.genres[0].name[0] }
        : { genre: "unknown" }),
      ...(movie.title ? { title: movie?.title } : { title: "unknown" }),
      ...(movie.vote_average
        ? { vote_average: movie?.vote_average }
        : { vote_average: 0 }),
      ...(movie.poster_path
        ? { poster_path: movie?.poster_path }
        : { poster_path: "unknown" }),
      id: movie?.id,
    };
    console.log(movieToAdd);
  }
  // Getting the movie's ID if it is not undefined.
  const id: string | undefined = useParams().id;

  const location = useLocation();

  // Runs useEffect when once and when the id changes from the dependency.
  useEffect(() => {
    // Retriving the movie ID
    getMovieById(id!)
      .then((response) => {
        setMovie(response);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const hours = Math.floor(movie?.runtime! / 60);
  const minutes = movie?.runtime! % 60;
  const time = `${hours ? hours + "h" : ""}${
    minutes ? " " + minutes + "m" : ""
  }`;

  // Displaying the movie's information to the screen
  return (
    <div className="MovieDetailsRoute" aria-label="movie-details">
      {movie ? (
        <>
          <img
            className="backdrop-img"
            src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
            alt=""
          />
          <div className="top-buttons">
            <Link to="/">
              <button className="back-btn">
                <i className="fa-solid fa-backward-fast"></i>
              </button>
            </Link>
            {/* Finds whether the user has watched or not have liked a movie */}
            <button>
              {isWatched(parseInt(id!)) ? (
                <p className="has-watched">
                  Watched{" "}
                  <i
                    className="fa-solid fa-clapperboard isFavorite"
                    onClick={() => {
                      removeWatched(parseInt(id!));
                    }}
                  ></i>
                </p>
              ) : (
                <p className="not-watched" aria-label="not-watched">
                  <i
                    className="fa-solid fa-clapperboard"
                    onClick={() => {
                      addWatched(movieToAdd!);
                    }}
                  ></i>
                </p>
              )}
            </button>
          </div>
          <div className="content-details">
            <img
              className="poster-img"
              src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
              alt={movie?.title}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = dataNotFound;
              }}
            />
            <section className="movie-information">
              <div className="genre-date-runtime">
                <div className="title-rating">
                  <div>
                    <h2>
                      {movie?.title ? movie?.title : <p>Title not available</p>}{" "}
                      <span className="release-year">
                        - (
                        {movie?.release_date ? (
                          movie?.release_date.substring(0, 4)
                        ) : (
                          <p>XXXX</p>
                        )}
                        )
                      </span>{" "}
                    </h2>{" "}
                    {movie?.tagline ? (
                      <p>{movie?.tagline}</p>
                    ) : (
                      <p>Tagline not available</p>
                    )}
                  </div>
                  <div className="rating">
                    <p>
                      {movie?.vote_average ? movie?.vote_average : <p>0</p>}
                    </p>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
                {/* join method below show display all genres, check once functions finished */}

                <p>
                  {movie?.genres[0] ? (
                    movie?.genres.map((genre) => genre.name).join(" | ")
                  ) : (
                    <p>Genres Not Available</p>
                  )}
                </p>
                <p>{movie?.release_date ? movie?.release_date : <p>XXXX</p>}</p>

                {movie?.runtime ? (
                  <p>
                    Run Time: {movie?.runtime} minutes | ({time})
                  </p>
                ) : (
                  <p>No Runtime available</p>
                )}
              </div>
              <div className="overview">
                <h3>Overview</h3>

                {movie?.overview ? (
                  <p>{movie?.overview}</p>
                ) : (
                  <p>No Overview Available</p>
                )}
              </div>
            </section>
          </div>
        </>
      ) : (
        <p> No Movie Found</p>
      )}
    </div>
  );
};

export default MovieDetailsRoute;
