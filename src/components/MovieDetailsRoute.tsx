import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MovieCard from "../models/MovieCard";
import MovieDetailsResponse from "../models/MovieDetailsResponse";
import SingleMovie from "../models/SingleMovie";
import { getMovieById } from "../services/MovieService";
import "./MovieDetailsRoute.css";

const MovieDetailsRoute = () => {
  const [movie, setMovie] = useState<MovieDetailsResponse>();
  const id: string | undefined = useParams().id;
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getMovieById(id!).then((response) => {
      console.log(response);
      setMovie(response);
    });
  }, [id]);
  console.log(id);
  return (
    <div className="MovieDetailsRoute">
      <p>
        <i className="fa-solid fa-backward-fast"></i>
        <i className="fa-solid fa-flag"></i>
      </p>
      <img
        src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
        alt={movie?.title}
      />
      <div>
        <p>
          {/* just need year for the title release date */}
          {movie?.title} - ({movie?.release_date}){" "}
        </p>{" "}
        {movie?.vote_average}
        <i className="fa-solid fa-star"></i>
      </div>
      {/* join method below show display all generes, check once functions finished */}
      <p>
        {movie?.genres.map((genre) => genre.name).join(" | ")} |{" "}
        {movie?.release_date}
      </p>
      <p>{movie?.runtime}</p>
      <h3>Overview</h3>
      <p>{movie?.overview}</p>
    </div>
  );
};

export default MovieDetailsRoute;
