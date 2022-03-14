import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "../models/MovieCard";
import "./Card.css";

interface Props {
  singleMovieCard: MovieCard;
}

const Card = ({ singleMovieCard }: Props) => {
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
        </p>
        <p>{singleMovieCard?.genre}</p>
      </div>
      <h2>{singleMovieCard?.title}</h2>
      <button>Details</button>
    </li>
  );
};

export default Card;
