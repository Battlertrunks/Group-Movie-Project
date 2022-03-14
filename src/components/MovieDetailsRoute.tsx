import MovieDetails from "../models/MovieDetailsResponse";
import "./MovieDetailsRoute.css";

interface Props {
  movieDetails: MovieDetails;
}

const MovieDetailsRoute = ({ movieDetails }: Props) => {
  return (
    <div className="MovieDetailsRoute">
      <p>
        <i className="fa-solid fa-backward-fast"></i>
        <i className="fa-solid fa-flag"></i>
      </p>
      <img src={movieDetails.poster_path} alt={movieDetails.title} />
      <div>
        <p>
          {/* just need year for the title release date */}
          {movieDetails.title} - ({movieDetails.release_date}){" "}
        </p>{" "}
        {movieDetails.vote_average}
        <i className="fa-solid fa-star"></i>
      </div>
      {/* join method below show display all generes, check once functions finished */}
      <p>
        {movieDetails.genre.join(" | ")} | {movieDetails.release_date}
      </p>
      <p>{movieDetails.runtime}</p>
      <h3>Overview</h3>
      <p>{movieDetails.overview}</p>
    </div>
  );
};

export default MovieDetailsRoute;
