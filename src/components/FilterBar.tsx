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
  const [voteAverageGTE, setVoteAverageGTE] = useState("");
  const [voteAverageLTE, setVoteAverageLTE] = useState("");
  const [genres, setGenres] = useState<Genres[]>([]);
  const navigate = useNavigate();

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    // navigate(`/discover/movie?${new URLSearchParams({ genre })}`);
    const queryStringParams: Params = {
      ...(genre ? { with_genres: genre! } : {}),
      ...(voteAverageGTE ? { "vote_average.gte": voteAverageGTE! } : {}),
      ...(voteAverageLTE ? { "vote_average.lte": voteAverageLTE! } : {}),
      ...(sortBy ? { sort_by: sortBy! } : {}),
    };
    console.log(queryStringParams);

    navigate(`/search/movies?${new URLSearchParams({ ...queryStringParams })}`);
  };

  useEffect(() => {
    getGenres().then((response) => setGenres(response.genres));
  }, []);

  return (
    <form className="FilterBar" onSubmit={(e) => submitHandler(e)}>
      <label htmlFor="sort-by">Sort by:</label>
      <select
        name="sort-by"
        id="sort-by"
        onChange={(e) => setSortBy(e.target.value)}
      >
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
      <select
        name="greaterRating"
        id="greaterRating"
        onChange={(e) => setVoteAverageGTE(e.target.value)}
      >
        <option value="10">10</option>
        <option value="9">Greater than 9</option>
        <option value="8">Greater than 8</option>
        <option value="7">Greater than 7</option>
        <option value="6">Greater than 6</option>
        <option value="5">Greater than 5</option>
        <option value="4">Greater than 4</option>
        <option value="3">Greater than 3</option>
        <option value="2">Greater than 2</option>
        <option value="1">Greater than 1</option>
      </select>
      <select
        name="lowerRating"
        id="lowerRating"
        onChange={(e) => setVoteAverageLTE(e.target.value)}
      >
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
      <button>Submit</button>
    </form>
  );
};
export default FilterBar;
