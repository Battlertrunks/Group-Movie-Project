import { createContext } from "react";
import MovieCard from "../models/MovieCard";

interface MovieContextModel {
  movies: MovieCard[];
  watchedMovie: MovieCard[];
  filterMovies: (sort: string, genre: string, rating: number) => void;
}

const defaultValues: MovieContextModel = {
  movies: [],
  watchedMovie: [],
  filterMovies: () => {},
};

const MovieContext = createContext(defaultValues);
export default MovieContext;
