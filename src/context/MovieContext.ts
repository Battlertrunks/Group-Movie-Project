import { createContext } from "react";
import { NullLiteral } from "typescript";
import MovieCard from "../models/MovieCard";

interface MovieContextModel {
  watchedMovie: MovieCard[];
  addWatched: (movie: MovieCard) => void;
  removeWatched: (id: number) => void;
  isWatched: (id: number) => boolean;
}

const defaultValues: MovieContextModel = {
  watchedMovie: [],
  addWatched: () => {},
  removeWatched: () => {},
  isWatched: () => false,
};

const MovieContext = createContext(defaultValues);
export default MovieContext;
