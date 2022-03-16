import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MovieContext from "../context/MovieContext";
import MovieCard from "../models/MovieCard";
import "./MovieCard.css";

// Gets the props in order to access the MovieCard values.
interface Props {
  singleMovieCard: MovieCard;
}

const Card = ({ singleMovieCard }: Props) => {
  // Destructuring the MovieContext functions to use in our code.
  const { addWatched, removeWatched, isWatched } = useContext(MovieContext);

  return (
    <li className="Card">
      <Link to={`/movie/${encodeURIComponent(singleMovieCard.id?.toString())}`}>
        <img
          src={`https://image.tmdb.org/t/p/original${singleMovieCard?.poster_path}`}
          alt={singleMovieCard?.title}
        />
      </Link>
      <div className="card-text-content">
        <div className="ratings">
          {singleMovieCard?.vote_average}
          <i className="fa-solid fa-star"></i>
        </div>
        {/* Finds whether the user has watched or not have liked a movie */}
        <div>
          {isWatched(singleMovieCard.id) ? (
            <i
              className="fa-solid fa-clapperboard isFavorite"
              onClick={() => {
                removeWatched(singleMovieCard.id);
              }}
            ></i>
          ) : (
            <i
              className="fa-solid fa-clapperboard isNotFavorite"
              onClick={() => {
                addWatched(singleMovieCard);
              }}
            ></i>
          )}
        </div>

        {/* <p>{singleMovieCard?.genre}</p> */}
      </div>
      <Link to={`/movie/${encodeURIComponent(singleMovieCard.id?.toString())}`}>
        <h2>{singleMovieCard?.title}</h2>
      </Link>
    </li>
  );
};

export default Card;
