import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Genre from "../models/Genre";
import Params from "../models/Params";
import { getGenres } from "../services/MovieTMDBService";
import "./FilterSearchBar.css";

const FilterBar = () => {
  // Initializing the useStates we are going to need.
  const [sortBy, setSortBy] = useState("");
  const [genre, setGenre] = useState("");
  const [voteAverageGTE, setVoteAverageGTE] = useState("");
  const [voteAverageLTE, setVoteAverageLTE] = useState("");
  const [genres, setGenres] = useState<Genre[]>([]);
  const navigate = useNavigate();

  // Runs when user submits the filter form.
  const submitHandler = (e: FormEvent) => {
    e.preventDefault(); // prevents website reload.
    // Checks if their are values in the selects, if so makes it into an object.
    const queryStringParams: Params = {
      ...(genre ? { with_genres: genre! } : {}),
      ...(voteAverageGTE ? { "vote_average.gte": voteAverageGTE! } : {}),
      ...(voteAverageLTE ? { "vote_average.lte": voteAverageLTE! } : {}),
      ...(sortBy ? { sort_by: sortBy! } : {}),
    };

    // Navigates to the URL path and inserts the params using the spread.
    navigate(
      `/discover/movie?${new URLSearchParams({
        ...queryStringParams,
        page: "1",
      })}`
    );
  };

  // Runs once on every load.
  // Gets all of the genres names and IDs for the select element.
  useEffect(() => {
    getGenres().then((response) => setGenres(response.genres));
  }, []);

  return (
    <form className="FilterBar" onSubmit={(e) => submitHandler(e)}>
      <div className="input-container">
        <div>
          <label htmlFor="sort-by">Sort by:</label>
          <select
            name="sort-by"
            id="sort-by"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="popularity.desc">Popular</option>
            <option value="vote_count.desc">Vote Count</option>
            <option value="release_date.desc">Release descending</option>
            <option value="release_date.asc">Release ascending</option>
          </select>
        </div>
        <div>
          <label htmlFor="genres">Genres:</label>
          <select
            name="genres"
            id="genres"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="">Select Genre</option>
            {genres.map((genre) => (
              <option value={genre.id} key={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="greaterRating">Rating Greater Than:</label>
          <select
            name="greaterRating"
            id="greaterRating"
            className="number-rating"
            onChange={(e) => setVoteAverageGTE(e.target.value)}
          >
            <option value="">Select Rating</option>
            <option value="10">10</option>
            <option value="9">9</option>
            <option value="8">8</option>
            <option value="7">7</option>
            <option value="6">6</option>
            <option value="5">5</option>
            <option value="1">1</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
          </select>
        </div>
        {/* <div>
          <label htmlFor="lowerRating">Rating greater than:</label>
          <select
            name="lowerRating"
            id="lowerRating"
            className="number-rating"
            onChange={(e) => setVoteAverageLTE(e.target.value)}
          >
            <option value=""></option>
            <option value="10">10</option>
            <option value="9">Less than 9</option>
            <option value="8">Less than 8</option>
            <option value="7">Less than 7</option>
            <option value="6">Less than 6</option>
            <option value="5">Less than 5</option>
            <option value="4">Less than 4</option>
            <option value="3">Less than 3</option>
            <option value="2">Less than 2</option>
            <option value="1">Less than 1</option>
          </select>
        </div> */}
      </div>
      <button>Submit</button>
    </form>
  );
};
export default FilterBar;
