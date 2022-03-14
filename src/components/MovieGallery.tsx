import { useEffect, useState } from "react";
import MovieCard from "../models/MovieCard";
import { getTrendingMovies } from "../services/MovieService";
import Card from "./Card";
import "./MovieGallery.css";

const MovieGallery = () => {
  const [movies, setMovies] = useState<MovieCard[]>([]);
  useEffect(() => {
    getTrendingMovies().then((response) => {
      setMovies(response.results);
    });
  }, []);
  return (
    <div className="MovieGallery">
      <ul>
        {movies.map((movie) => (
          <Card key={movie.id} singleMovieCard={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MovieGallery;
