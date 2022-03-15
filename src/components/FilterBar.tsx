import { FormEvent, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import Genres from "../models/Genres";
import Params from "../models/Params";
import QueryStringParams from "../models/QueryStringParams";
import { getGenres } from "../services/MovieService";
import "./FilterBar.css";

const FilterBar = () => {
  const [sortBy, setSortBy] = useState("");
  const [genre, setGenre] = useState("");
  const [voteAverage, setVoteAverage] = useState("");
  const [genres, setGenres] = useState<Genres[]>([]);
  const navigate = useNavigate();

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    // navigate(`/discover/movie?${new URLSearchParams({ genre })}`);
    const queryStringParams: Params = {
      ...(genre ? { with_genres: genre! } : {}),
      ...(voteAverage ? { voteAverage: voteAverage! } : {}),
      ...(sortBy ? { sort_by: sortBy! } : {}),
    };
    navigate(`/search/movies?${new URLSearchParams({ ...queryStringParams })}`);
  };

  useEffect(() => {
    getGenres().then((response) => setGenres(response.genres));
  }, []);

  return (
    <form className="FilterBar" onSubmit={(e) => submitHandler(e)}>
      <label htmlFor="sort-by">Sort by:</label>
      <select name="sort-by" id="sort-by" onChange={(e) => {}}>
        <option value="popularity.desc">Popular descending</option>
        <option value="popularity.asc">Popular ascending</option>
      </select>
      <label htmlFor="genres">Genres:</label>
      <select
        name="genres"
        id="genres"
        onChange={(e) => setGenre(e.target.value)}
      >
        {genres.map((genre) => (
          <option value={genre.id}>{genre.name}</option>
        ))}
      </select>
      <label htmlFor="rating">Rating:</label>
      <select name="rating" id="rating" onChange={(e) => {}}>
        <option value="10">10</option>
        <option value="9">Greater than 9</option>
        <option value="8">Greater than 8</option>
      </select>
      <button>Submit</button>
    </form>
  );
};
export default FilterBar;
