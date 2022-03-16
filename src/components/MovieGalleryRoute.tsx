import { useContext, useEffect, useState } from "react";
import {
  Params,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import MovieContext from "../context/MovieContext";
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
  // const [pageNumber, setPageNumber] = useState<number>(1);

  // Getting the params when the user is filtering and searching.
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("query");
  const pageNumberTerm: string | null = searchParams.get("page");
  const sortTerm: string | null = searchParams.get("sort_by");
  const voteAverageGTE: string | null = searchParams.get("vote_average.gte");
  const voteAverageLTE: string | null = searchParams.get("vote_average.lte");
  const genre: string | null = searchParams.get("with_genres");

  const navigate = useNavigate();

  const location = useLocation();

  const { watchedMovie } = useContext(MovieContext);

  const nextPage = (): void => {
    const params: Params = {
      ...(genre ? { with_genres: genre! } : {}),
      ...(voteAverageGTE ? { "vote_average.gte": voteAverageGTE! } : {}),
      ...(voteAverageLTE ? { "vote_average.lte": voteAverageLTE! } : {}),
      ...(searchTerm ? { query: searchTerm } : {}),
      ...(sortTerm ? { sort_by: sortTerm! } : {}),
      page: (parseInt(pageNumberTerm!) + 1).toString(),
    };
    navigate(`/search/movies?${new URLSearchParams(params as any)}`);
  };

  useEffect(() => {
    if (searchTerm) {
      // If the user used the search bar:
      getMovieBySearch(searchTerm, pageNumberTerm!).then((response) => {
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
    else if (location.pathname === "/movie/watched") {
      setMovies(watchedMovie);
    } else {
      getTrendingMovies().then((response) => {
        setMovies(response.results);
      });
    }
  }, [
    searchTerm,
    sortTerm,
    voteAverageLTE,
    voteAverageGTE,
    genre,
    location,
    watchedMovie,
  ]); // Runs useEffect when these dependencies change
  console.log(location);
  // console.log(movies[0].total_pages);

  // Displays the movie cards to the user:
  return (
    <div className="MovieGallery">
      <ul>
        {movies.map((movie) => (
          <MovieCard key={movie.id} singleMovieCard={movie} />
        ))}
      </ul>
      <div>
        {/* {pageNumber >= 2 ? (
          <button onClick={() => setPageNumber((prev) => prev - 1)}>
            Previous Page
          </button>
        ) : (
          <button disabled>Previous Page</button>
        )}
        <p>{pageNumber}</p> */}
        {true ? (
          <button onClick={nextPage}>Next Page</button>
        ) : (
          <button disabled>Previous Page</button>
        )}
      </div>
    </div>
  );
};

export default MovieGallery;
