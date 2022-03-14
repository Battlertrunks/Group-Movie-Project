import { FormEvent, useState } from "react";
import "./FilterBar.css";

const FilterBar = () => {
  const [sortBy, setSortBy] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className="FilterBar" onSubmit={(e) => submitHandler(e)}>
      <label htmlFor="sort-by">Sort by:</label>
      <select
        name="sort-by"
        id="sort-by"
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="pop-descending">Popular descending</option>
        <option value="pop-ascending">Popular ascending</option>
      </select>
      <label htmlFor="genres">Genres:</label>
      <select
        name="genres"
        id="genres"
        onChange={(e) => setGenre(e.target.value)}
      >
        <option value="action">Action</option>
        <option value="sci-fi">Sci-fi</option>
        <option value="romance">Romance</option>
        <option value="adventure">Adventure</option>
      </select>
      <label htmlFor="rating">Rating:</label>
      <select
        name="rating"
        id="rating"
        onChange={(e) => setRating(e.target.value)}
      >
        <option value="10">10</option>
        <option value="9">Greater than 9</option>
        <option value="8">Greater than 8</option>
      </select>
      <button>Submit</button>
    </form>
  );
};

export default FilterBar;
