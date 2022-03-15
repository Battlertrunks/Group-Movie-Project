import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MovieContext from "../context/MovieContext";
import MovieCard from "../models/MovieCard";
import "./Card.css";

interface Props {
  singleMovieCard: MovieCard;
}

const Card = ({ singleMovieCard }: Props) => {
  const { watchedMovie, addWatched, removeWatched, isWatched } =
    useContext(MovieContext);
  return (
    <li className="Card">
      <Link to={`/movie/${encodeURIComponent(singleMovieCard.id?.toString())}`}>
        <img
          src={`https://image.tmdb.org/t/p/original${singleMovieCard?.poster_path}`}
          alt={singleMovieCard?.title}
        />
      </Link>
      <div>
        <p>
          {singleMovieCard?.vote_average}
          <i className="fa-solid fa-star"></i>

          {isWatched(singleMovieCard.id) ? (
            <i
              className="fa-solid fa-trash-can"
              onClick={() => {
                removeWatched(singleMovieCard.id);
              }}
            ></i>
          ) : (
            <i
              className="fa-solid fa-clapperboard"
              onClick={() => {
                addWatched(singleMovieCard);
              }}
            ></i>
          )}
        </p>
        <p>{singleMovieCard?.genre}</p>
      </div>
      <h2>{singleMovieCard?.title}</h2>
      <button>Details</button>
    </li>
  );
};

export default Card;
