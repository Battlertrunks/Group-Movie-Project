import { useContext } from "react";
import MovieContext from "../context/MovieContext";
import MovieContextProvider from "../context/MovieContextProvider";
import Card from "./Card";
import "./WatchedMovieGallery.css";

const WatchedMovieGallery = () => {
  const { watchedMovie } = useContext(MovieContext);
  return (
    <div className="WatchedMovieGallery">
      {watchedMovie.map((item) => {
        return <Card singleMovieCard={item} key={item.id} />;
      })}
    </div>
  );
};

export default WatchedMovieGallery;
