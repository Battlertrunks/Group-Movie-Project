import { ReactNode, useState } from "react";
import MovieCard from "../models/MovieCard";
import MovieContext from "./MovieContext";

interface Props {
  children: ReactNode;
}

const MovieContextProvider = ({ children }: Props) => {
  const [watchedMovie, setWatchedMovie] = useState<MovieCard[]>([]);
  const addWatched = (movie: MovieCard): void => {
    setWatchedMovie((prev) => [...prev, movie]);
  };

  const removeWatched = (id: number): void => {
    setWatchedMovie((prev) => {
      const index: number = prev.findIndex((item) => item.id === id);
      return [...prev.slice(0, index), ...prev.slice(index + 1)];
    });
  };

  const isWatched = (id: number): boolean =>
    watchedMovie.some((item) => item.id === id);
  return (
    <MovieContext.Provider
      value={{ watchedMovie, addWatched, removeWatched, isWatched }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
