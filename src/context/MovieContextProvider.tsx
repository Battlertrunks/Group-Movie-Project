import { ReactNode, useState } from "react";
import MovieCard from "../models/MovieCard";
import MovieDetailsResponse from "../models/MovieDetailsResponse";
import MovieContext from "./MovieContext";

// What the props should contain.
interface Props {
  children: ReactNode;
}

const MovieContextProvider = ({ children }: Props) => {
  // A useState to store and collect the users watched movies:
  const [watchedMovie, setWatchedMovie] = useState<MovieCard[]>([]);

  // Appends the movie that the user added into the watchedMovie array.
  const addWatched = (movie: MovieCard): void => {
    setWatchedMovie((prev) => [...prev, movie]);
  };

  // Removes the movie from the watchMovie array that the user took off from clicking the remove icon.
  const removeWatched = (id: number): void => {
    setWatchedMovie((prev) => {
      // Gets index of the movie to remove and grabs the movies that were before and after that movie
      // to create a new array that does not include the removed movie.
      const index: number = prev.findIndex((item) => item.id === id);
      return [...prev.slice(0, index), ...prev.slice(index + 1)];
    });
  };

  // Makes the buttons identify whether the movie has been watched or has not to flip either icon.
  const isWatched = (id: number): boolean =>
    watchedMovie.some((item) => item.id === id);

  // Sends out an object for the user to deconstruct and use these functions and values.
  return (
    <MovieContext.Provider
      value={{ watchedMovie, addWatched, removeWatched, isWatched }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
