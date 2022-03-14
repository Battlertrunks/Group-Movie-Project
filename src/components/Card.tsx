import MovieCard from "../models/MovieCardResponse";
import "./Card.css";

interface Props {
  singleMovieCard: MovieCard;
}

const Card = ({ singleMovieCard }: Props) => {
  return (
    <div className="Card">
      <img src={singleMovieCard.poster_path} alt={singleMovieCard.title} />
      <div>
        <p>
          {singleMovieCard.vote_average}
          <i className="fa-solid fa-star"></i>
        </p>
        <p>{singleMovieCard.genre}</p>
      </div>
      <h2>{singleMovieCard.title}</h2>
      <button>Details</button>
    </div>
  );
};

export default Card;
