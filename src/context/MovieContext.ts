import { createContext } from "react";
import MovieCard from "../models/MovieCard";

// Creates interface for props what should be included:
interface MovieContextModel {
  watchedMovie: MovieCard[];
  addWatched: (movie: MovieCard) => void;
  removeWatched: (id: number) => void;
  isWatched: (id: number) => boolean;
}

// The default values that the children should be included in.
const defaultValues: MovieContextModel = {
  watchedMovie: [],
  addWatched: () => {},
  removeWatched: () => {},
  isWatched: () => false,
};

// Creates the context.
const MovieContext = createContext(defaultValues);
export default MovieContext;
