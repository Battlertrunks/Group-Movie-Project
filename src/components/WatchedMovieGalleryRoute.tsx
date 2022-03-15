import { useContext } from "react";
import MovieContext from "../context/MovieContext";
import Card from "./MovieCard";
import "./WatchedMovieGalleryRoute.css";

const WatchedMovieGallery = () => {
  // Destructures the watchedMovie useState variable
  const { watchedMovie } = useContext(MovieContext);

  // Displays to the user their watched movies
  return (
    <div className="WatchedMovieGalleryRoute">
      {watchedMovie.map((item) => {
        return <Card singleMovieCard={item} key={item.id} />;
      })}
    </div>
  );
};

export default WatchedMovieGallery;
