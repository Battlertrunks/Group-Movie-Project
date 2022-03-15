import { useEffect, useState } from "react";
import { Params, useSearchParams } from "react-router-dom";
import MovieCardModel from "../models/MovieCard";
import {
  getFilteredMovies,
  getMovieBySearch,
  getTrendingMovies,
} from "../services/MovieTMDBService";
import MovieCard from "./MovieCard";
import "./MovieGalleryRoute.css";

const MovieGallery = () => {
  // Setting up the movies that will be displayed using useState.
  const [movies, setMovies] = useState<MovieCardModel[]>([]);

  // Getting the params when the user is filtering and searching.
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("query");
  const sortTerm: string | null = searchParams.get("sort_by");
  const voteAverageGTE: string | null = searchParams.get("vote_average.gte");
  const voteAverageLTE: string | null = searchParams.get("vote_average.lte");
  const genre: string | null = searchParams.get("with_genres");
  useEffect(() => {
    // If the user used the search bar:
    if (searchTerm) {
      getMovieBySearch(searchTerm).then((response) => {
        setMovies(response.results);
      });
    } // If the user is using the filters bar:
    else if (sortTerm || voteAverageGTE || genre || voteAverageLTE) {
      const params: Params = {
        ...(genre ? { with_genres: genre! } : {}),
        ...(voteAverageGTE ? { "vote_average.gte": voteAverageGTE! } : {}),
        ...(voteAverageLTE ? { "vote_average.lte": voteAverageLTE! } : {}),
        ...(sortTerm ? { sort_by: sortTerm! } : {}),
      };
      getFilteredMovies(params).then((response) => setMovies(response.results));
    } // If the user is not using the search or filters, shows user trending movies:
    else {
      getTrendingMovies().then((response) => {
        setMovies(response.results);
      });
    }
  }, [searchTerm, sortTerm, voteAverageLTE, voteAverageGTE, genre]); // Runs useEffect when these dependencies change

  // Displays the movie cards to the user:
  return (
    <div className="MovieGallery">
      <ul>
        {movies.map((movie) => (
          <MovieCard key={movie.id} singleMovieCard={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MovieGallery;
