import { useEffect, useState } from "react";
import { Params, useSearchParams } from "react-router-dom";
import MovieCard from "../models/MovieCard";
import QueryStringParams from "../models/QueryStringParams";
import {
  getFilteredMovies,
  getMovieBySearch,
  getTrendingMovies,
} from "../services/MovieService";
import Card from "./Card";
import "./MovieGallery.css";

const MovieGallery = () => {
  const [movies, setMovies] = useState<MovieCard[]>([]);
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("query");
  const sortTerm: string | null = searchParams.get("sort_by");
  const voteAverageGTE: string | null = searchParams.get("vote_average.gte");
  const voteAverageLTE: string | null = searchParams.get("vote_average.lte");
  const genre: string | null = searchParams.get("with_genres");
  useEffect(() => {
    if (searchTerm) {
      getMovieBySearch(searchTerm).then((response) => {
        setMovies(response.results);
      });
    } else if (sortTerm || voteAverageGTE || genre || voteAverageLTE) {
      const params: Params = {
        ...(genre ? { with_genres: genre! } : {}),
        ...(voteAverageGTE ? { "vote_average.gte": voteAverageGTE! } : {}),
        ...(voteAverageLTE ? { "vote_average.lte": voteAverageLTE! } : {}),
        ...(sortTerm ? { sort_by: sortTerm! } : {}),
      };
      getFilteredMovies(params).then((response) => setMovies(response.results));
    } else {
      getTrendingMovies().then((response) => {
        setMovies(response.results);
      });
    }
  }, [searchTerm, sortTerm!, voteAverageLTE!, voteAverageGTE!, genre!]);
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
