import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../models/MovieCard";
import { getMovieBySearch, getTrendingMovies } from "../services/MovieService";
import Card from "./Card";
import "./MovieGallery.css";

const MovieGallery = () => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("term");
  const [movies, setMovies] = useState<MovieCard[]>([]);
  useEffect(() => {
    if (searchTerm) {
      getMovieBySearch(searchTerm).then((response) => {
        setMovies(response.results);
      });
    } else {
      getTrendingMovies().then((response) => {
        setMovies(response.results);
      });
    }
  }, [searchTerm]);
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
