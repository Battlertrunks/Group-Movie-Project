import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MovieContext from "../context/MovieContext";
import MovieCard from "../models/MovieCard";
import "./MovieCard.css";
import dataNotFound from "../Resources/dataNotFound.webp";

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
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = dataNotFound;
          }}
        />
      </Link>
      <div className="card-text-content">
        <div className="ratings text-options">
          {singleMovieCard?.vote_average}
          <i className="fa-solid fa-star"></i>
        </div>
        {/* Finds whether the user has watched or not have liked a movie */}
        <div className="vote-average text-options">
          {isWatched(singleMovieCard.id) ? (
            <p>
              Watched{" "}
              <i
                className="fa-solid fa-clapperboard isFavorite"
                onClick={() => {
                  removeWatched(singleMovieCard.id);
                }}
              ></i>
            </p>
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
      <Link
        to={`/movie/${encodeURIComponent(singleMovieCard.id?.toString())}`}
        className="movie-card-title"
      >
        <h2>{singleMovieCard?.title}</h2>
      </Link>
    </li>
  );
};

export default Card;
