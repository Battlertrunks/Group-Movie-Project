import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import MovieContext from "../context/MovieContext";
import MovieDetailsResponse from "../models/MovieDetailsResponse";
import { getMovieById } from "../services/MovieTMDBService";
import MovieCard from "../models/MovieCard";
import "./MovieDetailsRoute.css";

// interface Props {
//   singleMovieCard: MovieCard;
// }

const MovieDetailsRoute = () => {
  const { addWatched, removeWatched, isWatched } = useContext(MovieContext);
  // Creating useState to set the movie details information and giving it a guide line of what it needs.
  const [movie, setMovie] = useState<MovieDetailsResponse>();
  let movieToAdd: MovieCard | undefined;
  if (movie) {
    movieToAdd = {
      genre: movie?.genres[0].name[0],
      title: movie?.title,
      vote_average: movie?.vote_average,
      poster_path: movie?.poster_path,
      id: movie?.id,
    };
  }
  // Getting the movie's ID if it is not undefined.
  const id: string | undefined = useParams().id;

  // Runs useEffect when once and when the id changes from the dependency.
  useEffect(() => {
    // Retriving the movie ID
    getMovieById(id!).then((response) => {
      setMovie(response);
    });
  }, [id]);

  // Displaying the movie's information to the screen
  return (
    <div className="MovieDetailsRoute">
      <div className="top-buttons">
        <Link to="/">
          <i className="fa-solid fa-backward-fast"></i>
        </Link>
        {/* Finds whether the user has watched or not have liked a movie */}
        <button>
          {isWatched(parseInt(id!)) ? (
            <i
              className="fa-solid fa-trash-can"
              onClick={() => {
                removeWatched(parseInt(id!));
              }}
            ></i>
          ) : (
            <i
              className="fa-solid fa-clapperboard"
              onClick={() => {
                addWatched(movieToAdd!);
              }}
            ></i>
          )}
        </button>
      </div>
      <img
        src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
        alt={movie?.title}
      />
      <div>
        <p>
          {/* just need year for the title release date */}
          {movie?.title} - ({movie?.release_date.substring(0, 4)}){" "}
        </p>{" "}
        {movie?.vote_average}
        <i className="fa-solid fa-star"></i>
      </div>
      {/* join method below show display all generes, check once functions finished */}
      <p>
        {movie?.genres.map((genre) => genre.name).join(" | ")} |{" "}
        {movie?.release_date}
      </p>
      <p>Run Time: {movie?.runtime}M</p>
      <h3>Overview</h3>
      <p>{movie?.overview}</p>
    </div>
  );
};

export default MovieDetailsRoute;
